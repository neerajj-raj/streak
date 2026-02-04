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
 * @author Ram
 */

import ChevronDown from "@common/icons/ChevronDown";
import type { InputSize } from "./Input"

import { Script } from "streak/components";

type DropdownProps = {
  placeholder?: string;
  options: string[];
  search?: boolean;
  dropid: string;
  inputSize?: InputSize;
};

export default function Dropdown({
  placeholder = "Select",
  options,
  search = false,
  dropid,
  inputSize = "md",
}: DropdownProps) {

  const pos = { top: 0, left: 0, width: 0 };

  const filtered = options;
  return (
    <>
      <button
        id={`buttonRef${dropid}`}
        type="button"

        className={`relative flex w-full items-center rounded-lg border border-slate-300 bg-white px-4 text-left text-slate-900 outline-none transition-colors focus:border-amber-400 max-lg:text-xs ${inputSize === "sm"
          ? "h-9 text-sm"
          : inputSize === "lg"
            ? "h-13 text-base"
            : "h-10 text-sm"
          }`}
      >
        <span id={dropid} className={`flex-1 truncate text-slate-400`}>
          {placeholder}
        </span>
        <div className="transform text-slate-400 transition-transform">
          <ChevronDown
            className={`chevron${dropid} transition-transform ml-2 h-4 w-4`}
          />
        </div>
      </button>

      <div className="rotate-180 hidden"></div>
      <div
        id={`dropdownRef${dropid}`}
        style={{
          position: "absolute",
          top: pos.top,
          left: pos.left,
          width: pos.width,
        }}
        className="z-100 overflow-hidden rounded-lg border border-slate-200 bg-white hidden shadow-lg"
      >
        <div className="max-h-52 overflow-auto py-1">
          {filtered.length === 0 && (
            <div className="px-4 py-2 text-sm text-slate-400">
              No results
            </div>
          )}
          {filtered.map((option) => (
            <button
              data-value={option}
              className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* usage example */}
      {/* <Dropdown
        placeholder="Select brand"
        options={["BMW", "Audi", "Mercedes", "Porsche"]}
        value={brand}
        onChange={setBrand}
      />

      <Dropdown
        placeholder="Select year"
        options={["2025", "2024", "2023", "2022", "2021"]}
        value={year}
        onChange={setYear}
        search
        inputSize="sm"
      />

      <Dropdown
        placeholder="Sort by"
        options={[
          "Price: Low to High",
          "Price: High to Low",
          "Newest First",
          "Oldest First",
        ]}
        value={sort}
        onChange={setSort}
        inputSize="lg"
      /> */}
      <Script id={`dropdown${dropid}`} options={{ dropid: dropid }}>
        {(gDom: any, options: any) => {
          let open = false;
          let openUp = false;
          const dropid = options?.dropid;

          const buttonRef = document.getElementById(`buttonRef${dropid}`)!;
          const dropdownRef = document.getElementById(`dropdownRef${dropid}`)!;
          const optionButtons = dropdownRef.querySelectorAll("button");
          const dropdownvalue = document.getElementById(dropid)!;
          const chevron = buttonRef.querySelector(`.chevron${dropid}`);


          const updateUi = () => {
            chevron?.classList.toggle("rotate-180", open);
            dropdownRef.classList.toggle("hidden", !open);
            document.body.appendChild(dropdownRef);
            dropdownRef.style.position = "fixed";
            dropdownRef.style.zIndex = "9999";

          };

          const updatePosition = () => {
            const rect = buttonRef.getBoundingClientRect();
            const dropdownHeight = dropdownRef.offsetHeight;
            const viewportHeight = window.innerHeight;
            const spaceBelow = viewportHeight - rect.bottom;

            openUp = spaceBelow < dropdownHeight + 12;

            const top = openUp
              ? rect.top - dropdownHeight - 6
              : rect.bottom + 6;


            dropdownRef.style.top = `${top}px`;
            dropdownRef.style.left = `${rect.left + window.scrollX}px`;
            dropdownRef.style.width = `${rect.width}px`;
          };

          const handleOutside = (e: MouseEvent) => {
            if (
              !buttonRef.contains(e.target as Node) &&
              !dropdownRef.contains(e.target as Node)
            ) {
              open = false;
              updateUi();
            }
          };


          optionButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
              open = false;
              updateUi();
              const selectedValue = btn.getAttribute("data-value");
              dropdownvalue.textContent = selectedValue;
              dropdownvalue.classList.remove("text-slate-400")
            });
          })
          buttonRef.addEventListener("click", () => {
            open = !open;
            updateUi();
            updatePosition();
          });

          window.addEventListener("resize", updatePosition);
          gDom.addEventListener("scrolling", updatePosition);
          document.addEventListener("mousedown", handleOutside);
        }}
      </Script>

    </>
  );
}
