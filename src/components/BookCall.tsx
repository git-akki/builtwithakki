import { motion, Variants } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const BookCall = () => {
  const handleBookingClick = () => {
    window.open(
      "https://calendar.app.google/mS1urwHfqaaBTso3A",
      "GoogleCalendar",
      "width=600,height=700,resizable=yes,scrollbars=yes"
    );
  };

  return (
    <section id="book-call" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer as unknown as Variants}
          viewport={{ once: false }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-primary/5 border border-border p-8 sm:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <motion.div variants={staggerContainer as unknown as Variants} className="relative z-10 max-w-3xl">
            <motion.div variants={fadeInUp as unknown as Variants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Free Consultation
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp as unknown as Variants} className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Let&apos;s Build Something Great
            </motion.h2>

            <motion.p variants={fadeInUp as unknown as Variants} className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Whether you need a conversion-focused website, an AI-powered
              automation system, or a scalable web application — let&apos;s
              discuss how I can help your business grow.
            </motion.p>

            <motion.div variants={staggerContainer as unknown as Variants} className="flex flex-col sm:flex-row gap-4">
              {/* Styled button opens Google Calendar popup */}
              <motion.button
                variants={fadeInUp as unknown as Variants}
                onClick={handleBookingClick}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl transition-colors duration-300 hover:bg-primary/90"
              >
                Schedule a Call
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>

              <motion.a
                variants={fadeInUp as unknown as Variants}
                href="mailto:work.17akki.akash@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-xl transition-colors duration-300 hover:bg-card hover:border-primary/50"
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
                  "30-minute discovery call",
                  "Project scope discussion",
                  "Custom solution proposal",
                  "No commitment required",
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
