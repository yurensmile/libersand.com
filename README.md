<a name="readme-top"></a>

# [libersand.com](https://libersand.com) &middot; [![libersand.com built with Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=Next.js&labelColor=000)](https://nextjs.org/) [![libersand.com GitHub license](https://img.shields.io/github/license/1chooo/portfolio?style=for-the-badge&labelColor=000)](https://github.com/1chooo/portfolio/blob/main/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge&labelColor=000)](https://github.com/1chooo/portfolio/pulls)

欢迎来到我的个人网站仓库！👋

这是一个现代化的个人作品集和博客网站，基于 Next.js、TypeScript 和 Tailwind CSS 构建。本项目基于 [1chooo.com](https://1chooo.com) 进行开发



## ✨ 特性

### 🚀 技术栈亮点

- **Next.js 15** - 使用 App Router 和最新特性
- **TypeScript** - 严格类型检查配置
- **Tailwind CSS** - 原子化 CSS 框架
- **Turborepo** - 高效的 monorepo 管理
- **pnpm** - 快速、节省磁盘空间的包管理器

### 📝 博客功能

- **Markdown 支持** - 完整的 MDX 解析和渲染
- **评论系统** - 集成 Giscus 评论功能
- **RSS 订阅** - 自动生成 RSS 订阅源
- **站点地图** - 自动生成 sitemap.xml
- **访问统计** - 页面浏览数统计
- **标签分类** - 文章分类和标签管理

### 🎨 用户体验

- **响应式设计** - 完美支持移动端和桌面端
- **骨架屏加载** - 优雅的加载状态展示
- **GitHub 贡献热力图** - 展示代码提交活动
- **语法高亮** - 基于 Shiki 的代码高亮
- **动画效果** - 流畅的页面转场和交互动画
- **暗色模式** - 支持明暗主题切换

### ⚡ 性能与 SEO

- **Lighthouse 满分** - 接近 100 分的性能评分
- **SEO 优化** - 完整的 meta 标签和 JSON-LD 结构化数据
- **开放图谱** - 使用 next/og 生成动态 OG 图片
- **Web Vitals** - 核心网络指标监控

<div align="center">
  <img src="./.github/images/seo.webp" alt="libersand.com Lighthouse 评分" />
</div>

### 🛠️ 开发体验

- **ESLint & Prettier** - 代码质量和格式化保证
- **Conventional Commits** - 规范化的提交信息
- **GitHub Actions** - 自动化部署和持续集成
- **TypeScript 严格模式** - 类型安全保障

## 🏗️ 项目结构

```
libersand.com/
├── apps/
│   ├── web/           # 主要网站应用
│   ├── docs/          # 文档站点
│   └── cli/           # 命令行工具
├── packages/
│   ├── ui/            # UI 组件库
│   ├── eslint-config/ # ESLint 配置
│   ├── typescript-config/ # TypeScript 配置
│   ├── github-calendar/   # GitHub 日历组件
│   └── activity-calendar/ # 活动日历组件
└── scripts/           # 构建脚本
```

## 🚀 快速开始

> [!NOTE]
> 我们选择 [`pnpm`](https://pnpm.io/) 作为包管理器。请确保在运行以下命令前已安装它。

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/1chooo/portfolio.git libersand.com
cd libersand.com

# 安装依赖
pnpm install
```

### 启动开发服务器

```bash
# 启动主网站
cd apps/web
pnpm run dev   # 访问 http://localhost:3000

# 启动文档站点
cd apps/docs
pnpm run dev   # 访问 http://localhost:3001
```

### 构建项目

```bash
# 构建所有应用
pnpm run build

# 启动生产环境
pnpm run start
```

## 🛠️ 开发指南

### 环境变量配置

在 `apps/web/.env.local` 中配置必要的环境变量：

```env
# Supabase 配置
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# 数据库配置
POSTGRES_URL=your_postgres_url
POSTGRES_PRISMA_URL=your_postgres_prisma_url
```

### 内容管理

- **博客文章**: 在 `apps/web/src/contents/posts/` 目录下创建 `.md` 文件
- **项目展示**: 在 `apps/web/src/contents/portfolios/` 目录下创建 `.mdx` 文件
- **配置文件**: 在 `apps/web/src/config/index.ts` 中修改网站配置

### 自定义配置

运行以下命令生成个人配置：

```bash
pnpm run gen-config
```

清理原作者个人信息：

```bash
pnpm run delete
```

## 🚀 部署

### Vercel 部署

最简单的部署方式是使用 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

1. 将仓库推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 部署完成

### 其他部署选项

- **Netlify**: 支持静态站点部署
- **Railway**: 支持全栈应用部署
- **Docker**: 使用容器化部署

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

请确保：
- 代码符合项目的 ESLint 规则
- 提交信息遵循 Conventional Commits 规范
- 包含必要的测试和文档更新

## 📜 许可证

> [!IMPORTANT]
> 本项目采用 [Creative Commons Attribution 4.0 International][cc-by] 许可证 <img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">

[cc-by]: http://creativecommons.org/licenses/by/4.0/

### 使用条款

1. **自由使用** - 您可以自由使用本代码作为灵感来源
2. **请勿直接复制** - 请不要直接复制代码
3. **署名感谢** - 如果使用了本项目的代码，请给予适当的署名

### 个人信息清理

如果您要使用本项目作为自己的网站，请运行以下命令清理个人信息：

```bash
pnpm run delete
```

此命令会删除所有个人相关的内容和配置文件。

## 🙏 致谢

本项目的实现离不开开源社区的支持。

特别感谢原项目作者 [@1chooo](https://github.com/1chooo) 的 [1chooo.com](https://1chooo.com) 项目，为本项目提供了设计灵感和技术基础。

同时感谢以下开源项目的贡献：

### 核心依赖

- [Next.js](https://nextjs.org/) - React 全栈框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 类型系统
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [Turborepo](https://turbo.build/) - 高性能构建系统

### 功能组件

- [MDX](https://mdxjs.com/) - Markdown 扩展
- [Rehype](https://github.com/rehypejs/rehype) - HTML 处理器
- [Remark](https://github.com/remarkjs/remark) - Markdown 处理器
- [Shiki](https://shiki.style/) - 语法高亮
- [Motion](https://motion.dev/) - 动画库
- [Lucide React](https://lucide.dev/) - 图标库

### 设计灵感

参考和借鉴了以下优秀项目：

- [1chooo.com](https://1chooo.com) - 原始设计来源
- [leerob.com](https://leerob.com) - 博客设计灵感
- [bntw.dev](https://bntw.dev) - 交互设计参考
- [nelsonlai.me](https://nelsonlai.me) - 布局设计参考

...以及许多其他我无法一一列举但深表感谢的项目。

## 👨‍💻 作者

- **黄沙 (libersand)** 
  - 🌐 [Website](https://libersand.com)
  - 📧 [Email](mailto:hugo@libersand.com)
  - 🐱 [GitHub](https://github.com/pintang'on)

## 📊 项目统计

![GitHub Stars](https://img.shields.io/github/stars/1chooo/portfolio?style=social)
![GitHub Forks](https://img.shields.io/github/forks/1chooo/portfolio?style=social)
![GitHub Issues](https://img.shields.io/github/issues/1chooo/portfolio)
![GitHub License](https://img.shields.io/github/license/1chooo/portfolio)

---

<div align="center">
  <p>
    Made with 🖤 by <a href="https://libersand.com">libersand</a>
  </p>
  <p>
    <em>基于 <a href="https://1chooo.com">1chooo.com</a> 项目改编</em>
  </p>
</div>

<p align="right" style="font-size: 14px; color: #555; margin-top: 20px;">
    <a href="#readme-top" style="text-decoration: none; color: #007bff; font-weight: bold;">
        ↑ 返回顶部 ↑
    </a>
</p>