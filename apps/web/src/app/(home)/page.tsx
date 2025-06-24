import AnimatedSection from "@/components/animated-section";
import ArticleTitle from "@/components/article-title";
import CodingStats from "@/components/about/coding-stats";
import { LatestArticles } from "@/components/about/latest-articles";
import TalkToHugo from "@/components/about/talk-to-hugo";

import markdownToHtml from "@/lib/markdownToHtml";
import { getBlogPosts } from "@/lib/api/blog";

import { about, web3formsAccessKey } from "@/config";

import { cn } from "@1chooo/ui/lib/utils";

import "@/styles/markdown-styles.css";

const {
  firstName,
  lastName,
  preferredName,
  introduction,
  techStacks,
  githubUsername,
} = about;

async function About() {
  const allPosts = getBlogPosts();

  let title = preferredName
    ? `About ${preferredName} 👨🏻‍💻`
    : `About ${firstName} ${lastName} 👨🏻‍💻`;

  const processedIntroduction = introduction
    ? await markdownToHtml(introduction)
    : null;

  return (
    <article>
      <AnimatedSection id="about">
        <ArticleTitle title={title} />
      </AnimatedSection>
      <AnimatedSection>
        {processedIntroduction && (
          <div
            className={cn("markdown")}
            dangerouslySetInnerHTML={{ __html: processedIntroduction }}
          />
        )}
      </AnimatedSection>
      {allPosts.length > 0 && <LatestArticles posts={allPosts} />}
      <CodingStats techStacks={techStacks} githubUsername={githubUsername} />
      <TalkToHugo web3formsAccessKey={web3formsAccessKey} />
    </article>
  );
}

export default About;
