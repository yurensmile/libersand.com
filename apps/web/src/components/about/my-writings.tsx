import PostsLoop from "@/components/about/posts-loop";
import { BlogPost } from "@/types/blog";
import { Newspaper } from "lucide-react";

import "@/styles/about/coding-stats.css";

interface MyWritingsProps {
  count?: number;
  posts?: BlogPost[];
}

export function MyWritings({ count, posts }: MyWritingsProps) {
  return (
    <>
      <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
        Along with coding I also like to write about life and technology. Here are
        some of my recent posts.
      </p>

      <div className="w-full max-w-4xl mx-auto my-7 xl:px-0">
        <div
          className="flex flex-col items-start justify-start md:flex-row md:space-x-7"
        >
          <div className="w-full md:w-2/3 space-y-7">
            <PostsLoop count={count} posts={posts} />

            <div className="flex items-center justify-center w-full py-5">
              <a
                href="/blog"
                className="inline-flex w-auto px-4 py-2 mt-5 text-xs font-semibold duration-300 ease-out border rounded-full bg-neutral-900 dark:bg-white dark:text-neutral-900 text-neutral-100 hover:border-neutral-700 border-neutral-900 dark:hover:border-neutral-300 hover:bg-white dark:hover:bg-black dark:hover:text-white hover:text-neutral-900"
              >
                {"View All My Writing"}
              </a>
            </div>
          </div>

          <div className="w-full mt-10 md:w-1/3 md:mt-0">
            <div className="coding-item relative rounded-2xl shadow-shadow-2 bg-gradient-onyx before:absolute before:content-[''] before:rounded-2xl">
              <form
                method="get"
                action="https://1chooo.com/rss.xml"
                className="shadow-feature-card dark:shadow-feature-card-dark flex flex-col gap-2 overflow-hidden rounded-xl p-2"
              >
                <div className="relative flex items-center space-x-2">
                  <Newspaper className="flex-none w-6 h-6 text-neutral-700 dark:text-neutral-200" />
                  <h2
                    className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100"
                  >
                    Subscribe my blog
                  </h2>
                </div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Get my blog updates via <a
                    className="font-bold"
                    href={`https://feedly.com/i/subscription/feed%2F${encodeURIComponent("https://1chooo.com/rss.xml")}`}
                  >Feedly</a>, <a
                    className="font-bold"
                    href={`https://www.inoreader.com/feed/${encodeURIComponent("https://1chooo.com/rss.xml")}`}
                  >Inoreader</a> or <a className="font-bold" href={"https://1chooo.com/rss.xml"}>RSS</a>.
                </p>
                <div className="flex flex-col items-center w-full mt-4 space-y-3">
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email address"
                    required
                    defaultValue={"https://1chooo.com/rss.xml"}
                    className="form-input"
                  />
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 mt-5 text-xs font-semibold text-center duration-300 ease-out border rounded bg-neutral-900 dark:bg-neutral-100 dark:hover:border-neutral-300 dark:text-neutral-800 dark:hover:bg-neutral-950 dark:hover:text-neutral-100 text-neutral-100 border-neutral-900 hover:bg-white hover:text-neutral-900"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}