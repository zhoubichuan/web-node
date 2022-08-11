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
    "revision": "491449dfe04c04ca39d844ebc2ba9cc5"
  },
  {
    "url": "assets/css/0.styles.a3842ab0.css",
    "revision": "00a1f976e144bac41eb6a6adf8d19843"
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
    "url": "assets/js/10.913bc1a0.js",
    "revision": "61e5e4605742f5056749ee87ffec6b18"
  },
  {
    "url": "assets/js/11.ea9c233d.js",
    "revision": "004abd1ca84634c5d28ba41c5da0705b"
  },
  {
    "url": "assets/js/12.e7c7afdd.js",
    "revision": "d18577ee7732a1e25cf706055aa9be34"
  },
  {
    "url": "assets/js/13.85880ba1.js",
    "revision": "d96d39b6d30948e6fc62e07078d09094"
  },
  {
    "url": "assets/js/14.81176dde.js",
    "revision": "dea07bfdc1961a3ab185560245bcab6e"
  },
  {
    "url": "assets/js/15.c5491206.js",
    "revision": "4a5015120df9cb216523c45092170ff6"
  },
  {
    "url": "assets/js/16.d5109d91.js",
    "revision": "9c4bad3763c64d813302155fc4ecb855"
  },
  {
    "url": "assets/js/17.123e0f96.js",
    "revision": "d5419113572f0f2ea8cf2b7fb061f60b"
  },
  {
    "url": "assets/js/18.f0d9bffc.js",
    "revision": "60a8a5a27ea8de2f436d5f536eb6bf39"
  },
  {
    "url": "assets/js/19.a43beaa3.js",
    "revision": "165eab2443718b14e8284aff6804719f"
  },
  {
    "url": "assets/js/2.8ac8e006.js",
    "revision": "04171752d4c872c2e182c4caf998277f"
  },
  {
    "url": "assets/js/20.06558eb4.js",
    "revision": "f838a783224d102b24cf05f04d7a2892"
  },
  {
    "url": "assets/js/21.bf52dbcc.js",
    "revision": "36fc50714a2ba9e54e02e6dd81d18906"
  },
  {
    "url": "assets/js/22.e7b9b4eb.js",
    "revision": "4784c501b697aebc1a4eaead5f05e8e8"
  },
  {
    "url": "assets/js/23.0f6198db.js",
    "revision": "6c0f162fbbfb3c75021338fba988e3be"
  },
  {
    "url": "assets/js/24.456361fb.js",
    "revision": "9f64eaa3f14294f704ce9dce157ed00f"
  },
  {
    "url": "assets/js/25.8404680c.js",
    "revision": "be9ff3ff54ee95bf8894a83dc2127e9f"
  },
  {
    "url": "assets/js/26.54ba2ff0.js",
    "revision": "0cfa6c0d84bf83026314769cdcf44348"
  },
  {
    "url": "assets/js/27.d0a12b8f.js",
    "revision": "8f37232b12e87d803540c252d40f60b0"
  },
  {
    "url": "assets/js/28.90d4c031.js",
    "revision": "9b7e0b419c2c94838767b9dd3d0b9c2c"
  },
  {
    "url": "assets/js/29.6fe8e423.js",
    "revision": "2d4c512e3f29c1e685f103a9e6527130"
  },
  {
    "url": "assets/js/3.636ff297.js",
    "revision": "b10ed78c5a0d19317598f85fce6c0037"
  },
  {
    "url": "assets/js/30.20ffae7c.js",
    "revision": "021beea190dd9d18ed8ff43af4801e13"
  },
  {
    "url": "assets/js/31.c246aa83.js",
    "revision": "1091876e92d2b6157f299f6154385239"
  },
  {
    "url": "assets/js/32.8fb8909e.js",
    "revision": "a132c43dc86cd89a5eb4aa0343a40178"
  },
  {
    "url": "assets/js/33.debe8cb0.js",
    "revision": "3c8b42a2d4e8949b98c74ae3bce0ee4d"
  },
  {
    "url": "assets/js/34.e2209756.js",
    "revision": "6a2d373543beb3c2d302c6c47b3aeebb"
  },
  {
    "url": "assets/js/35.ca2afca7.js",
    "revision": "be61f9358a9e4b07b90d366a64971a2b"
  },
  {
    "url": "assets/js/36.8d28681c.js",
    "revision": "d301fa210ea93b19c4df01fb377c7891"
  },
  {
    "url": "assets/js/37.6413ca20.js",
    "revision": "eca3146b964a397b3031389f5ad66080"
  },
  {
    "url": "assets/js/38.247f1f6b.js",
    "revision": "18c5ca991a0476def36c03e5cf26872d"
  },
  {
    "url": "assets/js/39.a31cac41.js",
    "revision": "3dfe3f369a4120b2e9a74b55b82b6010"
  },
  {
    "url": "assets/js/4.066fd800.js",
    "revision": "e2401b05b037ba75b8f6fb25a4e33a9c"
  },
  {
    "url": "assets/js/40.d2ac33e6.js",
    "revision": "012e6d84c7ed9f46b1282b1ffa92b19c"
  },
  {
    "url": "assets/js/41.6030cd45.js",
    "revision": "be30cddb72ade3a5174120c20f2804cd"
  },
  {
    "url": "assets/js/42.34aa1e64.js",
    "revision": "2f234ea4258362e549aad8a0b732a0ab"
  },
  {
    "url": "assets/js/43.71ac0eba.js",
    "revision": "e3ba7282cf205eae6bc034e9a6a4315f"
  },
  {
    "url": "assets/js/44.b6d664b7.js",
    "revision": "510f2792298079e0b07e170ebc8c8145"
  },
  {
    "url": "assets/js/45.cccf5b04.js",
    "revision": "02e498857f65647740d5b94c430d9070"
  },
  {
    "url": "assets/js/46.69f07c42.js",
    "revision": "f3ad4a8d2b67b0746aa871b2133f86c3"
  },
  {
    "url": "assets/js/47.038a2c2b.js",
    "revision": "1211a4f1644e9b2cc50d720c79140438"
  },
  {
    "url": "assets/js/48.320df5aa.js",
    "revision": "67dfd98cf12efdad4c767dccb4394259"
  },
  {
    "url": "assets/js/49.ff775791.js",
    "revision": "f62de948846cd5e04cd409658a6d40aa"
  },
  {
    "url": "assets/js/5.651c3654.js",
    "revision": "f1dafc30ff083a066c96253cb4d7b193"
  },
  {
    "url": "assets/js/50.bc2b9fe2.js",
    "revision": "0093c5b63cba00adf5722154bf681553"
  },
  {
    "url": "assets/js/51.efdc990d.js",
    "revision": "a6c852b6827d539ad6a15b87046545da"
  },
  {
    "url": "assets/js/52.c55357c6.js",
    "revision": "68dc553c50d72683afc6c5df8ccd79da"
  },
  {
    "url": "assets/js/53.194b68c0.js",
    "revision": "8faa2474ca7a0ac331e125c689cfb24c"
  },
  {
    "url": "assets/js/54.2937351a.js",
    "revision": "286394100509e89739fb485e20737bb4"
  },
  {
    "url": "assets/js/55.ed779fd3.js",
    "revision": "62196379cc3af2ca61cd1d7edc5e75c4"
  },
  {
    "url": "assets/js/56.9f67ccd8.js",
    "revision": "edd3fca3a63619d7e2fccbc51cde308d"
  },
  {
    "url": "assets/js/57.710047a7.js",
    "revision": "e3b380bda9283d609871506dc273f76e"
  },
  {
    "url": "assets/js/58.c7018ae9.js",
    "revision": "f97c0cc45747cff8eb13157e6cdd16f8"
  },
  {
    "url": "assets/js/59.7143e144.js",
    "revision": "7b2af45ffce51563288fb60fbccfe06c"
  },
  {
    "url": "assets/js/6.64657bde.js",
    "revision": "4162737682ed2b7559f5ddc32141aad7"
  },
  {
    "url": "assets/js/60.3821df2b.js",
    "revision": "b73b2253cfbebea0adeb04680abf3a5d"
  },
  {
    "url": "assets/js/61.b95034dd.js",
    "revision": "e772d2bcc28d0cf00b61fed328db46bd"
  },
  {
    "url": "assets/js/62.c79a6f63.js",
    "revision": "1f693207628b650cd71130422d9ac239"
  },
  {
    "url": "assets/js/63.49e08895.js",
    "revision": "65a3a0e6cf5f40949f9c6e9dc1cd829b"
  },
  {
    "url": "assets/js/64.a0502a89.js",
    "revision": "1ef8912343b7f4e4b33ceae683db30b5"
  },
  {
    "url": "assets/js/65.44b687fe.js",
    "revision": "9af52f56de0a44bcce0f54d3d7b328b2"
  },
  {
    "url": "assets/js/66.aba86d11.js",
    "revision": "240021a6303ad42bf80a7b71a2ba7eb2"
  },
  {
    "url": "assets/js/67.50788f22.js",
    "revision": "e80d900f44ae01c53e021a7474c979fd"
  },
  {
    "url": "assets/js/68.3ffce65c.js",
    "revision": "ca15d778106ffde4ef384f569d56a892"
  },
  {
    "url": "assets/js/69.fc86c65a.js",
    "revision": "bc6a55a238132dc4c947c094464dbc4e"
  },
  {
    "url": "assets/js/7.261f4774.js",
    "revision": "92738ca890bdab77c92e0cddb42a00d2"
  },
  {
    "url": "assets/js/70.5f9aa35a.js",
    "revision": "0a28979efa204784a3f2663ed826b7ec"
  },
  {
    "url": "assets/js/71.1ed8b35d.js",
    "revision": "5d55a760b230cc44a27e690f348955d0"
  },
  {
    "url": "assets/js/72.d9baaaed.js",
    "revision": "0d08b271acd5b29e37db9dcbdaf160a9"
  },
  {
    "url": "assets/js/73.587a29ee.js",
    "revision": "09ce23714aa7f34ef4ab8f853333f5fe"
  },
  {
    "url": "assets/js/74.01c7edc4.js",
    "revision": "b6db1df75a071c6d41ffdeb23d9f0fba"
  },
  {
    "url": "assets/js/75.e08e646f.js",
    "revision": "7c9cb1aa3c48cf9a63049646b4816b91"
  },
  {
    "url": "assets/js/76.e30ca7ad.js",
    "revision": "5dc13b6934d152ad5415047d42a667c5"
  },
  {
    "url": "assets/js/77.92292afd.js",
    "revision": "436e193e56a4773264c8faa65b812d83"
  },
  {
    "url": "assets/js/78.f4346d46.js",
    "revision": "3754c80fcabc44d06861d00d69aae905"
  },
  {
    "url": "assets/js/79.4af3b18d.js",
    "revision": "4b5e003bcd822df443915917f6178b41"
  },
  {
    "url": "assets/js/8.d6a0a099.js",
    "revision": "38f2caded0f0a8b6f2630b61b4b6b068"
  },
  {
    "url": "assets/js/80.268554d1.js",
    "revision": "854f228278f2cc3991b2c54ee4635232"
  },
  {
    "url": "assets/js/81.610faf13.js",
    "revision": "4609153bda7cfc09b98825d568c70ac8"
  },
  {
    "url": "assets/js/82.18da7db3.js",
    "revision": "5b67452bf73ddd264c45a09658534047"
  },
  {
    "url": "assets/js/83.d6154f3a.js",
    "revision": "2bb509a489d76b2025338ecf826f6c79"
  },
  {
    "url": "assets/js/84.939e396f.js",
    "revision": "5b73b610dffb5167c7ef702fbd0fc852"
  },
  {
    "url": "assets/js/85.e74a2ce1.js",
    "revision": "76cec1ff177f589bc578523c513ea14e"
  },
  {
    "url": "assets/js/86.3b387324.js",
    "revision": "da7c189021f06377deb274c4d0c89501"
  },
  {
    "url": "assets/js/87.9246d1da.js",
    "revision": "4c4ee37c843d782a58bec1cae6ab406b"
  },
  {
    "url": "assets/js/88.883d97f5.js",
    "revision": "6af6e8746e36dfa080c8b9ee7cdefad9"
  },
  {
    "url": "assets/js/89.eecaa70f.js",
    "revision": "1cc0dfabb3e87cb594f1e391d3360c1e"
  },
  {
    "url": "assets/js/9.db3f8cdb.js",
    "revision": "114c6bfbca1785e8b5b25d834c628592"
  },
  {
    "url": "assets/js/90.c19cc61c.js",
    "revision": "2fd8122927592429ce15e888aff56630"
  },
  {
    "url": "assets/js/91.09745672.js",
    "revision": "4a58f50fd8a478c6f14d121a221249f3"
  },
  {
    "url": "assets/js/92.17ad9d83.js",
    "revision": "188e1ea33e1f4397407d53ab8554ee7c"
  },
  {
    "url": "assets/js/93.50a082ed.js",
    "revision": "924a3dd07008f6e250adb0cbecfba851"
  },
  {
    "url": "assets/js/94.6c43ded5.js",
    "revision": "53bc2eaadf81d2faca0ca4f4a6a8d7d3"
  },
  {
    "url": "assets/js/95.2a295ab5.js",
    "revision": "148f02921e5f2fa7e7691b40b25c96bb"
  },
  {
    "url": "assets/js/96.b35ffade.js",
    "revision": "c00beaec43f4d0452d7786450357276b"
  },
  {
    "url": "assets/js/app.6cee76c6.js",
    "revision": "d30173bf92960bbeee80f66fc299d0bd"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "05229c7845100b6180560cbda3a2cf0e"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "7601b36f8ed6b1b277ecc588dd332116"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "e390a72c33c5d31d6a8cc6535ea47195"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "9d8c1aeaa4c7e8dd8c0244a3cf4f5c51"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "ebf602e35178451f4656fc11ef3f619c"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "5d8b53919ead123ea946fedb309991e1"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "cef01a32f44fd46e1b869e7be93979e3"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "7950a15310624ce7357b240529e47e78"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "0afba042a77a5a4a291444b703c15d4a"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "edb1ed96a4c4019c1d41b48fffc8d999"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "620085aa493de93ba5a3af173fd56371"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "3908896cfb51762f0ebe451b69287e14"
  },
  {
    "url": "base/es6/1.let.html",
    "revision": "fff92ddf07971f2c9ba65fa1d48fd4c3"
  },
  {
    "url": "base/es6/2.Promise.html",
    "revision": "f95dd02f5286c61f6ecef19f3253be9c"
  },
  {
    "url": "base/oop/1.objectOriented.html",
    "revision": "b29393489c80b669a80a0781f155da0a"
  },
  {
    "url": "base/oop/2.constructor.html",
    "revision": "de8be6c9e38b2e1e4a00072e3074fb21"
  },
  {
    "url": "base/oop/3.prototype.html",
    "revision": "d30827f2f51c98c00fb756a430bd8d81"
  },
  {
    "url": "base/oop/4.function.html",
    "revision": "c2f0d1aa261befea81821490e1ae2e1f"
  },
  {
    "url": "base/oop/5.this.html",
    "revision": "8e6cbc402b68f04bdeb764609d010092"
  },
  {
    "url": "base/oop/6.origin.html",
    "revision": "9fb418eab2abb750bedff893eec1a943"
  },
  {
    "url": "base/oop/7.extends.html",
    "revision": "4464a187817076bf54135caf99adf27b"
  },
  {
    "url": "base/oop/8.jQuery.html",
    "revision": "e540c3c2ba8da9f2e74995d84264f039"
  },
  {
    "url": "base/oop/9.lodash.html",
    "revision": "9fc98230fdbdf2006f80171d9444c3af"
  },
  {
    "url": "base/stack/1.node.html",
    "revision": "aaf7a02289fdb0883765b03f3ac531de"
  },
  {
    "url": "base/stack/10.cache.html",
    "revision": "78299bb7d1cb9d5a222dba9c505e4033"
  },
  {
    "url": "base/stack/11.tcp.html",
    "revision": "85933cb65150e4308f0d2c8320c9ec86"
  },
  {
    "url": "base/stack/12.yargs.html",
    "revision": "8e82f3d3330cd1c21974f795fcfc0ed1"
  },
  {
    "url": "base/stack/13.compress.html",
    "revision": "db3d2dc7f071c62bfca76cc9792844db"
  },
  {
    "url": "base/stack/14.crypto.html",
    "revision": "d86629a66ecb2464787a00f38eae1a2c"
  },
  {
    "url": "base/stack/15.process.html",
    "revision": "194784b198ca550656d77d0c695b4041"
  },
  {
    "url": "base/stack/16.action.html",
    "revision": "8a3754ef71f26661c1602acac270972c"
  },
  {
    "url": "base/stack/2.install.html",
    "revision": "e5ff5c5dd775b5d105cd63df9e19800f"
  },
  {
    "url": "base/stack/3.repl.html",
    "revision": "6f1e099f2db7b30ad1a692bc5a81fad7"
  },
  {
    "url": "base/stack/4.core.html",
    "revision": "5abfa3c616c0575e9402708c4ce260a9"
  },
  {
    "url": "base/stack/5.module.html",
    "revision": "62d5bb84dc04b8f398ac1662abaad161"
  },
  {
    "url": "base/stack/6.2.html",
    "revision": "b9f930abc0c9dc31c7dc37b97a72e0af"
  },
  {
    "url": "base/stack/6.encoding.html",
    "revision": "b5051c67f0434edfcf88e70f93beca1a"
  },
  {
    "url": "base/stack/7.buffer.html",
    "revision": "049e7ed4850a7e8aa24f07ba8d8ab2f8"
  },
  {
    "url": "base/stack/8.fs.html",
    "revision": "0cba8b2a835ef9c6c4c522120e0baaa0"
  },
  {
    "url": "base/stack/9.stream.html",
    "revision": "65e4b987a4d9367d192b02bf563d557f"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "bb2239a9edb03d9146cb9ca3b58fdb13"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "b6481fc374cccc78793ed8f1287d5754"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "c97506369a6daf108823459532cf0322"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "d9a0afa1522026eb4074693e789ad8a0"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "d1f4e593fc9021592764c185467279f4"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "9077cf8ea6dc04062aba9a4855eae7b4"
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
    "revision": "3b09982409044410bd54eed5c93a03c1"
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
    "revision": "53b5f9dcdf6656719b86cf98e5d7d380"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "50a5e6576f7c0ee8336862799ecff886"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "103f65192acc618011207e0dc27ece71"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "9d2c7bff82d93e40294df78afe587cb1"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "939f22f39a8d17ac5491ff8dc7f98fa3"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "ef630b022398fd78c96c9ac0e5e6b8ff"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "29973fd875b64da0c1287e283b25d1df"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "188997b04b5a7f3c5545e4997fd80373"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "28a63a4a6c912322a563c1e8dc919b71"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "1525dff5308928e4fe493a7ea8dbc34e"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "f7f6efe2e20838cbb9c9e49218de4ab7"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "d4a413233f08870a7c20c85da722eab7"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "14353687f258c6c4cab7243333c19df0"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "b37714d99841de2c6dce7e1ef088d39c"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "c4dcf8e690c5931486fb649222a0d69f"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "f4ec7b2af360f792247fde1b312eef60"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "8fef929092dd824ea7197943f72ea865"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "c7fe47a0717e2c3613c2b2084e4aa897"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "409304162b8e137254bd5d3daae806b0"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "b480c737ac2454135d45119d9edf4874"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "37c1f0e1701b4d4d8807ff37b2f3274c"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "c2683f9e3ff8e5a51fcb20162778956e"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "049a6e7b563a51a9d4ee35d3e4f6713a"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "5e29ce2644f78587a088e1ca84b0d656"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "984ac1ae1e514090262fbea023584d1d"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "325562623411d73cde2b348e2a89cc41"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "cb15ef2be4d39281c21f431621d090ad"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "7408dff7a970b336d8ff04a67814465b"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "3ed0e65b3a39fd6d4cb1dff8557dcc5d"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "76642bcba06e3b8de18912135d82dff6"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "d52bde4e33f7528f9463562a6fa5b63f"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "620c449ee78a8092c3db0f8b49940bfe"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "25797afe913195dd5f1cc19bf695eb0c"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "663df076c715c4a28bf7ae2e4b05211c"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "37f1b8af93dc92c088e4415aa9b5f1d3"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "07af972a2d225fb62ddba35ed94af017"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "980d40b70c3b3c88343c081b0aabfcdf"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "cc5228ae0e9084c7db91b3d5dd1d53e8"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "c5e94a8956247069830603a58691edf2"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "a9e632cbc2ae59b38b100af17bb5375c"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "3de0997db8a42ef8bc619229325e51b8"
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
