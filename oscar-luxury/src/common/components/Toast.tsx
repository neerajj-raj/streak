
import clsx from "clsx";
import Check from "@common/icons/CheckIcon";
import X from "@common/icons/CloseIcon";
import { Script } from "streak/components";

type ToastProps = {
  mainMessage?: string;
  message?: string;
  duration?: number;
  className?: string;
};

export default function Toast({
  mainMessage = "Success",
  message = "Default message",
  duration = 3000,
  className,
}: ToastProps) {

  return (
    <div
      className={clsx(
        "fixed bottom-6 right-6 z-50",
        "animate-toast-in"
      )}
    >
      <div className="flex flex-col  border-neutral-200 gap-2 bg-white rounded-xl border shadow-lg">
        <div
          className={clsx(
            "flex items-center justify-start gap-2 p-4 pb-0",
            className
          )}
        >
          <div className="shrink-0 w-6 h-6 border border-green-600 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-neutral-800 font-semibold">
              {mainMessage}
            </p>
          </div>
          <div className="ms-auto">
            <button className="p-1" id="closeicon">
              <X
                size={24}
                className="w-4 h-4 text-neutral-800"
              />
            </button>
          </div>
        </div>
        <div className="text-white text-xs pb-2 pt-1 px-4 bg-green-700 rounded-b-xl">{message}</div>
      </div>
      <Script id="toast">
        {() => {

          const button = document.getElementById("closeicon");
          const toast = document.getElementById("toast");

          button?.addEventListener("click", () => {
            toast?.classList.add("hidden");
          })


        }}


      </Script>
    </div>
  );
}
