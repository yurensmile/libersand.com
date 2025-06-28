import type { Metadata } from "next";
import Image from "next/image";

import ArticleTitle from "@/components/article-title";
import { ViewTransitionsProgressBarLink } from "@/components/progress-bar";

import { getBlogPosts } from "@/lib/api/blog";

import Balancer from "react-wrap-balancer";

import config from "@/config";
import type { BlogPost } from "@/types/blog";

import blogStyles from "@/styles/blog.module.css";

import { cn } from "@1chooo/ui/lib/utils";

export const metadata: Metadata = {
  title: `Blog | ${config.title}`,
  description: config.description,
};

export default function Blog() {
  const allPosts = getBlogPosts();

  return (
    <article>
      <ArticleTitle title="Hugo's Blog" />
      <section className={cn(blogStyles["blog"])}>
        <ul className={cn(blogStyles["posts"])}>
          {allPosts.map((post: BlogPost) => (
            <li className={cn(blogStyles["post"])} key={post.slug}>
              <ViewTransitionsProgressBarLink
                href={`/blog/${post.slug}`}
                rel="noopener noreferrer"
              >
                <figure className={cn(blogStyles["banner-box"])}>
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title || "Blog post image"}
                    width={1200}
                    height={675}
                    priority={false}
                    placeholder="blur"
                    loading="eager"
                    blurDataURL="https://docs.1chooo.com/images/cover-with-1chooo-com.png"
                  />
                </figure>
                <div className={cn(blogStyles["content"])}>
                  <div className={cn(blogStyles["meta"])}>
                    <p className={cn(blogStyles["category"])}>
                      {post.category.toUpperCase()}
                    </p>
                    <h3 className={cn(blogStyles["title"])}>
                      <Balancer>{post.title}</Balancer>
                    </h3>
                  </div>
                  <time
                    className={cn(blogStyles["date"])}
                    dateTime={post.publishedAt}
                  >
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </ViewTransitionsProgressBarLink>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
