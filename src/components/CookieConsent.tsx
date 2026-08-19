import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { captureAttribution, getConsentStatus, setConsentStatus } from "@/lib/attribution";

const REOPEN_EVENT = "cookie-consent:reopen";

/** Footer's "Cookie preferences" link uses this to reopen the banner. */
export const reopenCookieConsent = () => {
  window.dispatchEvent(new Event(REOPEN_EVENT));
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsentStatus() === null) setVisible(true);
    const reopen = () => setVisible(true);
    window.addEventListener(REOPEN_EVENT, reopen);
    return () => window.removeEventListener(REOPEN_EVENT, reopen);
  }, []);

  const decide = (status: "accepted" | "declined") => {
    setConsentStatus(status);
    if (status === "accepted") captureAttribution();
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie preferences"
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-[60] rounded-lg border border-border bg-card p-5 shadow-xl"
        >
          <p className="text-sm text-foreground leading-relaxed mb-4">
            This site stores one small note in your browser — which post or link brought
            you here — so I know what's actually working. No ad trackers, nothing sold.{" "}
            <a href="/privacy" className="text-primary underline underline-offset-2">
              Privacy policy
            </a>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="btn-premium flex-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => decide("declined")}
              className="flex-1 px-4 py-2 border border-border text-sm font-medium rounded-md hover:bg-muted transition-colors"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
