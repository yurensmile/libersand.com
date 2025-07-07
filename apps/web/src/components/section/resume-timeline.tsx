import IconBox from "@/components/icon-box";
import ResumeCard from "@/components/resume/resume-card";

import type { ResumeCardType } from "@/types/resume";

import { cn } from "@1chooo/ui/lib/utils";

interface ResumeTimeLineProps {
  icon: string;
  title: string;
  resumeCards: ResumeCardType[];
}

import styles from "@/styles/resume/timeline.module.css";

/**
 * @todo update styles name to match lowercase pascal case convention and styles.styleName
 */
function ResumeTimeLine({ icon, title, resumeCards }: ResumeTimeLineProps) {
  return (
    <div className={cn(styles["timelines"])}>
      <div className="flex items-center gap-4 mb-6">
        <IconBox iconName={icon} />
        <h3 className="text-white-2 text-2xl font-bold">{title}</h3>
      </div>

      <ol className={cn(styles["timeline"])}>
        {resumeCards.map((resumeCard: ResumeCardType, index: number) => (
          <li
            className={cn(styles["timeline-cards"])}
            key={`${resumeCard.institution}-${index}`}
          >
            <ResumeCard resumeCard={resumeCard} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ResumeTimeLine;
export { ResumeTimeLine };
