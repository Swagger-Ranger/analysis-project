/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // 这里就是定义docs目录下的文档上边框布局
    // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
//   projectSidebar: [{type: 'autogenerated', dirName: 'projectDesign'}],
    middlewareSidebar: [{type: 'autogenerated', dirName: 'middleware'}],
    jdkSidebar: [{type: 'autogenerated', dirName: 'JavaDocs'}],
    devopsSidebar: [{type: 'autogenerated', dirName: 'DevOps'}],

    // But you can create a sidebar manually
    projectSidebar: [
        {
            type: 'doc',
            id: 'projectDesign/whatIs', // 指向 'docs/introduction.md'
            label: 'Analysis Project是什么',
        },
        {
            type: 'doc',
            id: 'projectDesign/直观的质检系统设计', // 指向 'docs/introduction.md'
            label: '直观的质检系统设计',
        },
        {
            type: 'category',
            label: '一个更好的系统设计',
            items: [
                'projectDesign/better/超越流式遍历', // 指向 'tutorial-advanced/perform-setup.md'
                // 'projectDesign/better/系统构成', // 指向 'tutorial-advanced/use-hooks.md'
                // 'projectDesign/一个更好的系统设计/核心组件', // 指向 'tutorial-advanced/use-hooks.md'
                'projectDesign/better/数据接入', // 指向 'tutorial-advanced/use-hooks.md'
                'projectDesign/better/分析模块', // 指向 'tutorial-advanced/use-hooks.md'
                'projectDesign/better/执行引擎', // 指向 'tutorial-advanced/use-hooks.md'
                'projectDesign/better/输出模块', // 指向 'tutorial-advanced/use-hooks.md'
            ],
        },
        {
            type: 'doc',
            id: 'projectDesign/关于项目演进的个人思考', // 指向 'docs/introduction.md'
            label: '关于项目演进的个人思考',
        },
    ],
};

export default sidebars;
