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


import clsx from "clsx";
export type TextAreaSize = "sm" | "md" | "lg";

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  inputSize?: TextAreaSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
const sizeClasses: Record<TextAreaSize, string> = {
  sm: "h-9 text-sm",
  md: "h-24 text-sm",
  lg: "h-28 text-base",
};

export default function TextArea({
  inputSize = "md",
  startIcon,
  endIcon,
  className,
  type,
  ...props
}: TextAreaProps) {
  return (
    <div className="relative w-full">
      {startIcon && (
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {startIcon}
        </span>
      )}
      <textarea
        {...props}
        id="contact-textarea"
        className={clsx(
          "w-full rounded-lg border border-slate-200 bg-white px-4 pt-2 text-slate-900 placeholder-slate-400 outline-none transition-colors focus:border-amber-400",
          sizeClasses[inputSize],
          startIcon && "pl-9",
          endIcon && "pr-9",
          type === "number" &&
          "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          className
        )}
      />
      {endIcon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          {endIcon}
        </span>
      )}
    </div>

  );
}