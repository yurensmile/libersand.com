import React, { Suspense } from "react";

import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Balancer from "react-wrap-balancer";
import { ViewTransitionsProgressBarLink } from "@/components/progress-bar";
import { ViewCounter } from "@/app/(home)/blog/view-counter";
import { FadeLeft, FadeUp, FadeIn } from "@/components/animations";
import PageTitle from "@/components/page-title";
import Comments from "@/components/comments";
import { getBlogPostBySlugWithProcessedContent } from "@/lib/api/blog";
import { getBlogPosts, getBlogPostBySlug } from "@/lib/api/blog";

import config from "@/config";

import { cn } from "@1chooo/ui/lib/utils";

import "@/styles/markdown-styles.css";

const { giscusConfig } = config;

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getBlogPostBySlugWithProcessedContent(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <article>
        <FadeUp delay={0.3 * 2}>
          <ViewTransitionsProgressBarLink
            href="/blog"
            rel="noopener noreferrer"
          >
            <PageTitle
              className="text-light-gray hover:text-light-gray-70"
              title="← Back to Blog"
            />
          </ViewTransitionsProgressBarLink>
        </FadeUp>

        <FadeLeft delay={0.3 * 1}>
          <h1 className="font-semibold text-4xl text-white-2 max-w-[650px]">
            <Balancer>{post.title}</Balancer>
          </h1>
        </FadeLeft>

        <FadeUp delay={0.3 * 2}>
          <div className="flex items-center justify-between mt-4 text-lg w-full text-light-gray-70">
            {post.excerpt}
          </div>
        </FadeUp>

        <FadeUp delay={0.3 * 2}>
          <div className="hidden md:flex items-center justify-between mt-4 text-sm w-full text-light-gray-70">
            <div className="flex items-center space-x-2">
              <span>{post.publishedAt}</span>
              <span
                className="w-1 h-1 bg-current rounded-full"
                aria-hidden="true"
              ></span>
              <span>{post.category.toUpperCase()}</span>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              {post.readingTime && (
                <>
                  <span>{post.readingTime}</span>
                  <span
                    className="w-1 h-1 bg-current rounded-full"
                    aria-hidden="true"
                  ></span>
                </>
              )}
              <Suspense fallback={<div>Loading views...</div>}>
                <ViewCounter slug={post.slug} trackView />
              </Suspense>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-between mt-4 text-sm w-full text-light-gray-70">
            <div className="flex items-center space-x-2">
              <span>{post.publishedAt}</span>
              <span
                className="w-1 h-1 bg-current rounded-full"
                aria-hidden="true"
              ></span>
              <span>{post.category.toUpperCase()}</span>
              <span
                className="w-1 h-1 bg-current rounded-full"
                aria-hidden="true"
              ></span>
              {post.readingTime && (
                <>
                  <span>{post.readingTime}</span>
                  <span
                    className="w-1 h-1 bg-current rounded-full"
                    aria-hidden="true"
                  ></span>
                </>
              )}
              <Suspense fallback={<div>Loading views...</div>}>
                <ViewCounter slug={post.slug} trackView />
              </Suspense>
            </div>
          </div>
        </FadeUp>

        <div className="separator" />

        <FadeIn delay={0.3 * 3}>
          <div className="flex justify-center">
            <div
              className={cn(
                "markdown text-light-gray w-[90%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[80%]",
              )}
              dangerouslySetInnerHTML={{ __html: post.processedContent || "" }}
            />
          </div>
        </FadeIn>
      </article>

      <article style={{ marginTop: "1rem" }}>
        <PageTitle title="Comments" />
        <Comments giscusConfig={giscusConfig} />
      </article>
    </div>
  );
}

export async function generateMetadata(
  props: Params,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    authors: [
      {
        name: post.author.name,
        url: post.author.url || "https://1chooo.com",
      },
    ],
    description: post.excerpt || config.description,
    keywords: post.tags || config.keywords,
    openGraph: {
      title,
      images: [post.thumbnail, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
