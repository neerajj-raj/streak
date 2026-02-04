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

import ListChecks from "@common/icons/ListChecks";
import { hasArrayElements } from "@utils/commonUtils";

const InventoryFeatures = ({ features }: { features?: string }) => {
  const featuresList = features?.split("|").map((feature) => feature.trim());

  return (
    hasArrayElements(featuresList) && (
      <div className="mt-8">
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="h-5 w-5 text-slate-700" />
          <h3 className="text-lg font-semibold text-slate-900">Car Features</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10 text-slate-700 font-medium">
          {featuresList?.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default InventoryFeatures;
