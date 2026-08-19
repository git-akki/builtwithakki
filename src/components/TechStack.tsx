import {
  siClaude,
  siFigma,
  siVercel,
  siSupabase,
  siGithub,
  siN8n,
  siNotion,
  siWhatsapp,
  siGooglegemini,
  siMake,
  siHono,
  siAirtable,
  siTelegram,
  siWordpress,
  siReact,
  siZapier,
  siAnthropic,
} from "simple-icons";

interface BrandIcon {
  title: string;
  path: string;
  hex: string;
}

// OpenAI path (not in simple-icons v13) — inlined from brand assets
const siOpenaiCustom: BrandIcon = {
  title: "OpenAI",
  hex: "412991",
  path: "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.1 14.518A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.724 2.728a4.5 4.5 0 0 1-.676 8.123v-5.68a.79.79 0 0 0-.4-.62zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.723-2.725a4.5 4.5 0 0 1 6.679 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z",
};

// Slack path
const siSlackCustom: BrandIcon = {
  title: "Slack",
  hex: "4A154B",
  path: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
};

const tools: Array<{ icon: BrandIcon; label: string; color: string }> = [
  { icon: siClaude as BrandIcon,          label: "Claude",       color: "#D97757" },
  { icon: siOpenaiCustom,                 label: "OpenAI",       color: "#10A37F" },
  { icon: siSlackCustom,                  label: "Slack",        color: "#4A154B" },
  { icon: siGooglegemini as BrandIcon,    label: "Gemini",       color: "#8E75B2" },
  { icon: siAnthropic as BrandIcon,       label: "Anthropic",    color: "#D97757" },
  { icon: siWhatsapp as BrandIcon,        label: "WhatsApp",     color: "#25D366" },
  { icon: siFigma as BrandIcon,           label: "Figma",        color: "#F24E1E" },
  { icon: siVercel as BrandIcon,          label: "Vercel",       color: "#888888" },
  { icon: siSupabase as BrandIcon,        label: "Supabase",     color: "#3FCF8E" },
  { icon: siGithub as BrandIcon,          label: "GitHub",       color: "#888888" },
  { icon: siN8n as BrandIcon,             label: "n8n",          color: "#EA4B71" },
  { icon: siMake as BrandIcon,            label: "Make",         color: "#6D00CC" },
  { icon: siNotion as BrandIcon,          label: "Notion",       color: "#888888" },
  { icon: siHono as BrandIcon,            label: "Hono",         color: "#E36002" },
  { icon: siAirtable as BrandIcon,        label: "Airtable",     color: "#18BFFF" },
  { icon: siTelegram as BrandIcon,        label: "Telegram",     color: "#26A5E4" },
  { icon: siZapier as BrandIcon,          label: "Zapier",       color: "#FF4A00" },
  { icon: siWordpress as BrandIcon,       label: "WordPress",    color: "#21759B" },
  { icon: siReact as BrandIcon,           label: "React",        color: "#61DAFB" },
];

const ToolPill = ({ icon, label, color }: { icon: BrandIcon; label: string; color: string }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card/60 hover:border-primary transition-colors flex-shrink-0">
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      className="flex-shrink-0"
      style={{ color }}
    >
      <path d={icon.path} />
    </svg>
    <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
      {label}
    </span>
  </div>
);

const TechStack = () => {
  // Duplicate for seamless loop
  const doubled = [...tools, ...tools];

  return (
    <div className="py-14 border-b border-border overflow-hidden">
      <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-8">
        Works with your existing stack
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-3 w-max">
          {doubled.map((tool, i) => (
            <ToolPill key={i} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
