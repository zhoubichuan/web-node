const path = require("path");
module.exports = {
  base: '/web-node/',
  description: 'Node相关知识点',
  locales: {
    '/': {
      title: 'Node学习笔记',
      description: '星光不问赶路人,岁月不负有心人'
    }
  },
  markdown: {
    lineNumbers: true
  },
  alias: {
    "common-node": path.resolve(__dirname, "../../common-node/"),
  },
  plugins: {
    'demo-container': true,
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/nprogress': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'web-vue', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
  },
  port: 3009,
  dest: 'web-node',
  serviceWorker: true,
  themeConfig: {
    repo: 'https://github.com/zhoubichuan/web-node',
    repoLabel: '查看源码',
    docsBranch: 'master',
    editLinks: true,
    docsDir: 'src',
    editLinks: true,
    editLinkText: '在github上编辑此页',
    sidebarDepth: 0,
    lastUpdated: '上次更新',
    searchMaxSuggestoins: 10,
    nav: [
      {
        text: '初级知识',
        items: [
          {
            text: '一.基础知识',
            link: '/base/node/1.index'
          },
          {
            text: '二.简单案例',
            link: '/base/example/1.index'
          },
          {
            text: '三.浏览器相关',
            link: '/base/3.browser/1.browser'
          },
          {
            text: '四.开发流程',
            link: '/base/dom/1.event'
          },
          {
            text: '五.服务端渲染',
            link: '/base/ssr/1.let'
          },
          {
            text: '六.websocket',
            link: '/base/websocket/1.index'
          }
        ]
      },
      {
        text: '高级知识',
        items: [
          {
            text: '一.计算机网络',
            link: '/senior/http/1.http'
          },
          {
            text: '二.登陆相关',
            link: '/senior/network/1.network'
          },
          {
            text: '三.后端监控',
            link: '/senior/cookie/1.cookie'
          },
          {
            text: '四.安全防范',
            link: '/senior/security/1.index'
          },
          {
            text: '五.Serverless',
            link: '/senior/serverless/1.index'
          },
          {
            text: '六.GraphQL',
            link: '/senior/graphql/1.index',
          }
        ]
      },
      {
        text: '阅读书籍',
        items: [
          {
            text: '一.Node.js 开发指南',
            link: '/read/book1/1.preparation'
          },
          {
            text: '二.了不起的 Node.js',
            link: '/read/book2/1.preparation'
          },
          {
            text: '三.Node.js 实战',
            link: '/read/book3/1.preparation'
          },
          {
            text: '四.深入浅出 Node.js',
            link: '/read/book4/1.preparation'
          }
        ]
      }
    ],
    sidebar: {
      '/base/node/': [
        '1.index',
        '2.install',
        '3.repl',
        '4.core',
        '5.module',
        '6.encoding',
        '7.buffer',
        '8.fs',
        '9.stream',
        '10.cache',
        '11.tcp',
        '12.yargs',
        '13.compress',
        '14.crypto',
        '15.process',
        '16.action'
      ],
      '/base/example/': [
        '1.index',
        '2.student',
        '3.prototype',
        '4.function',
        '5.this',
        '6.origin',
        '7.extends',
        '8.jQuery',
        '9.lodash'
      ],
      '/base/3.browser/': [
        '1.browser',
        '2.tree',
        '3.reflow',
        '4.async',
        '5.eventLoop',
        '6.microtaskMacrotask',
        '7.crp',
        '8.skeleton',
        '9.test'
      ],
      '/base/dom/': [
        '1.event'
      ],
      '/base/ssr/': [
        '1.let',
      ],
      '/base/websocket/': [
        '1.index',
        '2.https',
        '3.tcp',
        '5.dns',
        '6.websocket',
        '7.socket',
      ],
      '/senior/graphql/': [
        '1.index',
        'i18n'
      ],
      '/senior/http/': [
        '1.http',
        '2.http',
        '3.https',
        '4.render',
        '5.api',
        '6.form',
        '7.checkBox',
        '8.EventLoop',
        '9.alert',
        '10.serviceRender',
        '11.debounceAndThrottle',
        '12.webpack'
      ],
      '/senior/network/': [
        '1.network'
      ],
      '/senior/serverless/': [
        '1.index'
      ],
      '/senior/cookie/': [
        '1.cookie'
      ],
      '/senior/security/': [
        '1.index',
        '1.repellerxss',
        '2.storagexss',
        '3.dombasexss',
        '4.payloadxss',
        '2.csrf',
        '3.doos',
        '4.http'
      ],
      '/read/book1/': [
        '1.preparation',
        '2.dataDriven',
        '3.componentization',
        '4.deepResponsePrinciple',
      ],
      '/read/book2/': [
        '1.preparation',
        '2.dataDriven',
        '3.componentization',
        '4.deepResponsePrinciple',
      ],
      '/read/book3/': [
        '1.preparation',
        '2.dataDriven',
        '3.componentization',
        '4.deepResponsePrinciple',
      ],
      '/read/book4/': [
        '1.preparation',
        '2.dataDriven',
        '3.componentization',
        '4.deepResponsePrinciple',
      ],
    }
  },
}