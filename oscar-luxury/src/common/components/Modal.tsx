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
 * @author Minna Ancy Mathew
 */
"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import CloseIcon from "@common/icons/CloseIcon";

type ModalSize = "sm" | "md" | "lg";
type ModalProps = {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  children: ReactNode;
};
const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-3xl",
  lg: "max-w-5xl",
};
export function Modal({
  open,
  onClose,
  size = "md",
  children,
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={clsx(
          "flex w-full max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-xl relative",
          sizeClasses[size]
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-white/70 hover:text-white"
        >
          <CloseIcon className="h-6 w-6" size={0} />
        </button>
        {children}
      </div>
    </div>
  );
}
export function ModalTitle({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-900 px-6 py-5 text-white">
      {children}
    </div>
  );
}
export function ModalBody({ children }: { children: ReactNode }) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      {children}
    </div>
  );
}
export function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div className="border-t border-slate-200 px-6 py-5">
      {children}
    </div>
  );
}
