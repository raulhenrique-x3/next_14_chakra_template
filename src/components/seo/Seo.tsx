import { TSeo } from "@/settings/@types/seo";
import React from "react";

/**
 *
 * @param canonical_url - The canonical URL of the page.
 * @param keywords - A comma-separated list of keywords relevant to the page.
 * @param description - A one to two sentence description of the page.
 * @param og_site_name - The name of the website.
 * @param og_image_url - The URL of the image to be used for sharing on social media.
 * @param og_image_width - The width of the image to be used for sharing on social media.
 * @param og_image_height - The height of the image to be used for sharing on social media.
 * @param og_image_type - The type of the image to be used for sharing on social media.
 * @param site_dns_prefetch - The domain name of the website.
 * @param dangerously_set_script_type - The type of the site "person" | "blog" | "social".
 * @param dangerously_set_script_name - The name of the website.
 * @param dangerously_set_script_description - The description of the website.
 * @returns The SEO component.
 */

const Seo: React.FC<TSeo> = ({
  canonical_url,
  keywords,
  description,
  og_site_name,
  og_image_url,
  og_image_width,
  og_image_height,
  og_image_type,
  site_dns_prefetch,
  dangerously_set_script_type,
  dangerously_set_script_name,
  dangerously_set_script_description,
}) => {
  return (
    <>
      <link rel="canonical" href={canonical_url} />
      <meta name="keywords" content={keywords}></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta
        name="google-site-verification"
        content="xRK8Fmlx2OrV0hN-K7k9lpxVBnamDLzWrUUXu0wPNxQ"
      />
      <meta property="og:site_name" content={og_site_name}></meta>
      <meta property="og:image" content={og_image_url}></meta>
      <meta property="og:image:width" content={og_image_width}></meta>
      <meta property="og:image:height" content={og_image_height}></meta>
      <meta property="og:image:type" content={og_image_type}></meta>
      <link rel="dns-prefetch" href={`//${site_dns_prefetch}`}></link>
      <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": dangerously_set_script_type,
            name: dangerously_set_script_name,
            description: dangerously_set_script_description,
            url: canonical_url,
            logo: og_image_url,
          }),
        }}
      ></script>
    </>
  );
};

export default Seo;
