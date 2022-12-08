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
    "revision": "ecb593c56b1a8f41b268eb5776b1260b"
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
    "url": "assets/js/10.29077bfd.js",
    "revision": "f87792654ab8b19203377efe4dd61921"
  },
  {
    "url": "assets/js/11.efd460e4.js",
    "revision": "73c0c75ea11e876975786dc410d6742b"
  },
  {
    "url": "assets/js/12.3001c9c6.js",
    "revision": "6c70c499ff8cff1e9e9559a39f9f1805"
  },
  {
    "url": "assets/js/13.3d9694d0.js",
    "revision": "59e23ac21d0003681d456b621263a385"
  },
  {
    "url": "assets/js/14.49970eed.js",
    "revision": "455add401fe16baca18c561f9da05519"
  },
  {
    "url": "assets/js/15.088efe98.js",
    "revision": "33b25d155fd911481e40158a8025dea5"
  },
  {
    "url": "assets/js/16.03a3669e.js",
    "revision": "5bc470b051b833c8c936fadde971737e"
  },
  {
    "url": "assets/js/17.fef33af1.js",
    "revision": "79f3de1879abf623139036e0b9d4e05d"
  },
  {
    "url": "assets/js/18.7866e107.js",
    "revision": "2c1029608029119d466700a01779ede1"
  },
  {
    "url": "assets/js/19.840871ff.js",
    "revision": "562302d85fdcecff7a21e95aedfb8f5b"
  },
  {
    "url": "assets/js/2.40e22c0e.js",
    "revision": "882c31a24046bae13d994a761ff6931c"
  },
  {
    "url": "assets/js/20.40792122.js",
    "revision": "a9d09a05f57e170543b97c929f443571"
  },
  {
    "url": "assets/js/21.5db0ff87.js",
    "revision": "a307c772a9f338ba5ba15301917f06b8"
  },
  {
    "url": "assets/js/22.5d869c95.js",
    "revision": "9fd92d63bee662c94add62e332046b29"
  },
  {
    "url": "assets/js/23.7819604a.js",
    "revision": "6a892ff03adf24d515e29257550ed246"
  },
  {
    "url": "assets/js/24.970bed26.js",
    "revision": "b5defd1ac231b188eed0ee9f0ec6baf8"
  },
  {
    "url": "assets/js/25.3955b745.js",
    "revision": "7ee1b11fd7d5edbe0069d299abb8b109"
  },
  {
    "url": "assets/js/26.bbfab289.js",
    "revision": "ddf3a09f8ee58065ee371f21fc9caaf6"
  },
  {
    "url": "assets/js/27.90a5724e.js",
    "revision": "2454fb47406484c75d437727bbe60725"
  },
  {
    "url": "assets/js/28.fc622780.js",
    "revision": "ed78e22cd9031225fcd1e36e69c2b1a0"
  },
  {
    "url": "assets/js/29.2a232067.js",
    "revision": "cb286abbef57b28db7cfd1cdfe719400"
  },
  {
    "url": "assets/js/3.94e86c78.js",
    "revision": "aa663e2394bb6500495a0ade801a6b7b"
  },
  {
    "url": "assets/js/30.769afdbb.js",
    "revision": "2df24bc7f71dd87ebd9075e84f09d6ee"
  },
  {
    "url": "assets/js/31.7894654e.js",
    "revision": "d0d6f842282e91a2f8010e13b8919669"
  },
  {
    "url": "assets/js/32.bcf11d21.js",
    "revision": "540bccb83fb6a1393de88565a181f978"
  },
  {
    "url": "assets/js/33.a6bb6abd.js",
    "revision": "65ee8634c18122848a0190867e3af52d"
  },
  {
    "url": "assets/js/34.02912451.js",
    "revision": "7132b5dbe767dd16bfa93bbef185a3a2"
  },
  {
    "url": "assets/js/35.fd9d9e56.js",
    "revision": "1ea6193bfb0d3b84c33daa8ec95347c8"
  },
  {
    "url": "assets/js/36.9dfc80fa.js",
    "revision": "eed21c891ba756f22b029058bca0a4f4"
  },
  {
    "url": "assets/js/37.048e803d.js",
    "revision": "dc4cc724427a756ab4bdd9c3b36af0a9"
  },
  {
    "url": "assets/js/38.6371006d.js",
    "revision": "abc6cc92ec30039e2d22821cc271ea52"
  },
  {
    "url": "assets/js/39.11ed6ff0.js",
    "revision": "a722c1cad35b9c63ab2f57dc8939139d"
  },
  {
    "url": "assets/js/4.bf2dc5d3.js",
    "revision": "ed2bde365bce44385b05f277e4ebf07d"
  },
  {
    "url": "assets/js/40.6d9e8194.js",
    "revision": "3389be66c63c8db96351cf8cc287f633"
  },
  {
    "url": "assets/js/41.22e707b0.js",
    "revision": "7730ad11ceba92c5cbfa2f75f9fabd8b"
  },
  {
    "url": "assets/js/42.08f2377e.js",
    "revision": "572d5da4cdfe7d71f80f84702089e09e"
  },
  {
    "url": "assets/js/43.98c58e20.js",
    "revision": "7b888b0acc7ed2be85f48e4f2d64aa21"
  },
  {
    "url": "assets/js/44.6c45ae28.js",
    "revision": "f259c913083ef3b583f2780f4d99bb77"
  },
  {
    "url": "assets/js/45.c2471fd7.js",
    "revision": "442efa801359cd4f9515fef9b7bb156d"
  },
  {
    "url": "assets/js/46.b66165ad.js",
    "revision": "dd50f3051fd3eac29ef5bbb6df69f1b7"
  },
  {
    "url": "assets/js/47.f1da2a9a.js",
    "revision": "cd2def7315cd61fd2d3a4e71941d7465"
  },
  {
    "url": "assets/js/48.54169820.js",
    "revision": "cef27533c035d221f31a32ba6d5cbdc5"
  },
  {
    "url": "assets/js/49.0b9ab089.js",
    "revision": "60c943601f9d61ed499822f967b5bb29"
  },
  {
    "url": "assets/js/5.064f505c.js",
    "revision": "254778bd20adf7b8bb157465a8697239"
  },
  {
    "url": "assets/js/50.3f59e883.js",
    "revision": "dc54d53db1e2303c2b85386e029cc4d1"
  },
  {
    "url": "assets/js/51.30407838.js",
    "revision": "e8b6c38982269d300208a0e58afac3f5"
  },
  {
    "url": "assets/js/52.a1ee578b.js",
    "revision": "8e514e83d8a8631747b1ff51129c6ab3"
  },
  {
    "url": "assets/js/53.926f1f0d.js",
    "revision": "a987e71f87c2990f5ce0d660a3224ecf"
  },
  {
    "url": "assets/js/54.46dff552.js",
    "revision": "261de8c202b6d8398219bb8406bf867c"
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
    "url": "assets/js/8.c07b6410.js",
    "revision": "ac06b3620ee6bdf39d5ca06e99fb570c"
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
    "url": "assets/js/9.f9c84669.js",
    "revision": "da29f4d43aa3a75f2e619351a938477d"
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
    "url": "assets/js/app.4f17708b.js",
    "revision": "0485e6e2cfe7be34f889e800bde44873"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "1f7666ccf578a1d4825d08350ac76418"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "67b2d54199fea70341a82ef398306a83"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "5daa6aa78c99e5abdbbd35ec65410d87"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "1d1d97e238537a1ecad00a6a816e6c48"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "a6fb0b2c0c348e197f266b51192cb3c7"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "5c903c5f813f3931932f08b9b98f65f4"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "224dfdb6a4b860480b81a644e2da2ef9"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "8c75cd872ea00d3a1d465afaf2def82c"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "79b0a1c959cb74561a1151cb90926f5e"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "ae11381c44ca9565a3e453853070b6a5"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "7dc5a5ee993f6aef981b9c209e3b40e1"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "c2f24c7c806c15245622e7eea7a8faf0"
  },
  {
    "url": "base/es6/1.let.html",
    "revision": "1bd1210af94c0ea9188240f4eca1399d"
  },
  {
    "url": "base/es6/2.Promise.html",
    "revision": "cc2abe799acbf0a84a1a7ea9e1dc7882"
  },
  {
    "url": "base/oop/1.objectOriented.html",
    "revision": "71de89fe015918e6d9c49fa77a910806"
  },
  {
    "url": "base/oop/2.constructor.html",
    "revision": "90c78de241b68d1306fa256c019abe27"
  },
  {
    "url": "base/oop/3.prototype.html",
    "revision": "a74317862e7d7b3aeb79a8fdb697e925"
  },
  {
    "url": "base/oop/4.function.html",
    "revision": "c0f27ae69601fdf087549d4ebf33ac38"
  },
  {
    "url": "base/oop/5.this.html",
    "revision": "38fe55d1ec878ba4092357cea8bf25d1"
  },
  {
    "url": "base/oop/6.origin.html",
    "revision": "2d6051fcc75332275c5bdeda7b69828e"
  },
  {
    "url": "base/oop/7.extends.html",
    "revision": "fb9947891cf59d0228a34978879ebe93"
  },
  {
    "url": "base/oop/8.jQuery.html",
    "revision": "8a386990a3811430fc7cd16b3c33969c"
  },
  {
    "url": "base/oop/9.lodash.html",
    "revision": "cf8bca3ff1324eef235debfab45a6492"
  },
  {
    "url": "base/stack/1.node.html",
    "revision": "53c023f559f8398e08ee70d6690ea669"
  },
  {
    "url": "base/stack/10.cache.html",
    "revision": "cce45a87694de6d297b109957b0187ce"
  },
  {
    "url": "base/stack/11.tcp.html",
    "revision": "124997c0cfd9bc67386dccde5f45a5be"
  },
  {
    "url": "base/stack/12.yargs.html",
    "revision": "9214581acc5567418c80c70c1a72f307"
  },
  {
    "url": "base/stack/13.compress.html",
    "revision": "53ce95b3ccc3af37ee4022ef36b0cd6a"
  },
  {
    "url": "base/stack/14.crypto.html",
    "revision": "b4c8567c9c6f891d5a8a2011d5315fba"
  },
  {
    "url": "base/stack/15.process.html",
    "revision": "6e1cb9e6b8c3b350a7524fdc3400fc86"
  },
  {
    "url": "base/stack/16.action.html",
    "revision": "2f05c4bd5b16a78da0b8109396381af7"
  },
  {
    "url": "base/stack/2.install.html",
    "revision": "3f122f95273db3a11ace9e6af372c4dc"
  },
  {
    "url": "base/stack/3.repl.html",
    "revision": "508e1e0864261019123c0b02c284d14e"
  },
  {
    "url": "base/stack/4.core.html",
    "revision": "fea032879b6fb54905a9dc91ddcce313"
  },
  {
    "url": "base/stack/5.module.html",
    "revision": "06ee6a924cb56fce16f9228ca69aa635"
  },
  {
    "url": "base/stack/6.2.html",
    "revision": "ce60780fe127e496c13f242a387a0ac5"
  },
  {
    "url": "base/stack/6.encoding.html",
    "revision": "8fe7399c81e610608892cb5c4340ef6b"
  },
  {
    "url": "base/stack/7.buffer.html",
    "revision": "cb49fdd4eb03611a8388f7a79b53e2b1"
  },
  {
    "url": "base/stack/8.fs.html",
    "revision": "fd784659530687f179521142ae82b9c9"
  },
  {
    "url": "base/stack/9.stream.html",
    "revision": "e73aeee7f54198bb19caa719eb09e538"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "107098f781139236eb04351ded3206ac"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "5840bdc1e11107df8117cd681da1f24b"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "5fbc4e45f63b0c35e08106eee233bec8"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "37e3e5a53aa07ced7227efdbf7dcc56b"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "b4091e4979c4fbab543c5d644657e25c"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "05c8afc113c235a0ee9b3b64bb54dbb4"
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
    "revision": "7166f3e6fdc20fb60ab997beede44791"
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
    "revision": "3724d735d67a4b1300583349f8b7a12e"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "4fd549c788c08bce0b681a6c3046e873"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "55f380be7653130e4d51af257744d780"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "a8708f85ed4a2e2e82b4a42bcf81ec41"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "2e46b9d1560035311230ce4f83912fda"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "fdbca7e6051e342dcc64550d38de4664"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "bf421fc42b9dcdd0794094afd2389e58"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "17fbdb7cd005065e955ff6bbd40adf88"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "984e4dcdce85bb08f6197d6272ad7cc6"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "bc81bcff37dce07762cf2796a8a8babe"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "fd1eda42b6b46b6c8f85ccc6c7578343"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "767adc28f7be8758848b71506013f7e8"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "cdd0a7f5916247756cc789358e0c0abc"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "924e75ea3f295e29915ff4ba48a83366"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "90b67a410e3f03f5fa28a33c12558302"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "bf868a2822372bc575cfba2d3b34522a"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "12dcf076fea70d75353356de12563ab0"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "3570783334f875cb71f00bfcf80a9683"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "7bdae1ed4463aa66a17a2679f463e13d"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "58fdc5ce10052e58e67e707f80c93041"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "909b088b363b0b3e269f7e71fb872f7e"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "b7afaca1623e603504085158b99d1486"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "6e96f7d9cee11d85c5528fd59eb81817"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "c14e607178aeb6e4b028610b23a43dfa"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "0c1be6aba8a4efe3ff5124c08c0df524"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "1776b601ff07bb320b281cc4ead344b1"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "47b16b51debdbe08ecda5f4b13390147"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "25df27ec03b4fbbfeecfa2199c7282ca"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "a651039e679072eceedd474512aee44b"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "8e674f8e0ddacb99b47445ef28772bf4"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "62f5b7efad14dcef14b5ca63b6d1b26a"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "2bb5f947de5771a8c0ce6a54738ae388"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "beca58ea67d6d14fbcf895061c5ade67"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "84a4add62cf6bc13b305a48a869e817a"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "118037dde91e8b98c33f3ade0b1f623f"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "1d3d81b0ce0e678e666c7447b2d22cc3"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "5dc889beac4ea726f573651d07608a9b"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "88694a2b326a72154b9a41deb5909718"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "2940b4c3eb2824e62d19d78e34f85789"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "1d405d0f9636b446c3fae11fdf028ffa"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "f8fbaae92bd22bf29a188ab80f73cf3d"
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
