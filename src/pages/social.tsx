import Head from "next/head";
import Image from "next/image";
import type { GetStaticProps } from "next";
import type { ComponentType, SVGProps } from "react";
import { useTranslations } from "next-intl";

import { links } from "@/utils/links";
import { cn } from "@/utils/helpers";

import {
  Facebook,
  Instagram,
  LinkedIn,
  TikTok,
  XformerlyTwitter,
  YouTube,
} from "@/components/SvgIcon/SvgSocialIcons";
import { SvgIconArrow } from "@/components/SvgIcon";
import { Typography } from "@/components/Typography";

type SocialProfile = {
  name: string;
  handle: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName: string;
};

const socialProfiles: SocialProfile[] = [
  {
    name: "YouTube",
    handle: "@dev.manasseh",
    href: links.youtube,
    icon: YouTube,
    iconClassName: "bg-[#fff1f1]",
  },
  {
    name: "TikTok",
    handle: "@manasseh.dev",
    href: links.tiktok,
    icon: TikTok,
    iconClassName: "bg-[#f3f4f8]",
  },
  {
    name: "LinkedIn",
    handle: "@devmanasseh",
    href: links.linkedin,
    icon: LinkedIn,
    iconClassName: "bg-[#eef5ff]",
  },
  {
    name: "X",
    handle: "@manassehdev",
    href: links.x,
    icon: XformerlyTwitter,
    iconClassName: "bg-[#f3f4f8]",
  },
  {
    name: "Instagram",
    handle: "@manasseh.dev",
    href: links.instagram,
    icon: Instagram,
    iconClassName:
      "bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_8%,#fd5949_45%,#d6249f_62%,#285AEB_92%)]",
  },
  {
    name: "Facebook",
    handle: "Manasseh Changachirere",
    href: links.facebook,
    icon: Facebook,
    iconClassName: "bg-[#eef5ff]",
  },
];

const SocialPage = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>
          {t("social.eyebrow")} | Manasseh Changachirere
        </title>
        <meta name="description" content={t("social.description")} />
      </Head>

      <div className="pb-24">
        <section className="mx-auto w-full max-w-2xl px-6 pt-24 sm:px-12">
          <div className="flex flex-col items-center gap-5 text-center">
            <Image
              src="/profile_manasseh.jpg"
              alt={t("social.profileAlt")}
              width={781}
              height={828}
              priority
              className="h-24 w-24 rounded-full border border-gray-100 object-cover sm:h-28 sm:w-28"
            />

            <Typography
              variant="subtitle1"
              display="block"
              className="text-blue-500"
            >
              {t("social.title")}
            </Typography>
          </div>
        </section>

        <section className="mx-auto w-full max-w-2xl px-6 pt-24 sm:px-12">
          <div className="border-t border-gray-100">
            {socialProfiles.map((social) => {
              const Icon = social.icon;

              return (
                <div
                  key={social.name}
                  className="flex items-center gap-4 border-b border-gray-100 py-4"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-full border border-gray-100",
                        social.iconClassName
                      )}
                    >
                      <Icon className="size-6 shrink-0" />
                    </div>

                    <div className="min-w-0">
                      <Typography
                        variant="body1"
                        fontWeight="medium"
                        display="block"
                      >
                        {social.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="muted"
                        display="block"
                        className="truncate"
                      >
                        {social.handle}
                      </Typography>
                    </div>
                  </div>

                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t("social.button")} ${social.name}`}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-gray-100 px-4 py-2 transition-colors duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    <Typography variant="body2" color="inherit">
                      {t("social.button")}
                    </Typography>
                    <SvgIconArrow
                      size="small"
                      className="text-inherit transition-transform duration-300 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default SocialPage;
