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
    "revision": "4c5fbeffd6c79e3c25147f0a46ce1e00"
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
    "url": "assets/js/10.18a3bfa7.js",
    "revision": "1c4adcd0059436e2da27a7526e73da82"
  },
  {
    "url": "assets/js/11.8e3f0642.js",
    "revision": "0fea83c588a56c0594e21453a0198bac"
  },
  {
    "url": "assets/js/12.355bc80d.js",
    "revision": "e19a4c6cdf2973918a4c3dda4d7656a6"
  },
  {
    "url": "assets/js/13.fc0f3e4a.js",
    "revision": "9f47b5436cb6fa93d1d8a686e4991648"
  },
  {
    "url": "assets/js/14.0a0a8d87.js",
    "revision": "03f5f5df9a969f6e36a78f2f2782e8be"
  },
  {
    "url": "assets/js/15.c5491206.js",
    "revision": "4a5015120df9cb216523c45092170ff6"
  },
  {
    "url": "assets/js/16.9ed5cc92.js",
    "revision": "5e07135e39b200221e3e84e9ddf6811e"
  },
  {
    "url": "assets/js/17.916ac063.js",
    "revision": "61dd01d30ea6bfa124a8bddb9d3167f8"
  },
  {
    "url": "assets/js/18.c9b03d9c.js",
    "revision": "fb9d3ff7fafe418bf0e20589eea81247"
  },
  {
    "url": "assets/js/19.a774cd53.js",
    "revision": "040d7324d9dac62c7a6d1f2f878089d2"
  },
  {
    "url": "assets/js/2.8ac8e006.js",
    "revision": "04171752d4c872c2e182c4caf998277f"
  },
  {
    "url": "assets/js/20.62247d3e.js",
    "revision": "ce74c4ee48a35f40ade5a3687c5b2724"
  },
  {
    "url": "assets/js/21.6ab97afe.js",
    "revision": "e4db11f9bd2b11b76f9519a596508027"
  },
  {
    "url": "assets/js/22.fdce669a.js",
    "revision": "6a8c2ea1e65573c2e97d35355b0a26ec"
  },
  {
    "url": "assets/js/23.236477c2.js",
    "revision": "10f40f641626dd85f3d950e1018cfd2e"
  },
  {
    "url": "assets/js/24.e98adaf9.js",
    "revision": "79d662b1db7f47c4e0d9ec8a2bec61d0"
  },
  {
    "url": "assets/js/25.5aa470ac.js",
    "revision": "6b4cb76fd7de2901c74a4953ca6ac502"
  },
  {
    "url": "assets/js/26.effa7771.js",
    "revision": "e737fa83c007a013fd12811a01dca4f9"
  },
  {
    "url": "assets/js/27.175efcc4.js",
    "revision": "58d4d5fca1f9845b6050e9b8d094260c"
  },
  {
    "url": "assets/js/28.b611c32a.js",
    "revision": "8f85daa5a26b2dfc731c96d4b01c45c2"
  },
  {
    "url": "assets/js/29.0e3f3102.js",
    "revision": "b57737099bd1db698ff7305b207e870e"
  },
  {
    "url": "assets/js/3.b185f933.js",
    "revision": "006beb4ad7fca757bcff0b4b8f749004"
  },
  {
    "url": "assets/js/30.2972c7d5.js",
    "revision": "086f24fc85de0824f5bba4a16ea65794"
  },
  {
    "url": "assets/js/31.2cbc655f.js",
    "revision": "0570575c332f70cbf612e1070e7f1c02"
  },
  {
    "url": "assets/js/32.dffac303.js",
    "revision": "b1a8b6b8633e78f7c131f2d8f59882d1"
  },
  {
    "url": "assets/js/33.48b9765d.js",
    "revision": "dbb5e7691e2ce54d042e1ac67e857236"
  },
  {
    "url": "assets/js/34.71888d6c.js",
    "revision": "291ab53dee3f9a077e4debec2d247853"
  },
  {
    "url": "assets/js/35.c0d73207.js",
    "revision": "cefb8060b9284388a837b881a3004914"
  },
  {
    "url": "assets/js/36.f719d135.js",
    "revision": "c88d872843c5b5fcf6348b7cf218b598"
  },
  {
    "url": "assets/js/37.97031b98.js",
    "revision": "d7d1b5a6907f55bd42f36e93d85996f6"
  },
  {
    "url": "assets/js/38.33d190e4.js",
    "revision": "a46737e545386002df7ce83ea29adc17"
  },
  {
    "url": "assets/js/39.2b0ba82e.js",
    "revision": "bc8ddcf5219d02009f4984b38e569b6a"
  },
  {
    "url": "assets/js/4.81b8ed13.js",
    "revision": "a8440ed93d7bcb3652ea57731efedae4"
  },
  {
    "url": "assets/js/40.385831cb.js",
    "revision": "eeb1c349eab1b7e846815cb002fa26eb"
  },
  {
    "url": "assets/js/41.64a46cb9.js",
    "revision": "c794c136c67eace77728fc382af26858"
  },
  {
    "url": "assets/js/42.e2086ade.js",
    "revision": "9d347431c969301026d47fae4eca9bc8"
  },
  {
    "url": "assets/js/43.c41555ce.js",
    "revision": "775cc63bcadc6d676da50fd4e7f079aa"
  },
  {
    "url": "assets/js/44.c7713db7.js",
    "revision": "96d4a000550776df3fff81a794904786"
  },
  {
    "url": "assets/js/45.b3f18120.js",
    "revision": "6be41c8ed760ad73820c32be925239c4"
  },
  {
    "url": "assets/js/46.15d2899c.js",
    "revision": "1049f32c543c4305a9ba6baf066cac5d"
  },
  {
    "url": "assets/js/47.00ee6a7e.js",
    "revision": "b47d4c97b5413fef97bc931aebc45422"
  },
  {
    "url": "assets/js/48.28c32dec.js",
    "revision": "f068960b79b522e5a0b3417c4ba00027"
  },
  {
    "url": "assets/js/49.cbe8a16d.js",
    "revision": "e3cd5c35a89e7b93a722e5eab58b4807"
  },
  {
    "url": "assets/js/5.651c3654.js",
    "revision": "f1dafc30ff083a066c96253cb4d7b193"
  },
  {
    "url": "assets/js/50.6ac55cd0.js",
    "revision": "fcf16f04b8bf4fd3cd3e43b7d67e56db"
  },
  {
    "url": "assets/js/51.0fd45888.js",
    "revision": "a4860616a2d811d1bd4be6474b841668"
  },
  {
    "url": "assets/js/52.5e6a67e8.js",
    "revision": "8d958e27c5163a5f3a0444107d6b086e"
  },
  {
    "url": "assets/js/53.2ead3d13.js",
    "revision": "24d740e0ea4e42208624cac583810dc5"
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
    "url": "assets/js/8.a76811ee.js",
    "revision": "8756d622a91ea715c087018642cf4aeb"
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
    "url": "assets/js/89.eecaa70f.js",
    "revision": "1cc0dfabb3e87cb594f1e391d3360c1e"
  },
  {
    "url": "assets/js/9.73a453f4.js",
    "revision": "123115523302c44dfb3927e3dac15f3f"
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
    "url": "assets/js/app.3aff489a.js",
    "revision": "df47f6b89ad1768376f2cbfcc57b2462"
  },
  {
    "url": "base/3.browser/1.browser.html",
    "revision": "e6f204adea3244177601cbced5a9896f"
  },
  {
    "url": "base/3.browser/2.tree.html",
    "revision": "e400bdf516b8b4d68c240a425390be26"
  },
  {
    "url": "base/3.browser/3.reflow.html",
    "revision": "f7b7ab8ebbc445496f1c932c33d7f853"
  },
  {
    "url": "base/3.browser/4.async.html",
    "revision": "95535f86cd42220eaef89ea68f026080"
  },
  {
    "url": "base/3.browser/5.eventLoop.html",
    "revision": "e1fc8d47921e67ad27b58dc2025b90e2"
  },
  {
    "url": "base/3.browser/6.microtaskMacrotask.html",
    "revision": "8207b63d9158155c81ee67454a79bdab"
  },
  {
    "url": "base/3.browser/7.crp.html",
    "revision": "2d6fe77e5d8ccbf4f7412c286871b4a1"
  },
  {
    "url": "base/3.browser/8.skeleton.html",
    "revision": "9d4caff6745c5f1291235dc72980b05c"
  },
  {
    "url": "base/3.browser/9.test.html",
    "revision": "b5cde69d09b7b48bbf9620f60b769f40"
  },
  {
    "url": "base/dom/1.event.html",
    "revision": "700ab404ae5e633b5dbf03bb430b1304"
  },
  {
    "url": "base/dom/2.dom2.html",
    "revision": "41ccd93b490f34b388bcb160aa361ba5"
  },
  {
    "url": "base/dom/3.event.html",
    "revision": "67378b31996b4cc157bd3fb52cb06071"
  },
  {
    "url": "base/es6/1.let.html",
    "revision": "5b394dee84be35a9cfbad6f3efa5a5d6"
  },
  {
    "url": "base/es6/2.Promise.html",
    "revision": "d1d89bf4f3bd4d6c16ba5b17a3230794"
  },
  {
    "url": "base/oop/1.objectOriented.html",
    "revision": "49da96b0b30fc62319fbbc5249f49a64"
  },
  {
    "url": "base/oop/2.constructor.html",
    "revision": "f765df1a3d986339b99bfc0a47d3892a"
  },
  {
    "url": "base/oop/3.prototype.html",
    "revision": "5d1c9050081a0c67ec22a7fc2c59b7ad"
  },
  {
    "url": "base/oop/4.function.html",
    "revision": "5db462d02c47e2c521c81a308ca5f5a7"
  },
  {
    "url": "base/oop/5.this.html",
    "revision": "916fc3ea782afd972daae266788d9a18"
  },
  {
    "url": "base/oop/6.origin.html",
    "revision": "38b613a71eb1d67464ac59df625d1b01"
  },
  {
    "url": "base/oop/7.extends.html",
    "revision": "374b1123a5b8e5b7d27e3a40cd9645d9"
  },
  {
    "url": "base/oop/8.jQuery.html",
    "revision": "9696857c24ffaf275cb574aaeddd1547"
  },
  {
    "url": "base/oop/9.lodash.html",
    "revision": "94e94e200cab4882bf9d85db3bcaa8fd"
  },
  {
    "url": "base/stack/1.node.html",
    "revision": "e56bc1a3426ad1fda7abf2be242d48fd"
  },
  {
    "url": "base/stack/10.cache.html",
    "revision": "c732327d298b03ac503ed03907770011"
  },
  {
    "url": "base/stack/11.tcp.html",
    "revision": "a6989c90a24606a397a78d8e61246d48"
  },
  {
    "url": "base/stack/12.yargs.html",
    "revision": "f0ffdebb8dfdc7cf9038860660528502"
  },
  {
    "url": "base/stack/13.compress.html",
    "revision": "a3260b4e47f1e5255f04cc43c7c9e72e"
  },
  {
    "url": "base/stack/14.crypto.html",
    "revision": "2b4866ad13e10d1b7cb84c110670f495"
  },
  {
    "url": "base/stack/15.process.html",
    "revision": "37940cb9e8d821de6bb75bae4e44acb9"
  },
  {
    "url": "base/stack/16.action.html",
    "revision": "4a54943f58318e3a231b65831eea8d00"
  },
  {
    "url": "base/stack/2.install.html",
    "revision": "bbae09f630ef78354809c5e8cfe78f76"
  },
  {
    "url": "base/stack/3.repl.html",
    "revision": "838dff2604ea15346243433db9bb3120"
  },
  {
    "url": "base/stack/4.core.html",
    "revision": "376dc6154c2fb8a25c79f6807a8ce8a0"
  },
  {
    "url": "base/stack/5.module.html",
    "revision": "e46a0eaa6a72d47b165302a44a076771"
  },
  {
    "url": "base/stack/6.2.html",
    "revision": "24ebeb290429f125f4973abc5992e80c"
  },
  {
    "url": "base/stack/6.encoding.html",
    "revision": "d44710ee38f6d788602365fd0141a637"
  },
  {
    "url": "base/stack/7.buffer.html",
    "revision": "5e751a4e21ee1248c1c16631bad4d028"
  },
  {
    "url": "base/stack/8.fs.html",
    "revision": "a08ab30410934e9331f7e7d89c2b0b1a"
  },
  {
    "url": "base/stack/9.stream.html",
    "revision": "b1373650bee47a47efc83621956b6ce4"
  },
  {
    "url": "base/websocket/1.index.html",
    "revision": "b20a7225eda0f5368a1753fbd162a1ce"
  },
  {
    "url": "base/websocket/2.https.html",
    "revision": "713411791c998c466fa69de5ba2dcd37"
  },
  {
    "url": "base/websocket/3.tcp.html",
    "revision": "05e08f63ca2a3282250f36e8f5d840b1"
  },
  {
    "url": "base/websocket/5.dns.html",
    "revision": "aa12903e8e1120e8e99447b1019b91ea"
  },
  {
    "url": "base/websocket/6.websocket.html",
    "revision": "7c8ab5fe5914770c7bd1f6b81a27ecf5"
  },
  {
    "url": "base/websocket/7.socket.html",
    "revision": "04af7257af5ee02a3744a3ca6f059f08"
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
    "revision": "a0e9fd6670973984839ff5a9c819e446"
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
    "revision": "c3967b1f5770dc82e034c18f03e072d5"
  },
  {
    "url": "read/book1/2.dataDriven.html",
    "revision": "4e5bf1a76ff0931b8e17bd438699ed95"
  },
  {
    "url": "read/book1/3.componentization.html",
    "revision": "5fa858dc2fea914a0eca2e00ce4a112e"
  },
  {
    "url": "read/book1/4.deepResponsePrinciple.html",
    "revision": "a0d42d6ee03317e1a46087adc4423b48"
  },
  {
    "url": "read/book2/1.preparation.html",
    "revision": "e4d539a05a1158447fff03c78ab02bb9"
  },
  {
    "url": "read/book2/2.dataDriven.html",
    "revision": "813c5e42c8874fed5353b7106dbb4fab"
  },
  {
    "url": "read/book2/3.componentization.html",
    "revision": "7fe40aeac2356aeb9bf4d463931611ed"
  },
  {
    "url": "read/book2/4.deepResponsePrinciple.html",
    "revision": "fdf21d9c7f23a8a4fccf867ccb13b536"
  },
  {
    "url": "read/book3/1.preparation.html",
    "revision": "0af16170f46c0a2f9647a68a866eb8d6"
  },
  {
    "url": "read/book3/2.dataDriven.html",
    "revision": "31e0c6e53cb2455e7b0608f83188b144"
  },
  {
    "url": "read/book3/3.componentization.html",
    "revision": "db82dcb81a3765d079b9842fe0cb4bfa"
  },
  {
    "url": "read/book3/4.deepResponsePrinciple.html",
    "revision": "63fb052c2cc42ab3ba9bbb5b68211222"
  },
  {
    "url": "read/book4/1.preparation.html",
    "revision": "066449ac2f61f7cbb9346766817c6bda"
  },
  {
    "url": "read/book4/2.dataDriven.html",
    "revision": "3861e14caf7b9042cc05e4077d004d82"
  },
  {
    "url": "read/book4/3.componentization.html",
    "revision": "64ee8d10cdd8261c190bc138bda0f88e"
  },
  {
    "url": "read/book4/4.deepResponsePrinciple.html",
    "revision": "5a7f928c1febf5daf65ac3dd08ad0c20"
  },
  {
    "url": "senior/cookie/1.cookie.html",
    "revision": "75860838bb688f9261f484d40345ba92"
  },
  {
    "url": "senior/graphql/1.index.html",
    "revision": "ab4bdce5ec3929fcda037c196a67b5a2"
  },
  {
    "url": "senior/graphql/i18n.html",
    "revision": "c7176774ad7c4ddca595d5c5f90950bd"
  },
  {
    "url": "senior/http/1.http.html",
    "revision": "bc895a9fb4b0e088fbeab21a90c3f126"
  },
  {
    "url": "senior/http/10.serviceRender.html",
    "revision": "9e1f5efe205736b827538fd5d0bd7824"
  },
  {
    "url": "senior/http/11.debounceAndThrottle.html",
    "revision": "86ecedc0cba6fe49fe69e9bdf5219ead"
  },
  {
    "url": "senior/http/12.webpack.html",
    "revision": "71293c6103dda1db85386ab65a690f16"
  },
  {
    "url": "senior/http/2.http.html",
    "revision": "37fe122eafea7d25db576b2412e3613b"
  },
  {
    "url": "senior/http/3.https.html",
    "revision": "f92a77f8192eb4f9715b9038f63354ce"
  },
  {
    "url": "senior/http/4.render.html",
    "revision": "547a874fa3dc22fab4937f552aa8a271"
  },
  {
    "url": "senior/http/5.api.html",
    "revision": "2d83a32062b2d93be4b1700b4387f49a"
  },
  {
    "url": "senior/http/6.form.html",
    "revision": "0ceaea95170e96fc48abb2e82d19b96d"
  },
  {
    "url": "senior/http/7.checkBox.html",
    "revision": "c7de7accf2358263740a62d899d6f9c9"
  },
  {
    "url": "senior/http/8.EventLoop.html",
    "revision": "600d0770a7c2574685351d1994627880"
  },
  {
    "url": "senior/http/9.alert.html",
    "revision": "fe18feb89949f0d2beaf393b68a7e94a"
  },
  {
    "url": "senior/network/1.network.html",
    "revision": "7820fa3c9947dfa02ee7780d7b2baac4"
  },
  {
    "url": "senior/security/1.index.html",
    "revision": "cd3d1b4e92a8841514c10f960350244d"
  },
  {
    "url": "senior/security/1.repellerxss.html",
    "revision": "dab32edb5d644e87dbfced1f8e82d6a4"
  },
  {
    "url": "senior/security/2.csrf.html",
    "revision": "aa809d252894811567035a039c9a9050"
  },
  {
    "url": "senior/security/2.storagexss.html",
    "revision": "f658948c2c030bf5d7d669e9c16f9ed6"
  },
  {
    "url": "senior/security/3.dombasexss.html",
    "revision": "f24623aae0fbe47f82ba1dde78b45624"
  },
  {
    "url": "senior/security/3.doos.html",
    "revision": "7b27e090e63ba053f3c04631ac9fb89b"
  },
  {
    "url": "senior/security/4.http.html",
    "revision": "0427a119b3abd1a3a79b11425d7b805b"
  },
  {
    "url": "senior/security/4.payloadxss.html",
    "revision": "71303b7bfcd2b7c0189601277c3de2b5"
  },
  {
    "url": "senior/serverless/1.index.html",
    "revision": "0007430c90063b4bc4e2c2d28e291be7"
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
