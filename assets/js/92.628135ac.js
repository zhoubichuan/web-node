(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{455:function(t,s,a){"use strict";a.r(s);var _=a(10),r=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"一-xss-dom-型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-xss-dom-型"}},[t._v("#")]),t._v(" 一.XSS(DOM 型)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("前言")]),t._v(" "),s("p",[t._v("每个载入浏览器的 HTML 文档的都会成为 document 对象，DOM Based XSS 漏洞是基于文档对象模型 Document Objeet Model,DOM)的一种漏洞，由于不需要服务器端支持，是 DOM 结构修改导致的，是基于浏览器 DOM 解析的攻击")])]),t._v(" "),s("p",[s("strong",[t._v("攻击过程")])]),t._v(" "),s("ul",[s("li",[t._v("1.用户打开带有恶意的链接")]),t._v(" "),s("li",[t._v("2.浏览器在 DOM 解析的时候直接使用恶意数据")]),t._v(" "),s("li",[t._v("3.用户中招")]),t._v(" "),s("li",[t._v("4.常见的触发场景就是在修改 innerHTML outerHTML document.write 的时候")])]),t._v(" "),s("h2",{attrs:{id:"_1-案例一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-案例一"}},[t._v("#")]),t._v(" 1.案例一")]),t._v(" "),s("h3",{attrs:{id:"_1-1-前端部分"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-前端部分"}},[t._v("#")]),t._v(" 1.1 前端部分")]),t._v(" "),s("iframe",{staticStyle:{height:"500px"},attrs:{src:"/web-node/dombase.html"}}),t._v(" "),s("h2",{attrs:{id:"_2-场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-场景"}},[t._v("#")]),t._v(" 2.场景")]),t._v(" "),s("h3",{attrs:{id:"_2-1-聊天软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-聊天软件"}},[t._v("#")]),t._v(" 2.1 聊天软件")]),t._v(" "),s("ul",[s("li",[t._v("用户在群中发送危险链接")])]),t._v(" "),s("h3",{attrs:{id:"_2-2-学习社区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-学习社区"}},[t._v("#")]),t._v(" 2.2 学习社区")]),t._v(" "),s("ul",[s("li",[t._v("作者在文章中留下危险链接")])]),t._v(" "),s("h2",{attrs:{id:"_3-防范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-防范"}},[t._v("#")]),t._v(" 3.防范")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),s("p",[t._v("DOM型XSS的核心是运用DOM函数去执行访问xss平台的目的，在本靶场中，我们通过DOM函数改变HTML的结构，使浏览器加载页面的同时访问了xss平台，记录了使用者的cookie")])])])}),[],!1,null,null,null);s.default=r.exports}}]);