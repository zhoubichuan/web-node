(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{399:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一-node-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-node-安装"}},[s._v("#")]),s._v(" 一.Node 安装")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[s._v("打开官网主页"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("如果推荐的版本不合适可以进入下载页面："),a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/en/download/"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"_1-windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-windows"}},[s._v("#")]),s._v(" 1.Windows")]),s._v(" "),a("p",[s._v("双击下载后的安装包 "),a("code",[s._v("node-v4.2.1-x64.msi")]),s._v(" 运行安装程序")]),s._v(" "),a("p",[s._v("检查 node.js 版本")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("node "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("如果没有的话就需要手工再次配置环境变量")]),s._v(" "),a("ul",[a("li",[s._v("打开资源管理器")]),s._v(" "),a("li",[s._v("在计算机上点击右键，显示菜单后点击属性")]),s._v(" "),a("li",[s._v("选择高级系统设置")]),s._v(" "),a("li",[s._v("选择高级页签下的环境变量")]),s._v(" "),a("li",[s._v("在用户变量中找到 path,如果没有就新建一个")]),s._v(" "),a("li",[s._v("在 path 的最前面添加 node.js 的安装路径，如 C:\\Program Files\\nodejs")])])]),s._v(" "),a("h2",{attrs:{id:"_2-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mac"}},[s._v("#")]),s._v(" 2.MAC")]),s._v(" "),a("ul",[a("li",[s._v("3.1 安装包安装")])]),s._v(" "),a("p",[s._v("下载 Mac 安装后结束后，单击下载的文件，运行它，会出现一个向导对话框。 单击 continue 按钮开始安装，紧接着向导会向你询问系统用户密码，输入密码后就开始安装。不一会儿就会看见一个提示 Node 已经被安装到计算机上的确认窗口")]),s._v(" "),a("ul",[a("li",[s._v("3.2 homebrew 安装")])]),s._v(" "),a("p",[s._v("先安装 homebrew 打开网站 http://brew.sh/\n在 terminal 下安装 Homebrew")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ruby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-fsSL")]),s._v(" https://raw.githubusercontent.com/Homebrew/install/master/install"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("homebrew 依赖 ruby,如果安装出错检查一下 ruby 的版本以及路径")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ruby "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.通过 homebrew 安装 node.js")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("4.其它软件也都可以通过 homebrew 安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mongodb redis "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("3.3 n 模块安装")]),s._v(" "),a("p",[s._v("切换版本或升级 node 可以安装 n 模块")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("直接输入 n 即可上下切换不同的版本")]),s._v(" "),a("p",[s._v("n 源码\nn 的 npm 安装包\nn")]),s._v(" "),a("h2",{attrs:{id:"_3-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-linux"}},[s._v("#")]),s._v(" 3.Linux")]),s._v(" "),a("ul",[a("li",[s._v("4.1 安装依赖库")])]),s._v(" "),a("p",[s._v("Node 依赖一些第三方代码库，但幸运的是大多数第三方库已经随 Node 一起发行，如果想从源码编译，需要以下两项工具")]),s._v(" "),a("p",[s._v("python(2.4 及以上版本)\nlibssl-dev 如果计划使用 SSL/TLS 加密，则必须安装它。libssl 是 openssl 工具中用到的库，在 linux 和 UNIX 系统中，通常可以用你喜欢的包管理器安装 libssl,而在 Mac OS X 系统中已经预置了。")]),s._v(" "),a("ul",[a("li",[s._v("4.2 下载源代码")])]),s._v(" "),a("p",[s._v("选择好版本后，你就可以到 nodejs.org 网站上复制对应的 tar 压缩包进行下载，比如你用的 mac 或 linux,可以输入以下命令下载")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://nodejs.org/dist/v8.9.4/node-v8.9.4.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-O")]),s._v(" https://nodejs.org/dist/v8.9.4/node-v8.9.4.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果这二种工具都没有可以下载这二个工具或者从网站上点击链接下载")]),s._v(" "),a("ul",[a("li",[s._v("4.3 编译源码")])]),s._v(" "),a("p",[s._v("对 tar 压缩包进行解压缩")]),s._v(" "),a("p",[s._v("x extract 解包\nf file 要解包的是个文件\nz gzip 这个包是压缩过的，需要解压缩\nv verbose 把解包过程告诉你\ntar xfz node-v8.9.4.tar.gz\n进入源代码目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" node-v8.9.4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对其进行配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在就开始编译了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("编译生成 Node 可执行文件后，就可以按以下的指令开始安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("以上指令会将 Node 可执行文件复制到/user/local/bin/node 目录下")]),s._v(" "),a("p",[s._v("执行以上指令如果遇到权限问题，可以以 root 用户权限执行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);