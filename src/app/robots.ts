import type { MetadataRoute } from "next"
import { SITE_URL } from "@/site"

// Citation/training bots must never be blocked, or these engines can never cite the site.
const AI_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "PerplexityBot",
  "Google-Extended",
  "OAI-SearchBot",
  "ChatGPT-User",
  "CCBot",
  "Applebot-Extended",
  "cohere-ai",
  "Amazonbot",
  "Meta-ExternalAgent",
  "Bytespider",
  "ImagesiftBot",
  "DataForSeoBot",
  "Diffbot",
  "ExaBot",
  "FacebookBot",
  "GoogleOther",
  "Google-InspectionTool",
  "Mangools",
  "Millie",
  "Neeva",
  "OmgiliBot",
  "ResearchGPT",
  "Twitterbot",
  "Vizbot",
  "Yahoo! Slurp",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // note: deliberately NOT disallowing /_next/ — it serves the CSS/JS that
      // Googlebot needs to render the page, and blocking it hurts indexing.
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
