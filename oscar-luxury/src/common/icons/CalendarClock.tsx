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
const CalendarClock = ({ className, size }: { className: string; size?: number }) => {
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
      className="lucide lucide-calendar-clock h-4 w-4 mt-1 text-gray-500"
      aria-hidden="true">
      <path d="M16 14v2.2l1.6 1"></path>
      <path d="M16 2v4"></path>
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
      <path d="M3 10h5"></path>
      <path d="M8 2v4"></path>
      <circle cx="16" cy="16" r="6"></circle>
    </svg>
  );
};

export default CalendarClock;