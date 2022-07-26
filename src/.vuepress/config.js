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
  plugins: [
    '@vuepress/medium-zoom',
    'demo-block',
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
          '/zh/': '提示',
        },
      },
    ],
  ],
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
        text: '基础知识',
        items: [
          {
            text: '一.node',
            link: '/base/stack/1.node'
          },
          {
            text: '二.简单案例',
            link: '/base/oop/1.objectOriented'
          },
          {
            text: '三.浏览器渲染机制',
            link: '/base/3.browser/1.browser'
          },
          {
            text: '四.DOM事件及设计模式',
            link: '/base/dom/1.event'
          },
          {
            text: '五.ES6+核心源码分析',
            link: '/base/es6/1.let'
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
            text: '二.network',
            link: '/senior/network/1.network'
          },
          {
            text: '三.cookie && session',
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
      '/base/stack/': [
        '1.node',
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
      '/base/oop/': [
        '1.objectOriented',
        '2.constructor',
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
      '/base/es6/': [
        '1.let',
      ],
      '/base/websocket/': [
        '1.index',
        '2.https',
        '3.tcp',
        '5.dns',
        '6.websocket',
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
        '1.xss',
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