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
    "revision": "fbc5736b50b6a5b2af58344f645be1ff"
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
    "url": "assets/js/3.36afb0a7.js",
    "revision": "09d2bf122b9aca520e1b3277fa6465ce"
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
    "url": "assets/js/app.8883fd96.js",
    "revision": "c43a2e7efacec72d9cb021a3c30bdbf8"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "07020fb7486601228e419e536191706f"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "6d0b0a2db1e2449d9db92b24abbb6d9c"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "62f167fa9d5b0166d1b11b2758bffcc5"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "afba474aeb23e80c6cfeec34d675ddbd"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "3abe182a304fb9ca0967fdb5c392a01a"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "4a6b38e7ab3d31168d6fc50f8cbc4d80"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "c9d477d2e9112fb563cf4afe7d5339a2"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "2d8b55494c3de141ab5dbb6a38edefdf"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "96aa9a6e2eb93643cc8b3ae498c70941"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "89b3772cb8015c4e5904b163ce396a04"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "62ae6ddfa75c804057627d666b128e83"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "56dd2dff7dbcebd5f6f429bd0633656c"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "aaf1360dbe3b18804c9a57b489c70a5b"
  },
  {
    "url": "base/example/2.constructor.html",
    "revision": "0176b165483dd17f0c5f44b99e0ba0bb"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "c21416c00e8841599e61656691eb574a"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "346ead8094312134bd5619e39fbb9b53"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "cb9abfe8b6407cf50f6be126278d087a"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "c7c57d829d044a6c35a97e3526731391"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "5015a986c41268294db12d8c9ec36c3c"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "ea281c96d960e2bb3296f9f821d07531"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "5d2d418614f16bbe26f9e2c71b54859e"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "c9a219c0fd90e6a44d57d2646e6411a9"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "5a068deb61a9bf30386e839e366f0d02"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "b94a4c0ccdd872c10a7bdd10a1fa0f61"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "55f989466628df2c8520b043919a3159"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "a602b37b742f690cca6fba3ca13f64cf"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "f567b5b745ab1a138e6644e5e3c68224"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "0389ac64cb2fa263b4e4910d9ce7b5dd"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "697cd28683ee9592c10b8053692e1ad3"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "6b56fbea46a7289a7818afd626c4b967"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "e288a62d96c31c9f312f887f22d4252c"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "c382eab9e385b7e0faa69b09b259913e"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "c34f6c42f4e14967c7f610c102c244cf"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "0085907cdbefc63af6bc3fb1bde2de3b"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "6e4b9c6f06d121d86a7ac25084c2515e"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "c8f97c23d61cf57405cacecbe3370ac1"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "fd9cbd86a3c8939cf69629cfcccf3879"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "9e5147d3caee65b271b86e18c12d7661"
  },
  {
    "url": "base/ssr/1.let.html",
    "revision": "d399beeaad66f2e17254eea013b62da1"
  },
  {
    "url": "base/ssr/2.Promise.html",
    "revision": "0e2281a93c31d42aec1ef161ec736e61"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "6dcdfcc2dd0bfdc055e7bc9bc62834ae"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "06cb4e04c0a38e60b774bbee475bd8bd"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "a078ef9789a75b8c7c8acce146a6d6a8"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "0cc91a1c641155a067e7b8ab05a9ff5d"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "2131e97130800885495eae7954b1c2f6"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "ce12df6055aa86ab742510f9f5d19f00"
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
    "revision": "77ba143bdb1710f26bbacdc3ecf42473"
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
    "revision": "e62d9f7876a0eb06ae91de572061323c"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "4752b0903538266ff958be7caf35c888"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "8851bc40f220e558d4e90b0011ea634c"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "6f719257ad1a7292ba34f258615bc256"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "179cc3f388b28092f25cdffa99a797bf"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "dd979e2b4bbe2341c23241c831fa7e01"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "604ee299e2b5977e5376dbdf36c4d300"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "72c4100ae2caf6bc129cd7a46818f852"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "8e312a5471d65253f21ef93f35d186e9"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "55abe186d77214098e52fb0436bbd23b"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "fcd13beae5ef4e7768637f5eb858fe77"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "86efe0fc8012763710fe943fea8169a3"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "42521c814b1f3f7a0f8d05678bdf33ec"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "c1f777a57d9d66a03debdec7ec683b0d"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "b9ea363953f7eff25911bb3e23c333b4"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "492edcc4f85f0faa766293ed97c6538f"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "88966b6f1e31f65dc7aac8c9c4dbdbd7"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "89bb0a84cdf569f4cf273c6cf4cb29ef"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "63aac110d6052eab7f3faf0d3c4bb23c"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "7d07989306f569bb93a63203488772b1"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "dd1328968dfd9bcb9ccbaf48110528b6"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "696ffa83d7e4c7870eede16182dfefd4"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "354cf9e1cc0a284357f467df67b6a6dd"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "c107a8fd32921d9c0aa05be8983d4032"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "87a06ae39d1bdb3eeb350507930ae859"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "508b3501e53aba6596e50c4ae63fbffe"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "fce2655fa5d1542b3c180bdb6966129d"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "5e4b40e5c71651ca4a90ece29397888b"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "4770eb26d1a3f9f810041dc104a76a8b"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "2595bd98f904c3f5684e9ab758a2a1ab"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "459347813b105203e812f536f0994fef"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "e699fe79b38470a0d347505f4cc77cd9"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "21209e7df0ca28c80a27d1719f4ffff3"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "ee4d7e2283fa0be93e304ec2610cd320"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "b5d6222c1fa0b3b45ec4e842fe155465"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "522b34507e6f95e579ee802d4ead6d57"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "b62a1992e91c8463d61cf469ffc0f4f0"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "81e4b71932874e8534380f822eb07a70"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "a3f5a3589ff20bf41a2cc203a0632f0b"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "e64b05501fe5a917481d1b7ea1b9f7c7"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "f8638192d9ea8adc3fc6118b1d0758f5"
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
