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
    "revision": "0d32e7be65594fa2f4349f67d704ff99"
  },
  {
    "url": "assets/css/0.styles.8ecb7ae8.css",
    "revision": "2cc46d19dd86ddf93cacd659da1427ef"
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
    "url": "assets/img/browser.50ecb193.jpg",
    "revision": "50ecb19343dc31f27acf3bbc5160ce8a"
  },
  {
    "url": "assets/img/eventloop.da078fa3.png",
    "revision": "da078fa3eadf3db4bf455904ae06f84b"
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
    "url": "assets/js/10.bcc117e4.js",
    "revision": "d462a47c9323398c93f3932a3bb1856c"
  },
  {
    "url": "assets/js/11.9a00cc4f.js",
    "revision": "ea6a3e73be9022725483027b233eab97"
  },
  {
    "url": "assets/js/12.b15544c0.js",
    "revision": "46a1f782d01f9b90972c156424485772"
  },
  {
    "url": "assets/js/13.fdee59bf.js",
    "revision": "0e64bc61ccb24c31ce5fdb8a81eea1ca"
  },
  {
    "url": "assets/js/14.7a1ca319.js",
    "revision": "42da1e01df63287970875ab6c1c3fbad"
  },
  {
    "url": "assets/js/15.088efe98.js",
    "revision": "33b25d155fd911481e40158a8025dea5"
  },
  {
    "url": "assets/js/16.a8a2031e.js",
    "revision": "8ba5cd33d8746a4eac3210d7ba91b9c9"
  },
  {
    "url": "assets/js/17.0b7c9aa5.js",
    "revision": "ef13c8e8d40111ace990375adee004d1"
  },
  {
    "url": "assets/js/18.7cda8786.js",
    "revision": "92c0ba4f7a7bf9675343a6a7ffb3845b"
  },
  {
    "url": "assets/js/19.691df785.js",
    "revision": "433a48b7a523a5d5659498c495406e00"
  },
  {
    "url": "assets/js/2.40e22c0e.js",
    "revision": "882c31a24046bae13d994a761ff6931c"
  },
  {
    "url": "assets/js/20.4527d59e.js",
    "revision": "9383276812bdf6635d870010220565ed"
  },
  {
    "url": "assets/js/21.7e869dbd.js",
    "revision": "5b65b7a896bc3858a684d08bc9055e70"
  },
  {
    "url": "assets/js/22.84087450.js",
    "revision": "5df141031c97827b8cfce411d1157fef"
  },
  {
    "url": "assets/js/23.58c6ceac.js",
    "revision": "e411f3c26f5a1174f3f29911d64bc3ab"
  },
  {
    "url": "assets/js/24.1981f967.js",
    "revision": "1063f207c4ce725c6ddbe139348975fb"
  },
  {
    "url": "assets/js/25.33752898.js",
    "revision": "be8254c6d8171869d7f633d676210747"
  },
  {
    "url": "assets/js/26.b5a71e2b.js",
    "revision": "f1d8d6218c69a50d5feb1a813c811293"
  },
  {
    "url": "assets/js/27.494158ca.js",
    "revision": "fc4f1b25973a1178cb16c73fe3db94cf"
  },
  {
    "url": "assets/js/28.86160fce.js",
    "revision": "b67ecc50ba78fa4124d8d8f7977cac64"
  },
  {
    "url": "assets/js/29.9c797626.js",
    "revision": "0427fc8ac1c993f229b2b93c2c1e3235"
  },
  {
    "url": "assets/js/3.575e1932.js",
    "revision": "7c8eb223e05fe4a66848faf905154efc"
  },
  {
    "url": "assets/js/30.bf42b36e.js",
    "revision": "78042883ee3f4e762feaf7be9621c568"
  },
  {
    "url": "assets/js/31.7127f13b.js",
    "revision": "d0b99c102436a5032f1601f976f39746"
  },
  {
    "url": "assets/js/32.4a75db40.js",
    "revision": "324ecf3a69150c77bc8381ef6a6329fd"
  },
  {
    "url": "assets/js/33.780285b1.js",
    "revision": "8b4d8b4606e02089abf63f24b60644b2"
  },
  {
    "url": "assets/js/34.f7863113.js",
    "revision": "d9e7d26b4a17030dbf5764d5eab19727"
  },
  {
    "url": "assets/js/35.bf288773.js",
    "revision": "a9976b9dd078929403d364a5dda876ae"
  },
  {
    "url": "assets/js/36.89200260.js",
    "revision": "b1d13a7eee5b970bb2e6e8503d9837f7"
  },
  {
    "url": "assets/js/37.4201127a.js",
    "revision": "06687a599d58eff797b2f332d6a45666"
  },
  {
    "url": "assets/js/38.1873130a.js",
    "revision": "8dad9b15f2d8a2ce7983a97e67436a83"
  },
  {
    "url": "assets/js/39.1e09175e.js",
    "revision": "3d26b47a28ec3682b9716a58a05bcb5b"
  },
  {
    "url": "assets/js/4.ce4f12cb.js",
    "revision": "92dbc479302b4bae6af4eb2c51c2f81f"
  },
  {
    "url": "assets/js/40.a338e755.js",
    "revision": "1e7f075dfcd19384dac5d1978c317c4e"
  },
  {
    "url": "assets/js/41.ee3f8fcf.js",
    "revision": "23c3fab089ff91a9d280ab7576060f9a"
  },
  {
    "url": "assets/js/42.f6ba3069.js",
    "revision": "9539054163394abb16354e5291deb9c4"
  },
  {
    "url": "assets/js/43.7efd0e8a.js",
    "revision": "9a2656ebb6203fa921e088d2c8b024cd"
  },
  {
    "url": "assets/js/44.739dfad3.js",
    "revision": "17e37e846da5e66de2210c4f64ddb04a"
  },
  {
    "url": "assets/js/45.cc149ad5.js",
    "revision": "4cc9a5edffa66b5bbafdc18e452a13bc"
  },
  {
    "url": "assets/js/46.dac8fa12.js",
    "revision": "b7bb995827e898668a9b02faf8d460f1"
  },
  {
    "url": "assets/js/47.5a44579d.js",
    "revision": "c4796ab720f3dc3a2d07704181e1c454"
  },
  {
    "url": "assets/js/48.9a49cbb0.js",
    "revision": "de7da53695f42417ae989780d063fa30"
  },
  {
    "url": "assets/js/49.d5a1cda8.js",
    "revision": "1d22a260a37b98aec3ce64d2fab6a323"
  },
  {
    "url": "assets/js/5.064f505c.js",
    "revision": "254778bd20adf7b8bb157465a8697239"
  },
  {
    "url": "assets/js/50.075f566a.js",
    "revision": "b9240b85ac76f79f966199e7fc1f846d"
  },
  {
    "url": "assets/js/51.9b3ff7ee.js",
    "revision": "ea2fa23c630d7e3c82805414f118b41b"
  },
  {
    "url": "assets/js/52.9ab5e907.js",
    "revision": "9e04e4a9ee060bdb41e0ca8fe3c15d69"
  },
  {
    "url": "assets/js/53.fa0710a1.js",
    "revision": "6f5d50037706de8f9ffd92fbc3d4e6c7"
  },
  {
    "url": "assets/js/54.4d7faa80.js",
    "revision": "d40ad3c12da36f5a3159d2616f6e5b5e"
  },
  {
    "url": "assets/js/55.c3c81557.js",
    "revision": "aa32ae513969a48aa586f3f57c2c1e93"
  },
  {
    "url": "assets/js/56.39fe66a7.js",
    "revision": "af732e1af5c99bc2022c48e35149ba4c"
  },
  {
    "url": "assets/js/57.5f1f16dd.js",
    "revision": "03632376a0111203b55e09d732aa1173"
  },
  {
    "url": "assets/js/58.6b98ddbe.js",
    "revision": "36c4abb1b1ec0f3944feb67b4617d1db"
  },
  {
    "url": "assets/js/59.d89797fb.js",
    "revision": "2aa1db199ab8fc714c3dc236053ef2b2"
  },
  {
    "url": "assets/js/6.268b5135.js",
    "revision": "1e5c926257dd4147818103192a8e4127"
  },
  {
    "url": "assets/js/60.aa4aff80.js",
    "revision": "3ffe5f540bb12d04706555fb46748fd3"
  },
  {
    "url": "assets/js/61.1d4c4841.js",
    "revision": "2d3a2cd9695874db4b1b8b277960e3ae"
  },
  {
    "url": "assets/js/62.fadd2a3d.js",
    "revision": "3d403f9b20c34e9fcd015310d02d5996"
  },
  {
    "url": "assets/js/63.f941f25d.js",
    "revision": "cec5b2b515372cfa4d2d675316aa7eab"
  },
  {
    "url": "assets/js/64.3bbfbc7c.js",
    "revision": "31356641f180bf77b25555bd7ee14136"
  },
  {
    "url": "assets/js/65.151fcb19.js",
    "revision": "70a7a9137f2841b35cccd81bb4b9e2fc"
  },
  {
    "url": "assets/js/66.d38fa9cc.js",
    "revision": "45afc8360d62de34dbc3e8e2cc89d69a"
  },
  {
    "url": "assets/js/67.792685be.js",
    "revision": "b936c94320be5d50ae65713ad2a14d34"
  },
  {
    "url": "assets/js/68.e57bfe36.js",
    "revision": "d5538d90e1ce3b2b4ed34803b7107469"
  },
  {
    "url": "assets/js/69.e06679e5.js",
    "revision": "753cbbfdf09a3def4566454c537296cb"
  },
  {
    "url": "assets/js/7.d46642cd.js",
    "revision": "c8685bbd62345ca3660e9383a29a7917"
  },
  {
    "url": "assets/js/70.2d24a048.js",
    "revision": "2102a77eba868011d670f2f180bed700"
  },
  {
    "url": "assets/js/71.dc337aa2.js",
    "revision": "13e26e4d0e0590e90da0038ffe15c124"
  },
  {
    "url": "assets/js/72.90836a6b.js",
    "revision": "f8bda94c4155a1144109139282f048ff"
  },
  {
    "url": "assets/js/73.d12b15f8.js",
    "revision": "3e58794051836fbae6ea4172e258e447"
  },
  {
    "url": "assets/js/74.b2ca9f17.js",
    "revision": "ad3f97ca884b654248081e419ca42fd3"
  },
  {
    "url": "assets/js/75.e75b5539.js",
    "revision": "d8b3e1419b4a0b1c909bc27c39495f45"
  },
  {
    "url": "assets/js/76.f11101f4.js",
    "revision": "c35c9ffc600b5ae44d6f5e7c91fa43ba"
  },
  {
    "url": "assets/js/77.5aeb1dae.js",
    "revision": "0b741cd2478d2e40a44ca4e88829185e"
  },
  {
    "url": "assets/js/78.c1620227.js",
    "revision": "80eeee516a09c9a2190abdd181071e18"
  },
  {
    "url": "assets/js/79.ab078d1a.js",
    "revision": "fbfab6135f7f516112f1a8a0dfde0e80"
  },
  {
    "url": "assets/js/8.eb60c1b4.js",
    "revision": "541db0a3bc1efe1a9c222ccd7a1b989b"
  },
  {
    "url": "assets/js/80.606bb7c1.js",
    "revision": "5eed92181e11d35fb767fe57a87d8e3e"
  },
  {
    "url": "assets/js/81.073fc834.js",
    "revision": "08b912dbca418643b1727dd0abf53b8c"
  },
  {
    "url": "assets/js/82.8599f1ec.js",
    "revision": "1b061aae5c3f6ed09ddce501120e6d19"
  },
  {
    "url": "assets/js/83.0e02356c.js",
    "revision": "027f8ed6eeb7d7ffd3ccac8d6883782b"
  },
  {
    "url": "assets/js/84.7fb14d72.js",
    "revision": "9d6261725cbbc0607f95ec7ae6e98e4b"
  },
  {
    "url": "assets/js/85.00b7c9e8.js",
    "revision": "738850d68fdbf62840d7e4e59a380869"
  },
  {
    "url": "assets/js/86.5729050a.js",
    "revision": "66ffe37c4a465686235b23338c1bed7b"
  },
  {
    "url": "assets/js/87.4b35ace9.js",
    "revision": "4ca0d12fa59eb9d28f4051c231007b5b"
  },
  {
    "url": "assets/js/88.4f638721.js",
    "revision": "de7753180b821dcfebdba9dca5f4fce1"
  },
  {
    "url": "assets/js/89.17408938.js",
    "revision": "279b134b676222400d282adabaac1b78"
  },
  {
    "url": "assets/js/9.76416866.js",
    "revision": "8810c4f62b5ce16b6aa45800b278e555"
  },
  {
    "url": "assets/js/90.c31aa532.js",
    "revision": "c3cb7be7b8636f5c0d1083940fae4ed7"
  },
  {
    "url": "assets/js/91.61edc3d0.js",
    "revision": "1f390188526cc83e20420a4781ce0c8d"
  },
  {
    "url": "assets/js/92.628135ac.js",
    "revision": "60186d9b098c2051d100468ea39faaf6"
  },
  {
    "url": "assets/js/93.bfcc633b.js",
    "revision": "49f2cbd3b4d212920d94c5f20a4276f6"
  },
  {
    "url": "assets/js/94.684ab296.js",
    "revision": "a85cbc5a90bea7c927ac2a1ef7f17b9a"
  },
  {
    "url": "assets/js/95.53e8155f.js",
    "revision": "56a86abbdaa5b6e82635d7fcd14d649f"
  },
  {
    "url": "assets/js/96.9644f379.js",
    "revision": "ed678562cbad7d826f2e6539071a9bea"
  },
  {
    "url": "assets/js/app.4fa46a7c.js",
    "revision": "da6c8e329e1a3e23a8539e654e27e112"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "8a74e65ae567a9ea928f81a5ad04f2ae"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "dd4dfcb435fc2bf09e52e95d512655d8"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "5e11de0418bbf68f281e9f1b40e0b9ff"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "3c8e82393c63c522ee7824cd0839ed2f"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "71c8eedd149fd7ec057fb173a0d3762e"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "dcbebeaaf3eb34e30fb518a11df86b16"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "c9cdc1a9c34eeb28349067a12c854dd4"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "39c0b1b93f065b4b6b25667c310acc01"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "17e7286db7032a856e77f9b2a7ce49cd"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "c1880157fc3cf51b376f397fe3028c3d"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "3365c42f76906dda92a57a734d620395"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "ff8dee8422970f14cf7bd6a481f0b585"
  },
  {
    "url": "base/es6/1.let.html",
    "revision": "85eb5b9b942858706966053bccd02f9e"
  },
  {
    "url": "base/es6/2.Promise.html",
    "revision": "dcbcd5f407b3f1aeaa1944878092a621"
  },
  {
    "url": "base/oop/1.objectOriented.html",
    "revision": "ed3d4996b19cd4a914636df2e5708d1e"
  },
  {
    "url": "base/oop/2.constructor.html",
    "revision": "65c785814580d4d495660d4057fac367"
  },
  {
    "url": "base/oop/3.prototype.html",
    "revision": "78e8d3dbfa92b6f98332ecd00cd43554"
  },
  {
    "url": "base/oop/4.function.html",
    "revision": "13bab483b4622aa2ddbd9618a87a6bb0"
  },
  {
    "url": "base/oop/5.this.html",
    "revision": "2deeef24479ad82bcc58ed58bb0c40d2"
  },
  {
    "url": "base/oop/6.origin.html",
    "revision": "63dd615d67c2e3dae99fccab4cd02fc2"
  },
  {
    "url": "base/oop/7.extends.html",
    "revision": "93a4354d8d103466767dabec49724355"
  },
  {
    "url": "base/oop/8.jQuery.html",
    "revision": "ae4b45d0c253f0ab538dde6715bed98d"
  },
  {
    "url": "base/oop/9.lodash.html",
    "revision": "eeda95addc251a490251653816f71300"
  },
  {
    "url": "base/stack/1.node.html",
    "revision": "b0fd0ba5d46caae08054ced2315875f9"
  },
  {
    "url": "base/stack/10.cache.html",
    "revision": "f06ced25d2770de94c1fa4bc3f810a95"
  },
  {
    "url": "base/stack/11.tcp.html",
    "revision": "ae9567f72fb678a989989f36774b286a"
  },
  {
    "url": "base/stack/12.yargs.html",
    "revision": "4b66f9cf34ea38d1fa9321938aa3900e"
  },
  {
    "url": "base/stack/13.compress.html",
    "revision": "5a8c636212bc223ce9354a4b95dfcb91"
  },
  {
    "url": "base/stack/14.crypto.html",
    "revision": "4b1b470d33d84963343fb83c465ac2af"
  },
  {
    "url": "base/stack/15.process.html",
    "revision": "2540b6053314362b47cc91fb81842c0d"
  },
  {
    "url": "base/stack/16.action.html",
    "revision": "47b7ff2d03c423d309ce12ecd1490277"
  },
  {
    "url": "base/stack/2.install.html",
    "revision": "a185059ac95a0decfa8a1cafce1b060b"
  },
  {
    "url": "base/stack/3.repl.html",
    "revision": "fbc9631ebfb29232b30b99239add983e"
  },
  {
    "url": "base/stack/4.core.html",
    "revision": "e173bf436b49f9eb823039b43101e182"
  },
  {
    "url": "base/stack/5.module.html",
    "revision": "85a81f95686fbd7b94afd241809a88b5"
  },
  {
    "url": "base/stack/6.2.html",
    "revision": "df17797034f9edecabf274f12100da6c"
  },
  {
    "url": "base/stack/6.encoding.html",
    "revision": "4d13a783fa03b22b6ff329362293643e"
  },
  {
    "url": "base/stack/7.buffer.html",
    "revision": "a9b2061595a9aac9c8dc904944a31473"
  },
  {
    "url": "base/stack/8.fs.html",
    "revision": "61e1a5710e0aa8cfd887fb2e2419946f"
  },
  {
    "url": "base/stack/9.stream.html",
    "revision": "9827ae2cd8857eef516ce7a10b5ac13c"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "ea4868d83931a585e6c9e18809d6a9df"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "4f0494c925888dae0b5480c43711ae11"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "1e61c03fb2fe3f41fae98672eccf4ca2"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "b77fd1ab26e65c5ee76bb640e2ce6201"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "c3700a3185c8af78b40c6560cfaeace8"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "e0985ac25b1e7f6875720fd00afc6bd0"
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
    "revision": "520f58c19302e3e7e9470272f577fc3c"
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
    "revision": "2d554cd37e08708acbc89b0388be53a7"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "0869a1863bbdaac00232edac8591408e"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "299d56e6c98276285af06854bec827da"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "0c0a8c604513842e860c43535c3b0304"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "2bd74ce2d612c93aba6c07a8634b78ed"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "d9c6df98258910b86b100caa2793e42c"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "ffc9a1eed9d21b123681697a03f5756e"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "b3d9e367bf071010b7ad42d282eed980"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "3b3f8ea052beda2ef1785f6b0ec02c1c"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "8b58df5505a8bdd6189567bb2678a29d"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "9dfe35dcd7bedf0cc94a78cc3682bb54"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "09b99ddfb59bcae6e1a44db27091b871"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "13e3eed6b177b3cd74c2fbba5f7e4287"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "ad3ae07463b172205f6fd82035288741"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "1c7e405f031afefe834ab273c1b046c7"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "9d7b116a05b5bc3e6d4e26765ed555f4"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "3ca35ce234d33ceb7224ef50f393a8c8"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "6905f1d20f7cb2fa410d0a372b2057a0"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "304262229140c63fc6fbc5963e985999"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "33c4dfeadaf54b37c64753235747b7f9"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "f83978969340bfa32be2509fa129f506"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "9f13a8d31c8c126be8c7ba644ded07c1"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "ff1b1c033d74da8e8d631a473879c0fa"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "f617b03a2048d1c1d1888170ddc0b765"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "0982f156b339b7c7db63d8db1ac2fc97"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "6a8d8ddafa85aeea232f4ce70f6cc247"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "af4f670624ceb516620cc7edd6dc1d38"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "b5acf6c47f5efa17c1bb5651976dad0b"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "1364ec7bfddcb45783fb5944582b3579"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "b15608980f8803141dee743bbe1ecd46"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "fb124718440aa915f43f27c5e9e8de02"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "2fd864fa995a5232bb7c5d13ffef45d7"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "fdc310188979d71d3558ee36e94aed3a"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "83e740a63ec95a83c6de11eaeb63fe41"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "bed993f0c95041f4a7117311f54e7b72"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "8eba12e0e99aff7261b79f606b2ec423"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "7b9255fbde630ae69edee6bc53385d1a"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "9cc0113d8c0c62cee3ddbccc9d529b0c"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "92cde1df80f351eb5bb70c01fe9b2ed4"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "c759d96677b269bc88d2277104ede6a8"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "0c5ca6fbd7412b59fdaf208a5ac3851f"
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
