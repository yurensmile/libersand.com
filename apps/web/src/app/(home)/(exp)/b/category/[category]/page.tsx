import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import PageTitle from "@/components/page-title";
import { ViewTransitionsProgressBarLink } from "@/components/progress-bar";

import Balancer from "react-wrap-balancer";

import config from "@/config";

import { getBlogPosts } from "@/lib/api/blog";
import type { BlogPost } from "@/types/blog";

import { cn } from "@1chooo/ui/lib/utils";

import styles from "@/styles/blog.module.css";

interface BlogCategoryProps {
  params: Promise<{ category: string }>;
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

function filterPostsByCategory(
  posts: BlogPost[],
  selectedCategory: string,
): BlogPost[] {
  return posts.filter((post) => {
    return post.category.toLowerCase() === selectedCategory.toLowerCase();
  });
}

export async function generateMetadata({
  params,
}: BlogCategoryProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = decodeURIComponent(category);

  return {
    title: `${categoryName} | Blog | ${config.title}`,
    description: `Blog posts about ${categoryName}`,
  };
}

export async function generateStaticParams() {
  try {
    const allPosts = await getBlogPosts();
    const categories = getCategories(allPosts);

    return Object.keys(categories).map((category) => ({
      category: category.toLowerCase(),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
}

export default async function BlogCategory({ params }: BlogCategoryProps) {
  const { category } = await params;
  let allPosts: BlogPost[];

  try {
    allPosts = await getBlogPosts();
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    allPosts = [];
  }

  const categoryParam = decodeURIComponent(category);
  const filteredPosts = filterPostsByCategory(allPosts, categoryParam);

  if (filteredPosts.length === 0) {
    notFound();
  }

  const categories = getCategories(allPosts);
  const blogCategories = Object.keys(categories);

  return (
    <article>
      <PageTitle title="Hugo's Blog" />

      <section className={cn(styles.blog)}>
        <ul className={styles.filters}>
          <li>
            <ViewTransitionsProgressBarLink
              href="/b"
              className={cn(styles.filterButton)}
            >
              All ({allPosts.length})
            </ViewTransitionsProgressBarLink>
          </li>

          {blogCategories.map((category, index) => (
            <li key={index}>
              <ViewTransitionsProgressBarLink
                href={`/b/category/${encodeURIComponent(category.toLowerCase())}`}
                className={cn(styles.filterButton, {
                  [styles.filterButtonActive]:
                    category.toLowerCase() === categoryParam.toLowerCase(),
                })}
              >
                {category} ({categories[category]})
              </ViewTransitionsProgressBarLink>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(styles.blog)}>
        <ul className={cn(styles.cards)}>
          {filteredPosts.map((post: BlogPost) => (
            <li className={cn(styles.card)} key={post.slug}>
              <ViewTransitionsProgressBarLink
                href={`/b/${post.slug}`}
                rel="noopener noreferrer"
              >
                <figure className={cn(styles.bannerBox)}>
                  <Image
                    src={
                      post.thumbnail ||
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
                <div className={cn(styles.content)}>
                  <div className={cn(styles.meta)}>
                    <p className={cn(styles.category)}>
                      {post.category.toUpperCase()}
                    </p>
                    <h3 className={cn(styles.title)}>
                      <Balancer>{post.title}</Balancer>
                    </h3>
                  </div>
                  <time className={cn(styles.date)} dateTime={post.publishedAt}>
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
