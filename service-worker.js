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
    "revision": "bfd2b6b60b89b2f4144171ed50da3f3e"
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
    "url": "assets/js/13.430805d0.js",
    "revision": "83ec95ed2a21d39fc91c4d3470096bd3"
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
    "url": "assets/js/79.44722955.js",
    "revision": "fb19bae1f0a6dcf36b32931694ad2fb5"
  },
  {
    "url": "assets/js/8.d6a0a099.js",
    "revision": "38f2caded0f0a8b6f2630b61b4b6b068"
  },
  {
    "url": "assets/js/80.5f83e4d0.js",
    "revision": "423b7592417807c23d1694c4a413f7d6"
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
    "url": "assets/js/89.597077c3.js",
    "revision": "21b58ae6c1638f2a760d7e1991c579e7"
  },
  {
    "url": "assets/js/9.db3f8cdb.js",
    "revision": "114c6bfbca1785e8b5b25d834c628592"
  },
  {
    "url": "assets/js/90.3a085556.js",
    "revision": "5c2c7ba6332b0d6fd382ed9caa60fdf0"
  },
  {
    "url": "assets/js/91.ca2721b7.js",
    "revision": "dbc4e84b2cc8d1452c22eb86f49cc3f1"
  },
  {
    "url": "assets/js/92.83f73cb6.js",
    "revision": "56b4b50e55f8f5b2a70d9149308dd432"
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
    "url": "assets/js/95.5dbb2271.js",
    "revision": "4d025e95db2e2719cd776d133701064e"
  },
  {
    "url": "assets/js/96.b35ffade.js",
    "revision": "c00beaec43f4d0452d7786450357276b"
  },
  {
    "url": "assets/js/app.1be7aee3.js",
    "revision": "be5cb2648291a80442fe10e60ea890e6"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "b0cd1f59a3be4b0b8cedd9149c5eba8d"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "161fed2d8a961fcc63b16ea0e79fbdab"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "0fc52f1ac250220e56327e1194de9d95"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "0cbd9b88a76e9e892bfa8b17ca703310"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "d39848baf5bbd06a2b91bb0754e15892"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "3540f173da5da8a02ea410e7f6cd834d"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "91c8e4d59bfd889a0983f66ca96cce31"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "a1423cd4946942cadad4cea81522e670"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "ed35991eb91e0bb42fc0135f9b0f612b"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "1cb93d66ad2f71b3abe716aa17b8dfd5"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "2b66aa10421dc57a6291a0cb48a4e4a7"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "4f5e5723102af5785579b86d3aa91345"
  },
  {
    "url": "base/es6/1.let.html",
    "revision": "ad67f1e5d3110a549b0ed99e6a5ee61f"
  },
  {
    "url": "base/es6/2.Promise.html",
    "revision": "939427bcde4b48ef9a41c17d7b366117"
  },
  {
    "url": "base/oop/1.objectOriented.html",
    "revision": "1315cf0457202c0368c4e1e9687d8887"
  },
  {
    "url": "base/oop/2.constructor.html",
    "revision": "7f872d3b7b7b62355563d5700686752f"
  },
  {
    "url": "base/oop/3.prototype.html",
    "revision": "8730c3d68ee9d9e9ac1ecb4ea8b239e0"
  },
  {
    "url": "base/oop/4.function.html",
    "revision": "da5c1f4979dbeeab1939f1a82827553b"
  },
  {
    "url": "base/oop/5.this.html",
    "revision": "db5f02eb315b70ba7ebb1fa972111640"
  },
  {
    "url": "base/oop/6.origin.html",
    "revision": "32e8016a3ee44f55df406ce2a59c62fa"
  },
  {
    "url": "base/oop/7.extends.html",
    "revision": "79a156122325d1f5a03beaf173f9ab46"
  },
  {
    "url": "base/oop/8.jQuery.html",
    "revision": "8117adb642a8c0bdb2d6fc61dfbff715"
  },
  {
    "url": "base/oop/9.lodash.html",
    "revision": "11d863021dd87f2183b0053c6781b3f4"
  },
  {
    "url": "base/stack/1.node.html",
    "revision": "e3b290aa686c83ccb53045bca99c85f6"
  },
  {
    "url": "base/stack/10.cache.html",
    "revision": "4dce8314eae6cc2919f5db8baf1516ef"
  },
  {
    "url": "base/stack/11.tcp.html",
    "revision": "64d2f6a06475e3ee8da94fd0e42eb724"
  },
  {
    "url": "base/stack/12.yargs.html",
    "revision": "69173b2c64969996bc6d624ac3831c22"
  },
  {
    "url": "base/stack/13.compress.html",
    "revision": "923bc3db9fab4cfb1eed0fd4ff3fc115"
  },
  {
    "url": "base/stack/14.crypto.html",
    "revision": "e71eefb1cfa3acd58554b8df628c4396"
  },
  {
    "url": "base/stack/15.process.html",
    "revision": "6d4f807e5b8f8d27f6adee747ed5bd5e"
  },
  {
    "url": "base/stack/16.action.html",
    "revision": "d4d1477c6f77eee2f8abde35d075ccbf"
  },
  {
    "url": "base/stack/2.install.html",
    "revision": "b592764d8746d9822525abd23d11db28"
  },
  {
    "url": "base/stack/3.repl.html",
    "revision": "c121ad8c3e35336843b2c6ce6a638fe1"
  },
  {
    "url": "base/stack/4.core.html",
    "revision": "133221eeff41808354da43168b3954b9"
  },
  {
    "url": "base/stack/5.module.html",
    "revision": "1579f4467196c2222bd316365a7fa355"
  },
  {
    "url": "base/stack/6.2.html",
    "revision": "70ca28c2c6b9e593c99422db38c3fd35"
  },
  {
    "url": "base/stack/6.encoding.html",
    "revision": "b708ce067b6f93d0fd2bf008fe088362"
  },
  {
    "url": "base/stack/7.buffer.html",
    "revision": "89a43f1a33af64d7c348493839eb3dde"
  },
  {
    "url": "base/stack/8.fs.html",
    "revision": "feb7bb9087cfe27cfab1a24b35c3029e"
  },
  {
    "url": "base/stack/9.stream.html",
    "revision": "ed26a185e3c1db9509e3c933525c1b0a"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "98c3f57f4864cdf4083e25e4c8045c36"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "68f45112468af7db9461fd4a586d0ad3"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "af7e5c8ff29c3422aa8d82e57bc366db"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "245c1566e680d418d320bff6e5f8b57d"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "268c4fec705013d6e2d572a289701e46"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "70fce50969a76e6089f75717c43126dd"
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
    "revision": "17885494996dbe990326eb5e83074238"
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
    "revision": "6de7ad2b01cd46d3dc493476f002371e"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "a28f7061f859ea1e0356ffe629a2d1b7"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "c6a029244685325a2b55c60631e3b744"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "e5bd6e42a50e0a56c440764bba234352"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "4970f288517439c2a089c90bc7ac08f2"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "fc31df636626f8986ed23a18de7d4f2f"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "346d8f948d80b88268c3d1768042cefa"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "5b40335d5ad36fc20f9aeeb787548b34"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "742b7c05cf9c2233ec5dadfae86b1b98"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "cbad1768dbec59a2ab6a461d8f8839ef"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "42cd6b96a6ab1cf25523a8c9d96e937b"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "d9055562ec0f30fcf78837bc9454a083"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "d210bb38fc5b83110700d24a22b5254d"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "7f8c709be00f035e595400197e173d33"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "73a350867487317866e40f400e007b07"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "94a82e71a2cca05247c170aeee8c7ab1"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "e38bd88b1bc1a349d147fa4067d27fea"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "20c8196a78fe1e0b3b6ca3c54eac4c12"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "98767006a46eb5607550b180a7b76608"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "5b6b6c799e1540913b38a90689b51c78"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "e33704b211c093525438a4d0790423c7"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "2b8b46711bc4f2d902f724845383c5f2"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "2ff2d5b8616b41ec326ff325f8f034fa"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "1bdfc180d1d91a368cf05d6209a7c1e1"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "b0de392db5b7889c7fff6535f6001f5d"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "1bd301a8b06e84f36958d6ffe3f9d21c"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "cf803af8e42d3d8c7a3f8a5ffa075de1"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "32d749b0b891a29aa505c850f71d5ef2"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "1d8e27847315a3b2adc80ea198760328"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "1be5cb0ec5b00ccc8fc534f5ad88eeff"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "a663f0ab74fcaaae3b294b6f5f89aa0c"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "f6f31b1646e8881c59db3599475eadd0"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "72da942a5329c006a33b510d6c44e752"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "a168b9851f029367b0ff3f6f232e6441"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "550d55fb385ad84c0309a1f0325ca35c"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "12a1fa6444e94e807caa4e90b76cd031"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "0e0a051fd280aa1df42d309910ba4124"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "14e13dc59aefa555b6e97ebf589719a7"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "b4d0d47599f61191935dd426dcabda53"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "d8acce8dcf9849ac4e4ad9f6c9cf2cae"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "6828d1a7c51c2578550586aacad92b46"
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
