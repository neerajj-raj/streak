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
const ClockCheck = ({ className, size }: { className: string; size?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-clock-check w-4 h-4 text-gray-500"
      aria-hidden="true">
      <path d="M12 6v6l4 2"></path>
      <path d="M22 12a10 10 0 1 0-11 9.95"></path>
      <path d="m22 16-5.5 5.5L14 19"></path>
    </svg>
  );
};

export default ClockCheck;