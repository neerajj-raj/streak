import { WidgetPlaceholder } from "streak/components";

const HomeLayout = () => {
  console.info("Rendering Home Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body>
        <div className="outer">
          <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
          <WidgetPlaceholder id="HomeBanner" type="HomeBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="HomeServices" type="HomeServices" />
          <WidgetPlaceholder id="HomeGallery" type="HomeGallery" />
          <WidgetPlaceholder id="HomeWhyChooseUs" type="HomeWhyChooseUs" />
          <WidgetPlaceholder id="HomeAbout" type="HomeAbout" />
          <WidgetPlaceholder id="HomeTeam" type="HomeTeam" />
          <WidgetPlaceholder id="HomeArticles" type="HomeArticles" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
          <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        </div>
      </body>
    </html>
  );
};

export default HomeLayout;
