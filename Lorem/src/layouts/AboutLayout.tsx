import { WidgetPlaceholder } from "streak/components";

const AboutLayout = () => {
  console.info("Rendering About Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body className="page-template-about-us inner about-page">
        <main className="outer" role="main">
          <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
          <WidgetPlaceholder id="AboutBanner" type="AboutBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="AboutContent" type="AboutContent" />
          <WidgetPlaceholder id="AboutTeam" type="AboutTeam" />
          <WidgetPlaceholder id="AboutWhyChooseUs" type="AboutWhyChooseUs" />
          <WidgetPlaceholder id="HomeGallery" type="HomeGallery" />
          <WidgetPlaceholder id="AboutVideoSection" type="AboutVideoSection" />
          <WidgetPlaceholder id="AboutValues" type="AboutValues" />
          <WidgetPlaceholder id="HomeServices" type="HomeServices" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
          <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        </main>
      </body>
    </html>
  );
};

export default AboutLayout;
