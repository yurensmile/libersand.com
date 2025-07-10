import dynamic from "next/dynamic";

import PageTitle from "@/components/page-title";

import markdownToHtml from "@/lib/markdown-to-html";
import { getBlogPostsWithReadingTime } from "@/lib/api/blog";

import { MyWritings } from "@/components/about/my-writings";
import GitHubCalendar from "@1chooo/github-calendar";
import { ThemeInput } from "@1chooo/activity-calendar/types";
import { BlurFade } from "@/components/magicui/blur-fade";

import config from "@/config";

import { cn } from "@1chooo/ui/lib/utils";

import "@/styles/markdown-styles.css";

const AboutSection = dynamic(() => import("@/components/section/about"));
const TalkToHugo = dynamic(() => import("@/components/about/talk-to-hugo"));
const AnimatedSection = dynamic(() => import("@/components/animated-section"));

const { about, web3formsAccessKey } = config;
const { firstName, lastName, preferredName, introduction, githubUsername } =
  about;

async function About() {
  const allPosts = await getBlogPostsWithReadingTime();
  const yellowTheme: ThemeInput = {
    light: ["#EBEBEB", "#FFDA6B"],
    dark: ["#383838", "#FFDA6B"],
  };

  let title = preferredName
    ? `关于 ${preferredName} 👨🏻‍💻`
    : `关于 ${firstName} ${lastName} 👨🏻‍💻`;

  const processedIntroduction = introduction
    ? await markdownToHtml(introduction)
    : null;

  return (
    <article>
      <AnimatedSection id="about">
        <PageTitle title={title} />
      </AnimatedSection>
      <AnimatedSection>
        {processedIntroduction && (
          <div
            className={cn("markdown")}
            dangerouslySetInnerHTML={{ __html: processedIntroduction.html }}
          />
        )}
      </AnimatedSection>

      <AboutSection id="github-calendar">
        <BlurFade inView delay={0.1} direction="up">
          <section id="github-calendar" className="text-light-gray">
            {githubUsername && (
              <GitHubCalendar
                username={githubUsername}
                blockSize={12}
                blockMargin={4}
                colorScheme="dark"
                blockRadius={2}
                fontSize={14}
                style={{ fontWeight: "bold" }}
                theme={yellowTheme}
              />
            )}
          </section>
        </BlurFade>
      </AboutSection>

      <AboutSection id="my-writings" title="黄沙的博客">
        <MyWritings count={3} posts={allPosts} />
      </AboutSection>

      <AboutSection id="talk-to-hugo" title="联系黄沙">
        <TalkToHugo web3formsAccessKey={web3formsAccessKey} />
      </AboutSection>
    </article>
  );
}

export default About;
