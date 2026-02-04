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
import { WidgetPlaceholder } from "streak/components";

const PdpLayout = () => {
  console.info("Rendering Pdp Layout");
  return (
    <html dir="ltr" lang="en" className="font-primary font-secondary">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <WidgetPlaceholder id="CommonTopbar" type="CommonTopbar" />
        <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
        <main className="flex-1">
          <section className="pt-6 mt-(--header-height)">
            <div className="container">
              <WidgetPlaceholder id="Breadcrumb" type="Breadcrumb" />
              <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
              <WidgetPlaceholder id="PDPContent" type="PDPContent" />
            </div>
          </section>
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
      </body>
    </html>
  );
};

export default PdpLayout;
