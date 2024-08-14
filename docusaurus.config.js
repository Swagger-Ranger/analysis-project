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
  tagline: '对数据内容的解析和数据关系的建模',
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
            label: '核心组件',
          },{
            type: 'docSidebar',
            sidebarId: 'jdkSidebar',
            position: 'left',
            label: 'Java相关',
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
//          {
//            title: 'Docs',
//            items: [
//              {
//                label: 'Tutorial',
//                to: '/docs/intro',
//              },
//            ],
//          },
//          {
//            title: 'Community',
//            items: [
//              {
//                label: 'Stack Overflow',
//                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
//              },
//              {
//                label: 'Discord',
//                href: 'https://discordapp.com/invite/docusaurus',
//              },
//              {
//                label: 'Twitter',
//                href: 'https://twitter.com/docusaurus',
//              },
//            ],
//          },
//          {
//            title: 'More',
//            items: [
//              {
//                label: 'Blog',
//                to: '/blog',
//              },
//              {
//                label: 'GitHub',
//                href: 'https://github.com/facebook/docusaurus',
//              },
//            ],
//          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Analysis Project, author liufei32@outlook.com`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
