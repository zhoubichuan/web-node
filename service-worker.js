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
    "revision": "f642ce33bf163a51e98ffa1cb85c246d"
  },
  {
    "url": "assets/css/0.styles.7df9463e.css",
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
    "url": "assets/js/10.784c8ed9.js",
    "revision": "13de792415b91faa27c55715059a3926"
  },
  {
    "url": "assets/js/11.61389696.js",
    "revision": "7685a2ebab5c308f8f3bae3116b757e3"
  },
  {
    "url": "assets/js/12.2836a430.js",
    "revision": "71f2777c37d9c50436735b6c36169702"
  },
  {
    "url": "assets/js/13.c0d96b01.js",
    "revision": "ac52c494c8dc567d02e9d63627e5c3ff"
  },
  {
    "url": "assets/js/14.9a8e6a3f.js",
    "revision": "08cf2bef48ba03ba5982f0ad30b9c2d7"
  },
  {
    "url": "assets/js/15.d22c5296.js",
    "revision": "e16bfd1907bb5032331f2a546ed4e815"
  },
  {
    "url": "assets/js/16.4def2cb8.js",
    "revision": "b674167397b7652bf687f32c7ac37483"
  },
  {
    "url": "assets/js/17.873b58ad.js",
    "revision": "0d9f00a0472379f200cb2eaca7ba6cd4"
  },
  {
    "url": "assets/js/18.087788db.js",
    "revision": "ac494abb30f04b26ede428e823fcab02"
  },
  {
    "url": "assets/js/19.2a80927d.js",
    "revision": "1124fe6218316f44f8bbaa65d7d4e81a"
  },
  {
    "url": "assets/js/2.91f6e90d.js",
    "revision": "54307ec8de4a6fe3c79e2a9e61a8685d"
  },
  {
    "url": "assets/js/20.2645098e.js",
    "revision": "ca05a7164f868020a23079f7346e2dfa"
  },
  {
    "url": "assets/js/21.a45c6a41.js",
    "revision": "019f236ceb9b76a2be002157999a0ebe"
  },
  {
    "url": "assets/js/22.8b1fa071.js",
    "revision": "e8c04439efbbc0bcc0cadb8b1d29fc72"
  },
  {
    "url": "assets/js/23.c66ba486.js",
    "revision": "73a9d9e8305ecc7e9549057ab888d0af"
  },
  {
    "url": "assets/js/24.2bc3748c.js",
    "revision": "65e19b34df4a374c7c66a4e5b2030081"
  },
  {
    "url": "assets/js/25.15fbd60b.js",
    "revision": "40352bd41c0051e20d571e61d13656b0"
  },
  {
    "url": "assets/js/26.d2a972e4.js",
    "revision": "4fb0dc13842fd6961f98abc6c30ba947"
  },
  {
    "url": "assets/js/27.158c8808.js",
    "revision": "79509ff4216422c215e823e531908181"
  },
  {
    "url": "assets/js/28.2dc92094.js",
    "revision": "76c4776584fcd293c94dc2e7fdee27e3"
  },
  {
    "url": "assets/js/29.e32064ac.js",
    "revision": "d56e39451e88a2a058cf77a299788dde"
  },
  {
    "url": "assets/js/3.8071131c.js",
    "revision": "c0140db221960c57734b363807b5f684"
  },
  {
    "url": "assets/js/30.448aca66.js",
    "revision": "7c1573a415be357409f91b01c9aa9d0c"
  },
  {
    "url": "assets/js/31.9553df68.js",
    "revision": "70d2f3ca01f4bbc2b17fdf9e540f52f7"
  },
  {
    "url": "assets/js/32.953f2446.js",
    "revision": "77816a509259e619b8a70423231fcc28"
  },
  {
    "url": "assets/js/33.f55cf5e6.js",
    "revision": "be9bad419695cb46973872ae44dc38af"
  },
  {
    "url": "assets/js/34.dd3abf3e.js",
    "revision": "e6c25aed14b6fe60566c24921c9b462b"
  },
  {
    "url": "assets/js/35.fe82e41f.js",
    "revision": "56172895dc181197569eda2e451d4227"
  },
  {
    "url": "assets/js/36.97a00170.js",
    "revision": "f4cc7ac92d04cadc8e36ef363759600a"
  },
  {
    "url": "assets/js/37.5303ce7e.js",
    "revision": "6c070d35718686e61b6abe596eb4f65d"
  },
  {
    "url": "assets/js/38.95f4d118.js",
    "revision": "d5037a6678bffb42b98f3c76892125ed"
  },
  {
    "url": "assets/js/39.09ce57ac.js",
    "revision": "242c625373ad01557dfe894205201d18"
  },
  {
    "url": "assets/js/4.210cb876.js",
    "revision": "74d7d82a0e2b8cf5d0d137a2a081f271"
  },
  {
    "url": "assets/js/40.b7b856ec.js",
    "revision": "fe42c7e6b17b3e9beeafaa5fdf1c442c"
  },
  {
    "url": "assets/js/41.d1a65450.js",
    "revision": "c738d721e13bb6e2c5fbe51eff60786e"
  },
  {
    "url": "assets/js/42.451fb863.js",
    "revision": "c45f219fdee210bd0a99dbc755cbed07"
  },
  {
    "url": "assets/js/43.32b4e3ae.js",
    "revision": "1501dc49cbc61fe768d7b550cd11b56f"
  },
  {
    "url": "assets/js/44.24a55d4b.js",
    "revision": "7c732cd83a15514e5dc10880ef3c7aff"
  },
  {
    "url": "assets/js/45.0124bf17.js",
    "revision": "b35006c423aad99974ab33151a712272"
  },
  {
    "url": "assets/js/46.9dae4be5.js",
    "revision": "b6b220d0281ed18365977e6fcd324b75"
  },
  {
    "url": "assets/js/47.62cc7858.js",
    "revision": "6820909bb76f970b54628c29636c907a"
  },
  {
    "url": "assets/js/48.63e9b107.js",
    "revision": "948e6a34c9a2617d93063d1741f6fc73"
  },
  {
    "url": "assets/js/49.36cd9670.js",
    "revision": "abf97a9093ae26f83306c42734ff3afb"
  },
  {
    "url": "assets/js/5.7d96b754.js",
    "revision": "7396668450b1e605f14e07e189e526fb"
  },
  {
    "url": "assets/js/50.ad4a9443.js",
    "revision": "0265fad0498c536ff501ddc462aa3a0c"
  },
  {
    "url": "assets/js/51.e23bc948.js",
    "revision": "f37a565884bccdb0fc9139463b2c796e"
  },
  {
    "url": "assets/js/52.0d50db46.js",
    "revision": "23654af0d66feeceba51e4875e80b966"
  },
  {
    "url": "assets/js/53.fc0f9fa7.js",
    "revision": "fb1cbe05ba7d32e1f6d95fdbeca38199"
  },
  {
    "url": "assets/js/54.3ae88be3.js",
    "revision": "610f9bfec3af11ab55c6dc0e0ae68f4f"
  },
  {
    "url": "assets/js/55.6271b69b.js",
    "revision": "7b9eefa504cf2ca5ab1286ea13a47c8e"
  },
  {
    "url": "assets/js/56.823cc740.js",
    "revision": "e60347b4d6a73eedea914cab7bba3e83"
  },
  {
    "url": "assets/js/57.ecdd1049.js",
    "revision": "7ffd5e9cb3bd6bea423b2a3c6f143fcd"
  },
  {
    "url": "assets/js/58.ca5ad4a5.js",
    "revision": "73845355780d2f1f2ef547d51812e87e"
  },
  {
    "url": "assets/js/59.fb29ef3b.js",
    "revision": "566c20cab8cf6dbd3b3195c6b3c906f4"
  },
  {
    "url": "assets/js/6.283b0d1b.js",
    "revision": "3e3363e40f62e6ca75ea1d171e937753"
  },
  {
    "url": "assets/js/60.fe0cc6c7.js",
    "revision": "78b91a8385ce1ad7f58777dddff0e0d6"
  },
  {
    "url": "assets/js/61.b95e650a.js",
    "revision": "3d52e5276875b1e52b45fa6ae3457a52"
  },
  {
    "url": "assets/js/62.6e82ecc9.js",
    "revision": "8db7620aa761c1d2f606b5308338acc3"
  },
  {
    "url": "assets/js/63.ee5d80eb.js",
    "revision": "c19ec79174371149dbadc7714c81010f"
  },
  {
    "url": "assets/js/64.0ce57b42.js",
    "revision": "bba5c4f1deefc34005d11dd31ad49d59"
  },
  {
    "url": "assets/js/65.b24c2e65.js",
    "revision": "943d5123bd35e010c70dbf9d05cb6f93"
  },
  {
    "url": "assets/js/66.c28b3b72.js",
    "revision": "475d08cd8ca3497c94d23bf9d9c9289d"
  },
  {
    "url": "assets/js/67.b347431d.js",
    "revision": "338a3955788e7bb6a7ed8151ce70d24c"
  },
  {
    "url": "assets/js/68.16cc05a2.js",
    "revision": "29e616219c966834ca172eef7d4e9068"
  },
  {
    "url": "assets/js/69.e5731e65.js",
    "revision": "3391b004002c6958e58423d8ccd96dc9"
  },
  {
    "url": "assets/js/7.797459ca.js",
    "revision": "b5fac68182a0acc5dabaca8bb5823df2"
  },
  {
    "url": "assets/js/70.927f4a83.js",
    "revision": "04e92e4cd523d018960f1a0b6eb5075a"
  },
  {
    "url": "assets/js/71.b454f64e.js",
    "revision": "c217d5a776fd0057ae589e907efb8ede"
  },
  {
    "url": "assets/js/72.58b01ea9.js",
    "revision": "a4f556ac64863fec1e8d3756d02e842b"
  },
  {
    "url": "assets/js/73.df7085db.js",
    "revision": "bf92c76bbaf479dd9cf792d3778bad52"
  },
  {
    "url": "assets/js/74.1c8889a3.js",
    "revision": "04faa765ac0e0e9042cfeda17cc8cbba"
  },
  {
    "url": "assets/js/75.5dc35de8.js",
    "revision": "9740a15f28b4f874979b1a3ef4f83930"
  },
  {
    "url": "assets/js/76.b68a1c90.js",
    "revision": "052a1616b225d14897e12b4717d8744b"
  },
  {
    "url": "assets/js/77.b8b99251.js",
    "revision": "1be20aee3beae8c8e7647e766588b8da"
  },
  {
    "url": "assets/js/78.e7ecd41e.js",
    "revision": "5de689fa614fd958c78c20c6842250e5"
  },
  {
    "url": "assets/js/79.720ba84b.js",
    "revision": "79575a465b82379a7f6f68c8acfbded4"
  },
  {
    "url": "assets/js/8.f55b8d95.js",
    "revision": "6f7c57e4d890dc6b501ccc081dc7b256"
  },
  {
    "url": "assets/js/80.8c726ee1.js",
    "revision": "3a459aaf626df49b8c4822e29e130009"
  },
  {
    "url": "assets/js/81.b725d406.js",
    "revision": "6fefe369a5b8fd6ca5918066c4a1e09e"
  },
  {
    "url": "assets/js/82.97d38f67.js",
    "revision": "1115f671f8c553b9140e348762f9c2d3"
  },
  {
    "url": "assets/js/83.762038f8.js",
    "revision": "1c5ed0f16a211c750ea2854c0a25de09"
  },
  {
    "url": "assets/js/84.1cce6069.js",
    "revision": "530a9b8b6b409f1f0773c6e09fa1a115"
  },
  {
    "url": "assets/js/85.3376f175.js",
    "revision": "790a18923e196f48a80b32bf7637895f"
  },
  {
    "url": "assets/js/86.6c0abe6d.js",
    "revision": "10f8d926fbc7b33d977ab685ef401494"
  },
  {
    "url": "assets/js/87.603716c1.js",
    "revision": "649d92d0d1b4c9362b6f21d39600858e"
  },
  {
    "url": "assets/js/88.6fee5361.js",
    "revision": "32cd99bba85e7eefbb9674f978aa99c6"
  },
  {
    "url": "assets/js/89.24390d46.js",
    "revision": "9fec843fe490c28e7aa0e1f2f8c748f7"
  },
  {
    "url": "assets/js/9.48ba1ff9.js",
    "revision": "c08bd445edc6a8ccfe05f627923f52da"
  },
  {
    "url": "assets/js/90.9154cca4.js",
    "revision": "0b478ea6e36fc5e3d737902868bca4b2"
  },
  {
    "url": "assets/js/91.6e2ca913.js",
    "revision": "e4283548711f5c11df12bab07889e1bf"
  },
  {
    "url": "assets/js/92.a9d7a9d2.js",
    "revision": "15e634cb7017b50faf1afbb753205852"
  },
  {
    "url": "assets/js/93.4be9a74a.js",
    "revision": "34d01c9fccef43d4346097b0d1dfb829"
  },
  {
    "url": "assets/js/94.705b8dd7.js",
    "revision": "9164b47cde2bc089d4329321210db993"
  },
  {
    "url": "assets/js/95.b128d22d.js",
    "revision": "dba857b078811e8ba0447d166138901c"
  },
  {
    "url": "assets/js/96.b4ac3c5c.js",
    "revision": "8b7abbc360c87d88dabb37a17864b0b0"
  },
  {
    "url": "assets/js/app.33b39edf.js",
    "revision": "066b58fdb40c60b336ce5da36d490dc8"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "1509b39ccf11386daea712ff711278b2"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "8aee7e3006d76c4829dc065abc120ff4"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "043a848737d33701e8722b0006a27411"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "ed8407d8037e565677af517b13a09f1c"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "534699023f87a2ed9f74172716b89a11"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "dc3c2ee5bd248bfd0e50440b25378a3a"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "601e96184f52921cb96bd984a39d11e1"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "486fda002bd0d0e0fb8598b29103ae96"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "77ced5906a771cbc657d2c451264cfb8"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "5e91f159463f79de707ac1362f09fb46"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "2d13016a6df4d532061d153102ccae9f"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "ae0fd339149ecfd2adfae94ab849a6ac"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "018e8e4a1231191a2449c6b8a932f724"
  },
  {
    "url": "base/example/2.student.html",
    "revision": "02d5661ed22606b8b554a2ff94d1bb24"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "175bb32086ca13409299c5599b54f57e"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "73d6713b81af52de9b1285bb2601d908"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "be0d450858804225b9deaeac633e000a"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "4a98d8041549f6b14a39d6586aa09f1c"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "809bb27ef5384fa29f3ddb29ce92b74e"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "891bf6613ac12f2842249d8b1377bb08"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "4e4f3548c5cee9208cdee84c1a5bbceb"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "ea6a01458f4b9af857343e1b21bae7b9"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "6a9ba308f672905391e87c4888327995"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "a1091f3376d98f796a1cf49ec3d39d91"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "d3be07a2b59cb15e3da1df9e3296f907"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "0f847f6547cbc77c1a1ba9828f1d0a3a"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "313f92ea041b91e380be7cc4ce8642ba"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "703e87ae189a491a215eac53b68d7811"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "275a95ad0288046ff2724fc2281c6580"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "481fcd53ff2c8f5501b4bb5e1ddb84ef"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "7a36e94096b48533820edb18f599b8de"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "7d60bccbe972c252449d6614d49be7de"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "4004390618b26d44d818c742b92c38f5"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "8e31d8658d09b7499b47b2a4796941d9"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "30b543f52499a6a28b3d82d3057f960a"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "77547f61056e64b18a7d69bd3e79ff66"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "000c6f9896b24a7458d2b160c9c389c6"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "9545ef3e7c13434bc0e014cb1d4c30e4"
  },
  {
    "url": "base/ssr/1.index.html",
    "revision": "54037c9c768e2c0742d71eb305dc24f4"
  },
  {
    "url": "base/ssr/2.nunjucks.html",
    "revision": "227a9e62d79b4b4725932ee60577c0c3"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "a8ce0f073eae82b439b67db2ec7ec869"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "5287c1912c6533473861d14872dc24dc"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "f3da7273cbab361ed83e2fde93c2b9ec"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "259c476549e51fadb96b7acc09e46a36"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "fa3f32b9b6b702a4ce4755c74e9d1222"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "3b0841b6e1c27db32bc49b76dbc396aa"
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
    "revision": "acd5c9e621ddb6c31da3b8daad17d8ce"
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
    "revision": "c01aa780fac78c44bbc4eed9c40c4e19"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "271358bdbcb23cb1a522bbbd4b21cb35"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "7f52cd559486468b8c570e4b8fd10aac"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "8d342d0cb7e62f18babebddb1e2641bd"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "8e3325f3f8ff4430d64299f85ff28d35"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "4ca2a1dee87b511e0aa2bc9292ab3363"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "84c7bcecdf9e6282de3e335165d06d48"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "449569ce670b683db75a090153a2a4d0"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "de3dadd2c815caef1c053292ab371875"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "b128f327b5000ce470b05216212da17e"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "52be304d3657dc0803d756f8fc9a3c73"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "744e6ff9b61a971d28925c2c0d01acca"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "c57a3e644f0ac284ee22d24f350d659c"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "5e94fd0374141567982045a918ecabd1"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "f083dfe20cceb89b1f4ce05624b0db95"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "344bdc51cd4c7641b9d35541fe5601c8"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "c5e741781e560bc9940bef4e611b24ea"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "2c95b132b4ab7c3007eba2d4f4d4c01e"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "07112b278afd81b57c227b1f8a63107c"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "02ae4a4547e51fd76d88de29625327c9"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "1d5cbdef4ae950c3559878321c6e3fe7"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "4b2a0cde7632bf954b178afb27690d4a"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "4e18bf08f3894f84094513037733363e"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "e469e7844a3808d2e560a32b587e041f"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "08b4d27d4bc0bcc16545848f4b780fba"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "becb836c36e74d3eae6f0b14ea94659a"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "365e5d86d841ca2aea12a19ad3498bfa"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "ee97774b66821677e3e898179996c857"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "03dea7d45b2d571ad511667b227b584b"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "0f9d86b2326eb25aadba5f493f6f714a"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "9300fd9cc36940ce4bdd0bed1bc81366"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "bd0b83e3987bef4a8fd8bdcf45bb0704"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "cb7ed21a0a8d0b4be6ad395a72283ede"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "8b2cdf5d87f69c50b0f264b98b01130e"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "7221c9620d25a857129a910c2cbb6a5b"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "1a8fcf3879855c5d831ab96c29371f87"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "18b0d0647617adc16d90cd9212814181"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "f111da888ab7d4136d89ddc8957de026"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "6e475cc64cb9f3fd16f74e1a5e19a1d2"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "63c84b369e330b0fbb323737117b6104"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "6352b1a07bfcfb8fdbc59532ac6369f1"
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
