import Container from "@/app/(exp)/remark/_components/container";
import { HeroPost } from "@/app/(exp)/remark/_components/hero-post";
import { MoreStories } from "@/app/(exp)/remark/_components/more-stories";
import { getBlogPosts } from "@/lib/api/blog";
import PageTitle from "@/components/page-title";

export default function Index() {
  const allPosts = getBlogPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <article>
      <PageTitle title="Hugo's Blog" />
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.thumbnail}
          date={heroPost.publishedAt}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </article>
  );
}
