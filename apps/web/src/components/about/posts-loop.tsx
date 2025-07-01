"use client";

import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";

import "@/styles/about/coding-stats.css";

interface BlogPostsProps {
  count: number;
  posts: BlogPost[];
}

function parseDate(dateStr: string): Date {
  const [month, day, year] = dateStr.split(" ");
  return new Date(`${month} ${parseInt(day)}, ${year}`);
}

export default function PostsLoop({ count, posts }: BlogPostsProps) {
  const router = useRouter();

  const sortedPosts = posts
    .map((post: BlogPost) => ({
      ...post,
      date: parseDate(post.publishedAt),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  const postsLoop = sortedPosts.slice(0, count).map((post) => {
    return {
      ...post,
      link: `/blog/${post.slug}`,
    };
  });

  const handlePostClick = (link: string) => {
    router.push(link);
  };

  return (
    <>
      {postsLoop.map((post, index) => (
        <button
          key={index}
          className="coding-item relative rounded-2xl shadow-shadow-2 bg-gradient-onyx before:absolute before:content-[''] before:rounded-2xl group cursor-pointer"
          onClick={() => handlePostClick(post.link)}
        >
          <div className="shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-2 overflow-hidden rounded-xl p-2 relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
            <h2 className="flex items-center mb-3">
              <a
                href={post.link}
                className="text-base font-bold leading-tight tracking-tight sm:text-lg dark:text-neutral-100"
                onClick={(e) => {
                  e.preventDefault();
                  handlePostClick(post.link);
                }}
              >
                {post.title}
              </a>
              <svg
                className="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform text-light-gray"
                viewBox="0 0 13 15"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    id="svg"
                    transform="translate(0.666667, 2.333333)"
                    stroke="currentColor"
                    strokeWidth="2.4"
                  >
                    <g>
                      <polyline
                        className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                        points="5.33333333 0 10.8333333 5.5 5.33333333 11"
                      />
                      <line
                        className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-0"
                        x1="10.8333333"
                        y1="5.5"
                        x2="0.833333333"
                        y2="5.16666667"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              <span>{post.excerpt}</span>
            </p>
            <div className="mt-2.5 text-xs font-medium text-neutral-800 dark:text-neutral-300">
              Posted on {post.publishedAt}
            </div>
          </div>
        </button>
      ))}
    </>
  );
}
