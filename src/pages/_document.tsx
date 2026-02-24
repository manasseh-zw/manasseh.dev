import { Html, Head, Main, NextScript } from "next/document";

import copy from "@/copy/en-EN.json";

const Document = () => {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="description" content={copy.metadata.description} />
        <meta name="author" content="Manasseh Changachirere" />
        <link rel="canonical" href="https://manasseh.dev/" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Manasseh Changachirere" />
        <meta property="og:title" content={copy.metadata.title} />
        <meta property="og:description" content={copy.metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://manasseh.dev/" />
        <meta property="og:image" content="https://manasseh.dev/og-image.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Manasseh Changachirere — Software Engineer & Founder" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@devmanasseh" />
        <meta name="twitter:creator" content="@devmanasseh" />
        <meta name="twitter:title" content={copy.metadata.title} />
        <meta name="twitter:description" content={copy.metadata.description} />
        <meta name="twitter:image" content="https://manasseh.dev/og-image.webp" />
        <meta name="twitter:image:alt" content="Manasseh Changachirere — Software Engineer & Founder" />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
      </Head>

      <body className="antialiased bg-blue-500 text-gray-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
