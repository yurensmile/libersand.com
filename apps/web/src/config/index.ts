import { ICON_NAMES } from "@/components/icons";

import { Config } from "@/types/config";

const config: Config = {
  avatar: "/images/profile.webp",
  title: "黄沙 - libersand",
  author: "libersand",
  description:
    "",
  keywords: [
  ],
  status: "Fight on ✌️",
  siteURL: "https://libersand.com",
  navigationLinks: [
    { path: "/", label: "关于我" },
    { path: "/resume", label: "简历" },
    { path: "/project", label: "项目" },
    { path: "/blog", label: "博客" },
  ],
  contacts: [
    {
      icon: ICON_NAMES.MAP_PIN_LU,
      title: "位置",
      content: "中国，重庆",
    },
    {
      icon: ICON_NAMES.MAIL_LU,
      title: "邮箱",
      link: "mailto:libersand@libersand.com",
      content: "libersand@libersand.com",
    },
    {
      icon: ICON_NAMES.GITHUB_LU,
      title: "GitHub",
      link: "https://github.com/yurensmile",
      content: "yurensmile",
    }
  ],
  socialLinks: [
    {
      url: "https://github.com/yurensmile",
      icon: ICON_NAMES.GITHUB_LU,
    },
    {
      url: `/rss.xml`,
      icon: ICON_NAMES.RSS_LU,
    },
    {
      url: `/cv`,
      icon: ICON_NAMES.ATTACHMENT_MD,
    },
  ],
  homeMetaData: {
    metadataBase: new URL("https://libersand.com"),
    title: "Zhang HongTao - libersand",
    description:
      "I'm Zhang HongTao, a student at University of Southern California (USC) ✌️. Previously, I obtained my Bachelor's degree from National Central University (NCU) 🐿️.",
    authors: [{ name: "Zhang HongTao" }],
    creator: "Zhang HongTao",
    keywords: [
      "Zhang HongTao",
      "libersand",
      "Software Engineering",
      "University of Southern California",
      "National Central University",
    ],
    openGraph: {
      url: "https://libersand.com/",
      type: "website",
      siteName: "黄沙 - libersand",
      title: "黄沙 - libersand",
      locale: "en_US",
      description:
        "I'm Chun-Ho (Hugo) Lin, an incoming student at University of Southern California (USC) ✌️. Previously, I obtained my Bachelor's degree from National Central University (NCU) 🐿️.",
      images: [
        {
          url: "/opengraph-image",
          width: 1920,
          height: 1080,
          alt: "Chun-Ho (Hugo) Lin - 1chooo",
        },
      ],
    },
    manifest: "/manifest.json",
    twitter: {
      site: "@1chooo___",
      card: "summary_large_image",
      title: "Chun-Ho (Hugo) Lin - 1chooo",
      description:
        "I'm Chun-Ho (Hugo) Lin, an incoming student at University of Southern California (USC) ✌️. Previously, I obtained my Bachelor's degree from National Central University (NCU) 🐿️.",
      images: [
        {
          url: "/twitter-image",
          width: 1920,
          height: 1080,
          alt: "Chun-Ho (Hugo) Lin - 1chooo",
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: [
        {
          url: "/favicon.ico",
          sizes: "192x192",
          type: "image/x-icon",
        },
      ],
    },
  },
  about: {
    preferredName: "黄沙",
    firstName: "libersand",
    middleName: "",
    lastName: "",
    additionalName: "libersand",
    pronouns: "He/Him",
    githubUsername: "yurensmile",
    introduction: `
    `,
    lifestyles: [
      {
        icon: ICON_NAMES.GITHUB_LU,
        title: "Open Source",
        text: "Actively contributing to open source projects on GitHub.",
      },
      {
        icon: ICON_NAMES.PENCIL_LU,
        title: "Storytelling",
        text: "Love to share my knowledge and experience with others.",
      },
      {
        icon: ICON_NAMES.GOAL,
        title: "Workouts",
        text: "Basketball and weight training defines my active workout lifestyle.",
      },
      {
        icon: ICON_NAMES.PHOTO,
        title: "Photography",
        text: "Sky brings freedom; streets, a reminder of others' contributions.",
      },
    ],
    techStacks: {
      programmingLanguages: [
        { name: "Python", icon: ICON_NAMES.PYTHON },
        { name: "TypeScript", icon: ICON_NAMES.TYPESCRIPT },
        { name: "Golang", icon: ICON_NAMES.GOLANG },
        { name: "C++", icon: ICON_NAMES.CPP },
        { name: "Java", icon: ICON_NAMES.JAVA },
        { name: "JavaScript", icon: ICON_NAMES.JAVASCRIPT },
        { name: "LaTeX", icon: ICON_NAMES.LATEX },
        { name: "Markdown", icon: ICON_NAMES.MARKDOWN },
        { name: "Astro", icon: ICON_NAMES.ASTRO },
        { name: "Terraform", icon: ICON_NAMES.TERRAFORM },
      ],
      frameworks: [
        { name: "React", icon: ICON_NAMES.REACT },
        { name: "FastAPI", icon: ICON_NAMES.FASTAPI },
        { name: "Flask", icon: ICON_NAMES.FLASK },
        { name: "Redis", icon: ICON_NAMES.REDIS },
        { name: "Linux Terminal", icon: ICON_NAMES.TERMINAL_LINUX },
        { name: "AWS", icon: ICON_NAMES.AWS },
        { name: "Next.js", icon: ICON_NAMES.NEXTJS },
        { name: "Docker", icon: ICON_NAMES.DOCKER },
        { name: "MySQL", icon: ICON_NAMES.MYSQL },
        { name: "Django", icon: ICON_NAMES.DJANGO },
        { name: "Kubernetes", icon: ICON_NAMES.KUBERNETES },
        { name: "Postman", icon: ICON_NAMES.POSTMAN },
        { name: "Azure", icon: ICON_NAMES.AZURE },
      ],
    },
  },
  resumes: {
    educations: {
      icon: ICON_NAMES.GRADUATION_CAP,
      title: "教育",
      iconName: ICON_NAMES.GRADUATION_CAP,
      resumeCards: [
        {
          institution: "硕士---重庆大学",
          institutionImage: "/images/logos/cqu.png",
          title: "计算机科学与技术",
          tags: [
            {
              key: "money",
              value: "学业奖学金",
              icon: ICON_NAMES.AWARD,
            },
            {
              key: "period",
              value: "2020.06 - 2023.06",
              icon: ICON_NAMES.CALENDAR,
            },
          ],
          details: [],
        },
        {
          institution: "学士---重庆大学",
          institutionImage: "/images/logos/cqu.png",
          title: "通信工程",
          tags: [
           
            {
              key: "period",
              value: "2016.09 - 2020.06",
              icon: ICON_NAMES.CALENDAR,
            },
            {
              key: "school",
              value: "保研硕士",
              icon: ICON_NAMES.GRADUATION_CAP,
            },
          ],
          details: [],
        },
      ],
    },
    experiences: {
      icon: ICON_NAMES.BRIEFCASE,
      iconName: ICON_NAMES.BRIEFCASE,
      title: "工作经历",
      resumeCards: [
        {
          institution: "蚂蚁集团",
          institutionImage: "/images/logos/antgroup.png",
          title: "Java研发工程师",
          tags: [
            {
              key: "period",
              value: "2023.07 - 至今",
              icon: ICON_NAMES.CALENDAR,
            },
          ],
          details: [
            "Led a team of 5 to enhance issue pools with AWS Bedrock, boosting cloud support efficiency by 80% through multi-language support and 95% accurate image recognition. Honored as the top-achieving internship team.",
            "Utilized a serverless architecture on AWS Lambda, performing troubleshooting with CloudWatch, deployed via AWS CDK, and integrated with DynamoDB and Bedrock services.",
            "Documented issues in 10+ mock cases, such as VPC entry failures, EC2 Apache server restarts, and S3 photo access problems, and provided detailed solutions for interns. Refer [here](https://github.com/1chooo/ecv-training-materials/tree/main/msp/aws_challenge) for a comprehensive list.",
          ],
        },
      ],
    },
  },
  shikiTheme: {
    defaultColor: "dark",
    light: "github-dark",
    dark: "github-dark",
  },
  jsonLdPerson: {
    "@context": "http://schema.org",
    "@type": "Person",
    "@id": "https://1chooo.com/#person",
    givenName: "Chun-Ho",
    familyName: "Lin",
    additionalName: "Hugo",
    gender: "male",
    birthPlace: "New Taipei, TW",
    nationality: "Taiwan",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "University of Southern California",
        sameAs: "https://usc.edu",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "National Central University",
        sameAs: "https://www.ncu.edu.tw/",
      },
    ],
    jobTitle: "Software Engineer",
    skills: "Software Engineering, Web Development, Open Source",
    image: "https://1chooo.com/images/profile.webp",
    url: "https://1chooo.com",
    sameAs: [
      "https://www.linkedin.com/in/1chooo/",
      "https://medium.com/@1chooo",
    ],
  },
  giscusConfig: {
    id: "comments",
    repo: "1chooo/1chooo.com",
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID || "",
    category: "General",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CONFIG_CATEGORY_ID || "",
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  analytics: {
    googleAnalyticId: process.env.NEXT_PUBLIC_GA_ID || "",
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || "",
    umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "",
    umamiUrl: process.env.NEXT_PUBLIC_UMAMI_URL || "",
  },
  robots: {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: "https://libersand.com/sitemap.xml",
    host: "https://libersand.com",
  },
  llmsTxtContent: `# libersand.com

## Section Name

- [About](https://libersand.com): A brief introduction to the site and its creator, showcasing skills and interests.
- [Resume](https://libersand.com/resume): A detailed resume highlighting professional experience, education, and skills.
- [Blog](https://libersand.com/blog): A collection of articles and tutorials on web development, programming, and technology.
- [Project](https://libersand.com/project): Showcases various projects and contributions.

## Optional

- [Source Code](https://github.com/1chooo/portfolio): The source code for the 1chooo.com website is available on GitHub.
`,
  llmsFullTxtContent: `# 1chooo.com

## Section Name

- [About](https://1chooo.com): A brief introduction to the site and its creator, showcasing skills and interests.
- [Resume](https://1chooo.com/resume): A detailed resume highlighting professional experience, education, and skills.
- [Blog](https://1chooo.com/blog): A collection of articles and tutorials on web development, programming, and technology.
- [Project](https://1chooo.com/project): Showcases various projects and contributions.

## Optional

- [Source Code](https://github.com/1chooo/portfolio): The source code for the 1chooo.com website is available on GitHub.
`,
  techStacks: {
    backend: ["java", "python", "sofaboot", "sun'chuan'neng", "docker", "kubernetes", "github"],
    frontend: ["typescript", "react", "nextjs", "tailwindcss"],
    database: ["oceanbase", "supabase", "firebase"]
  },
};

export default config;
