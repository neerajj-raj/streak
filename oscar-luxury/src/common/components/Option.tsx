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
 * @author Vishakh B S
 */
type OptionProps = {
  type: "radio" | "checkbox";
  label: string;
  name?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  // ID is crucial for the Script to target this specific input if needed
  id?: string;
};

export default function Option({ type, label, name, value, checked, disabled, className, id }: OptionProps) {
  const isRadio = type === "radio";

  return (
    <label className={`flex items-center gap-3 text-sm text-slate-700 cursor-pointer ${disabled ? "cursor-not-allowed opacity-60" : ""} ${className || ""}`}>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        className="peer sr-only" // Hidden native input
      />

      {/* Visual Indicator (Styled based on peer state) */}
      <span
        className={`flex h-4 w-4 items-center justify-center border transition
          ${isRadio ? "rounded-full" : "rounded"}
          border-slate-300 bg-white
          peer-checked:border-amber-400 peer-checked:bg-amber-400`}
      >
        {isRadio ? (
          /* Radio Dot */
          <span className="h-2 w-2 rounded-full bg-white transition scale-0 peer-checked:scale-100" />
        ) : (
          /* Checkbox Icon */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 text-white transition opacity-0 peer-checked:opacity-100"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
      </span>
      <span>{label}</span>
    </label>
  );
}
