/**
 * First-touch attribution.
 *
 * Every reel, carousel and LinkedIn post links here with UTM parameters. We
 * record the first set we ever see for a visitor and keep it, so a lead that
 * arrives three days later is still credited to the piece of content that
 * actually brought them in.
 *
 * Stored in localStorage rather than sessionStorage because the gap between
 * "watched the reel" and "filled the form" is usually days, not minutes.
 */

const STORAGE_KEY = "bwa_attr_v1";

export interface Attribution {
  /** utm_source — e.g. "instagram", "linkedin" */
  source?: string;
  /** utm_medium — e.g. "reel", "carousel", "bio" */
  medium?: string;
  /** utm_campaign — the piece, e.g. "dev-ep-01" */
  campaign?: string;
  /** utm_content — variant within a piece, e.g. "hook-a" */
  content?: string;
  /** Referring host when no UTMs were present */
  referrer?: string;
  /** Path the visitor first landed on */
  landing?: string;
  /** ISO date of first touch */
  firstSeen?: string;
}

const UTM_KEYS: Array<[keyof Attribution, string]> = [
  ["source", "utm_source"],
  ["medium", "utm_medium"],
  ["campaign", "utm_campaign"],
  ["content", "utm_content"],
];

/** localStorage throws in Safari private mode and when storage is full. */
function safeRead(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

function safeWrite(value: Attribution): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* Attribution is nice to have, never worth breaking the page for. */
  }
}

/**
 * Record first touch. Safe to call on every load — an existing record is never
 * overwritten, so the first piece of content that brought someone here keeps
 * the credit.
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const existing = safeRead();
  if (existing) return existing;

  const params = new URLSearchParams(window.location.search);
  const captured: Attribution = {
    landing: window.location.pathname,
    firstSeen: new Date().toISOString(),
  };

  for (const [key, param] of UTM_KEYS) {
    const value = params.get(param);
    if (value) captured[key] = value.slice(0, 64);
  }

  // Only bother with the referrer when there are no UTMs to be had.
  if (!captured.source && document.referrer) {
    try {
      const host = new URL(document.referrer).hostname;
      if (host && host !== window.location.hostname) captured.referrer = host;
    } catch {
      /* Malformed referrer, ignore. */
    }
  }

  safeWrite(captured);
  return captured;
}

export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return safeRead() ?? {};
}

/**
 * Compact, human-readable string for the `source` column on the leads table.
 * Readable at a glance in Supabase without joining anything:
 *
 *   "instagram/reel · dev-ep-01 · /ai-automation · portfolio-form"
 */
export function attributionSource(formName: string): string {
  const attr = getAttribution();
  const parts: string[] = [];

  if (attr.source) parts.push(attr.medium ? `${attr.source}/${attr.medium}` : attr.source);
  else if (attr.referrer) parts.push(`ref:${attr.referrer}`);
  else parts.push("direct");

  if (attr.campaign) parts.push(attr.campaign);
  if (attr.content) parts.push(attr.content);
  if (attr.landing && attr.landing !== "/") parts.push(attr.landing);
  parts.push(formName);

  // The leads table column is text, but keep it sane for scanning.
  return parts.join(" · ").slice(0, 200);
}

/**
 * Append attribution to an outbound booking URL so a booking can be traced
 * back to the reel, the same way a form submission is.
 */
export function withAttribution(url: string): string {
  const attr = getAttribution();

  try {
    const target = new URL(url);
    if (attr.source) target.searchParams.set("utm_source", attr.source);
    if (attr.medium) target.searchParams.set("utm_medium", attr.medium);
    if (attr.campaign) target.searchParams.set("utm_campaign", attr.campaign);
    if (attr.content) target.searchParams.set("utm_content", attr.content);
    target.searchParams.set("metadata[source]", attributionSource("book-call"));
    return target.toString();
  } catch {
    return url;
  }
}
