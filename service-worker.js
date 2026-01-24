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
    "revision": "15bad20f7178d69f8108f3a206e1ea52"
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
    "url": "assets/js/10.5c7f0040.js",
    "revision": "fdc49b78d15e341b57a8996a0ea9f71a"
  },
  {
    "url": "assets/js/11.85175d85.js",
    "revision": "20faf07b970557d76bea2f13c9a89437"
  },
  {
    "url": "assets/js/12.d452a440.js",
    "revision": "9a40f04af41d52b13a37300f4c84fd74"
  },
  {
    "url": "assets/js/13.664eb7a5.js",
    "revision": "508729f26e905db33471f58fa1dec5f9"
  },
  {
    "url": "assets/js/14.94fd508e.js",
    "revision": "9aa96c6216cec189a3abd87eb9f82212"
  },
  {
    "url": "assets/js/15.c3cb8ddb.js",
    "revision": "c041dbb2d9ab8d5e3158a732c7c99ceb"
  },
  {
    "url": "assets/js/16.3685b315.js",
    "revision": "777f9439aac615c2bd5c951e62cb39dd"
  },
  {
    "url": "assets/js/17.cdd87a51.js",
    "revision": "315ef03253ea4df1140e9a137ed85b49"
  },
  {
    "url": "assets/js/18.d1dff3d1.js",
    "revision": "273e3329eb49ba9a749057fb4abb5624"
  },
  {
    "url": "assets/js/19.c948284f.js",
    "revision": "5520984b93b98db0ae5bd616b9520ea2"
  },
  {
    "url": "assets/js/2.f1403f8f.js",
    "revision": "6bddd99b41306581cffc5af45cfd138f"
  },
  {
    "url": "assets/js/20.8241608d.js",
    "revision": "2619aeb3d4a0b2c5184d086c3079a108"
  },
  {
    "url": "assets/js/21.f5256db6.js",
    "revision": "ad3f7925f91e58620f4a7c57c1d82609"
  },
  {
    "url": "assets/js/22.a09b3399.js",
    "revision": "ad01bdcb2f4a02623391ea608a829b00"
  },
  {
    "url": "assets/js/23.13db1850.js",
    "revision": "1eb3a85852f2d3a4b79d8e00e29dd37e"
  },
  {
    "url": "assets/js/24.0eaf10fd.js",
    "revision": "09196fb53f94b3ac8eba190f00b56743"
  },
  {
    "url": "assets/js/25.425e18c2.js",
    "revision": "6d6571a4a3eb7998e07fcabc5c14f859"
  },
  {
    "url": "assets/js/26.6dde70a0.js",
    "revision": "460deab7b308338211baee4d52b893f1"
  },
  {
    "url": "assets/js/27.dff9d3e3.js",
    "revision": "177c78b4047624864388d695fdc8cec6"
  },
  {
    "url": "assets/js/28.5ac98d79.js",
    "revision": "90a7e45f066713994e1116aa24ee373c"
  },
  {
    "url": "assets/js/29.f42b010a.js",
    "revision": "073e39818d4a73883cbaf7728456b17d"
  },
  {
    "url": "assets/js/3.211917d7.js",
    "revision": "30a47631171c6ec788df9704eca16539"
  },
  {
    "url": "assets/js/30.6246c597.js",
    "revision": "261d3180c29c3bb4ebaecd33aba6a012"
  },
  {
    "url": "assets/js/31.6d30017f.js",
    "revision": "e07b889f2a9bdb34ab3c557503808681"
  },
  {
    "url": "assets/js/32.f357b344.js",
    "revision": "262901b14165c654498e3edd2e0e9f8d"
  },
  {
    "url": "assets/js/33.9e3d23b0.js",
    "revision": "2e7c0fe3db61a56d13a38f2856afbda6"
  },
  {
    "url": "assets/js/34.5f642b96.js",
    "revision": "8e97f35f5b33fdf5a230245dac226c4c"
  },
  {
    "url": "assets/js/35.838c861c.js",
    "revision": "2fa82d4222f064147e7d1153731b4271"
  },
  {
    "url": "assets/js/36.22ef7169.js",
    "revision": "1cc31d378d6538b9d87f3711f5805be0"
  },
  {
    "url": "assets/js/37.b59ed93e.js",
    "revision": "efde0a1765c836726ea63e09b17e4a29"
  },
  {
    "url": "assets/js/38.15b09fa6.js",
    "revision": "595d5d06bebb08b5fae76cada864c11d"
  },
  {
    "url": "assets/js/39.5dcaa6d4.js",
    "revision": "182d5d1b6d54dce1b051e1ea3f29b304"
  },
  {
    "url": "assets/js/4.82ab0538.js",
    "revision": "a16a61591ba793bc25e1ee8aa9776259"
  },
  {
    "url": "assets/js/40.5a17cc50.js",
    "revision": "36647bbcc87f38af00b84cee32c9b40f"
  },
  {
    "url": "assets/js/41.15ca0478.js",
    "revision": "c118f23bde868d691a69dd0f54b0a05f"
  },
  {
    "url": "assets/js/42.c1aa98be.js",
    "revision": "2bb5e0dc4494da447e7a1f65f0af8558"
  },
  {
    "url": "assets/js/43.2ee7ed6a.js",
    "revision": "77a97f7cf9631f2049307cabafa0d156"
  },
  {
    "url": "assets/js/44.f00b7c01.js",
    "revision": "d16afe75c0e40ff76db968453e5f44c0"
  },
  {
    "url": "assets/js/45.3e6abe3c.js",
    "revision": "3a13c4096997c669f4d79f36bc87084c"
  },
  {
    "url": "assets/js/46.30b8a014.js",
    "revision": "b5589658ddffc8b2b85d603b233ff894"
  },
  {
    "url": "assets/js/47.bf8d8966.js",
    "revision": "53f9cb1e4e08d1736be034c68a4f2419"
  },
  {
    "url": "assets/js/48.a1975e00.js",
    "revision": "6d830ed3b2ca14d9d04e17398e500dd2"
  },
  {
    "url": "assets/js/49.cabf5349.js",
    "revision": "0bb33467db536810912fa8c87272b2d1"
  },
  {
    "url": "assets/js/5.360a9dba.js",
    "revision": "a35c643592a1439be108836f0b91f5d0"
  },
  {
    "url": "assets/js/50.372ae8ff.js",
    "revision": "080d22c7bfcf2899dd097ad11a048387"
  },
  {
    "url": "assets/js/51.68f4705d.js",
    "revision": "25f3ff2f0d5c8cb43e948e2f6965b38e"
  },
  {
    "url": "assets/js/52.c562a517.js",
    "revision": "ebb35fc7bee88718164be1f92773a47b"
  },
  {
    "url": "assets/js/53.2362d8ff.js",
    "revision": "684ab839a416dd1fcc6e6468105e6dec"
  },
  {
    "url": "assets/js/54.253bb77c.js",
    "revision": "57542e63f4dde89ea672ec45a3f5fef7"
  },
  {
    "url": "assets/js/55.79de8bc2.js",
    "revision": "29330abd0cf63934825366ca618b7d2f"
  },
  {
    "url": "assets/js/56.4545f4f1.js",
    "revision": "2e7a242978e59219b09fa32c8ce892d7"
  },
  {
    "url": "assets/js/57.e6ca86dd.js",
    "revision": "875d745d89e5f9c110708cad93759aab"
  },
  {
    "url": "assets/js/58.e0ae70a5.js",
    "revision": "519acd96a870fa9fe2defb588bede67d"
  },
  {
    "url": "assets/js/59.6a94c3a8.js",
    "revision": "cc005b238af7ddf666518f32e37c88f4"
  },
  {
    "url": "assets/js/6.1697a6ae.js",
    "revision": "22d3c8e946915a77103b004b845e9e3d"
  },
  {
    "url": "assets/js/60.c5141b80.js",
    "revision": "d261e55c832f4956cb69600aceba1de5"
  },
  {
    "url": "assets/js/61.997238e8.js",
    "revision": "b58f10ba3dd2a2c32d8ff65bf882e0f9"
  },
  {
    "url": "assets/js/62.6e82ecc9.js",
    "revision": "8db7620aa761c1d2f606b5308338acc3"
  },
  {
    "url": "assets/js/63.f65b45d1.js",
    "revision": "6904393c853a526347c9cb5e71857eb7"
  },
  {
    "url": "assets/js/64.69dd1963.js",
    "revision": "1e71fa960f62bbeb75a7f08f0b9d8e10"
  },
  {
    "url": "assets/js/65.18344384.js",
    "revision": "7bedd74f8a91d818ea8d91c98be40313"
  },
  {
    "url": "assets/js/66.2466279b.js",
    "revision": "82d10f84355afba6e8ff821bef120151"
  },
  {
    "url": "assets/js/67.e21f9fad.js",
    "revision": "f19dc8a222874109d6f9bf74a0218264"
  },
  {
    "url": "assets/js/68.0a1e87a7.js",
    "revision": "fa903776c41de7f141178dfec5afbd28"
  },
  {
    "url": "assets/js/69.9ecb1685.js",
    "revision": "d876e265a51023c41e53d77f7c7aefe3"
  },
  {
    "url": "assets/js/7.0ef86d0c.js",
    "revision": "259bc7fc4552fe4ac18e68ed51c63955"
  },
  {
    "url": "assets/js/70.31fcdf69.js",
    "revision": "ba148eb7cb85a39f607cd48da450384a"
  },
  {
    "url": "assets/js/71.e6772ebc.js",
    "revision": "91154ff5265adfe72e35d029de01ca13"
  },
  {
    "url": "assets/js/72.8622cd2e.js",
    "revision": "f44db35ce4c41ee4f1c01af54507c6b9"
  },
  {
    "url": "assets/js/73.093ff732.js",
    "revision": "55c08962ae3b6fdc689fc0d696fcbba1"
  },
  {
    "url": "assets/js/74.eea41fbd.js",
    "revision": "5e9f6f7e8f60aa24c3efa8ff9cabe412"
  },
  {
    "url": "assets/js/75.6565967e.js",
    "revision": "4729b3bd9a9fc96dc21b23222f191056"
  },
  {
    "url": "assets/js/76.b68a1c90.js",
    "revision": "052a1616b225d14897e12b4717d8744b"
  },
  {
    "url": "assets/js/77.2b0360bc.js",
    "revision": "5deb01ba29f972d76819066a7f4747ae"
  },
  {
    "url": "assets/js/78.e7ecd41e.js",
    "revision": "5de689fa614fd958c78c20c6842250e5"
  },
  {
    "url": "assets/js/79.07da7167.js",
    "revision": "2dd38f7741e2bc563ed86890fc260b67"
  },
  {
    "url": "assets/js/8.a8ba04c8.js",
    "revision": "0e165d8cacdac8c248514b7adfb5cda0"
  },
  {
    "url": "assets/js/80.1ba7f790.js",
    "revision": "dadd28a8d151a4bbb11c66b9ef5ef419"
  },
  {
    "url": "assets/js/81.abd4fb22.js",
    "revision": "11368d5c399ffb698ece7bd2b46ce74d"
  },
  {
    "url": "assets/js/82.4bc0d455.js",
    "revision": "581e52a7924e55a111839965b530a1a8"
  },
  {
    "url": "assets/js/83.762038f8.js",
    "revision": "1c5ed0f16a211c750ea2854c0a25de09"
  },
  {
    "url": "assets/js/84.b7900556.js",
    "revision": "1a55c7a5212e19b4809e2bfef13d4309"
  },
  {
    "url": "assets/js/85.308226c1.js",
    "revision": "94f10c8d5442f100b048a1adaf468756"
  },
  {
    "url": "assets/js/86.4814eaea.js",
    "revision": "16922513ea007186614573717e978078"
  },
  {
    "url": "assets/js/87.603716c1.js",
    "revision": "649d92d0d1b4c9362b6f21d39600858e"
  },
  {
    "url": "assets/js/88.861383bf.js",
    "revision": "9ba122910b16d477302681e043d3b151"
  },
  {
    "url": "assets/js/89.e031c671.js",
    "revision": "733217d14c0a7e4eded62f4bc7f7c565"
  },
  {
    "url": "assets/js/9.2defcf5e.js",
    "revision": "a937c7db865dbfc72dac0fc002859581"
  },
  {
    "url": "assets/js/90.f3de1db4.js",
    "revision": "69f5bf045a4d8bfa2c86165941a290ab"
  },
  {
    "url": "assets/js/91.aad81ea9.js",
    "revision": "2776e665c12c0a2b566d9b29e1694b19"
  },
  {
    "url": "assets/js/92.390424db.js",
    "revision": "8e1d988020ee2f84f1d029ee4e62c96b"
  },
  {
    "url": "assets/js/93.b0516235.js",
    "revision": "10fcf28b3a0d72132bca21064fde0ba4"
  },
  {
    "url": "assets/js/94.0e4fa656.js",
    "revision": "46dd176f3a3d096a3488b9f8a304bcd8"
  },
  {
    "url": "assets/js/95.c0086e6e.js",
    "revision": "7888f1bf355e15fcd09936a33208c476"
  },
  {
    "url": "assets/js/96.c844617b.js",
    "revision": "0ada6f0b67859a0e1b37f0b78a081e65"
  },
  {
    "url": "assets/js/app.b8481768.js",
    "revision": "25b74bd272dc21fd1cbc021802a32147"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "a92f1173a693212754c73a13a99fe792"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "b7494c8ff05807a7709a7a55c71929ea"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "25bb862a6b38f1d8dee45eec55acfdf1"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "a51954b43ce27c501c47a2e1cf0760d0"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "851029bc4439ac2269d6ce879824ab68"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "89fe524c551fa71ca21af183bd0e5db9"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "f281d1c4910aa69592043a6c02cbd48b"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "8621895cd270c33096e781c826d852da"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "d41425754fa2027d95f4748474b68a94"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "fcb9f3970ff53a092751c722a735dda7"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "47c6d230c38c46685b1e11699205b40e"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "bd575a4350806c9974926ba7cde25f92"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "69ecc234a325156fb887c3a7da45dddb"
  },
  {
    "url": "base/example/2.student.html",
    "revision": "c456555cb7068fb4882ea42c007a3455"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "01ed048043fd2213af4aefe46f627fb3"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "9f747667cea3b3f1219e938ec80926a6"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "1006ae887f932607153a378a8bc15e22"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "0c694f8e2b558307c43c72ccb8d6b4e0"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "e8899ccc3340820bbe16ce8b16718623"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "d361ca7b58ca779206cf271cb4bb12f0"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "f0d17b4320b3bc162a6b28cb5269945e"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "3ec1a874e2a39c5384d969c9d1951416"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "ad5c9a6fdf10c62fb8ee77fcbdeeb6c0"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "5709314687bb298ecaeedece3995a7d3"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "60ddbace17db501507e48c639a2a3611"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "0d6807d2da7d78b240333173a28d967f"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "bfc6b4b88ae914a3ac87e9756b7098b6"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "ad86d5705ba2654c23978e5d5497c778"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "b1277fdc273e4471a14eb5e7946f2ca2"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "5ef096b6342967fc6681ff786251f0c0"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "b892353bbe2aa38f95aad8677d082b63"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "120fc8eac64208f5ce7f1e23f516a8e8"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "7657e05b70875460ba20a63d2442a6ed"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "3ac6bbd8a9c5b1976abfb69d64c110ca"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "786e7ef71129a97605780d1df5c04f47"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "04f3467ff354cb6684ce29a36b62bae9"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "c4328c7d8735347742fca3a776de8f4c"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "284cc452b23318499aa876200c09c2f7"
  },
  {
    "url": "base/ssr/1.index.html",
    "revision": "a048b8e0aebc9a2c2c9ed6c002f7aeda"
  },
  {
    "url": "base/ssr/2.nunjucks.html",
    "revision": "e30a8913e6d4029c89e056e9572e6758"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "dd24af754cdb8867e420197f67b5765a"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "e07ed9ccf35a7674f4f8ed6843457079"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "e330921427908f73df7cb650206dd509"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "1ccdcd32c195ff3442f3be5b01ecd480"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "8ba7b217379768f6f6fbdadd8662129a"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "f2f47099c3ff3fb809a18fffc09b5b5c"
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
    "revision": "f2ba334dda6f2129ac9199d2d834e21a"
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
    "revision": "180c13bfd492d638a10d9fe6272dc6db"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "1cf95c050698cd8d1394199858a51d76"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "1216bb9059888b2fd2e4c979ea166e36"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "8b6c941417bf9eb937ae48f1ceac684b"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "d21eba6847e8c780bd3c72943bcba1cb"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "831a25c700e79e2217a7b0e2c8f3070b"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "746fb9c55f12b8cd8485c20c504e33ab"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "5c3037c6a4ce659a86add4d0fe61ee41"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "07d90418a08f5a276f3cfc2c727b5043"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "45aeb13c66c74352526d471ecdf77f19"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "80335409e36f4bfa30aef940027d7967"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "0e071d36fb8f28edb6d2958e131d5217"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "90a7ca677d2d5db11fef755efb9acd6f"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "32aa10c8c4a8dcf35313a39827ab911c"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "6bf5162b63f1444ce134068034908e04"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "40cf839817d9d76a84f2078d34a80e6d"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "dd0bdfc3b9cb602ff79174d63dfde379"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "b5986579f95858ff720122e815588fea"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "c905d67aeaee1a95d2af710d4cc761e8"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "f5784b521f133482bcb7d1af85bec606"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "f3f157a01e94ed885bff99a072914ad9"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "ba66d2d6e21bd3db9d33fac9368b7066"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "b0cef706207dc3d78102430c1a828766"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "f32ce50b61d0d9394b0ab24788139f70"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "c88360de4a4379d6ef28a34c26d94229"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "08407118ac491eb8cbadd4d2c751948b"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "7dc344152ea4b9b061e9ffea0069ac4d"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "aa9790c46f576ba457e63d44d95a4c2a"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "c10ed5cf6d3ec6620f4b8e410b574bf8"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "0308d3356dfa5c6395086a3a24bebfa1"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "65e4d5ff96f693bc5d6db297aaeb6da0"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "3bda9108feeb942e187a476b260b110d"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "e8931ea8b43a68b47c9b5a894662cb3f"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "ea7ebef40ae5c4a26172b7c425ade4d5"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "e5278d32b75a63269d65a53391c72bcd"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "1101f1349bc140713f9c2fe320ded0d2"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "4b0e9ba016850df924736a69a563901d"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "05e827ef05c7e05e6596a94053defea8"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "f265db00f0c714f60d32f0bf729d3ea3"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "4c8cd5cd244abe2ac9175658064458b5"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "cf9d9c9eb0491f986674d156f7870083"
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
