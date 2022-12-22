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
    "revision": "4fab7088d3ff6e73181d4460db7c0211"
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
    "url": "assets/js/10.803fc439.js",
    "revision": "62d25a96e556d7ecd14a658b000d79e6"
  },
  {
    "url": "assets/js/11.55feaf7c.js",
    "revision": "c82fa90ca04a8517ae8cce874c651f99"
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
    "url": "assets/js/29.2e1353e3.js",
    "revision": "7934c56f77019b027225276ca4b03a0f"
  },
  {
    "url": "assets/js/3.063769ec.js",
    "revision": "7fbe03c5e59e537d1260e1132decf983"
  },
  {
    "url": "assets/js/30.70bd523d.js",
    "revision": "09bd1a279259af80eb58fcbc984c1118"
  },
  {
    "url": "assets/js/31.f7a59d9b.js",
    "revision": "d3935ca82c8d815a654b90d84d4c91d6"
  },
  {
    "url": "assets/js/32.57db3c93.js",
    "revision": "5581ca5ed873c268d29089b00d9323dc"
  },
  {
    "url": "assets/js/33.b507f19b.js",
    "revision": "fa4890d7eb43f942fb91f0e62a83ba15"
  },
  {
    "url": "assets/js/34.fc427935.js",
    "revision": "6d5810a6f216fc3be4af6750cfb1fe12"
  },
  {
    "url": "assets/js/35.8c4fe787.js",
    "revision": "d5b3dca352df586bdcfbe6a9a1407f81"
  },
  {
    "url": "assets/js/36.04aff74a.js",
    "revision": "c5b484d54c681b09a002b06449cf840f"
  },
  {
    "url": "assets/js/37.7f43ec28.js",
    "revision": "5610ef4195b98139ebeddd72ca38eedf"
  },
  {
    "url": "assets/js/38.fff2ed7a.js",
    "revision": "922329efd41cf64c1e1ac76a2868f633"
  },
  {
    "url": "assets/js/39.fb0517dc.js",
    "revision": "9e1cd33bbe29ea7fbebc3e3d83920223"
  },
  {
    "url": "assets/js/4.e7ceefa4.js",
    "revision": "e7514da6832e9715417fec53e9bfab2b"
  },
  {
    "url": "assets/js/40.7d2ad12e.js",
    "revision": "8cf65ac3ffe048691f103e6f83933f2f"
  },
  {
    "url": "assets/js/41.50ffa49d.js",
    "revision": "025f563a4051dccd14ea6b602180eb19"
  },
  {
    "url": "assets/js/42.6f807b5d.js",
    "revision": "41ffe94ddfeb303005bd5878e60a0dc9"
  },
  {
    "url": "assets/js/43.dfc6247d.js",
    "revision": "be66207c60829e31ce44f286e094ec2c"
  },
  {
    "url": "assets/js/44.dbc11b4e.js",
    "revision": "018ab07f474e1fcc9be1e7d67947f5ac"
  },
  {
    "url": "assets/js/45.3fd4ea3d.js",
    "revision": "816e37352c7c3a818b1a64ffc817b44c"
  },
  {
    "url": "assets/js/46.1f81ed8d.js",
    "revision": "b2e4f21d46f4379d7f1543872d380275"
  },
  {
    "url": "assets/js/47.b433d6da.js",
    "revision": "6b89bad09092bba6e139eda81ab7f211"
  },
  {
    "url": "assets/js/48.df642a79.js",
    "revision": "6391d4d0b0804e983e42a246d4b76bb8"
  },
  {
    "url": "assets/js/49.fab1bd41.js",
    "revision": "5fb3b6ffa9e0a20cca1f72a584747150"
  },
  {
    "url": "assets/js/5.064f505c.js",
    "revision": "254778bd20adf7b8bb157465a8697239"
  },
  {
    "url": "assets/js/50.251d24f1.js",
    "revision": "66bffda501ac00912b9775c3989a2f49"
  },
  {
    "url": "assets/js/51.e6e2c5ce.js",
    "revision": "2f0b301e6f40f35edf149863a1147811"
  },
  {
    "url": "assets/js/52.f7ff52bb.js",
    "revision": "6a28fd32033ae24ba6b6cadb3a3064c0"
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
    "url": "assets/js/app.be4c7c24.js",
    "revision": "141826d13fa2099ffe888e0a7723de7a"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "09a9c429c54b9a33837e7c96f96b5069"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "9e9256809af2621e091779e4697ebfd9"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "d6233b5408bd8bba4a0049e33954a50b"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "1e81292af2e0ebd1058d9ee2fc1b2304"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "980acb1ca1a1ff5848bfed70c06e3893"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "c9b206129000a63f2ca041c8b2b16b5c"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "1342fa58e732a421d72ba5948e7f43ff"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "d2fcb3551a296b93ef155124db032f63"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "ed84fe0b1cb556fbde1ba1153fabcd69"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "0eff5729ed2aaa459977aeaa18e7a1d5"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "a7cf9334693ff7e97c94c1c65e13831b"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "f51d984bb35ee6d0774501c7f5d5afdf"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "676558e7a7fd47cbb64c8a9c49a9c387"
  },
  {
    "url": "base/example/2.constructor.html",
    "revision": "8b92bb3a6bedbbc232c90fccc442baec"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "085e10e6eba23d5f4a1c0f240974c227"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "d5e237e0c6a091d8e0d84b2a7613d717"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "962e567a271b4ab707bdd494d72351f8"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "aba8ad27de187ea0a1296911e0a102f2"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "0af372f5f84d0d36d5aeea186a65ba91"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "009b837627707006b03cbd7a9a416105"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "c3436215c37d7e614384852f2ce567dc"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "35916da407263ce89c0d23dfe7a31cb7"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "e97e3fb8c4a678d7137b1c45db63fd12"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "4b9b6c79e17856ccc99479232bcb5fec"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "f1d0a9c3a580b1a5db7693e6c1a52555"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "3cf3a31019a70f536c704889b2adc96d"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "edfdb41ec820ec7cb566b9c075323120"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "db1debe6484d6fd70e2e5544b53dfee3"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "a35157aac9e7bd0724a1a14c0fe32409"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "8dae2d30972072d4922e5c17ee2b0d53"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "925064bf81833b1ac62ea68e14f4502d"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "d0cc49962f8f23ef91b0cc310c1006f5"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "fa519244d47037456c428926824f2fa4"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "7eca43bef620ed9d4a5c3bf42dfa46bc"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "d35439f40249cb1a131721e123e1cce7"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "8780ec653bf018a5f2003359793e7b15"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "22674c21c190f009bd949cbca6678525"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "8c9a7684beb9eae4b18c3760be47427f"
  },
  {
    "url": "base/ssr/1.let.html",
    "revision": "99fef6bd0d12461fc4a369ac040470e4"
  },
  {
    "url": "base/ssr/2.Promise.html",
    "revision": "178b3811300b22b6337c5318dab4478e"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "ef677cfb6cf6d8a50181ca639910e094"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "23b6ef4164b314b69e5580175b843cd7"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "5b22b6dab3b31c02cfd8ddc30a950188"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "f4ca93706b442eb27ca2d4baf5aead55"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "2c2ade2b1c8a2506899962d67728c0b8"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "d7fad9fb861017b69683eacda2d37ab9"
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
    "revision": "11d344bb2db321d73d991873c42edeaf"
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
    "revision": "c4b8f501e78a53dc4c5d458b5728c003"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "3ddd0accd473b194d98fa93d8417fb49"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "8fe885edf8bd3cdb5fabba3bcd924251"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "4b66391fc9fcb019d29378127d5bec1a"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "70efd127f043cde6940971a2895fedb3"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "0e18f6a55abdc0b53acfdb197986a88c"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "78c2278f2750104372388941ba9b6175"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "7dfab51538a48af85108d0406ec46ed3"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "39701da360fe0d175e6678c78415d278"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "146b1db2723e796d72f84ee543eea789"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "796a5231e92aea697393e0d98e6918a8"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "3019be6707452f2a41ab15e355761ec8"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "e4d2f9cd59a455277810532b4851b786"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "edfe9fabb322f07a9d3eb7e32cefaf54"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "47e26bc2216cf216d4fc9949d6a53838"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "cbd2bec53069e27e9aaea9c9ff7a640f"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "933ff93b1e8deb81051eff2f0c66008f"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "e7e6262c08a8946b7f80dc943dd7aa9f"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "038ffc94d1c28c41889af33f570a4d15"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "a53f241931400f3312abe09788018af0"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "8ded14e13f6a2a3b5345916d9a7942ba"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "0b057d10eccfabb12606ac40a4dbb06a"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "ffead52bea5073291fac101a92ed89b7"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "ee14f5d1e1b352777cc505bc5929ccf3"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "f5a50305b6bfdf45544a203b5feec27b"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "a4442dec49a79dcd5815f89078fe0fcb"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "3ffebba634f7a9087d6724d9954a0c64"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "b56fff88d98ac9cb63b2d22ad2e3816a"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "384deee4409a27166a2f8b2d1c6575de"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "32c27698aaf2d5ffea3750807b47cfec"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "7e28771a6c70938f869db968fafc6e19"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "5136fb2dee81191c548109a490ff7414"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "af6b0386b6c2b5feacf3d1ed1336bce4"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "1294d464e29d005037ad53d2be2a4137"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "9174326219cc7e7eb41512cc7f997bdc"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "ba4f283ba288851ce6d5becbc2fd5d44"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "f28041dccd61a84d3d33c49bbf9c7d7e"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "87749d3b46fe14e545010ca41329fe43"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "e72607834e37ca1ba950367938374811"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "05d5c048cc3430539794bdde9d11654a"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "758d4ffbe498246cfcaf47642d8f3db6"
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
