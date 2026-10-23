// Runs at the END of the Cloudflare deploy command (npm run send-latest),
// after `wrangler deploy` and the two `wrangler secret put` steps.
// Asks the live Worker to email the newest blog post to subscribers.
// The Worker dedupes by post slug, so deploys that don't publish a new
// post send nothing. This script must never fail the build: every path
// exits 0 and problems are only logged.
const secret = process.env.NEWSLETTER_SECRET;

if (!secret) {
  console.log("[send-latest] NEWSLETTER_SECRET not set in build env — skipping.");
  process.exit(0);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Give the just-finished secret-put deployments a moment to settle.
await sleep(10000);

try {
  const res = await fetch("https://rakibwebstudio.com/api/send-latest", {
    method: "POST",
    headers: {
      "x-newsletter-secret": secret,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  const text = await res.text();
  console.log(`[send-latest] HTTP ${res.status} — ${text.slice(0, 300)}`);
} catch (e) {
  console.log(`[send-latest] request failed (ignored): ${e.message}`);
}
process.exit(0);
