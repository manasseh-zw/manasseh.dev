import type { GetServerSideProps } from "next";

const SITE_URL = "https://manasseh.dev";

const generateSitemap = (urls: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${url === SITE_URL + "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

// This component is never rendered — the page returns raw XML via getServerSideProps
const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const urls = [
    `${SITE_URL}/`,
    // When writings are re-enabled, add post slugs here:
    // ...getPostSlugs().map((slug) => `${SITE_URL}/_writings/${slug}`),
  ];

  const sitemap = generateSitemap(urls);

  res.setHeader("Content-Type", "application/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
