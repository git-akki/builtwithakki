import puppeteer from "puppeteer";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/screenshots");
mkdirSync(outDir, { recursive: true });

const sites = [
  { slug: "vantalo",        url: "https://vantalo.in" },
  { slug: "hair-mastery",   url: "https://hair-mastery.com" },
  { slug: "wig-shop",       url: "https://hair-mastery.com/wig-shop" },
  { slug: "agency",         url: "https://hair-mastery.com/agency" },
  { slug: "sendpookie",     url: "https://sendpookie.com" },
  { slug: "modom-grooming", url: "https://modomgrooming.com" },
];

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

for (const { slug, url } of sites) {
  console.log(`Capturing ${url}…`);
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });
    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });
    // Wait a beat for fonts/images
    await new Promise(r => setTimeout(r, 1500));
    const outPath = join(outDir, `${slug}.jpg`);
    await page.screenshot({ path: outPath, type: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1440, height: 900 } });
    console.log(`  ✓ saved ${slug}.jpg`);
    await page.close();
  } catch (e) {
    console.error(`  ✗ ${slug}: ${e.message}`);
  }
}

await browser.close();
console.log("Done.");
