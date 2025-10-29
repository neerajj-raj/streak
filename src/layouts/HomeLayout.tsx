import { WidgetPlaceholder } from "streak/components";

const HomeLayout = () => {
  console.info("Rendering Home Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        {/* <WidgetPlaceholder id="AppHead" type="AppHead" /> */}
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"></meta>
        <link rel="stylesheet" href="/styles/global.css" />
        <link rel="stylesheet" href="/styles/mobile.css" />
        <link rel="stylesheet" href="/styles/fonts.css" />
        <link rel="stylesheet" href="/styles/aos.css" />
        <link rel="stylesheet" href="/styles/flickity.css" />
        
      </head>
      <body>
        <div className="outer">
          <WidgetPlaceholder id="HomeBanner" type="HomeBanner" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="HomeServices" type="HomeServices" />
          <WidgetPlaceholder id="HomeGallery" type="HomeGallery" />
          <WidgetPlaceholder id="HomeWhyChooseUs" type="HomeWhyChooseUs" />
          <WidgetPlaceholder id="HomeAbout" type="HomeAbout" />
          <WidgetPlaceholder id="HomeTeam" type="HomeTeam" />
          <WidgetPlaceholder id="HomeArticles" type="HomeArticles" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
        </div>
      </body>
    </html>
  );
};

export default HomeLayout;
