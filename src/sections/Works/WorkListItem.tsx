import { Chip } from "@/components/Chip";
import { Typography } from "@/components/Typography";

export type WorkListItemProps = {
  title: string;
  date: string;
  description: string;
  embedType: "youtube" | "linkedin";
  embedUrl: string;
  embedHeight?: number;
};

const WorkListItem = ({
  title,
  date,
  description,
  embedType,
  embedUrl,
  embedHeight,
}: WorkListItemProps) => {
  const isLinkedIn = embedType === "linkedin";

  return (
    <article className="space-y-5 py-8 first:pt-0 last:pb-0">
      <div className={isLinkedIn ? "max-w-full overflow-hidden" : "max-w-full"}>
        <iframe
          src={embedUrl}
          title={`${title} embed`}
          allow={
            isLinkedIn
              ? undefined
              : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          }
          allowFullScreen={!isLinkedIn}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          style={
            isLinkedIn
              ? { height: `${embedHeight ?? 440}px`, maxWidth: "31.5rem" }
              : undefined
          }
          className={
            isLinkedIn
              ? "block w-full border-0"
              : "block aspect-video w-full max-w-[31.5rem] rounded-2xl border-0"
          }
        />
      </div>

      <div className="max-w-[31.5rem] space-y-2">
        <div className="flex items-center justify-between gap-3">
          <Typography
            variant="body1"
            fontWeight="medium"
            className="font-serif italic whitespace-nowrap"
          >
            {title}
          </Typography>
          <Chip variant="outlined">{date}</Chip>
        </div>
        <Typography variant="body1" className="leading-5">
          {description}
        </Typography>
      </div>
    </article>
  );
};

export default WorkListItem;
