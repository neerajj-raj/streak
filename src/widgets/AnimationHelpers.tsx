import { Script } from "streak/components";

const AnimationHelpers = () => {
  return (
    <>
      <Script id="AnimationHelpers">
        {(gDom: any) => {

          const loadingCommonPackages = () => {

            gDom.triggeredEvents = {};
            let isUserIntracted = false;

            const triggerCustomEvent = (name: string, detail: any = {}) => {
              gDom.triggeredEvents[name] = detail;
              detail.triggeredEvents = Object.keys(gDom.triggeredEvents);
              const event = new CustomEvent(name, { detail });
              window.dispatchEvent(event);
            };
      
            gDom
              .loadPackage("js/aos.js")
              .then(() => {
                const AOS = (gDom as any).AOS;
                AOS.init({ duration: 1000, once: false });
                setTimeout(() => AOS.refresh(), 100); // allow DOM to render first
              });

            const userIntractionHandler = () => {
              if (isUserIntracted) return;
              isUserIntracted = true;
              ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach(e =>
                document?.removeEventListener(e, userIntractionHandler)
              );
              triggerCustomEvent("userIntracted")
            };

            ["keydown", "mousemove", "touchmove", "touchstart", "wheel"].forEach(e =>
              document?.addEventListener(e, userIntractionHandler, { passive: true })
            );
          }

          if (gDom.ftr) {
            setTimeout(loadingCommonPackages, 2000);
          } else {
            loadingCommonPackages();
          }
        }}
      </Script>
    </>
  )
}

export default AnimationHelpers;