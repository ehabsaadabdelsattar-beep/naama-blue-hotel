import process from "node:process";

import { SITE } from "@/config/site";

export function getServerConfig() {
  const vercelHost = process.env.VERCEL_URL;
  const siteUrl =
    process.env.SITE_URL ?? (vercelHost ? `https://${vercelHost}` : SITE.url);

  return {
    nodeEnv: process.env.NODE_ENV,
    siteUrl,
  };
}
