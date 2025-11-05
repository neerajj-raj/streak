import { WidgetPlaceholder } from "streak/components";

const BlogLayout = () => {
  console.info("Rendering Blog Layout");
  return (
    <html dir="ltr" lang="en">
      <head>
        <WidgetPlaceholder id="AppHead" type="AppHead" />
      </head>
      <body className="page-template-blog detail-banner">
        <main className="outer" role="main">
          <WidgetPlaceholder id="CommonHeader" type="CommonHeader" />
          <WidgetPlaceholder id="BlogLists" type="BlogLists" />
          <WidgetPlaceholder id="AnimationHelpers" type="AnimationHelpers" />
          <WidgetPlaceholder id="CommonFooter" type="CommonFooter" />
          <WidgetPlaceholder id="AnalyticsHelpers" type="AnalyticsHelpers" />
        </main>
      </body>
    </html>
  );
};

export default BlogLayout;
