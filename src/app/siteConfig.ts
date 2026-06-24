// Single source of truth for the site's public URL.
//
// After deploying to Vercel, set an environment variable in the project settings:
//   NEXT_PUBLIC_SITE_URL = https://your-real-project.vercel.app
// (or your custom domain). No code change needed — this falls back to the
// default below if the variable is not set.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://vaxo-janiashvili.vercel.app"
).replace(/\/$/, "");

export const OG_IMAGE = "/vaxo-janiashvili.jpg";
