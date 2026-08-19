import { motion, Variants } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import { withAttribution } from "@/lib/attribution";

/* Cal.com carries UTMs through to the booking webhook, so a booked call can be
   traced back to the reel that produced it. Falls back to the Google Calendar
   link when VITE_CAL_LINK is not set, so booking never breaks. */
const CAL_LINK = import.meta.env.VITE_CAL_LINK as string | undefined;
const GOOGLE_CALENDAR_LINK = "https://calendar.app.google/mS1urwHfqaaBTso3A";

const BookCall = () => {
  const handleBookingClick = () => {
    const url = CAL_LINK ? withAttribution(CAL_LINK) : GOOGLE_CALENDAR_LINK;
    // A plain new tab rather than a sized popup — fixed-size popups are blocked
    // or unusable on mobile, which is where most reel traffic arrives.
    window.open(url, "_blank", "noopener,noreferrer");
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
            <motion.div variants={fadeInUp as unknown as Variants} className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary/30 bg-primary/10 mb-6">
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
              {/* Styled button opens Google Calendar popup */}
              <motion.button
                variants={fadeInUp as unknown as Variants}
                onClick={handleBookingClick}
                className="btn-premium group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md"
              >
                Schedule a Call
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.a
                variants={fadeInUp as unknown as Variants}
                href="mailto:work.17akki.akash@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-md transition-colors duration-300 hover:bg-card hover:border-primary/50"
              >
                Or Email Me
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp as unknown as Variants} className="mt-10 pt-8 border-t border-border/50">
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
