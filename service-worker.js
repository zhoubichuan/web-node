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
    "revision": "1b07c9e9f384a647e91de0f12b07a9c9"
  },
  {
    "url": "assets/css/0.styles.9d138820.css",
    "revision": "4410ebb50683b0a9d4ea1c7d9487598b"
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
    "url": "assets/js/11.007f1829.js",
    "revision": "cd98e092eb5ab726231799d53027d9f9"
  },
  {
    "url": "assets/js/12.1a5b87e5.js",
    "revision": "3171b608edccbdad8bfe519b5aa176ea"
  },
  {
    "url": "assets/js/13.01b37219.js",
    "revision": "1d8528c92d2f0306da56167d151ef418"
  },
  {
    "url": "assets/js/14.25a90ad3.js",
    "revision": "0f23bda19bc747e1d9ae371ab6e19ad9"
  },
  {
    "url": "assets/js/15.e571e081.js",
    "revision": "48f04162e802d43601e4cb52ecbff97e"
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
    "url": "assets/js/18.969cd30a.js",
    "revision": "24cf46433d9f33f0c0627d348aaf66dc"
  },
  {
    "url": "assets/js/19.97d215d9.js",
    "revision": "2ac2369c75782459925cb5c7084a2034"
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
    "url": "assets/js/21.f5256db6.js",
    "revision": "ad3f7925f91e58620f4a7c57c1d82609"
  },
  {
    "url": "assets/js/22.30f99c23.js",
    "revision": "3f115eb19c0b368a97da1569efc2c2bb"
  },
  {
    "url": "assets/js/23.13db1850.js",
    "revision": "1eb3a85852f2d3a4b79d8e00e29dd37e"
  },
  {
    "url": "assets/js/24.ee0b10b1.js",
    "revision": "51d115a6b793118b70e21b8714cd8765"
  },
  {
    "url": "assets/js/25.d7969fac.js",
    "revision": "34e4ba1e90b0b6230758d6cc2b135fbc"
  },
  {
    "url": "assets/js/26.68dd20ee.js",
    "revision": "77d3b36eccb34bcd927df831c46aabb8"
  },
  {
    "url": "assets/js/27.fb25920d.js",
    "revision": "b87625330ddb935698fdee6d8d4f9c7b"
  },
  {
    "url": "assets/js/28.7e1e5c16.js",
    "revision": "7b0dd5006a20ed4416ec755abce99e18"
  },
  {
    "url": "assets/js/29.f42b010a.js",
    "revision": "073e39818d4a73883cbaf7728456b17d"
  },
  {
    "url": "assets/js/3.8c503615.js",
    "revision": "793923b7bd223814b0f6bdafe3383f83"
  },
  {
    "url": "assets/js/30.03e1b9ca.js",
    "revision": "e8708ed3cdeb9bdd9a45843f2e9d9407"
  },
  {
    "url": "assets/js/31.de757afa.js",
    "revision": "f2bcb276de97075b910de8f18b3bdca8"
  },
  {
    "url": "assets/js/32.953f2446.js",
    "revision": "77816a509259e619b8a70423231fcc28"
  },
  {
    "url": "assets/js/33.646c57ec.js",
    "revision": "6aa0506b8eae38ec4769771247a1e061"
  },
  {
    "url": "assets/js/34.7858dcfe.js",
    "revision": "88e9d3c06900e88ff44b96b7f31c51c3"
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
    "url": "assets/js/39.1423fe2c.js",
    "revision": "47d59895b670839ddf44d63234453059"
  },
  {
    "url": "assets/js/4.82ab0538.js",
    "revision": "a16a61591ba793bc25e1ee8aa9776259"
  },
  {
    "url": "assets/js/40.05a2af2a.js",
    "revision": "22a688bc3e4cf86ef229cfe68d2482c7"
  },
  {
    "url": "assets/js/41.c21d6564.js",
    "revision": "3ca83eec742a21d5b4cdfff4ba53e932"
  },
  {
    "url": "assets/js/42.366294aa.js",
    "revision": "d1c9a7e21a2acff198467280a119648f"
  },
  {
    "url": "assets/js/43.2ee7ed6a.js",
    "revision": "77a97f7cf9631f2049307cabafa0d156"
  },
  {
    "url": "assets/js/44.7d5fff40.js",
    "revision": "4253832f44f64bd11a61f97d10a1e148"
  },
  {
    "url": "assets/js/45.2c80d5aa.js",
    "revision": "ed911a5d09b2d1a54cdc8b4e6bc1c03d"
  },
  {
    "url": "assets/js/46.30b8a014.js",
    "revision": "b5589658ddffc8b2b85d603b233ff894"
  },
  {
    "url": "assets/js/47.0328300a.js",
    "revision": "f85cde81a45b7d426f0dd75917e6b926"
  },
  {
    "url": "assets/js/48.5f04dfbd.js",
    "revision": "e6d362fc9babfd8d553b24870127f0c5"
  },
  {
    "url": "assets/js/49.65c14ffd.js",
    "revision": "769d976473d8f07c0fa1cfc78623e3d0"
  },
  {
    "url": "assets/js/5.360a9dba.js",
    "revision": "a35c643592a1439be108836f0b91f5d0"
  },
  {
    "url": "assets/js/50.3b9d289f.js",
    "revision": "a773d4756a42d952d16ac7ad71a4037d"
  },
  {
    "url": "assets/js/51.30ea5a72.js",
    "revision": "11236b28e89e4e02b43bc6b20a5dd180"
  },
  {
    "url": "assets/js/52.7e4d99b0.js",
    "revision": "56c75b61fcd77bf00ebd5b16c9c31c2a"
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
    "url": "assets/js/59.fb29ef3b.js",
    "revision": "566c20cab8cf6dbd3b3195c6b3c906f4"
  },
  {
    "url": "assets/js/6.1697a6ae.js",
    "revision": "22d3c8e946915a77103b004b845e9e3d"
  },
  {
    "url": "assets/js/60.7f3cce4e.js",
    "revision": "aea81962968f4b66ede6c387b9d43dc9"
  },
  {
    "url": "assets/js/61.5fa27a9b.js",
    "revision": "35ea6907f8c9a0cf30e55ebfa4d3f8b4"
  },
  {
    "url": "assets/js/62.db453fad.js",
    "revision": "8ae4174f71b931f90d57f100bcf7baaf"
  },
  {
    "url": "assets/js/63.ee5d80eb.js",
    "revision": "c19ec79174371149dbadc7714c81010f"
  },
  {
    "url": "assets/js/64.e47e2a6c.js",
    "revision": "b460616ab19e6ef0b5f0da0aa9dc7990"
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
    "url": "assets/js/69.230a0ed4.js",
    "revision": "bf1ffdadce5c59f0a5a687f9efd288df"
  },
  {
    "url": "assets/js/7.0ef86d0c.js",
    "revision": "259bc7fc4552fe4ac18e68ed51c63955"
  },
  {
    "url": "assets/js/70.90a5cdb5.js",
    "revision": "9d18fa3e3fb7be9cdaeb0384e1a6c180"
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
    "url": "assets/js/73.df7085db.js",
    "revision": "bf92c76bbaf479dd9cf792d3778bad52"
  },
  {
    "url": "assets/js/74.1917ccca.js",
    "revision": "c5d9e284d44506ec619265b912b8f449"
  },
  {
    "url": "assets/js/75.6565967e.js",
    "revision": "4729b3bd9a9fc96dc21b23222f191056"
  },
  {
    "url": "assets/js/76.4a2ee014.js",
    "revision": "c434cf16830fbef0d8a4792b0d574244"
  },
  {
    "url": "assets/js/77.2b0360bc.js",
    "revision": "5deb01ba29f972d76819066a7f4747ae"
  },
  {
    "url": "assets/js/78.7d0cb434.js",
    "revision": "2b2c2b10af704f958e96e4a2eecc8e61"
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
    "url": "assets/js/80.1ba7f790.js",
    "revision": "dadd28a8d151a4bbb11c66b9ef5ef419"
  },
  {
    "url": "assets/js/81.abd4fb22.js",
    "revision": "11368d5c399ffb698ece7bd2b46ce74d"
  },
  {
    "url": "assets/js/82.4f11c45f.js",
    "revision": "3e826cb6c59e712934a39098f429be23"
  },
  {
    "url": "assets/js/83.a4d53da9.js",
    "revision": "27d5f01983d98c8aed335d273973aeb7"
  },
  {
    "url": "assets/js/84.b7900556.js",
    "revision": "1a55c7a5212e19b4809e2bfef13d4309"
  },
  {
    "url": "assets/js/85.697a3c71.js",
    "revision": "184a11d5119e328bf759ba66aee751a3"
  },
  {
    "url": "assets/js/86.1b95cfee.js",
    "revision": "79d7e65a2c56ca2d7b3c08f76e0cb78c"
  },
  {
    "url": "assets/js/87.70ff1456.js",
    "revision": "f285fa2847790d4d87cc33356a4caacc"
  },
  {
    "url": "assets/js/88.98e67a62.js",
    "revision": "50118911c4703bc97a9e832132b0ce1c"
  },
  {
    "url": "assets/js/89.3ba9e18a.js",
    "revision": "3dde85b357887c0522cab5af58650cda"
  },
  {
    "url": "assets/js/9.2defcf5e.js",
    "revision": "a937c7db865dbfc72dac0fc002859581"
  },
  {
    "url": "assets/js/90.331116dc.js",
    "revision": "9761533af74b2e841b797ac649979af9"
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
    "url": "assets/js/95.c0086e6e.js",
    "revision": "7888f1bf355e15fcd09936a33208c476"
  },
  {
    "url": "assets/js/96.c844617b.js",
    "revision": "0ada6f0b67859a0e1b37f0b78a081e65"
  },
  {
    "url": "assets/js/app.6198905b.js",
    "revision": "1ca78ffcbeb05c8749dd3baccdb919b7"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "8ade59e91bc497ae39685860098af253"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "a205933103a8fe475debf2869c68b9ac"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "365189160865d2ae718eca569fa1005a"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "dd4aba612cbbd1d5c9cfb8a5b1f2a1cb"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "5bdbb4ddc23f69bdcb140c282d60ce4e"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "669567e1c06595bcce1a9c455f9664ec"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "2d06ca4f38ab4db075b2c43c3d66e4b1"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "cd81db5ebfb083161c121dc3b5566d75"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "3e2c7a20281d6c6ea93fe036a31b2d8d"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "51817c85d5579e7e0969c2690e85b2bf"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "ee525c5218c6dd71b4ec35c15b996455"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "1695fcbab814066851274a42c62c7056"
  },
  {
    "url": "base/example/1.index.html",
    "revision": "9f155fc9c8254c21e6a4d3be031135ad"
  },
  {
    "url": "base/example/2.student.html",
    "revision": "a294a6aa5e8212925216737424a71418"
  },
  {
    "url": "base/example/3.prototype.html",
    "revision": "d54d7545cc758d85485258a050156e68"
  },
  {
    "url": "base/example/4.function.html",
    "revision": "2e3a9f77c6589d3b95ae9f08891e614e"
  },
  {
    "url": "base/example/5.this.html",
    "revision": "3a24631ea4451d7a6fe9d7dc4fef1b0a"
  },
  {
    "url": "base/example/6.origin.html",
    "revision": "9eb74c66a98fa86d819031f8d4f246b7"
  },
  {
    "url": "base/example/7.extends.html",
    "revision": "4a66924f41a45f800bf0cec55228c9f5"
  },
  {
    "url": "base/example/8.jQuery.html",
    "revision": "d9a75c5fc98dfdfa5643634c1815a332"
  },
  {
    "url": "base/example/9.lodash.html",
    "revision": "83179ee53e125f8738d7a1ce2badd49e"
  },
  {
    "url": "base/node/1.index.html",
    "revision": "265f12002d31b16d09fbe82ce7db8d64"
  },
  {
    "url": "base/node/10.cache.html",
    "revision": "63541cecd5d6d2e46488e2d3908c995b"
  },
  {
    "url": "base/node/11.tcp.html",
    "revision": "05dddd44507aafde65ffa1849c4425c8"
  },
  {
    "url": "base/node/12.yargs.html",
    "revision": "323324febd3b93c6393b2e150774eb76"
  },
  {
    "url": "base/node/13.compress.html",
    "revision": "c717a150716ea2d2f5f7901999295c4b"
  },
  {
    "url": "base/node/14.crypto.html",
    "revision": "3b7580d5ce5944f8a83b4583bea2ecd0"
  },
  {
    "url": "base/node/15.process.html",
    "revision": "359e46ea5221a274b9a04bfe2837b547"
  },
  {
    "url": "base/node/16.action.html",
    "revision": "187cb275fc99b3b72bfc04ac983b8969"
  },
  {
    "url": "base/node/2.install.html",
    "revision": "50a065316390607a04aa1e08ab5efaa8"
  },
  {
    "url": "base/node/3.repl.html",
    "revision": "3c3d069c3dab2da29bd0d0b73d058b69"
  },
  {
    "url": "base/node/4.core.html",
    "revision": "c7b580c2e053c0f1ebc346d26b0923f3"
  },
  {
    "url": "base/node/5.module.html",
    "revision": "2e4262239d4e00db1e476a88e898f34d"
  },
  {
    "url": "base/node/6.2.html",
    "revision": "1687dd6d8fd824d74b9ef2c1354dd342"
  },
  {
    "url": "base/node/6.encoding.html",
    "revision": "e83e09adcf7d94dd65839af790fbe243"
  },
  {
    "url": "base/node/7.buffer.html",
    "revision": "d547c78324259d4981eaf6ab34ec66ec"
  },
  {
    "url": "base/node/8.fs.html",
    "revision": "d306b4af1a945c018cfb433c9208f7bd"
  },
  {
    "url": "base/node/9.stream.html",
    "revision": "e621ec167e35c273182037778da2eec6"
  },
  {
    "url": "base/ssr/1.index.html",
    "revision": "76964c50274ed1211c49bbffa0cf0db0"
  },
  {
    "url": "base/ssr/2.nunjucks.html",
    "revision": "983ad063e01dcd9b8790e88672ca84fa"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "3db7e9bbf393f18355240c3aecde298d"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "8c7c9f4467f2317dd8a3f646d77b290f"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "208682dc5ef95e0c8e42e44d162af675"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "f95d03e31943523538afc439d86ae4a2"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "2c5ff408e82c31ead3273fba6e92d5ac"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "f44f920fdb7093feefdb3725ded0d01f"
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
    "revision": "6592269a20dd8e782b305f60552d4ed6"
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
    "revision": "08ac8db449500de97c00fb6f6fe676d6"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "97b7b08a61d91cc343ceb0fabe65b7fc"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "614c1ff9bcb8612304ae2aec9abc8180"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "8f0fb7a2c4516ff591e2a75a75eae114"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "5feda8b30e03b7f1dbdeb459333ded9f"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "0b6863ded9eb754f710087cd4fb69fa8"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "925732eeff18727cf7b456fdbd52d150"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "753eec49a4f9aeb981f6f1d3faa04b02"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "7e7661cdd14f4b4cdd45b895000af901"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "f7a5a4d6fb63277d5df7a4460f8f036c"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "5b6452e9ffa6359ef15d1393158a6699"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "0201db2c0ea83195924a25e08e29aebc"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "aa303fbbd608363bbafdb49651a2bc5d"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "908361f450745117ea84f89767226e5f"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "ebc8f9ea80885a7a132537fbc2ac76f0"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "13c704f1576790e9ed47b6a4cc95d305"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "3a7040fed358c505b03bac35f276537e"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "7babbed00e133b06f770c6845433d4d2"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "df904cae25707e06e570c399a14ccd75"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "1b03a50703b0a3bbb948b51334d1ec34"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "bf853d2cd34fc6242f8fbd1db14444b9"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "c43e95e1403eb77126bdc686d5ce37fc"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "3d921034a452032964cc3a279feb8d49"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "86b4fd426075c29ee3664a378e6e2c7d"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "8a5e3d7f6ecc5523d2c72661399ffddc"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "a84fc3c4bb78130d01ad755f25f9e465"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "dbfd8a55f8946036781631344acc6b89"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "34f4df4560eab3fdf3fa340a0f23b894"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "1e1468883a7b1d473b2285f4fb34e832"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "37921db8f6fbaa9c781985d1bddbeaa8"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "80e82ee5d4b76eaaaf5300ece6eb43ea"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "55bd4eb7115890addb472dcc7ba59d28"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "bc6574f362264e605b5f36a4eb3c3446"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "fe5c7534ac5b9ee5e050bca585d6ef9c"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "60ba15759fff2cbc3e0825b17335b9e3"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "3223d8c5576b74cf96bd80dc0a1f7d11"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "45dbdf12ddd1956ac798066375942cfa"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "322e525e97560ddcf4518d8706d00c89"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "b977481ab1664f779dc2334258565011"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "10443a499d9fe742736678643726560b"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "f06732b4d394cebe1f1d4ed346d9f680"
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
