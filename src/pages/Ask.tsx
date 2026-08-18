import { useEffect } from "react";
import AskChat from "@/components/AskChat";
import ThemeToggle from "@/components/ThemeToggle";
import { withAttribution } from "@/lib/attribution";
import { SERVICES, CASE_STUDIES, PROCESS, BOOKING } from "@/content/facts";

/**
 * Chat-first home.
 *
 * The conversation is the site. Everything below it is the same information in
 * skimmable form — for people who would rather read than ask, for search
 * engines, and for anyone who hits the five-question limit.
 */

const bookingFor = (id: string) =>
  withAttribution(`${BOOKING.base}/${BOOKING.types[id]?.slug ?? BOOKING.types.automation.slug}`);

const Ask = () => {
  useEffect(() => {
    document.title = "Akash Yadav — AI systems that run businesses";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-6">
        {/* ── header ─────────────────────────────────────────── */}
        <header className="flex items-center justify-between py-8">
          <span className="text-sm font-medium tracking-tight">Akash Yadav</span>
          <div className="flex items-center gap-5">
            <a
              href={bookingFor("automation")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Book a call
            </a>
            <ThemeToggle />
          </div>
        </header>

        {/* ── the ask ────────────────────────────────────────── */}
        <section className="pt-16 pb-24 sm:pt-24">
          <h1 className="text-[28px] sm:text-[34px] leading-[1.25] tracking-tight font-medium mb-3 text-balance">
            I build AI systems that run businesses while their owners sleep.
          </h1>
          <p className="text-[17px] text-muted-foreground mb-14 leading-relaxed">
            Five production systems, three countries. Ask the assistant anything about them —
            it only knows what is real.
          </p>

          <AskChat />
        </section>

        {/* ── proof ──────────────────────────────────────────── */}
        <section className="py-16 border-t border-border">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-10">
            Real systems, real numbers
          </h2>

          <div className="flex flex-col gap-14">
            {CASE_STUDIES.map((c) => (
              <article key={c.id} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {c.client}
                  </span>
                  <h3 className="text-[19px] font-medium tracking-tight">{c.title}</h3>
                </div>

                <p className="text-[15px] text-muted-foreground leading-relaxed">{c.problem}</p>

                <dl className="flex flex-wrap gap-x-10 gap-y-3 pt-1">
                  {c.numbers.map(([value, label]) => (
                    /* Value reads first visually, label first in the DOM — so the
                       number is announced with its meaning, stated once. */
                    <div key={label} className="flex flex-col-reverse">
                      <dt className="text-[12px] text-muted-foreground">{label}</dt>
                      <dd className="text-[22px] font-medium tabular-nums tracking-tight">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* ── services ───────────────────────────────────────── */}
        <section className="py-16 border-t border-border">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-10">
            What I take on
          </h2>

          <div className="flex flex-col gap-10">
            {SERVICES.map((s) => (
              <div key={s.id} className="flex flex-col gap-2">
                <h3 className="text-[17px] font-medium tracking-tight">{s.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{s.promise}</p>
                <a
                  href={bookingFor(s.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm w-fit underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-colors"
                >
                  Book about this
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── process ────────────────────────────────────────── */}
        <section className="py-16 border-t border-border">
          <h2 className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-10">
            How it goes
          </h2>
          <ol className="flex flex-col gap-6">
            {PROCESS.map(([step, detail], i) => (
              <li key={step} className="flex gap-5">
                <span className="text-[13px] tabular-nums text-muted-foreground pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[16px] font-medium tracking-tight">{step}</span>
                  <span className="text-[15px] text-muted-foreground leading-relaxed">
                    {detail}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── footer ─────────────────────────────────────────── */}
        <footer className="py-16 border-t border-border flex flex-col gap-3">
          <a
            href={bookingFor("automation")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[17px] w-fit underline underline-offset-4 decoration-foreground/25 hover:decoration-foreground transition-colors"
          >
            Book a 30-minute audit
          </a>
          <p className="text-[13px] text-muted-foreground">
            Tuesday, Thursday and Saturday · 1–8pm India time
          </p>
          <div className="flex gap-5 pt-4 text-[13px] text-muted-foreground">
            <a
              href="https://www.linkedin.com/in/yadav-akash17"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/git-akki"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a href="/classic" className="hover:text-foreground transition-colors">
              Full site
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Ask;
