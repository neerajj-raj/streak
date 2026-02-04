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
 * @author Anagha Chandrababu
 */

import Siren from "@common/icons/Siren";
import TriangleAlert from "@common/icons/TriangleAlert";

const SafetyTips = () => {
  return (
    <section>
      <div className="rounded-3xl bg-primary/5 p-4">
        <div className="border-dashed border-primary border rounded-3xl p-4">
          <div className="flex gap-2">
             <TriangleAlert className="text-primary" />
            <p className="font-bold">Safety Tips For Buyers</p>
          </div>
          <div className="text-sm mt-4">
            <ul className="flex flex-col gap-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Siren className="w-4 h-4 text-primary/60" />
                Use a safe location to meet seller
              </li>
              <li className="flex items-start gap-2">
                <Siren className="w-4 h-4 text-primary/60" />
                Avoid cash transactions
              </li>
              <li className="flex items-start gap-2">
                <Siren className="w-4 h-4 text-primary/60" />
                Beware of unrealistic offers
              </li>
              <li className="flex items-start gap-2">
                <Siren className="w-4 h-4 text-primary/60" />
                Check the item before you buy
              </li>
              <li className="flex items-start gap-2">
                <Siren className="w-4 h-4 text-primary/60" />
                Pay only after collecting item
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
