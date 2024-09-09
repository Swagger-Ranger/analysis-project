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
  tagline: '为什么叫 analysis project，此项目想要做的事情就是如何在大量的数据中快速识别出特定的内容或者对大量数据验证丰富的自定义逻辑，' +
      '因为这依赖于对数据内容的解析和数据关系的建模，这就是analysis的含义，它的特点就是高并发、高性能、高复杂度并追求低成本。主要是三部分内容：理解并设计系统、合适的工具和中间件、完成它需要的编程知识',
  favicon: 'img/apachecassandra-color.svg',// favicon网站标签图标

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
          src: 'img/apachecassandra-color.svg',
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
            label: 'Middlewares',
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
