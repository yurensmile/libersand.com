export const dynamic = "force-static"; // or make it dynamic if you want

const llmsFullTxtContent = `# 1chooo.com

1chooo.com is a personal portfolio and blog website built with Next.js, React, and TypeScript. It features a modern design, supports Markdown content, and includes various interactive components.

## Section Name

- [About](https://1chooo.com): A brief introduction to the site and its creator, showcasing skills and interests.
- [Resume](https://1chooo.com/resume): A detailed resume highlighting professional experience, education, and skills.
- [Blog](https://1chooo.com/blog): A collection of articles and tutorials on web development, programming, and technology.
- [Project](https://1chooo.com/project): Showcases various projects and contributions.

## Optional

- [Source Code](https://github.com/1chooo/portfolio): The source code for the 1chooo.com website is available on GitHub.
`

export function GET() {
  return new Response(llmsFullTxtContent);
}
