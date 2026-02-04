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
  uuid: string;
  file_id: string;
  url: string;
  size: number;
  type: string;
  name: string;
  status: "queued" | "uploading" | "done" | "error";
  fingerprint: string;
};

export default function UploadFile({ maxFiles = 3 }: UploadFileProps) {
  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        id="upload-dropzone"
        data-max-files={maxFiles}
        className="
          flex flex-col items-center justify-center gap-3
          rounded-xl border-2 border-dashed
          border-slate-300 bg-white
          p-8 text-center cursor-pointer
          transition-colors hover:border-slate-400
        "
        tabIndex={0}
        role="button"
        aria-label="Upload car images"
      >
        {/* ✅ Keep your icon */}
        <UploadCloud className="h-8 w-8 text-slate-500" />

        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-700">
            Click or drag files to this area to upload.
          </p>
          <p className="text-xs text-slate-500">
            You can upload up to {maxFiles} file{maxFiles > 1 ? "s" : ""}.
          </p>
          <p className="text-xs text-slate-500">
            Supported file types:{" "}
            <span className="font-medium text-secondary">JPG, PNG, GIF</span>
          </p>
        </div>

        <input
          id="image-upload"
          type="file"
          multiple
          accept=".png,.jpg,.gif"
          className="hidden"
          aria-label="Upload car images"
        />
      </div>

      <div id="upload-list" className="hidden space-y-2" />

      <p id="upload-error" className="hidden text-xs text-red-600" role="alert" />

      <Script id="upload-file-script">
        {() => {
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
            const uploadErrorEl = document.getElementById("upload-error") as HTMLElement | null;

            const formErrorEl = document.getElementById("error-image") as HTMLElement | null;

            if (!dropzone || !input || !list || !uploadErrorEl) return;

            // ===== CONFIG =====
            const FORM_ID = "7667";
            const FIELD_ID = "33";
            const AJAX_URL = "https://oscarluxury.com/wp-admin/admin-ajax.php";
            const TMP_BASE = "https://oscarluxury.com/wp-content/uploads/wpforms/tmp/";
            const WPFORMS_UPLOAD_FIELD = `wpforms_${FORM_ID}_${FIELD_ID}`;

            const MAX = Number(dropzone.dataset.maxFiles || "3");
            const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

            // WPForms chunk upload stable defaults
            const CHUNK_SIZE = 1 * 1024 * 1024; // 1MB
            const CONCURRENCY = 1;

            // ===== STATE =====
            const uploadedFiles: UploadedFile[] = [];
            let pendingUploads = 0;

            // queue: sequential upload order
            const queue: Array<{ file: File; uf: UploadedFile }> = [];
            let workerRunning = false;

            // abort only current upload so X works
            let activeAbort: AbortController | null = null;
            let activeUploadUUID: string | null = null;

            // Expose for form
            (window as any).__sellCarUploadedFiles = (window as any).__sellCarUploadedFiles || [];
            (window as any).__sellCarPendingUploads = 0;

            // ===== Pending setter + finish event =====
            const setPending = (n: number) => {
              pendingUploads = Math.max(0, n);
              (window as any).__sellCarPendingUploads = pendingUploads;

              if (pendingUploads === 0) {
                document.dispatchEvent(new Event("sellcar:uploads-finished"));
              }
            };

            // ===== UI styles =====
            const applyErrorStyle = () => {
              dropzone.style.borderColor = "#ef4444";
              dropzone.style.backgroundColor = "#fff5f5";
            };
            const clearErrorStyle = () => {
              dropzone.style.borderColor = "";
              dropzone.style.backgroundColor = "";
            };

            // ===== 5s auto-hide validation messages =====
            let errorTimer: number | null = null;
            const scheduleErrorAutoHide = () => {
              if (errorTimer) window.clearTimeout(errorTimer);
              errorTimer = window.setTimeout(() => {
                clearErrorAll();
              }, 5000);
            };

            // ===== Suppress validation errors after submit click =====
            const isSuppressedNow = () => {
              const until = Number((window as any).__sellCarSuppressUploadErrorsUntil || 0);
              return Date.now() < until;
            };

            // ===== Error show/clear (single place, auto-hide 5s) =====
            const showErrorOnce = (msg: string) => {
              if (isSuppressedNow()) return;

              if (formErrorEl) {
                formErrorEl.textContent = msg;
                formErrorEl.classList.remove("hidden");
                uploadErrorEl.textContent = "";
                uploadErrorEl.classList.add("hidden");
              } else {
                uploadErrorEl.textContent = msg;
                uploadErrorEl.classList.remove("hidden");
              }

              applyErrorStyle();
              scheduleErrorAutoHide();
            };

            const clearErrorAll = () => {
              if (errorTimer) {
                window.clearTimeout(errorTimer);
                errorTimer = null;
              }

              if (formErrorEl) {
                formErrorEl.textContent = "";
                formErrorEl.classList.add("hidden");
              }
              uploadErrorEl.textContent = "";
              uploadErrorEl.classList.add("hidden");

              clearErrorStyle();
            };

            (window as any).__clearSellCarUploadUI = () => clearErrorAll();

            // ===== Helpers =====
            const formatMB = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2);

            const isAllowedFile = (file: File) => {
              const ext = file.name.split(".").pop()?.toLowerCase();
              return ext === "png" || ext === "jpg" || ext === "gif";
            };

            const fingerprintOf = (f: File) => `${f.name}|${f.size}|${f.lastModified}`;

            // ===== WPForms hidden input =====
            const ensureWPFormsUploadInput = (): HTMLInputElement => {
              let el =
                document.querySelector<HTMLInputElement>(`input[name="${WPFORMS_UPLOAD_FIELD}"]`) ||
                document.querySelector<HTMLInputElement>(`input[name="wpforms[fields][${FIELD_ID}]"]`);

              if (el) return el;

              const nearestForm =
                (document.getElementById("sell-car-form") as HTMLFormElement | null) ||
                dropzone.closest("form") ||
                document.querySelector<HTMLFormElement>(`#wpforms-form-${FORM_ID}`) ||
                document.querySelector<HTMLFormElement>("form");

              el = document.createElement("input");
              el.type = "hidden";
              el.name = WPFORMS_UPLOAD_FIELD;
              el.value = "[]";

              (nearestForm || document.body).appendChild(el);
              return el;
            };

            const syncToWPForms = () => {
              const payload = uploadedFiles
                .filter((f) => f.status === "done" && f.file_id)
                .map((f) => ({
                  name: f.name,
                  file: f.file_id,
                  url: f.url,
                  size: f.size,
                  type: f.type,
                  file_user_name: f.name,
                }));

              const hidden = ensureWPFormsUploadInput();
              hidden.value = JSON.stringify(payload);

              (window as any).__sellCarUploadedFiles = payload;
              (window as any).__sellCarPendingUploads = pendingUploads;

              hidden.dispatchEvent(new Event("input", { bubbles: true }));
              hidden.dispatchEvent(new Event("change", { bubbles: true }));
            };

            // ===== Render queue labels =====
            const render = () => {
              list.innerHTML = "";

              if (!uploadedFiles.length) {
                list.classList.add("hidden");
                syncToWPForms();
                return;
              }

              list.classList.remove("hidden");

              uploadedFiles.forEach((uf, index) => {
                const row = document.createElement("div");
                row.className =
                  "flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2";

                const left = document.createElement("div");
                left.className = "flex items-center gap-3 min-w-0";

                const icon = document.createElement("span");
                icon.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 24 24"
                       fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                       class="h-4 w-4 text-slate-500">
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v10a2 2 0 0 1-2 2Z"></path>
                    <path d="M12 17H8"></path>
                    <path d="M16 13H8"></path>
                  </svg>
                `;

                const name = document.createElement("span");
                name.className = "truncate text-sm text-slate-700";
                if (uf.status === "queued") name.textContent = `${uf.name} (Queued...)`;
                else if (uf.status === "uploading") name.textContent = `${uf.name} (Uploading...)`;
                else name.textContent = uf.name;

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

                rm.onclick = () => {
                  // abort current upload if removing active
                  if (uf.uuid === activeUploadUUID && activeAbort) activeAbort.abort();

                  uploadedFiles.splice(index, 1);
                  const qi = queue.findIndex((q) => q.uf.uuid === uf.uuid);
                  if (qi >= 0) queue.splice(qi, 1);

                  // user action -> clear validation immediately
                  clearErrorAll();
                  render();
                };

                row.append(left, rm);
                list.appendChild(row);
              });

              syncToWPForms();
            };

            // ===== WPForms upload flow =====
            const parseJSONSafe = async (res: Response) => {
              const raw = await res.text();
              try {
                return { json: JSON.parse(raw), raw };
              } catch {
                return { json: null as any, raw };
              }
            };

            const extractFileId = (payload: any): string | null => {
              const candidates = [
                payload?.data?.file_id,
                payload?.data?.file,
                payload?.data?.name,
                payload?.file_id,
                payload?.file,
                payload?.name,
              ].filter(Boolean);
              return candidates.length ? String(candidates[0]) : null;
            };

            const uploadInit = async (file: File, uuid: string, totalChunks: number, signal: AbortSignal) => {
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
                signal,
              });

              const { json, raw } = await parseJSONSafe(res);
              if (!res.ok || !json) {
                console.error("INIT failed:", res.status, raw);
                throw new Error("Upload init failed.");
              }
              return json;
            };

            const uploadChunk = async (
              file: File,
              uuid: string,
              idx: number,
              totalChunks: number,
              signal: AbortSignal
            ) => {
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
              fd.append(`wpforms_${FORM_ID}_${FIELD_ID}`, blob, file.name);

              const res = await fetch(AJAX_URL, {
                method: "POST",
                body: fd,
                credentials: "include",
                headers: { "X-Requested-With": "XMLHttpRequest" },
                signal,
              });

              if (!res.ok) throw new Error("Chunk upload failed.");
            };

            const uploadFinalize = async (file: File, uuid: string, totalChunks: number, signal: AbortSignal) => {
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
                signal,
              });

              const { json, raw } = await parseJSONSafe(res);
              if (!res.ok || !json) {
                console.error("FINALIZE failed:", res.status, raw);
                throw new Error("Upload finalize failed.");
              }
              return json;
            };

            const uploadFileToWPForms = async (file: File, uf: UploadedFile) => {
              const uuid = crypto.randomUUID();
              const totalChunks = Math.max(1, Math.ceil(file.size / CHUNK_SIZE));

              activeAbort = new AbortController();
              activeUploadUUID = uf.uuid;

              await uploadInit(file, uuid, totalChunks, activeAbort.signal);

              for (let i = 0; i < totalChunks; i++) {
                await uploadChunk(file, uuid, i, totalChunks, activeAbort.signal);
              }

              const fin = await uploadFinalize(file, uuid, totalChunks, activeAbort.signal);

              const fileId = extractFileId(fin);
              if (!fileId) throw new Error("Upload finished but file_id missing.");

              uf.file_id = fileId;
              uf.url = `${TMP_BASE}${fileId}`;
              uf.status = "done";

              activeAbort = null;
              activeUploadUUID = null;

              render();
            };

            // ===== sequential worker =====
            const startWorker = async () => {
              if (workerRunning) return;
              workerRunning = true;

              try {
                while (queue.length) {
                  const item = queue.shift();
                  if (!item) break;

                  const { file, uf } = item;
                  if (!uploadedFiles.some((x) => x.uuid === uf.uuid)) continue;

                  setPending(pendingUploads + 1);

                  uf.status = "uploading";
                  render();

                  try {
                    await uploadFileToWPForms(file, uf);
                  } catch (e: any) {
                    if (e?.name !== "AbortError") {
                      uf.status = "error";
                      showErrorOnce(e?.message || "Upload failed.");
                      render();
                    }
                  } finally {
                    setPending(pendingUploads - 1);
                    syncToWPForms();
                  }
                }
              } finally {
                workerRunning = false;
              }
            };

            // ===== add files (validation errors 5s only) =====
            const addFiles = (fileList: FileList | null) => {
              if (!fileList) return;

              // user action -> clear previous error immediately
              clearErrorAll();

              const all = Array.from(fileList);
              const activeCount = uploadedFiles.filter((f) => f.status !== "error").length;
              const slots = MAX - activeCount;

              if (slots <= 0) {
                showErrorOnce(`You can upload a maximum of ${MAX} images`);
                input.value = "";
                return;
              }

              const existing = new Set(uploadedFiles.map((u) => u.fingerprint));
              const valid: File[] = [];
              let showedError = false;

              for (const f of all) {
                const fp = fingerprintOf(f);

                if (existing.has(fp)) {
                  if (!showedError) {
                    showErrorOnce("This image is already added.");
                    showedError = true;
                  }
                  continue;
                }
                if (!isAllowedFile(f)) {
                  if (!showedError) {
                    showErrorOnce("Only PNG, JPG and GIF files are allowed.");
                    showedError = true;
                  }
                  continue;
                }
                if (f.size > MAX_FILE_SIZE) {
                  if (!showedError) {
                    showErrorOnce(`Maximum file size is 5MB. "${f.name}" is ${formatMB(f.size)}MB.`);
                    showedError = true;
                  }
                  continue;
                }

                existing.add(fp);
                valid.push(f);
              }

              if (!valid.length) {
                input.value = "";
                return;
              }

              const toUpload = valid.slice(0, slots);
              if (valid.length > slots && !showedError) {
                showErrorOnce(`You can upload a maximum of ${MAX} images`);
              }

              for (const file of toUpload) {
                const uf: UploadedFile = {
                  uuid: crypto.randomUUID(),
                  file_id: "",
                  url: "",
                  size: file.size,
                  type: file.type,
                  name: file.name,
                  status: "queued",
                  fingerprint: fingerprintOf(file),
                };

                uploadedFiles.push(uf);
                queue.push({ file, uf });
              }

              render();
              startWorker();
              input.value = "";
            };

            // ===== reset after submit success =====
            (window as any).__resetSellCarUpload = () => {
              if (activeAbort) activeAbort.abort();
              activeAbort = null;
              activeUploadUUID = null;

              queue.length = 0;
              uploadedFiles.length = 0;
              setPending(0);

              list.innerHTML = "";
              list.classList.add("hidden");
              input.value = "";

              clearErrorAll();
              syncToWPForms();
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
            render();
          });
        }}
      </Script>
    </div>
  );
}