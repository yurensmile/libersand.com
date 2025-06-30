import type { MetadataRoute } from "next";
import config from "@/config";

const { siteURL } = config;

/**
 * @todo integrate robots parameters to the config file
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots#generate-a-robots-file
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteURL}/sitemap.xml`,
    host: siteURL,
  };
}
