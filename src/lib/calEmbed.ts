/**
 * Cal.com embed loader — the official vanilla snippet (framework-agnostic,
 * no npm dependency). Injects app.cal.com's embed script once and exposes
 * `window.Cal`, namespaced so this doesn't collide if another Cal embed is
 * ever added to the page.
 *
 * https://cal.com/docs/core-features/embed — "pop-up via click" method:
 * any element with `data-cal-link` opens a modal automatically once the
 * matching namespace has been initialized.
 */

type CalApi = ((...args: unknown[]) => void) & { ns?: Record<string, CalApi> };

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

let loaded = false;

export function loadCalEmbed(namespace: string): CalApi | undefined {
  if (typeof window === "undefined") return undefined;

  if (!loaded) {
    /* eslint-disable */
    (function (C: any, A: string, L: string) {
      const p = (a: any, ar: any) => a.q.push(ar);
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable */
    loaded = true;
  }

  window.Cal!("init", namespace, { origin: "https://cal.com" });
  return window.Cal!.ns?.[namespace];
}
