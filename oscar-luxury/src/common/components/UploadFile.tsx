/*
 * Copyright(c) 2026 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Anagha Chandrababu
 */

import { Script } from "streak/components";
import UploadCloud from "@common/icons/UploadCloud";

type UploadFileProps = { maxFiles?: number };

type UploadedFile = {
  uuid: string; // dzuuid
  file_id: string; // tmp filename (this is what goes into "file")
  url: string; // TMP_BASE + file_id
  size: number;
  type: string;
  name: string;
  status?: "uploading" | "done" | "error";
};

export default function UploadFile({ maxFiles = 3 }: UploadFileProps) {
  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        id="upload-dropzone"
        data-max-files={maxFiles}
        className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 p-8 text-center hover:border-slate-400"
        tabIndex={0}
        role="button"
        aria-label="Upload car images"
      >
        <UploadCloud className="h-8 w-8 text-slate-500" />
        <p className="text-sm font-semibold text-slate-700">Click or drag files to this area to upload.</p>
        <p className="text-xs text-slate-500">You can upload up to {maxFiles} files.</p>

        <input id="image-upload" type="file" multiple accept=".png,.jpg,.gif" className="hidden" aria-label="Upload car images" />
      </div>

      {/* File list */}
      <div id="upload-list" className="hidden space-y-2" />
      <p id="upload-error" className="hidden text-xs text-red-600" role="alert" />

      <Script id="upload-file-script">
        {() => {
          // prevent double init
          if ((window as any).__sellCarUploadInit) return;
          (window as any).__sellCarUploadInit = true;

          const ready = (fn: () => void) => {
            if (document.readyState !== "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          };

          ready(() => {
            const dropzone = document.getElementById("upload-dropzone") as HTMLElement | null;
            const input = document.getElementById("image-upload") as HTMLInputElement | null;
            const list = document.getElementById("upload-list") as HTMLElement | null;
            const errorEl = document.getElementById("upload-error") as HTMLElement | null;

            if (!dropzone || !input || !list || !errorEl) return;

            // ===== CONFIG =====
            const FORM_ID = "7667";
            const FIELD_ID = "33";
            const AJAX_URL = "https://oscarluxury.com/wp-admin/admin-ajax.php";
            const TMP_BASE = "https://oscarluxury.com/wp-content/uploads/wpforms/tmp/";

            // This is the exact key your cURL uses:
            const WPFORMS_UPLOAD_FIELD = `wpforms_${FORM_ID}_${FIELD_ID}`;

            const MAX = Number(dropzone.dataset.maxFiles || "3");
            const ALLOWED_MIME = ["image/png", "image/jpg", "image/gif"];
            const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
            const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB chunks (ideal for WPForms)

            const CONCURRENCY = 2;

            const uploadedFiles: UploadedFile[] = [];

            let pendingUploads = 0;
            let submitInterceptorAttached = false;

            // expose for debugging
            (window as any).__sellCarUploadedFiles = (window as any).__sellCarUploadedFiles || [];
            (window as any).__sellCarPendingUploads = 0;

            const showError = (msg: string) => {
              errorEl.textContent = msg;
              errorEl.classList.remove("hidden");
            };

            const hideError = () => {
              errorEl.textContent = "";
              errorEl.classList.add("hidden");
            };

            const imageErrorEl = document.getElementById("error-image") as HTMLElement | null;

            const showImageError = (msg: string) => {
              // show in upload error area
              showError(msg);

              // show in form error area also
              if (imageErrorEl) {
                imageErrorEl.textContent = msg;
                imageErrorEl.classList.remove("hidden");
              }
            };

            const clearImageError = () => {
              hideError(); // clears #upload-error

              if (imageErrorEl) {
                imageErrorEl.textContent = "";
                imageErrorEl.classList.add("hidden");
              }

              // remove red border/validation state if you ever set it
              dropzone.style.borderColor = "";
              dropzone.removeAttribute("aria-invalid");
            };

            const formatMB = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2);

            const parseJSONSafe = async (res: Response) => {
              const raw = await res.text();
              try {
                return { json: JSON.parse(raw), raw };
              } catch {
                return { json: null as any, raw };
              }
            };

            const extractFileId = (payload: any): string | null => {
              const candidates = [payload?.data?.file_id, payload?.data?.file, payload?.data?.name, payload?.file_id, payload?.file, payload?.name].filter(
                Boolean
              );
              return candidates.length ? String(candidates[0]) : null;
            };

            // Create/find the hidden input WPForms will submit (wpforms_7667_33)
            const ensureWPFormsUploadInput = (): HTMLInputElement => {
              let el =
                document.querySelector<HTMLInputElement>(`input[name="${WPFORMS_UPLOAD_FIELD}"]`) ||
                document.querySelector<HTMLInputElement>(`input[name="wpforms[fields][${FIELD_ID}]"]`);

              if (el) return el;

              // Prefer your custom form
              const nearestForm =
                (document.getElementById("sell-car-form") as HTMLFormElement | null) ||
                dropzone.closest("form") ||
                document.querySelector<HTMLFormElement>(`#wpforms-form-${FORM_ID}`) ||
                document.querySelector<HTMLFormElement>("form");

              el = document.createElement("input");
              el.type = "hidden";
              el.name = WPFORMS_UPLOAD_FIELD; // EXACT like cURL
              el.value = "[]";

              (nearestForm || document.body).appendChild(el);
              return el;
            };

            // Build payload EXACTLY like cURL expects: [{ name, file, url, size, type, file_user_name }]
            // Also include file_id as alias to avoid future mismatch.
            const buildPayload = () => {
              return uploadedFiles
                .filter((f) => f.status === "done" && f.file_id)
                .map((f) => ({
                  name: f.name,
                  file: f.file_id, // REQUIRED by WPForms
                  file_id: f.file_id, //  alias for safety
                  url: f.url,
                  size: f.size,
                  type: f.type,
                  file_user_name: f.name,
                }));
            };

            // Sync to hidden input + global mirror
            const syncToWPForms = () => {
              const payload = buildPayload();
              const hidden = ensureWPFormsUploadInput();
              hidden.value = JSON.stringify(payload);

              (window as any).__sellCarUploadedFiles = payload;
              (window as any).__sellCarPendingUploads = pendingUploads;

              hidden.dispatchEvent(new Event("input", { bubbles: true }));
              hidden.dispatchEvent(new Event("change", { bubbles: true }));
            };

            // Optional: block native submit if any uploads pending
            const attachSubmitInterceptorOnce = () => {
              if (submitInterceptorAttached) return;
              submitInterceptorAttached = true;

              const hidden = ensureWPFormsUploadInput();
              const form =
                (document.getElementById("sell-car-form") as HTMLFormElement | null) ||
                hidden.closest("form") ||
                dropzone.closest("form") ||
                document.querySelector<HTMLFormElement>("form");

              if (!form) return;

              form.addEventListener(
                "submit",
                (e) => {
                  if (pendingUploads > 0) {
                    e.preventDefault();
                    showError("Please wait — images are still uploading.");
                    return;
                  }
                  // final sync
                  syncToWPForms();
                },
                true
              );
            };

            // ===== WPForms upload flow (init → chunk → finalize) =====
            const uploadInit = async (file: File, uuid: string, totalChunks: number) => {
              const body = new URLSearchParams({
                action: "wpforms_upload_chunk_init",
                form_id: FORM_ID,
                field_id: FIELD_ID,
                name: file.name,
                dzuuid: uuid,
                dztotalfilesize: String(file.size),
                dzchunksize: String(CHUNK_SIZE),
                dzchunkindex: "0",
                dzchunkbyteoffset: "0",
                dztotalchunkcount: String(totalChunks),
                slow: "false",
              });

              const res = await fetch(AJAX_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  "X-Requested-With": "XMLHttpRequest",
                },
                body,
                credentials: "include",
              });

              const { json, raw } = await parseJSONSafe(res);
              if (!res.ok || !json) {
                console.error("INIT failed:", res.status, raw);
                throw new Error("Upload init failed.");
              }
              return json;
            };

            const uploadChunk = async (file: File, uuid: string, idx: number, totalChunks: number) => {
              const start = idx * CHUNK_SIZE;
              const end = Math.min(start + CHUNK_SIZE, file.size);
              const blob = file.slice(start, end);

              const fd = new FormData();
              fd.append("action", "wpforms_upload_chunk");
              fd.append("form_id", FORM_ID);
              fd.append("field_id", FIELD_ID);
              fd.append("dzuuid", uuid);
              fd.append("dzchunkindex", String(idx));
              fd.append("dztotalfilesize", String(file.size));
              fd.append("dzchunksize", String(CHUNK_SIZE));
              fd.append("dztotalchunkcount", String(totalChunks));
              fd.append("dzchunkbyteoffset", String(start));

              // WPForms expects this file key:
              fd.append(`wpforms_${FORM_ID}_${FIELD_ID}`, blob, file.name);

              const res = await fetch(AJAX_URL, {
                method: "POST",
                body: fd,
                credentials: "include",
              });

              const { json, raw } = await parseJSONSafe(res);
              if (!res.ok || !json) {
                console.error("CHUNK failed:", res.status, raw);
                throw new Error("Chunk upload failed.");
              }
              return json;
            };

            const uploadFinalize = async (file: File, uuid: string, totalChunks: number) => {
              const last = totalChunks - 1;

              const body = new URLSearchParams({
                action: "wpforms_file_chunks_uploaded",
                form_id: FORM_ID,
                field_id: FIELD_ID,
                name: file.name,
                dzuuid: uuid,
                dzchunkindex: String(last),
                dztotalfilesize: String(file.size),
                dzchunksize: String(CHUNK_SIZE),
                dztotalchunkcount: String(totalChunks),
                dzchunkbyteoffset: String(last * CHUNK_SIZE),
                slow: "false",
              });

              const res = await fetch(AJAX_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                  "X-Requested-With": "XMLHttpRequest",
                },
                body,
                credentials: "include",
              });

              const { json, raw } = await parseJSONSafe(res);
              if (!res.ok || !json) {
                console.error("FINALIZE failed:", res.status, raw);
                throw new Error("Upload finalize failed.");
              }
              return json;
            };

            const uploadFileToWPForms = async (file: File) => {
              const uuid = crypto.randomUUID();
              const totalChunks = Math.max(1, Math.ceil(file.size / CHUNK_SIZE));

              const initResp = await uploadInit(file, uuid, totalChunks);
              for (let i = 0; i < totalChunks; i++) {
                await uploadChunk(file, uuid, i, totalChunks);
              }
              const finResp = await uploadFinalize(file, uuid, totalChunks);

              const fileId = extractFileId(finResp) || extractFileId(initResp);

              if (!fileId) throw new Error("Upload finished but file_id missing.");

              return { uuid, file_id: fileId };
            };

            const removeFileOnServer = async (uf: UploadedFile) => {
              try {
                await fetch(AJAX_URL, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "X-Requested-With": "XMLHttpRequest",
                  },
                  body: new URLSearchParams({
                    action: "wpforms_remove_file",
                    form_id: FORM_ID,
                    field_id: FIELD_ID,
                    file: uf.file_id,
                  }),
                  credentials: "include",
                });
              } catch {
                showError("Could not remove file from server.");
              }
            };

            // ===== UI render =====
            const render = () => {
              list.innerHTML = "";

              if (!uploadedFiles.length) {
                clearImageError();
                list.classList.add("hidden");
                syncToWPForms();
                return;
              }

              list.classList.remove("hidden");
              uploadedFiles.forEach((uf, index) => {
                const row = document.createElement("div");
                row.className = "flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2";

                const left = document.createElement("div");
                left.className = "flex items-center gap-3";

                const icon = document.createElement("span");
                icon.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="none" stroke="currentColor" stroke-width="2"
                       stroke-linecap="round" stroke-linejoin="round"
                       class="h-4 w-4 text-slate-500">
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v10a2 2 0 0 1-2 2Z"></path>
                    <path d="M12 17H8"></path>
                    <path d="M16 13H8"></path>
                  </svg>
                `;

                const name = document.createElement("span");
                name.className = "text-sm text-slate-700 truncate";
                name.textContent = uf.name;

                left.append(icon, name);

                const rm = document.createElement("button");
                rm.type = "button";
                rm.setAttribute("aria-label", `Remove ${uf.name}`);
                rm.style.color = "#90a1b9";
                rm.style.transition = "color 150ms ease";
                rm.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="none" stroke="currentColor"
                       stroke-width="2"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       class="h-4 w-4">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                `;
                rm.addEventListener("mouseenter", () => (rm.style.color = "#fb2c36"));
                rm.addEventListener("mouseleave", () => (rm.style.color = "#90a1b9"));

                rm.addEventListener("click", async () => {
                  if (uf.status === "uploading") return;
                  await removeFileOnServer(uf);
                  uploadedFiles.splice(index, 1);
                  clearImageError();
                  render();
                });

                row.append(left, rm);
                list.appendChild(row);
              });

              syncToWPForms();
            };

            // ===== Upload queue with small concurrency =====
            const runQueue = async (files: File[]) => {
              const queue = [...files];

              const worker = async () => {
                while (queue.length) {
                  const file = queue.shift()!;
                  pendingUploads++;
                  (window as any).__sellCarPendingUploads = pendingUploads;

                  const placeholder: UploadedFile = {
                    uuid: crypto.randomUUID(),
                    file_id: "",
                    url: "",
                    size: file.size,
                    type: file.type,
                    name: file.name,
                    status: "uploading",
                  };

                  uploadedFiles.push(placeholder);
                  render();

                  try {
                    const meta = await uploadFileToWPForms(file);
                    placeholder.uuid = meta.uuid;
                    placeholder.file_id = meta.file_id;
                    placeholder.url = `${TMP_BASE}${meta.file_id}`;
                    placeholder.status = "done";
                    clearImageError();
                  } catch (e: any) {
                    console.error(e);
                    placeholder.status = "error";
                    showError(e?.message || "Upload failed.");
                  } finally {
                    pendingUploads--;
                    (window as any).__sellCarPendingUploads = pendingUploads;
                    render();
                  }
                }
              };

              const workers = Array.from({ length: CONCURRENCY }, () => worker());
              await Promise.all(workers);
            };

            const addFiles = async (fileList: FileList | null) => {
              if (!fileList) return;

              clearImageError();

              const all = Array.from(fileList);

              // Filter by mime
              const selected = all.filter((f) => ALLOWED_MIME.includes(f.type));

              if (!selected.length) {
                showImageError("Only PNG, JPG and GIF files are allowed.");
                input.value = "";
                return;
              }

              // ✅ size validation (5MB)
              const oversized = selected.find((f) => f.size > MAX_FILE_SIZE);
              if (oversized) {
                showImageError(`Maximum file size is 5MB. "${oversized.name}" is ${formatMB(oversized.size)}MB.`);
                // mark invalid styling (optional)
                dropzone.style.borderColor = "red";
                dropzone.setAttribute("aria-invalid", "true");
                input.value = "";
                return;
              }

              const currentCount = uploadedFiles.filter((f) => f.status !== "error").length;
              const availableSlots = MAX - currentCount;

              if (availableSlots <= 0) {
                showImageError(`You can upload a maximum of ${MAX} images`);
                input.value = "";
                return;
              }

              const toUpload = selected.slice(0, availableSlots);

              if (toUpload.length < selected.length) {
                showImageError(`You can upload a maximum of ${MAX} images`);
              }

              // disable dropzone while uploading
              dropzone.style.pointerEvents = "none";
              dropzone.style.opacity = "0.75";

              await runQueue(toUpload);

              dropzone.style.pointerEvents = "";
              dropzone.style.opacity = "";
              input.value = "";
            };

            // Reset function
            (window as any).__resetSellCarUpload = () => {
              uploadedFiles.length = 0;
              list.innerHTML = "";
              list.classList.add("hidden");
              input.value = "";

              const hidden = ensureWPFormsUploadInput();
              hidden.value = "[]";
              hidden.dispatchEvent(new Event("input", { bubbles: true }));
              hidden.dispatchEvent(new Event("change", { bubbles: true }));

              (window as any).__sellCarUploadedFiles = [];
              (window as any).__sellCarPendingUploads = 0;

              clearImageError();
            };

            // events
            dropzone.addEventListener("click", () => input.click());
            dropzone.addEventListener("keydown", (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                input.click();
              }
            });
            dropzone.addEventListener("dragover", (e) => e.preventDefault());
            dropzone.addEventListener("drop", (e) => {
              e.preventDefault();
              addFiles(e.dataTransfer?.files || null);
            });
            input.addEventListener("change", () => addFiles(input.files));

            ensureWPFormsUploadInput();
            attachSubmitInterceptorOnce();
            render();
          });
        }}
      </Script>
    </div>
  );
}
