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
const LineChart = ({ className }: { className: string }) => {
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
      className="lucide lucide-chart-line h-5 w-5 lg:h-6 lg:w-6 text-white"
      aria-hidden="true">
      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  );
};

export default LineChart;
