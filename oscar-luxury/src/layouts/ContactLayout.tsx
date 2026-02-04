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
 * @author Ram
 */
import { WidgetPlaceholder } from "streak/components";
import { Button } from "@common/components/Button";

const ContactLayout = () => {
  console.info("Rendering Contact Layout");
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
          <WidgetPlaceholder id="Contact" type="Contact" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
        </main>
        <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
      </body>
    </html>
  );
};

export default ContactLayout;
