import Head from "next/head";
import { useTranslations } from "next-intl";

import getPosts, { type Post } from "@/lib/posts";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";


type HomeProps = {
  posts: Record<string, Post[]>;
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manasseh Changachirere",
  url: "https://manasseh.dev",
  image: "https://manasseh.dev/og-image.webp",
  jobTitle: "Software Engineer & Founder",
  worksFor: [
    {
      "@type": "Organization",
      name: "Nextsoft",
      url: "https://nextsoft.co.zw",
    },
    {
      "@type": "Organization",
      name: "Piro LLC",
      url: "https://piro.llc",
    },
  ],
  sameAs: [
    "https://github.com/manasseh-zw",
    "https://www.linkedin.com/in/devmanasseh",
    "https://x.com/devmanasseh",
  ],
  email: "hey@manasseh.dev",
  knowsAbout: [
    "Software Engineering",
    "Artificial Intelligence",
    "Voice Technology",
    "TypeScript",
    "Next.js",
  ],
};

const Home = ({  }: HomeProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>

      <About />
      <Experience />
      <Commits />
      {/* <Posts posts={posts} /> */}
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Home;
