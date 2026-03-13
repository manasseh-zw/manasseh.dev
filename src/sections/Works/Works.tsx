import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import WorkListItem, { type WorkListItemProps } from "./WorkListItem";

const Works = () => {
  const t = useTranslations();
  const projects = t.raw("works.projects") as WorkListItemProps[];

  return (
    <Section id="works">
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-12 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">{t("works.title")}</Typography>
        </div>

        <div className="col-span-1 divide-y divide-gray-100 sm:col-span-9">
          {projects.map((project) => (
            <WorkListItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Works;
