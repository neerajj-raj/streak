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
import FinancingCalculator from "./FinancingCalculator";
import InventoryDescription from "./InventoryDescription";
import InventoryFeatures from "./InventoryFeatures";
import InventoryInfo from "./InventoryInfo";
import InventorySlider from "./InventorySlider";
import InventoryTable from "./InventoryTable";
import TradeInModal from "./TradeInModal";

interface PDPContentProps {
  data: {
    product: Record<string, any>;
    sortedCategories: Array<Record<string, any>>;
  };
}

const PDPContent = (props: PDPContentProps) => {
  const { product, sortedCategories } = props.data || {};

  return (
    <div className="flex max-xl:flex-col gap-10 xl:gap-16">
      <div className="xl:w-8/12">
        <InventorySlider images={product?.gallery ?? []} title={product?.title ?? ""} />
        {/* mobile view inventory info */}
        <div className="xl:hidden my-10 lg:my-16">
          <InventoryInfo product={product} />
        </div>
        <hr className="border-slate-200 my-10 lg:my-16" />
        <div className="my-10 lg:my-16">
          <h2 className="font-semibold text-2xl mb-6">Description</h2>
          <InventoryTable product={product} sortedCategories={sortedCategories} />
          <InventoryDescription content={product?.content} />
          <hr className="border-slate-200 my-10" />
          <InventoryFeatures features={product?.private_meta?._carspot_ad_features} />
          <div className="mt-10 xl:hidden">
            <FinancingCalculator id="FinancingCalculatorMobile" price={product?.private_meta?._carspot_ad_price ?? ""} />
          </div>
        </div>
      </div>
      {/* desktop view inventory info */}
      <div className="xl:w-4/12 shrink-0 xl:pb-14 max-xl:hidden">
        <InventoryInfo product={product} />
        <FinancingCalculator id="FinancingCalculatorWeb" price={product?.private_meta?._carspot_ad_price ?? ""} />
      </div>
      <div id="tradein-modal-root" className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40">
        <TradeInModal title={product?.title ?? ""} />
      </div>
    </div>
  );
};

export default PDPContent;
