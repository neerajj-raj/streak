import { WidgetPlaceholder } from "streak/components";

const HomeLayout = () => {
  console.info("Rendering Service Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body className="services-template-default single single-services inner">
        <main className="outer" role="main">
          <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
          <WidgetPlaceholder id="ServiceBanner" type="ServiceBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="ServiceContent" type="ServiceContent" />
          <WidgetPlaceholder id="ServiceCommonList" type="ServiceCommonList" />
          <WidgetPlaceholder id="ServiceWhyChooseUs" type="ServiceWhyChooseUs" />
          <WidgetPlaceholder id="ServiceDescription" type="ServiceDescription" />
          <WidgetPlaceholder id="ServiceDetail" type="ServiceDetail" />
          <WidgetPlaceholder id="ServiceFaqSection" type="ServiceFaqSection" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
          <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        </main>
      </body>
    </html>
  );
};

export default HomeLayout;
