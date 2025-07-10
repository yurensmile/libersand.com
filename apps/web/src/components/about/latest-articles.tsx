"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { ViewTransitionsProgressBarLink } from "@/components/progress-bar";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import StaggeredAnimationSection from "@/components/staggered-animation-section";
import { BlurFade } from "@/components/magicui/blur-fade";
import { getIcon, ICON_NAMES } from "@/components/icons";

import { BlogPost } from "@/types/blog";

import { cn } from "@1chooo/ui/lib/utils";

import styles from "@/styles/about/latest-articles.module.css";

interface LatestArticlesProps {
  posts: BlogPost[];
}

function LatestArticles({ posts }: LatestArticlesProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 580);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setVisiblePosts(isMobile ? posts.slice(0, 2) : posts.slice(0, 3));
    }
  }, [isMounted, isMobile, posts]);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  const Eye = getIcon(ICON_NAMES.EYE_LU);
  const ArrowRight = getIcon(ICON_NAMES.ARROW_RIGHT);

  return (
    <>
      <StaggeredAnimationSection>
        <ul className={cn(styles["latest-posts"])}>
          {visiblePosts.map((post) => (
            <li
              key={post.slug}
              className={cn(styles["latest-post"], "group active")}
            >
              <ViewTransitionsProgressBarLink
                href={`/blog/${post.slug}`}
                rel="noopener noreferrer"
              >
                <figure className={cn(styles["latest-post-img"])}>
                  <div
                    className={cn(
                      styles["latest-post-icon-box"],
                      "absolute text-orange-yellow-crayola text-xl bg-jet p-[18px] rounded-xl top-1/2 left-1/2 transition-all duration-250 ease-linear",
                    )}
                  >
                    <Eye />
                  </div>
                  <Image
                    src={post.thumbnail}
                    alt={post.excerpt || "Blog post image"}
                    width={1200}
                    height={675}
                    priority
                    quality={50}
                    placeholder="empty"
                    loading="eager"
                  />
                </figure>
                <h3 className="ml-[10px] text-white-2 text-base font-normal capitalize leading-[1.3] group-hover:text-orange-yellow-crayola group-hover:font-bold">
                  {post.title}
                </h3>
              </ViewTransitionsProgressBarLink>
            </li>
          ))}
        </ul>
      </StaggeredAnimationSection>

      <BlurFade inView delay={0.1} direction="up">
        <div className="z-10 flex items-center justify-center py-4">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <ViewTransitionsProgressBarLink href="/blog">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ See More Posts</span>
                <ArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </ViewTransitionsProgressBarLink>
          </div>
        </div>
      </BlurFade>
    </>
  );
}

export { LatestArticles };
export default LatestArticles;
