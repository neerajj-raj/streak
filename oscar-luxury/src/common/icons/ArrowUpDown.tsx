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
const ArrowUpDown = ({ className }: { className?: string }) => {
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
      className={`lucide lucide-arrow-up-down ${className || ""}`}
      aria-hidden="true"
    >
      <path d="m21 16-4 4-4-4"></path>
      <path d="M17 20V4"></path>
      <path d="m3 8 4-4 4 4"></path>
      <path d="M7 4v16"></path>
    </svg>
  );
};

export default ArrowUpDown;
