import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

import PageTitle from "@/components/page-title";
import { LatestArticles } from "@/components/about/latest-articles";

import { getBlogPosts } from "@/lib/api/blog";
import config from "@/config";
import { BlogPost } from "@/types/blog";

const AboutSection = dynamic(() => import("@/components/section/about"));

const { title } = config;

export const metadata: Metadata = {
  title: `Not Found | ${title}`,
};

interface NotFoundProps {
  posts: BlogPost[];
}

function NotFound({ posts }: NotFoundProps) {
  return (
    <article>
      <PageTitle title="Page Not Found!" />

      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl mx-auto text-center">
          <div className="relative w-64 h-64 mx-auto mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-bold text-light-gray">404</span>
            </div>
          </div>
          <h2 className="text-xl text-gray-500 dark:text-gray-400">
            Oops! The page you&apos;re looking for seems to have wandered off.
          </h2>
        </div>

        <AboutSection id="read-my-writings" title="Read My Writings">
          <LatestArticles posts={posts} />
        </AboutSection>

        <div className="mt-12 pt-6 border-t border-gray-800 text-sm text-gray-500">
          <p>
            Still having trouble?{" "}
            <Link
              href="mailto:hugo@1chooo.com"
              className="text-primary underline underline-offset-2"
            >
              Contact me
            </Link>{" "}
            and I&apos;ll help you find what you&apos;re looking for.
          </p>
        </div>
      </div>
    </article>
  );
}

export default async function NotFoundPage() {
  const allPosts = await getBlogPosts();

  return <NotFound posts={allPosts} />;
}