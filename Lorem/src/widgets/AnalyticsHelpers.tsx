import { Script } from "streak/components";
import { GTM_LAYER_NAME } from "utils/constants";

const AnalyticsHelpers = () => {
  return (
    <div>
      <Script
        id={`analytics-helpers-script-loader`}
        options={{
          gly: GTM_LAYER_NAME,
        }}
      >
        {(
          gDom: any,
          options: {
            gly: string;
            gtmKey?: string;
          }
        ) => {
          const gly = options?.gly;

          const performanceImpactScripts = () => {
            const gtmKey = gDom?._s_gtmKey;
            const fbPixelId = gDom?._fbPixelId;

            if (gtmKey) {
              setTimeout(() => {
                const dataLayerQuery = gly !== "dataLayer" ? "&l=" + gly : "";
                gDom.addResourceToBody(
                  "https://www.googletagmanager.com/gtm.js?id=" +
                  gtmKey +
                  dataLayerQuery,
                  { defer: true }
                );
              }, 0);
            }
            if (fbPixelId) {
              setTimeout(() => {
                gDom.addResourceToBody(
                  "https://connect.facebook.net/en_US/fbevents.js",
                  { defer: true }
                );
                // Initialize pixel and track page view
                gDom.fbq("init", fbPixelId);
                gDom.fbq("track", "PageView");
              }, 0);
            }
          };

          if (gDom.ftr) {
            setTimeout(performanceImpactScripts, 4000);
          } else {
            performanceImpactScripts();
          }
        }}
      </Script>
    </div>
  );
};

export default AnalyticsHelpers;
