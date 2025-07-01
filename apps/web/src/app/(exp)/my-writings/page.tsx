import dynamic from "next/dynamic";

import PageTitle from "@/components/page-title";
import { MyWritings } from "@/components/about/my-writings";
import { getBlogPosts } from "@/lib/api/blog";
import { LatestArticles } from "@/components/about/latest-articles";

const AboutSection = dynamic(() => import("@/components/section/about"));
const AnimatedSection = dynamic(() => import("@/components/animated-section"));

async function About() {
  const allPosts = getBlogPosts();

  return (
    <article>
      <AnimatedSection id="about">
        <PageTitle title="My Writings" />
      </AnimatedSection>

      <AboutSection id="my-writings" title="My Writings">
        <MyWritings count={3} posts={allPosts} />
      </AboutSection>

      {allPosts.length > 0 && (
        <AboutSection id="latest-articles" title="Latest Articles">
          <LatestArticles posts={allPosts} />
        </AboutSection>
      )}
    </article>
  );
}

export default About;
