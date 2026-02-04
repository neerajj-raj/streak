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
import TradeForm from "./TradeForm";
import TradeProcess from "./TradeProcess";


const TradeIn = () => {
  return (
    <section className="py-10 md:py-14 lg:py-24">
      <div className="container">
        <div className="xl:flex xl:gap-20">
          <div className="xl:w-7/12">
            <TradeForm/>
          </div>
          <div className="xl:w-5/12 max-xl:mt-16 max-md:mt-12">
            <div className="sticky top-[calc(var(--header-height)+2rem)]">
              <TradeProcess />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeIn;
