// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // 这三行是对首页的title配置
  title: 'Analysis Project',
  tagline: '对数据内容的解析和数据关系的建模：all for analysis是整个的设计就是搞清楚要干什么，middleware就是需要的工具和核心组件，' +
      'code就是要实际的写代码已经需要的代码知识，devops就是项目往往是需要团队协作而且还需要维护和迭代，blog就单纯是个人的一下感受和文章',
  favicon: 'img/analysis_favicon.png',// favicon网站标签图标

  // Set the production url of your site here https://github.com/Swagger-Ranger/analysis-project
  url: 'https://Swagger-Ranger.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/analysis-project/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these. 配置GitHub pages
  organizationName: 'Swagger-Ranger', // Usually your GitHub org/user name.
  projectName: 'analysis-project', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      // 'classic',
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
          sidebarPath: './sidebars.js',
          include: ['**/*.md', '**/*.mdx'],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/Swagger-Ranger/analysis-project',
        },
        blog: {
          showReadingTime: false,// 是否显示阅读时长
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/Swagger-Ranger/analysis-project',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  //渲染数学公式
  // stylesheets: [
  //   {
  //     href: '/css/katex.min.css',
  //     type: 'text/css',
  //   },
  // ],


// 首页的导航栏
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/analysis_favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'All for analysis',
          },{
            type: 'docSidebar',
            sidebarId: 'middlewareSidebar',
            position: 'left',
            label: 'Middleware',
          },{
            type: 'docSidebar',
            sidebarId: 'jdkSidebar',
            position: 'left',
            label: 'Codes',
          },{
            type: 'docSidebar',
            sidebarId: 'devopsSidebar',
            position: 'left',
            label: 'DevOps',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: '关于作者', position: 'right'},
          {
            href: 'https://github.com/Swagger-Ranger/analysis-project',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Analysis Project, author liufei32@outlook.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // markdown ```代码块中支持的语法高亮
        additionalLanguages: ['java','cypher','bash','sql'],
      },
    }),


};

export default config;
