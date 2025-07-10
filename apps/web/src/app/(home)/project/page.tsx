import Image from "next/image";
import type { Metadata } from "next";

import PageTitle from "@/components/page-title";
import { ViewTransitionsProgressBarLink } from "@/components/progress-bar";

import { getProjects } from "@/lib/api/project";
import { cn } from "@1chooo/ui/lib/utils";

import config from "@/config";
import { LuEye, LuExternalLink } from "react-icons/lu";

import styles from "@/styles/project.module.css";
import { ProjectPost } from "@/types/project";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Project | ${config.title}`,
    description: config.description,
  };
}

function getCategories(posts: ProjectPost[]): Record<string, number> {
  const categories: Record<string, number> = Object.create(null);

  for (const post of posts) {
    const category = post.category;

    categories[category] ??= 0;
    categories[category] += 1;
  }

  return categories;
}

export default async function Project() {
  let projects: ProjectPost[];

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Failed to load project posts:", error);
    projects = [];
  }

  const categories = getCategories(projects);
  const projectCategories = Object.keys(categories);

  return (
    <article>
      <PageTitle title="Hugo's Project" />

      <section className={cn(styles.project)}>
        <ul className={styles.filters}>
          <li>
            <ViewTransitionsProgressBarLink
              href="/project"
              className={cn(styles.filterButton, styles.filterButtonActive)}
            >
              All ({projects.length})
            </ViewTransitionsProgressBarLink>
          </li>

          {projectCategories.map((category, index) => (
            <li key={`${index}-${category}`}>
              <ViewTransitionsProgressBarLink
                href={`/project/category/${encodeURIComponent(category.toLowerCase())}`}
                className={cn(styles.filterButton)}
              >
                {category} ({categories[category]})
              </ViewTransitionsProgressBarLink>
            </li>
          ))}
        </ul>
      </section>

      <section className={cn(styles.project)}>
        <ul className={cn(styles.cards)}>
          {projects.map((post) => (
            <li
              key={post.slug}
              className={cn(styles.card, styles.cardActive)}
              data-category={post.category}
            >
              {post.url ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <figure className={cn(styles.bannerBox)}>
                    <div className={cn(styles.iconBox)}>
                      <LuExternalLink />
                    </div>
                    <Image
                      src={post.thumbnail}
                      alt={post.title || "Portfolio post image"}
                      width={480}
                      height={270}
                      priority
                      placeholder="blur"
                      loading="eager"
                      quality={50}
                      blurDataURL={post.thumbnail}
                    />
                  </figure>
                  <h3 className={cn(styles.title)}>{post.title}</h3>
                  <p className={cn(styles.category)}>{post.category}</p>
                  {post.description && (
                    <p className={cn(styles.description)}>{post.description}</p>
                  )}
                </a>
              ) : (
                <ViewTransitionsProgressBarLink
                  href={`/project/${post.slug}`}
                  rel="noopener noreferrer"
                >
                  <figure className={cn(styles.bannerBox)}>
                    <div className={cn(styles.iconBox)}>
                      <LuEye />
                    </div>
                    <Image
                      src={post.thumbnail}
                      alt={post.title || "Portfolio post image"}
                      width={480}
                      height={270}
                      priority
                      placeholder="blur"
                      loading="eager"
                      quality={50}
                      blurDataURL={post.thumbnail}
                    />
                  </figure>
                  <h3 className={cn(styles.title)}>{post.title}</h3>
                  <p className={cn(styles.category)}>{post.category}</p>
                  {post.description && (
                    <p className={cn(styles.description)}>{post.description}</p>
                  )}
                </ViewTransitionsProgressBarLink>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
