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
    "revision": "83f66d2e92e5ac86f5714f19888a9a3e"
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
    "url": "assets/js/11.af2da2b3.js",
    "revision": "c4e55188c19c200ec40c7df7a43a8523"
  },
  {
    "url": "assets/js/12.53eb83e3.js",
    "revision": "e54a254ba0138aefc7a92d0a127ce741"
  },
  {
    "url": "assets/js/13.01b37219.js",
    "revision": "1d8528c92d2f0306da56167d151ef418"
  },
  {
    "url": "assets/js/14.fda7582a.js",
    "revision": "64fd641284713de70df6fe4652648de2"
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
    "url": "assets/js/19.a98dca8a.js",
    "revision": "42baeac581702bf376dfe51805cade32"
  },
  {
    "url": "assets/js/2.f1403f8f.js",
    "revision": "6bddd99b41306581cffc5af45cfd138f"
  },
  {
    "url": "assets/js/20.54743465.js",
    "revision": "b35f72744f6ac33b3d8aeb867bd17734"
  },
  {
    "url": "assets/js/21.530bf7c1.js",
    "revision": "cf4b5368521f5fd8f6e2fe0781c34ef6"
  },
  {
    "url": "assets/js/22.5c30313e.js",
    "revision": "71b84b66fb97c53fc42ca2e2dcfd55fc"
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
    "url": "assets/js/25.2f148a6b.js",
    "revision": "401f7618a1a3b6fed51f4ec31360c23a"
  },
  {
    "url": "assets/js/26.68dd20ee.js",
    "revision": "77d3b36eccb34bcd927df831c46aabb8"
  },
  {
    "url": "assets/js/27.fcff6be8.js",
    "revision": "288258163fc336241d8fb16b8827d58a"
  },
  {
    "url": "assets/js/28.f20cfa83.js",
    "revision": "094693ffa2be438360127bf731f46491"
  },
  {
    "url": "assets/js/29.f42b010a.js",
    "revision": "073e39818d4a73883cbaf7728456b17d"
  },
  {
    "url": "assets/js/3.ec8ec907.js",
    "revision": "691257cd3cdca405b6dc287216f45cf7"
  },
  {
    "url": "assets/js/30.e8512753.js",
    "revision": "8a1e86d6a478bc677a785f99330a91d8"
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
    "url": "assets/js/33.9615bf18.js",
    "revision": "e51ea15c66b4d9f751d70e0bda0d2e0a"
  },
  {
    "url": "assets/js/34.5f642b96.js",
    "revision": "8e97f35f5b33fdf5a230245dac226c4c"
  },
  {
    "url": "assets/js/35.59035da8.js",
    "revision": "89abbb270bbfd0b37e76e672e867df22"
  },
  {
    "url": "assets/js/36.58df0e99.js",
    "revision": "ab8357e29566020d5cb8425a9a994ce7"
  },
  {
    "url": "assets/js/37.e8859114.js",
    "revision": "dd1cb3d6490a40c4f9a7d25b68d7e954"
  },
  {
    "url": "assets/js/38.9c225085.js",
    "revision": "d05af61de8174889a578ba6374716486"
  },
  {
    "url": "assets/js/39.29a409a3.js",
    "revision": "9f100ba20b187f1f59c8f822cc80a5cf"
  },
  {
    "url": "assets/js/4.b0d5242e.js",
    "revision": "2bd62f86f9d6204246a45590104ba109"
  },
  {
    "url": "assets/js/40.5a17cc50.js",
    "revision": "36647bbcc87f38af00b84cee32c9b40f"
  },
  {
    "url": "assets/js/41.f3347e44.js",
    "revision": "fdea8f78c9c4a2338693ff1ecd6be3fe"
  },
  {
    "url": "assets/js/42.366294aa.js",
    "revision": "d1c9a7e21a2acff198467280a119648f"
  },
  {
    "url": "assets/js/43.32b4e3ae.js",
    "revision": "1501dc49cbc61fe768d7b550cd11b56f"
  },
  {
    "url": "assets/js/44.7d5fff40.js",
    "revision": "4253832f44f64bd11a61f97d10a1e148"
  },
  {
    "url": "assets/js/45.0124bf17.js",
    "revision": "b35006c423aad99974ab33151a712272"
  },
  {
    "url": "assets/js/46.2730e2ac.js",
    "revision": "bbf2e29e4a3fed6103c1933745bf633e"
  },
  {
    "url": "assets/js/47.62cc7858.js",
    "revision": "6820909bb76f970b54628c29636c907a"
  },
  {
    "url": "assets/js/48.8052c8aa.js",
    "revision": "491be8ce7adf1fbd629a84c1c334c65f"
  },
  {
    "url": "assets/js/49.cabf5349.js",
    "revision": "0bb33467db536810912fa8c87272b2d1"
  },
  {
    "url": "assets/js/5.f8a839ae.js",
    "revision": "48d56f38cd3b29ed0ace311101bfdc36"
  },
  {
    "url": "assets/js/50.ad4a9443.js",
    "revision": "0265fad0498c536ff501ddc462aa3a0c"
  },
  {
    "url": "assets/js/51.30ea5a72.js",
    "revision": "11236b28e89e4e02b43bc6b20a5dd180"
  },
  {
    "url": "assets/js/52.0478de0d.js",
    "revision": "17bf67da7e0db342789371666eb3c7fd"
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
    "url": "assets/js/56.4ae2cca7.js",
    "revision": "1ece6cc02934c1b924ad6a2ac815b53c"
  },
  {
    "url": "assets/js/57.df26c8f1.js",
    "revision": "07f103b7130b15e7ca6a4b2e2cba79c1"
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
    "url": "assets/js/62.46c82d3d.js",
    "revision": "7364215553ca6430c55f3ef1adae7ff7"
  },
  {
    "url": "assets/js/63.5eee5eb5.js",
    "revision": "c5f229ae699b3e600f92ca55b05c8657"
  },
  {
    "url": "assets/js/64.dd2ac793.js",
    "revision": "97d1fd1330e8c4054790386d8c7f5060"
  },
  {
    "url": "assets/js/65.212a6b6b.js",
    "revision": "1c4b4ac16cdc596669edcc0e392c6913"
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
    "url": "assets/js/69.e5731e65.js",
    "revision": "3391b004002c6958e58423d8ccd96dc9"
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
    "url": "assets/js/71.2811f284.js",
    "revision": "6adce1d2473e7252c41bb6a0f510e431"
  },
  {
    "url": "assets/js/72.8e73bc1f.js",
    "revision": "2edada2e78287dd1dc189393940aadd7"
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
    "url": "assets/js/76.e6340be8.js",
    "revision": "19400b1bab14d9f818b4816b26c395b6"
  },
  {
    "url": "assets/js/77.183e7e7e.js",
    "revision": "c3dc48a4f622c3c1b57b1130bdf1a719"
  },
  {
    "url": "assets/js/78.48e96eb3.js",
    "revision": "c3efb67f5a0d4fc1329376da4464c8e4"
  },
  {
    "url": "assets/js/79.59d7d783.js",
    "revision": "0a38a518d51ad3e15e436e8527a22fe1"
  },
  {
    "url": "assets/js/8.a8ba04c8.js",
    "revision": "0e165d8cacdac8c248514b7adfb5cda0"
  },
  {
    "url": "assets/js/80.8c726ee1.js",
    "revision": "3a459aaf626df49b8c4822e29e130009"
  },
  {
    "url": "assets/js/81.d1d054ff.js",
    "revision": "baaf58c2fc6daa847b65f3fe19bed83c"
  },
  {
    "url": "assets/js/82.5192f91f.js",
    "revision": "f7715b5aac14dff67ff53be5dfc1d485"
  },
  {
    "url": "assets/js/83.a4d53da9.js",
    "revision": "27d5f01983d98c8aed335d273973aeb7"
  },
  {
    "url": "assets/js/84.164fb630.js",
    "revision": "4cec7037452c141b2954c2ca5b0bc4a4"
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
    "url": "assets/js/87.70ff1456.js",
    "revision": "f285fa2847790d4d87cc33356a4caacc"
  },
  {
    "url": "assets/js/88.6fee5361.js",
    "revision": "32cd99bba85e7eefbb9674f978aa99c6"
  },
  {
    "url": "assets/js/89.ab3d19db.js",
    "revision": "814634d6c39636ef82c5dc03a275f0f6"
  },
  {
    "url": "assets/js/9.2defcf5e.js",
    "revision": "a937c7db865dbfc72dac0fc002859581"
  },
  {
    "url": "assets/js/90.b726a29e.js",
    "revision": "c0d95675ada62603d9efd944776c2d07"
  },
  {
    "url": "assets/js/91.212bf325.js",
    "revision": "0f0a11bd2e311492eb207ce7b4c7f181"
  },
  {
    "url": "assets/js/92.2f939b1c.js",
    "revision": "d5bffe00ff1765bc9417ed2f2db5b9f2"
  },
  {
    "url": "assets/js/93.22ea259d.js",
    "revision": "95a1ac63aaf748bfbbf9f719f39024fa"
  },
  {
    "url": "assets/js/94.31bc6a79.js",
    "revision": "f547ce99bb647d880d995fed87af62e2"
  },
  {
    "url": "assets/js/95.5148784e.js",
    "revision": "ac39c39f425eb23461423d23082b53f4"
  },
  {
    "url": "assets/js/96.c844617b.js",
    "revision": "0ada6f0b67859a0e1b37f0b78a081e65"
  },
  {
    "url": "assets/js/app.435807a1.js",
    "revision": "b3a436f09d7ff13e57bc92c2f5d79e93"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "8657ecffd64f6fafd5f9cda6a847d719"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "94d450233fb86274d2c9af7dad1cf273"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "cac6ce6d3cbce2bb96df5680d707d213"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "54afd08b8d3d23628df351db93e91755"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "3f1719e8a681d626725e9c784d707cf5"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "d783fc89596264b29a28b33fe1356005"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "d513cf3daed816691c8107c6698b22fd"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "f08c49a340fbe0018ed4b0d103afd691"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "4a77483c304fd6d011e1593dcb470b0d"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "b05131fee6bf53687408af2717b8f463"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "804bf2e2cd5e798cf0dcaa5db26a2701"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "d85338154a00f9495614a04b34807da9"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "4d55226be74628b837490538aba01c0e"
  },
  {
    "url": "base/example/2.student.html",
    "revision": "3d52e8712c8e305ac4b4a5eef21f0c91"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "5b8f8032686f3dc1264180ff09d22b14"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "3ac71b78c0c325461e574a4459e49bd1"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "0087b2bcaf2f53aede53ccac58ed85cd"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "64a77218c83397a74e3e59a02e0abe9a"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "718bf2268a49c685619f7673518924c7"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "96644fbcb5d7a131d110d5e56e8c2100"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "9ae468d5bd69be712f5f65cce511b149"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "15640073ef9a36a92c7a615171695b7c"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "67e979e6e746fe6df9481eb9be020576"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "0fddf1cabc913d502e11c9d324935400"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "50ee9bb399d371c252151950537e5ee1"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "be1b5e5b870b5abeda950985b05db70c"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "4653b85dee1b870dc91f5c707dad0a07"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "9203a37b9c4719d52b98f428fb811731"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "6b90b59de570543c26ae320201f4ea83"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "24036182460136aee5653e5bea88d40e"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "f24e72c6f28628e6bcaa2b4b57992534"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "6d0bdadc64f843d06960d3dfb82b342d"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "a5c6ddfe6607f3715c418deae8f626ba"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "9ce95e70df1dfb1cdb61fc7902f0bc38"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "53833de4bf4b3a4e550cba620e41e1cd"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "056339d3a1d4683b1f8832487697182c"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "82109da054d286923337902890d7285d"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "d19282795ff175fd0dda67817c7c4aaa"
  },
  {
    "url": "base/ssr/1.index.html",
    "revision": "6d0aab17fc694726100bd55cc17d7bfc"
  },
  {
    "url": "base/ssr/2.nunjucks.html",
    "revision": "979bb1f5686db831f60bbd893ddadb6d"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "f7fdfd93070356eb8d02c880a004f58b"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "be61ef6e8e5b67a79e7598bc998f4934"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "3a56943067055b1331c0a72ec0f8d690"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "dd02aab560557932dfe3247370771bca"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "e2512421dc66dc4e82bbaa162187455f"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "631df46351839e7efb10ff6e5705cfe9"
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
    "revision": "9007b4c1bbd901b03145b2f322c51160"
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
    "revision": "ac328710523c461e6c7e232e64ccd368"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "bf2d5d8f4de46714f87781c2ecca3b47"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "b75b84a770c3bcf05c162bfaffd85283"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "bab1846e68b650e7f7debf5cbf00e1e0"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "b4d4b774a1eeb771677e287cef7bbfac"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "c3b718e4c4b65ec113e94d8238034b77"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "464cdb796e38d3fcc0dcce61f0cce7f9"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "d39c5f6d0e0b4396a4eda3c515852d76"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "37ed7243e5761c7f54755c395d60c5d0"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "14355833b0324d7749965e3957030fe8"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "ac0c64aa677a5e3b264f093229e54780"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "0daab94fcd269f121230f10bbdc28018"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "9c325a403d2c695bd3ac798569577840"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "b6b7360eb8028c79b1c4de8284f084d2"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "df443207ca0c952b3a176aba0c560220"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "1400886d21485c94d6810d2e84464280"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "cfc5e939468a9a7276a3f877ea42f9ec"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "da2f06793a8214806c1e2b8d9081392d"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "22588b70fa4a510097c3fb47d176cb73"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "f3e5a39d0c9ae5cb140c342b149c7fb0"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "ed674487471ea97b6c597f5bbc3c9bfb"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "bf5aede3c18ef0433f790a8eaee1fcd2"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "5ed5e62ce27c28056d325678d60091ac"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "0f6dd3358f3b73b852d92ee469007078"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "c00c0f961b64c291af56905971122c81"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "8bc605db531f876a812373aae865b0b0"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "3a29eb32336e6106f0ed9bf4fa13dc2a"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "15b400bfdef8ec48de3dfc50af176ccc"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "99ec9958671df6c0bac2586ec62642cb"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "e9d9dc4fea9af83ae053fbcbb98e7687"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "eb55ec4d1db3401070137db989da3a9f"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "79af55d49df3ebfa1a4b4c1ea8d2deb8"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "f81d30b0fe49726cdd2f683c54c4aa06"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "5bb5122adca5441ec4b2c82132a042ab"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "dc6fbd027a3c46971c1c2cc79b0c033d"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "79f4b27ec1b6cd81ba108c0ad67844aa"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "fa8bb3894549e5bbe77ee0839b9623eb"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "ec529b60b06410eb4b64e3332d856a41"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "834330ee44b5e19802fc360838666d57"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "7f48573d4e37e492b24be2f5fab5cc11"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "11cfa52aa28c7d6cc490314a24105be4"
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
