import { useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { attributionSource, getAttribution } from "@/lib/attribution";
import { loadCalEmbed } from "@/lib/calEmbed";

/* Cal.com carries UTMs through to the booking webhook, so a booked call can be
   traced back to the reel that produced it. Falls back to the Google Calendar
   link when VITE_CAL_LINK is not set, so booking never breaks. */
const CAL_LINK = import.meta.env.VITE_CAL_LINK as string | undefined;
const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/mS1urwHfqaaBTso3A";
const CAL_NAMESPACE = "book-call";

/* "https://cal.com/akash/30min" -> "akash/30min" */
const calEventPath = CAL_LINK ? new URL(CAL_LINK).pathname.replace(/^\//, "") : "";

const BookCall = () => {
  useEffect(() => {
    if (!CAL_LINK) return;
    const cal = loadCalEmbed(CAL_NAMESPACE);
    cal?.("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  const openGoogleCalendarFallback = () => {
    window.open(GOOGLE_CALENDAR_LINK, "_blank", "noopener,noreferrer");
  };

  /* Same UTM/source data withAttribution() used to append to the outbound
     link — now passed as embed config so the popup's booking URL carries it. */
  const attr = getAttribution();
  const calConfig = {
    layout: "month_view",
    ...(attr.source ? { utm_source: attr.source } : {}),
    ...(attr.medium ? { utm_medium: attr.medium } : {}),
    ...(attr.campaign ? { utm_campaign: attr.campaign } : {}),
    ...(attr.content ? { utm_content: attr.content } : {}),
    "metadata[source]": attributionSource("book-call"),
  };

  return (
    <section id="book-call" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer as unknown as Variants}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-br from-card via-card to-primary/5 border border-border p-8 sm:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <motion.div variants={staggerContainer as unknown as Variants} className="relative z-10 max-w-3xl">
            <motion.div variants={fadeInUp as unknown as Variants} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary bg-primary/10 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Let's talk
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Got something worth building?
            </motion.h2>

            <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground mb-8 max-w-2xl">
              A 30-minute call. No pitch deck, no pressure —
              just a straight conversation about what you're trying to build.
            </motion.p>

            <motion.div variants={staggerContainer as unknown as Variants} className="flex flex-col sm:flex-row gap-4">
              {/* CAL_LINK set: opens the Cal.com booking modal in place (via
                  data-cal-link — embed.js attaches the click listener once
                  loadCalEmbed() has run). Otherwise falls back to a new-tab
                  Google Calendar link so booking never breaks. */}
              <motion.button
                variants={fadeInUp as unknown as Variants}
                onClick={CAL_LINK ? undefined : openGoogleCalendarFallback}
                data-cal-namespace={CAL_LINK ? CAL_NAMESPACE : undefined}
                data-cal-link={CAL_LINK ? calEventPath : undefined}
                data-cal-config={CAL_LINK ? JSON.stringify(calConfig) : undefined}
                className="btn-premium group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md"
              >
                Schedule a Call
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.a
                variants={fadeInUp as unknown as Variants}
                href="mailto:work.17akki.akash@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-md transition-colors duration-300 hover:bg-card hover:border-primary"
              >
                Or Email Me
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp as unknown as Variants} className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                What to expect:
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {[
                  "30-minute call, no prep needed",
                  "Straight answer on scope & cost",
                  "Real examples from past builds",
                  "No obligation either way",
                ].map((item, index) => (
                  <motion.span variants={fadeInUp as unknown as Variants} key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCall;
