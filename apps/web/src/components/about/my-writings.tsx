import React from "react";
import Link from "next/link";
import { Newspaper, Zap } from "lucide-react";

import PostsLoop from "@/components/about/posts-loop";
import { BlurFade } from "@/components/magicui/blur-fade";
import GradientCard from "@/components/gradient-card";
import { TechBadges } from "@/lib/tech-badge-helper";

import { BlogPost } from "@/types/blog";

interface MyWritingsProps {
  count?: number;
  posts?: BlogPost[];
}

function MyWritings({ count, posts }: MyWritingsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto my-7 xl:px-0">
      <div className="flex flex-col items-start justify-start md:flex-row md:space-x-7">
        <PostsLoop count={count} posts={posts} />

        <div className="w-full mt-10 md:w-1/3 md:mt-0">
          <BlurFade inView delay={0.4} direction="up">
            <GradientCard>
              <form
                method="get"
                action="https://1chooo.com/rss.xml"
                className="flex flex-col gap-2 overflow-hidden rounded-xl p-2"
              >
                <div className="relative flex items-center space-x-2">
                  <Newspaper className="flex-none text-white-1" size={18} />
                  <h2 className="flex text-sm font-semibold text-white-1">
                    Subscribe my blog
                  </h2>
                </div>
                <p className="mt-2 text-sm text-light-gray-70">
                  Get my blog updates via{" "}
                  <Link
                    className="font-bold"
                    href={`https://feedly.com/i/subscription/feed%2F${encodeURIComponent("https://1chooo.com/rss.xml")}`}
                  >
                    Feedly
                  </Link>
                  ,{" "}
                  <Link
                    className="font-bold"
                    href={`https://www.inoreader.com/feed/${encodeURIComponent("https://1chooo.com/rss.xml")}`}
                  >
                    Inoreader
                  </Link>{" "}
                  or{" "}
                  <Link
                    className="font-bold"
                    href={"https://1chooo.com/rss.xml"}
                  >
                    RSS
                  </Link>
                  .
                </p>
                <div className="flex flex-col items-center w-full mt-4 space-y-3">
                  <input
                    type="url"
                    name="RSS Feed URL"
                    placeholder="Enter your RSS feed URL"
                    required
                    defaultValue={"https://1chooo.com/rss.xml"}
                    className="form-input"
                    aria-label="RSS Feed URL"
                  />
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 mt-5 text-xs font-semibold text-center duration-300 ease-out border rounded bg-neutral-100 hover:border-neutral-300 text-neutral-800 hover:bg-neutral-950 hover:text-neutral-100"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </GradientCard>
          </BlurFade>
          <BlurFade inView delay={0.8} direction="up">
            <GradientCard className="mt-4">
              <div className="flex flex-wrap gap-2 shadow-feature-card dark:shadow-feature-card-dark rounded-xl">
                <div className="relative flex items-center space-x-2">
                  <Zap className="flex-none text-white-1" size={18} />
                  <h2 className="flex text-sm font-semibold text-white-1">
                    Technology Stack
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 shadow-feature-card dark:shadow-feature-card-dark rounded-xl mt-4">
                  {TechBadges.TypeScript}
                  {TechBadges.NextJS}
                  {TechBadges.react}
                  {TechBadges.cpp}
                  {TechBadges.python}
                  {TechBadges.linux}
                  {TechBadges.java}
                  {TechBadges.django}
                  {TechBadges.vscode}
                  {TechBadges.github}
                  {TechBadges.docker}
                  {TechBadges.javascript}
                  {TechBadges.tailwindcss}
                  {TechBadges.go}
                  {TechBadges.kubernetes}
                  {TechBadges.aws}
                </div>
              </div>
            </GradientCard>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

export { MyWritings };
export default MyWritings;
