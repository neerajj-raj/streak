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
const SprayCan = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`lucide lucide-spray-can ${className || ""}`}
      aria-hidden="true"
    >
      <path d="M3 3h.01"></path>
      <path d="M7 5h.01"></path>
      <path d="M11 7h.01"></path>
      <path d="M3 7h.01"></path>
      <path d="M7 9h.01"></path>
      <path d="M3 11h.01"></path>
      <rect width="4" height="4" x="15" y="5"></rect>
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"></path>
      <path d="m13 14 8-2"></path>
      <path d="m13 19 8-2"></path>
    </svg>
  );
};

export default SprayCan;
