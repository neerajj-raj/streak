/*
 * Copyright(c) 2025 Oscar.
 *
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of Oscar ("Confidential
 * Information"). You shall not disclose such Confidential Information and shall use it only in
 * accordance with the terms of the contract agreement you entered into with Oscar.
 *
 *
 * @author Neeraj
 */
import clsx from "clsx";
export type InputSize = "sm" | "md" | "lg";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  inputSize?: InputSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};
const sizeClasses: Record<InputSize, string> = {
  sm: "h-9 text-sm",
  md: "h-10 text-sm",
  lg: "h-13 text-base",
};

export default function Input({ inputSize = "md", startIcon, endIcon, className, type, ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {startIcon && <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{startIcon}</span>}
      <input
        {...props}
        type={type}
        className={clsx(
          "w-full rounded-lg border border-slate-300 bg-white px-4 text-slate-900 placeholder-slate-500 outline-none transition-colors focus:border-amber-400 max-lg:text-xs",
          sizeClasses[inputSize],
          startIcon && "pl-9",
          endIcon && "pr-9",
          type === "number" && "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          className
        )}
      />
      {endIcon && <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">{endIcon}</span>}
    </div>
    // usage example
    // <Input
    //   placeholder="Search cars"
    //   startIcon={<Search className="h-4 w-4" />}
    //   endIcon={<X className="h-4 w-4 cursor-pointer" />}
    //  inputSize="sm"
    // />
  );
}
