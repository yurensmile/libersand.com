export type Author = {
  name: string;
  avatar: string;
};

export type ProjectPost = {
  slug: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  publishedAt: string;
  author: Author;
  /**
   * @todo let user to customize the color of tags and categories
   */
  tags: string[];
  content: string;
};
