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
const GoalIcon = ({ className }: { className: string }) => {
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
      className={`lucide lucide-goal ${className}`}
      aria-hidden="true"
    >
      <path d="M12 13V2l8 4-8 4"></path>
      <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path>
      <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path>
    </svg>
  );
};

export default GoalIcon;
