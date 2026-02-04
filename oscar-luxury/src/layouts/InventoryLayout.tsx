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
 * @author Vishakh B S
 */
import { WidgetPlaceholder } from "streak/components";

const InventoryLayout = () => {
  console.info("Rendering Inventory Layout");
  return (
    <html dir="ltr" lang="en" className="font-primary font-secondary">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <WidgetPlaceholder id="CommonTopbar" type="CommonTopbar" />
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main className="flex-1">
          <WidgetPlaceholder id="BreadcrumbsBanner" type="BreadcrumbsBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <section className="pt-4 pb-6 lg:pt-8 lg:pb-14">
            <div className="container">
              <div className="flex gap-6 lg:gap-8 xl:gap-14">
                <div className="hidden lg:block w-[280px] xl:w-[320px] shrink-0">
                  <WidgetPlaceholder id="InventoryFilter" type="InventoryFilter" />
                </div>
                <div className="flex-1">
                  <WidgetPlaceholder id="InventoryListHeader" type="InventoryListHeader" />
                  <WidgetPlaceholder id="InventoryList" type="InventoryList" />
                  {/* TODO: Add Pagination here */}
                </div>
              </div>
            </div>
          </section>
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
      </body>
    </html>
  );
};

export default InventoryLayout;
