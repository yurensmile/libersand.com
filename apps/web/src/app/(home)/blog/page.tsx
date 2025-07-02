import type { Metadata } from "next";
import Image from "next/image";

import PageTitle from "@/components/page-title";
import { ViewTransitionsProgressBarLink } from "@/components/progress-bar";

import Balancer from "react-wrap-balancer";

import config from "@/config";

import { getBlogPosts } from "@/lib/api/blog";
import type { BlogPost } from "@/types/blog";

import { cn } from "@1chooo/ui/lib/utils";

import classes from "@/styles/blog.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog | ${config.title}`,
    description: config.description,
  };
}

function getCategories(posts: BlogPost[]): Record<string, number> {
  const categories: Record<string, number> = Object.create(null);

  for (const post of posts) {
    const category = post.category;

    categories[category] ??= 0;
    categories[category] += 1;
  }

  return categories;
}

export default async function Blog() {
  let allPosts: BlogPost[];

  try {
    allPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    allPosts = [];
  }

  const categories = getCategories(allPosts);
  const blogCategories = Object.keys(categories);

  return (
    <article>
      <PageTitle title="Hugo's Blog" />

      <section className={cn(classes.blog)}>
        <ul className={classes.filters}>
          <li>
            <ViewTransitionsProgressBarLink
              href="/blog"
              className={cn(classes.filterButton, classes.filterButtonActive)}
            >
              All ({allPosts.length})
            </ViewTransitionsProgressBarLink>
          </li>

          {blogCategories.map((category, index) => (
            <li key={index}>
              <ViewTransitionsProgressBarLink
                href={`/blog/category/${encodeURIComponent(category.toLowerCase())}`}
                className={cn(classes.filterButton)}
              >
                {category} ({categories[category]})
              </ViewTransitionsProgressBarLink>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(classes.blog)}>
        <ul className={cn(classes.cards)}>
          {allPosts.map((post: BlogPost) => (
            <li className={cn(classes.card)} key={post.slug}>
              <ViewTransitionsProgressBarLink
                href={`/blog/${post.slug}`}
                rel="noopener noreferrer"
              >
                <figure className={cn(classes.bannerBox)}>
                  <Image
                    src={
                      post.coverImage ||
                      "https://docs.1chooo.com/images/cover-with-1chooo-com.png"
                    }
                    alt={post.title || "Blog post image"}
                    width={960}
                    height={540}
                    priority={false}
                    placeholder="blur"
                    loading="eager"
                    blurDataURL="https://docs.1chooo.com/images/cover-with-1chooo-com.png"
                  />
                </figure>
                <div className={cn(classes.content)}>
                  <div className={cn(classes.meta)}>
                    <p className={cn(classes.category)}>
                      {post.category.toUpperCase()}
                    </p>
                    <h3 className={cn(classes.title)}>
                      <Balancer>{post.title}</Balancer>
                    </h3>
                  </div>
                  <time
                    className={cn(classes.date)}
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
