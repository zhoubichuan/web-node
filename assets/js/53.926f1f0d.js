(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{416:function(t,a,r){"use strict";r.r(a);var _=r(10),s=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-的架构模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-的架构模式"}},[t._v("#")]),t._v(" http 的架构模式")]),t._v(" "),a("p",[t._v("http 是客户端/服务器模式中请求-响应所用的协议，在这种模式中，客户端（一般是 web 浏览器）向服务器提交 http 请求，服务器响应请求的资源")]),t._v(" "),a("h3",{attrs:{id:"http-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-的特点"}},[t._v("#")]),t._v(" http 的特点")]),t._v(" "),a("ul",[a("li",[t._v("http 是半双工协议，也就是说，在同一时刻数据只能单向流动，客户端向服务器发送请求（单向的），然后服务器响应请求（单向的）。")]),t._v(" "),a("li",[t._v("服务器不能主动推送数据给浏览器。")])]),t._v(" "),a("h2",{attrs:{id:"_2-双向通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-双向通信"}},[t._v("#")]),t._v(" 2.双向通信")]),t._v(" "),a("p",[t._v("comet 是一种用于 web 的推送技术，能使用服务器能实时的将更新的信息传送到客户端，而无需客户端发出请求，目前有三种实现方式：轮询、长轮询和 iframe 流")]),t._v(" "),a("h3",{attrs:{id:"_1-轮询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-轮询"}},[t._v("#")]),t._v(" 1.轮询")]),t._v(" "),a("ul",[a("li",[t._v("轮询是客户端和服务器之间会一直进行连接，每隔一段时间就询问一次")]),t._v(" "),a("li",[t._v("这种范式连接数会很多，一个接受，一个发送。而且每次发送请求都会有 http 的 header，会很耗流量，也会消耗 cpu 的利用率。")])]),t._v(" "),a("h3",{attrs:{id:"_2-长轮询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-长轮询"}},[t._v("#")]),t._v(" 2.长轮询")]),t._v(" "),a("ul",[a("li",[t._v("长轮询是对轮询的改进版，客户端发送 http 给服务器之后，看有没有新消息，如果没有新消息，就一直等待。")]),t._v(" "),a("li",[t._v("当有新消息的时候，才会返回给客户端。在某种程度上减小了网络带宽和 cup 利用率等问题。")]),t._v(" "),a("li",[t._v("由于 http 数据包的头部数据量往往很大（通常有 400 多个字节），但是真正被服务器需要的数据却很少（有的只有 10 个字节左右），这样的数据包在网络上周期性的传输，难免对网络带宽是一种浪费。")])]),t._v(" "),a("h3",{attrs:{id:"iframe-流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-流"}},[t._v("#")]),t._v(" iframe 流")]),t._v(" "),a("ul",[a("li",[t._v("通过在 html 页面里嵌入一个隐藏的 iframe，然后将这个 iframe 的 src 属性设为对一个长连接的请求，服务器端就能源源不断地向客户端推送数据。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);