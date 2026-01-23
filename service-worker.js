/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7a1185cc92a369514b84463d85f6e33c"
  },
  {
    "url": "assets/css/0.styles.0ea1141b.css",
    "revision": "55c8fc44303ad591094d274be74946c8"
  },
  {
    "url": "assets/img/1.1.8619601a.jpg",
    "revision": "8619601aeafa9cad6d5a9411d83c7c2c"
  },
  {
    "url": "assets/img/1.2.b71d1ef7.jpg",
    "revision": "b71d1ef78df92609355357d92934e871"
  },
  {
    "url": "assets/img/1.3.33724d4f.png",
    "revision": "33724d4f6f13484a3a1eb7dc8afb24e0"
  },
  {
    "url": "assets/img/1.7bc0a9b4.png",
    "revision": "7bc0a9b48d0be595bae99f7bbc4e6f90"
  },
  {
    "url": "assets/img/14.2.9ea5394f.gif",
    "revision": "9ea5394f130046361b159b48f1eee8c6"
  },
  {
    "url": "assets/img/14.3.71eedd90.jpg",
    "revision": "71eedd907a730fb1cec13a610f1cd298"
  },
  {
    "url": "assets/img/14.4.f809b632.jpg",
    "revision": "f809b6325e7add6b3875e0cb87f00855"
  },
  {
    "url": "assets/img/14.93f8293a.jpg",
    "revision": "93f8293a4365ebe498d2cb1959c41e4c"
  },
  {
    "url": "assets/img/15.f89d54c5.png",
    "revision": "f89d54c5c9e07a0d40b7852ce3d5eee9"
  },
  {
    "url": "assets/img/2.1.925f1062.png",
    "revision": "925f10623259179f39daaae9fbecfd81"
  },
  {
    "url": "assets/img/3.6.b08c1919.png",
    "revision": "b08c191924523719c98b7ac57df3e060"
  },
  {
    "url": "assets/img/6.2.8e62597a.jpg",
    "revision": "8e62597aecc8ccb728e223c944f2c6d1"
  },
  {
    "url": "assets/img/6.52036fdf.jpg",
    "revision": "52036fdf34386379e738f6620bc9a751"
  },
  {
    "url": "assets/img/nodesystem.20c8ec0e.png",
    "revision": "20c8ec0e32db9d302955408622f7c91e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5401f0e6.js",
    "revision": "0ce7ff23754f33a4300b33f25229c7c9"
  },
  {
    "url": "assets/js/11.c9e52ad8.js",
    "revision": "d61f8f536bf6e77d8b2b8fbcc37e573a"
  },
  {
    "url": "assets/js/12.a07a8a70.js",
    "revision": "6c93876fbe807341fd36fbf04a3b8209"
  },
  {
    "url": "assets/js/13.33201841.js",
    "revision": "c0fab1515577ecee6e017a8863c5e482"
  },
  {
    "url": "assets/js/14.da2add6e.js",
    "revision": "5b419df9d31fb904084602c08ceef7c5"
  },
  {
    "url": "assets/js/15.6c0e8950.js",
    "revision": "7cc26b6f4f80db11530e5f6d47150805"
  },
  {
    "url": "assets/js/16.27484fe5.js",
    "revision": "59902c815d5562817ed53b0537d14e3a"
  },
  {
    "url": "assets/js/17.1d83ef05.js",
    "revision": "060f3e2a1cfda967cfa992b84fff4d85"
  },
  {
    "url": "assets/js/18.969cd30a.js",
    "revision": "24cf46433d9f33f0c0627d348aaf66dc"
  },
  {
    "url": "assets/js/19.3127aeca.js",
    "revision": "3033618cfc87139f4c0f3d0966209b12"
  },
  {
    "url": "assets/js/2.4b06d38e.js",
    "revision": "31559699bfd385f77e737c889a7ed489"
  },
  {
    "url": "assets/js/20.fa64fa28.js",
    "revision": "e410c955210ed58f517589c5484c4f41"
  },
  {
    "url": "assets/js/21.ee1c6956.js",
    "revision": "070a3b2df2463ccf80e743e61c126a99"
  },
  {
    "url": "assets/js/22.30f99c23.js",
    "revision": "3f115eb19c0b368a97da1569efc2c2bb"
  },
  {
    "url": "assets/js/23.5f88f1d8.js",
    "revision": "e3817dce5988fbf3d91e6370b41411df"
  },
  {
    "url": "assets/js/24.f590aa3e.js",
    "revision": "a41007eaab6b9b463553d7f3278cd699"
  },
  {
    "url": "assets/js/25.f63c1f12.js",
    "revision": "ec2e8d4ddbd3302c5de20c981a0c8bb5"
  },
  {
    "url": "assets/js/26.e76c193f.js",
    "revision": "9672f039a071889c5b55ca468e4a82de"
  },
  {
    "url": "assets/js/27.5120e12e.js",
    "revision": "c6cafeabf529979f2b6dda9b01e5205a"
  },
  {
    "url": "assets/js/28.a72c4c3a.js",
    "revision": "ae622a87085e20efa595e24456d5055f"
  },
  {
    "url": "assets/js/29.3b397455.js",
    "revision": "b6b3f30ebd0fee79d714bfaf67525782"
  },
  {
    "url": "assets/js/3.13ad1307.js",
    "revision": "41a8a1058f99f8afcf50928aa639b0c6"
  },
  {
    "url": "assets/js/30.be602de0.js",
    "revision": "91a4a3b7b1d6024733230a66009d22d9"
  },
  {
    "url": "assets/js/31.2f235b29.js",
    "revision": "c29226845fbec5658428aa7b55e6e060"
  },
  {
    "url": "assets/js/32.cb71aa0c.js",
    "revision": "7dd1fbbf117296ae620214582096f10f"
  },
  {
    "url": "assets/js/33.8b48972f.js",
    "revision": "645efcdfe3c0b38fb6a6e8dd808a9e01"
  },
  {
    "url": "assets/js/34.1c70e800.js",
    "revision": "14e09d7a4fcf0233c58d85c3a82603c5"
  },
  {
    "url": "assets/js/35.d84df3db.js",
    "revision": "b6068c6dcff91c7bce9cdc11314e698f"
  },
  {
    "url": "assets/js/36.3d19587d.js",
    "revision": "2a2d41761ec244b1b376f5e655d748ed"
  },
  {
    "url": "assets/js/37.f86fe68c.js",
    "revision": "5c4916a1d5f49298232c450d656b97ee"
  },
  {
    "url": "assets/js/38.102cdcd4.js",
    "revision": "e9ec9d4655f494b685e481953ede5f63"
  },
  {
    "url": "assets/js/39.3a34789a.js",
    "revision": "e7acbd612ac9b87177f21e0b54daca18"
  },
  {
    "url": "assets/js/4.37bf380f.js",
    "revision": "c5811fafdd38d074a3e69d05e87d91ea"
  },
  {
    "url": "assets/js/40.a3e0646b.js",
    "revision": "33ad4277ede4ad06b7e469fa38be1a4b"
  },
  {
    "url": "assets/js/41.54ab5037.js",
    "revision": "af60d838790be62508514a5f15a479d7"
  },
  {
    "url": "assets/js/42.c5495bf0.js",
    "revision": "709c180545c68373eb833f0f070da8d1"
  },
  {
    "url": "assets/js/43.177d6752.js",
    "revision": "5dd00185f9a97ef69c5976665fddc00f"
  },
  {
    "url": "assets/js/44.24a55d4b.js",
    "revision": "7c732cd83a15514e5dc10880ef3c7aff"
  },
  {
    "url": "assets/js/45.ea6d118f.js",
    "revision": "c21014e5d817efe3ff54f76509dbb2fd"
  },
  {
    "url": "assets/js/46.54d77ecc.js",
    "revision": "bcfd7b54da98ea08e4cf2afe610685ee"
  },
  {
    "url": "assets/js/47.a2e1a3e3.js",
    "revision": "fd6dc9957fba58e64418acd810b3aa04"
  },
  {
    "url": "assets/js/48.c970cab2.js",
    "revision": "4d3bb8e29aed6bfe6a20896ba5db25ce"
  },
  {
    "url": "assets/js/49.1902c4c9.js",
    "revision": "7bb0e29d7b7aebfb14a0b9f9a7d7bf91"
  },
  {
    "url": "assets/js/5.493c1e73.js",
    "revision": "772c074bf51c5a3bf7a53bdae7e205ce"
  },
  {
    "url": "assets/js/50.6984fce2.js",
    "revision": "82d585272c82f03b0aff4d55afae8a0d"
  },
  {
    "url": "assets/js/51.ee27a202.js",
    "revision": "47cddfb271c8c255c108c38fc599b445"
  },
  {
    "url": "assets/js/52.87431053.js",
    "revision": "8e5e8133429d16992ad0557d54807450"
  },
  {
    "url": "assets/js/53.12b0a3c2.js",
    "revision": "e9a5c1ca5e76b9b8dc8c6b10c32907dd"
  },
  {
    "url": "assets/js/54.d896e1ff.js",
    "revision": "9c69d107c7a1d316bb4278bfae4833ef"
  },
  {
    "url": "assets/js/55.fb89f57e.js",
    "revision": "e7d2b110f7a696a8d8d95c72426846d0"
  },
  {
    "url": "assets/js/56.4a7d1f87.js",
    "revision": "5c6bd295c6cd874a798b69342f8895df"
  },
  {
    "url": "assets/js/57.ce781f42.js",
    "revision": "dc60f9683b8eb41b7ab19a609176c14a"
  },
  {
    "url": "assets/js/58.f25a71a1.js",
    "revision": "6e257ed02de0d27ea033c36f435d27e3"
  },
  {
    "url": "assets/js/59.865bf786.js",
    "revision": "107aae3e74dec2bce2a362f64867532b"
  },
  {
    "url": "assets/js/6.dc5f49db.js",
    "revision": "93ac2008bbbd40ceeb33151593a29bb1"
  },
  {
    "url": "assets/js/60.ee6bc45c.js",
    "revision": "213c60878498cac519ef83583c5937cc"
  },
  {
    "url": "assets/js/61.806b45b7.js",
    "revision": "d8077db801fabaed8a04a19b9d28aac5"
  },
  {
    "url": "assets/js/62.96e08ca3.js",
    "revision": "a97bfbc9aaa6a7372f00fc37e022fa87"
  },
  {
    "url": "assets/js/63.24fcf7b6.js",
    "revision": "df000836b8718e2a264768d7fe259b4c"
  },
  {
    "url": "assets/js/64.d324be6b.js",
    "revision": "ca80fee3f28907cc9f7c022a552d2439"
  },
  {
    "url": "assets/js/65.65129d2e.js",
    "revision": "0045a1faf624eba109c47f0287f15c23"
  },
  {
    "url": "assets/js/66.bf5af99e.js",
    "revision": "5376f1070aa30295106c60a240c2c72a"
  },
  {
    "url": "assets/js/67.b347431d.js",
    "revision": "338a3955788e7bb6a7ed8151ce70d24c"
  },
  {
    "url": "assets/js/68.f3e06b0d.js",
    "revision": "953937eb40801f5594e024ee1c49adb7"
  },
  {
    "url": "assets/js/69.49588c05.js",
    "revision": "d0c4965ce372668917c08ad2a6701444"
  },
  {
    "url": "assets/js/7.4dd8aee7.js",
    "revision": "bcdaa06e113e77ec8c3783360bc7e2d9"
  },
  {
    "url": "assets/js/70.b1306eb8.js",
    "revision": "abb3824648ed46d3d29a3dbce5f76200"
  },
  {
    "url": "assets/js/71.644ced93.js",
    "revision": "a15d21105bc5ddf185be3e3a4d7bd816"
  },
  {
    "url": "assets/js/72.e9c77fc6.js",
    "revision": "e1f60d20663ee835e70f354d8f6117d8"
  },
  {
    "url": "assets/js/73.1e65edd4.js",
    "revision": "831785ecd8fa3e758a093679ac5b8b05"
  },
  {
    "url": "assets/js/74.0f8b995e.js",
    "revision": "120a219568adeb7dff277ba7d16ec172"
  },
  {
    "url": "assets/js/75.5dc35de8.js",
    "revision": "9740a15f28b4f874979b1a3ef4f83930"
  },
  {
    "url": "assets/js/76.b6fb9186.js",
    "revision": "779e55307615a27883140f47eebacfdc"
  },
  {
    "url": "assets/js/77.9c536a1f.js",
    "revision": "b829d2289142dca02c75bc2123c9bd4a"
  },
  {
    "url": "assets/js/78.fd99e533.js",
    "revision": "ef1cd6fb72d732e1601cd294b5ffa3af"
  },
  {
    "url": "assets/js/79.94dd904a.js",
    "revision": "d2dd863f330a750c596d6a92e82a7e5a"
  },
  {
    "url": "assets/js/8.5d347f15.js",
    "revision": "3053c50a9ad004a48c51a32fa213e6a0"
  },
  {
    "url": "assets/js/80.841adb12.js",
    "revision": "6a30b813291bc33676390f479a7ac436"
  },
  {
    "url": "assets/js/81.755dbb7a.js",
    "revision": "55376a92a8bcf65809092c467d439f4d"
  },
  {
    "url": "assets/js/82.27dbd986.js",
    "revision": "89818ee58fb42f1def0d282d842b7df9"
  },
  {
    "url": "assets/js/83.784b6382.js",
    "revision": "681a422a178b39871eb9a4eeb7391894"
  },
  {
    "url": "assets/js/84.b2a21bad.js",
    "revision": "09bf6d2ce5e05a048ca419657ebe1ab1"
  },
  {
    "url": "assets/js/85.452c302b.js",
    "revision": "74d58bb34bf46307a12794b2a5abc543"
  },
  {
    "url": "assets/js/86.9dcb0d95.js",
    "revision": "e31e086fccfc8c1055ef370bfd81e8cf"
  },
  {
    "url": "assets/js/87.3d64aaff.js",
    "revision": "bbef8cb0332b23c8b376917875032cc7"
  },
  {
    "url": "assets/js/88.c117dbbc.js",
    "revision": "00823252a5a88b6ae7820b1ed76b2966"
  },
  {
    "url": "assets/js/89.2435122e.js",
    "revision": "6e54881e8cd56a7dbc4d46ce6f1c65c6"
  },
  {
    "url": "assets/js/9.0bf1e725.js",
    "revision": "00c8551a51494e06862588741ad7100b"
  },
  {
    "url": "assets/js/90.85b8205a.js",
    "revision": "0ba646991e6803836ff3a02eec4536e2"
  },
  {
    "url": "assets/js/91.7931103b.js",
    "revision": "cafba0af7d4dde10cb24b5a318faf3cf"
  },
  {
    "url": "assets/js/92.472578dd.js",
    "revision": "35727e963e3c2f4a86b5728e06e6627f"
  },
  {
    "url": "assets/js/93.6f07684b.js",
    "revision": "4c65a0cb5c7cf40f08d089bb3a51f8ac"
  },
  {
    "url": "assets/js/94.421e2999.js",
    "revision": "432876718a036d5d35e2fdd311418e2a"
  },
  {
    "url": "assets/js/95.f20bb0ff.js",
    "revision": "537cf3fa4d9beed2eea663b26ada6137"
  },
  {
    "url": "assets/js/96.b7ac7b64.js",
    "revision": "9740eb7a527434b505220b47965c3f21"
  },
  {
    "url": "assets/js/app.d900e1c1.js",
    "revision": "91a5b269a072fe022633a42fdabcc4ee"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "e406c18925b7cd42eb6bc4ebc3b3636e"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "b89125b17864090055549bbf294ad2ad"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "e942ed8449f391675c93dee9fae344ae"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "ffe8c97e728c74e9ec0e90d8eef991ef"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "276d5d09381fd7146b75464ff63a8531"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "4529f129f5bdf64f4a1ee486fd2df46b"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "0043b670a1fae5bf302b6d57f43207a4"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "48bc9e8a5365dc8b6172246116e48b62"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "f9b6d04134181322a6d5d949cf27d75f"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "2e632e0e91a2e02f8987e8025e4481e0"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "73d2004ab220eaa3c55c4ff07597914e"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "fcd37d00c6e48fd198a84b3bf66efa52"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "faaee0d8899c353444d172c89d0e4aef"
  },
  {
    "url": "base/example/2.student.html",
    "revision": "15330a5173a9e36e4ceda02567e7f024"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "e2c16d10d5e349fddc2b2a109c408ac7"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "0156951debd13819591f694045fc931f"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "3824192c7cdfa9ea3ddeb933d9449546"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "5daa37edfc62bb7304972889a3226dc6"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "66cfad35cf450e06141b3913c21739be"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "1f6cee3384b9171e99cab7bef3d0d343"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "bbec05c18fab7853c46208b24724ed42"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "7f0ffe431f6dbb18aad133e10e30edd3"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "c1948c75a6c54b2908cc0d48ee200300"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "15e69ff6628a686e0c5d50270dd95ea6"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "74d227f92207313d5d4b25583e1b2121"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "ada391a4d552d9f19dc4144a0cd86a1f"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "18deeefeb3beb3e464db06a973ff72b8"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "c4b2a2fed80abb2850abf7883390cdec"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "1a26c4ba9d99aa4b44472418b4ca2a76"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "40aebe58d6a6b8defcd7729ce54dd894"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "e2fb86c2b31ba344214682cdd386adfe"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "0c7d9b1621efe2f0a3c4644b6cad6c2c"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "90d5f3dc9b57885c8db8286e64074852"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "42317dd864cd3336b94a8f2beb984cdd"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "24cd846d0a3166ffc0caba08bdd9523a"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "ee1320c5a746d51ed79888fbe46dc82e"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "330a944f08bf5a4a140cee97b01209db"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "ccf48d715fd713f3bfd7746592b96e57"
  },
  {
    "url": "base/ssr/1.index.html",
    "revision": "b86a7bd4bdc9af66e9535a6112868fe5"
  },
  {
    "url": "base/ssr/2.nunjucks.html",
    "revision": "627c79e82886dd8e565b8ee08a41e127"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "84bddb46a1d33bf7adcf728e7c18eb1b"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "1d291c277a4f56a0d5f1c9d73d7e42b6"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "45311936b11b232b28fa4bb0e63fdcbd"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "55e2d9ac49cdeb709fe52f0b72cd7f34"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "3f1e45a890cd39409b0768b96d4beaad"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "b525d3cb591a41ae9affdc46c3d6e078"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "9cd225d4e3cbe44c22d80ecd6a10bb28"
  },
  {
    "url": "dombase.html",
    "revision": "259f99b76dfe3a698235e0ba2b9947c0"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "728f92f02097b4ebcb7c9328808705da"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "payloadcomment.html",
    "revision": "e35d7f6aa3becba72b20ec749dbf3508"
  },
  {
    "url": "payloadlogin.html",
    "revision": "3ca81b46238a9e8c8b54fa5ff2854c9d"
  },
  {
    "url": "payloadoutput.html",
    "revision": "d1262482c84dfaadf8e8112eb702e451"
  },
  {
    "url": "read/book1/1.preparation.html",
    "revision": "a1bfae49837c7f9d4d437778e47c138f"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "753e4cfc1907554ca5c151213104aaed"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "10d3b0e9e0aec214046762d0c056f920"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "7d4079a1a89679b098696f6dd5e93b15"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "8362821c743a378e2802fbea1f6e9a22"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "105db1b6795ea6aacdc13af496ca0435"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "271a3cdaa848afe5448718812c1f69b5"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "b60b82d716b48c24e6e1da08839b3fe9"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "3b8121eafb095a7501732ab541d50773"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "eee01533510bbdc18718f29e84573845"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "1bc7b72d41d47352dfe181425a04496b"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "b8c4820bd721fa9770bf35a296f4c897"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "451ca20eb7a8d3889cec79e0bb04753c"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "028d78e48e7d77665edac47090bbad55"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "4f2c904abbffa803dd46a32e9afd66a9"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "689eff4e60cc33c2750766b4a4d519a8"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "068c492de3397056ad1caf33abe2dd66"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "38517f81ba0e2de43f723ceb54e8659b"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "621f28af3a433e162faef22cfb69330f"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "4c650a1b30e655cc7c60b997ad85d6bb"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "3da53fcd63a1c6698b8b964cdba2c75e"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "7cbbf985e53f07d654af2c4a1705386b"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "8b98541276376e1aa1846d18e3af6f25"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "ca4ce644a3c74c5341722ad4e545af72"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "5758100c727db29b912d73dd356dd649"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "43f906a2585fac1588b3ca821aeebc91"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "49ec846667590c03390986517ec4e710"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "296fbde83d810cb3af6cbdcdc56582cc"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "e3e723f054c44cdb97ed286ce68702b6"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "fc1195565cb5b04e8a8167cf2eacca8b"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "7c267fb0418cab811c14f645d328621f"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "8135c38cc49843e1c8d2f1d4c26d7bf7"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "80554b2aafc2c7e60eaad63be6d5b7bc"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "7ee455d222b33d32d52f16aceb8c2f2d"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "6411bd8b9a646696b5c8c56753f8292b"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "494c03438e30a02c7a65b8acdb96ef36"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "1c64920865a190fd7710e4a6ed915cd0"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "cbcf805a619a82e611fd4977ae34b4f4"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "33f44f7bd0a1f6f1671f9ae225954e14"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "546b9b835c075065f178e935d9992dee"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "d49fc2c79c94c54b24263b3c3657d87c"
  },
  {
    "url": "socketchat.html",
    "revision": "7a7d142dea48f4f1c8f2b584cd0c572c"
  },
  {
    "url": "socketindex.html",
    "revision": "df90336b5a98983c7aede989018684f0"
  },
  {
    "url": "storagecomment.html",
    "revision": "aad0ad6847030b47daa591c423b71771"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
