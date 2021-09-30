'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ccb1ff705f0a9d832f3df1b8002b09d5",
"assets/assets/images/anim/indian_flag.json": "fe42cdaba1a5f8bef68ef3d8e4987520",
"assets/assets/images/anim/online_shopping.json": "5f4f9e2eaf52143364966e8c7eab112c",
"assets/assets/images/anim/payment.json": "27ecf7a4b4e3250d18c76c18558428c5",
"assets/assets/images/anim/qrcode.json": "9e9c4967719d9e8db87f54052637acc6",
"assets/assets/images/anim/share.json": "5e81b77965a38a9d04e71b93532254d7",
"assets/assets/images/anim/success.json": "bfe9b0cd4d49962e13061397aa863998",
"assets/assets/images/anim/support.json": "986b85698c4c7f0e0805e390563c734c",
"assets/assets/images/app_icon/app_icon_rounded.png": "b6b550a65f07d458d888c053aa08f166",
"assets/assets/images/png/charge.png": "198767dc3f9e6af3ce548cb5900cf0c9",
"assets/assets/images/png/coupon.png": "23e443388ba096bcc26f91d38eb60f79",
"assets/assets/images/png/customers.png": "a57add79aefc565077a44bd0e71bb82c",
"assets/assets/images/png/destination_map_marker.png": "aaf9817ee803a92175966bf97c3eb669",
"assets/assets/images/png/order.png": "7457a447096b8e4f27db03ce4f446dd1",
"assets/assets/images/png/qr_code.png": "6f99f0797447ca533820d02a22673083",
"assets/assets/images/png/rupee.png": "b290131de9e010a7501e6a8ec69a6775",
"assets/assets/images/png/sell_guds_logo_with_title.png": "636f459b91a23a15f22fd7fb03557298",
"assets/assets/images/svg/add%2520to%2520collection.svg": "21cf72ad46c703c8e5eed91cbbc560dd",
"assets/assets/images/svg/alarm.svg": "4cdae6bacc46625c0f140bf25c13efdb",
"assets/assets/images/svg/application.svg": "620dc9538b377d846d67d289d4e2a3e1",
"assets/assets/images/svg/arrow2_down.svg": "42a7d614a10a45bf39bc52dad382d06e",
"assets/assets/images/svg/arrow2_left.svg": "3fdac5f8924d213137703df0268c732d",
"assets/assets/images/svg/arrow2_right.svg": "ac29edd3e87d773f0ad1735a02cf70fe",
"assets/assets/images/svg/arrow2_up.svg": "77aae873215e728d8bbd73644427fdeb",
"assets/assets/images/svg/arrow_anti-clockwise.svg": "496fee9ab58fe4dfe276d7215b8f389c",
"assets/assets/images/svg/arrow_down.svg": "100020f9ce8d6b2c72a767eb2555e487",
"assets/assets/images/svg/arrow_left.svg": "1a04bc1ea7b0f2838cb6a73d721852da",
"assets/assets/images/svg/arrow_lockwise.svg": "264303bfb9ec51d40594fabb0c3b59c9",
"assets/assets/images/svg/arrow_right.svg": "ce35a12205e436b11738c16be0cfbfb4",
"assets/assets/images/svg/arrow_up.svg": "580f5777b5cbb452611d5e1c939e6c12",
"assets/assets/images/svg/assisant.svg": "d1b6dcddc87cb52e4912dcecadb87271",
"assets/assets/images/svg/bag.svg": "3efcd87ff4c7e59090de1ab457e20c7f",
"assets/assets/images/svg/basket.svg": "6cd6fc55fd82901f6bb03d8e1bd1bcda",
"assets/assets/images/svg/basketball.svg": "bdb41c4d0c3267a3bc5cbdfdad9c41d2",
"assets/assets/images/svg/battery_empty.svg": "161f74590417272206b0882d9768ad27",
"assets/assets/images/svg/battery_full.svg": "ee731aede7209043f62e8cd17f67b518",
"assets/assets/images/svg/beer.svg": "7c1245ba96043eab4cb42991076fd6a6",
"assets/assets/images/svg/bell.svg": "7576e13d079af3ef979cee45888aa536",
"assets/assets/images/svg/bookmark.svg": "d96b97e6a01fdc340c9190087d3ffef4",
"assets/assets/images/svg/briefcase.svg": "b657d2018809c5b6a30cf1ec0fb457a5",
"assets/assets/images/svg/cake.svg": "8ddbe826e845f187f946d06ba299c177",
"assets/assets/images/svg/calendar.svg": "6af6ea9d40a3495054bf7e579a916a5d",
"assets/assets/images/svg/camera.svg": "f153313d5b60ccaa88339765a4789c67",
"assets/assets/images/svg/candle.svg": "72e04bad546031b41edc83bc499ce707",
"assets/assets/images/svg/card.svg": "55eb14842147c2077aaf4b5221281cf3",
"assets/assets/images/svg/cart.svg": "b7ea14105dbb2ab6b483e3fab0973eea",
"assets/assets/images/svg/cash.svg": "fadd886ead50bdc98e288309d723ed60",
"assets/assets/images/svg/caution.svg": "71db4cecd917e009378373a5399103ce",
"assets/assets/images/svg/cd.svg": "67526773fed8299d0662e37054b8cb92",
"assets/assets/images/svg/chart.svg": "65556df8c86dc20674344542233e408e",
"assets/assets/images/svg/chat.svg": "a2d7c31a7d737c22d07fdcb934bcc83c",
"assets/assets/images/svg/choose.svg": "3cd2d1fdb437fcb8906a660d1d7b9ce1",
"assets/assets/images/svg/circle_arrow_down.svg": "295fbd838cdebe5c66b0eb802fb88779",
"assets/assets/images/svg/circle_arrow_left.svg": "1ce1ce46da489db43f73127bbf6e6691",
"assets/assets/images/svg/circle_arrow_right.svg": "99663d374034fd0baea2f123e5fddc24",
"assets/assets/images/svg/circle_arrow_up.svg": "7b532e5b548288594feaa209e7908302",
"assets/assets/images/svg/circle_choose.svg": "403fac867e17a24bdecefda582525081",
"assets/assets/images/svg/circle_close.svg": "96524bc17a4a792a215e8803736a1c6f",
"assets/assets/images/svg/circle_minus.svg": "09e83a15cdcaffb8f9b85a5a39a1aa09",
"assets/assets/images/svg/circle_plus.svg": "0041f92f06a8a6805d6edb12e8c7554b",
"assets/assets/images/svg/clip.svg": "bae7b2c975e51d3e44554ff60e3c0789",
"assets/assets/images/svg/clock.svg": "753ca23199832b84f4b9a977f74d8fb5",
"assets/assets/images/svg/close.svg": "7543fb3c8f44cfcb05c6e9948fbc586c",
"assets/assets/images/svg/clothes.svg": "7d45d86af5de9938a5560d2995fffc31",
"assets/assets/images/svg/cloud1.svg": "ae8d70f8656339db3afd29b534e55fca",
"assets/assets/images/svg/cloud2.svg": "397baf000fcbaef4570373a32cf72eb1",
"assets/assets/images/svg/cloud_download.svg": "c531e5c7fa5d159b8658f418c2a7bf61",
"assets/assets/images/svg/cloud_upload.svg": "5b52105e8da5ea2d65e77abc9ac66ebf",
"assets/assets/images/svg/cocktail.svg": "e1e815125aedcd3a5290cb94f2831f32",
"assets/assets/images/svg/coffe_tea.svg": "2eac6e5bc60d7a786c196b22c5b0a637",
"assets/assets/images/svg/collection.svg": "9f08e13fa40d8149af810663e1325644",
"assets/assets/images/svg/compass.svg": "046a6586584005c663ece634d1eb4d1d",
"assets/assets/images/svg/coordinates.svg": "d63d0e612903561824adb5ce0c377b93",
"assets/assets/images/svg/coupon.svg": "d3d919524fc8c7d6ac489f188940b9ed",
"assets/assets/images/svg/crown.svg": "985b4aece804221edfaeb53ef1c2b44e",
"assets/assets/images/svg/cupcake.svg": "f8b3b24353bd705c40dabefe442662d2",
"assets/assets/images/svg/dashboard.svg": "52ec0699857efcc77a811d33f4404c51",
"assets/assets/images/svg/desktop.svg": "791a1937107fb340cff98c87649763a6",
"assets/assets/images/svg/diamond.svg": "9e017650b840dfe6d9cf3adf995faa51",
"assets/assets/images/svg/dollar.svg": "e994fc49eda03958d7eee9e248bb9a4e",
"assets/assets/images/svg/download.svg": "c041a0e96e6adba218f5fba9ee058f07",
"assets/assets/images/svg/earphone.svg": "2ee607dae0c4f768eab48f6548a8a07b",
"assets/assets/images/svg/earth.svg": "e3fd8f4e71394787acd6b37e366a63db",
"assets/assets/images/svg/empty.svg": "fc47de6e02e3ed207ad491f9c90889bc",
"assets/assets/images/svg/enter.svg": "7108f3c0e9ff81481156d35304e5369f",
"assets/assets/images/svg/euro.svg": "af88a05ba668f0043e3c785e6bf9c1d1",
"assets/assets/images/svg/eye.svg": "08e845fab4a8d568dc78b8d2e9fda4d0",
"assets/assets/images/svg/fast%2520forward.svg": "cf654c98dfa2edcf4a62c552695c6fdc",
"assets/assets/images/svg/file.svg": "7af6d389c6daf6d17e31075532e27b75",
"assets/assets/images/svg/file_choose.svg": "61e47a891d6a1d19ec24e26c73183775",
"assets/assets/images/svg/file_delete.svg": "da111525345b9c44b410860049a3145b",
"assets/assets/images/svg/file_empty.svg": "e54e17f952b4eb855f2996d2f73b895c",
"assets/assets/images/svg/file_minus.svg": "ce37e401e71bb917bf0f9cb520d74a7c",
"assets/assets/images/svg/file_plus.svg": "0c60c9bcec32315781682ef60d3ce95e",
"assets/assets/images/svg/file_text.svg": "a0c33735d299c944445cd2b4b00fac3b",
"assets/assets/images/svg/filter.svg": "5c15a8f8d27220652117a2b54d88d9ca",
"assets/assets/images/svg/flag.svg": "af9a7b4c3bcb319ab821fc8f5e4200aa",
"assets/assets/images/svg/flower.svg": "8cc39896a52d58e330360df24119dcf7",
"assets/assets/images/svg/focus.svg": "0126e86d6ead3e808fa21ef9ba029306",
"assets/assets/images/svg/gift.svg": "c1d075d15c4c66870b35bb6da549bd3f",
"assets/assets/images/svg/headphone%2520.svg": "7ad8075aa6175f603972978b7a300e57",
"assets/assets/images/svg/heart.svg": "ad6ebf3dddd682dcc8658a35c5dd45e5",
"assets/assets/images/svg/help.svg": "bd377897eadc77e0af1a72f50ce3520a",
"assets/assets/images/svg/hint.svg": "3c315971feb37115b593bae13a93ac1f",
"assets/assets/images/svg/home.svg": "fac9fdc35f0d21a1722a4e40a7bd1158",
"assets/assets/images/svg/hourglass.svg": "982e2bdecd4de685245dc62d75ec4417",
"assets/assets/images/svg/hyperlink.svg": "08cba16f63145fd04bdd80f6e97f6a42",
"assets/assets/images/svg/hyperlink2.svg": "cbb3451d1b7728410715e345d688fb70",
"assets/assets/images/svg/id%2520card.svg": "2440e0345695616dd12b50ae03ab4454",
"assets/assets/images/svg/juice.svg": "beb402fa52b30e7eb450a2b9f9ca4fdb",
"assets/assets/images/svg/key.svg": "ad65683e862f927a53a659a66f7cda5b",
"assets/assets/images/svg/lamp%2520bulb.svg": "c8501ee171df02dbd6649c4a62e86bcc",
"assets/assets/images/svg/leaves.svg": "db840c74cb497ec8fbdfeee5e60f4622",
"assets/assets/images/svg/life%2520buoy.svg": "4cbbfc6a4b69b15434d1cddbed6d6f62",
"assets/assets/images/svg/list.svg": "52d83ce43fdd358a1fd46f72befe7236",
"assets/assets/images/svg/list_choose.svg": "6fc41e29efe07a7ee8b33b11f80aceef",
"assets/assets/images/svg/list_item.svg": "14451b96a0d7018f536d5cecc7180b20",
"assets/assets/images/svg/locked.svg": "67376aa8b66056a6f83ba273a8cfccbb",
"assets/assets/images/svg/login.svg": "fc0ec0155e9c416a6235fda1e39bcb3f",
"assets/assets/images/svg/logout.svg": "b343a77f2f05eb039540c346887ab779",
"assets/assets/images/svg/mail.svg": "0e63f5f2b2a552b5d5e593af08a50584",
"assets/assets/images/svg/medal.svg": "8770c2d0dcbcb38b87f299b7fe005d74",
"assets/assets/images/svg/medal2.svg": "176b1291f4d3ad0dcc05f51a3cc49688",
"assets/assets/images/svg/megaphone.svg": "a5a0a3e6cc5134a3f9da63b15aded5f7",
"assets/assets/images/svg/message.svg": "2cf09455a3bbc0130421575c60d084f3",
"assets/assets/images/svg/microphone.svg": "42cf6b861c4fa0ce94987d20a5619d26",
"assets/assets/images/svg/minus.svg": "d7f6d4073638fecb11083050557882e8",
"assets/assets/images/svg/moon.svg": "12d2af27286499d93940caa33bfd4bdd",
"assets/assets/images/svg/mouse.svg": "5b6f9bda1e7fd1a7b0820090377c3130",
"assets/assets/images/svg/music.svg": "c9943108485bbf25ebc031f92f68fb19",
"assets/assets/images/svg/mute.svg": "766d5fbd0a3e4e8ceea453580f64aa3d",
"assets/assets/images/svg/navigation.svg": "2e9670d97c52f126917f0b35a2a49aca",
"assets/assets/images/svg/next.svg": "64d716d9ec60b70930cffa421af5f02c",
"assets/assets/images/svg/no.svg": "e8043e84a22abf44486b80ee98353a9b",
"assets/assets/images/svg/open%2520file.svg": "7e8afdaffbeaa40613d12d03d3972471",
"assets/assets/images/svg/order%2520form.svg": "4914525bf80fd8d86568b947357b7e54",
"assets/assets/images/svg/pad.svg": "4ebe21d6fe024dcc3d8422ef9561173b",
"assets/assets/images/svg/pause.svg": "08419c6935bce6b976acf41b0180b882",
"assets/assets/images/svg/phone.svg": "350616ec23ae1e9d3a04d29d4b4d788e",
"assets/assets/images/svg/picture.svg": "3e830d5bb24e9e0cd7fb967de9c884f1",
"assets/assets/images/svg/pie%2520chart.svg": "f90629cf52f88e3708ad0d8e3251af48",
"assets/assets/images/svg/pin.svg": "fda7b2924694d6ed260c09f5ee0e105b",
"assets/assets/images/svg/plane.svg": "185d04d7c695f56bc3ca01800aae3793",
"assets/assets/images/svg/planet.svg": "e4bc9c49f605f2e0673378777638e38f",
"assets/assets/images/svg/play.svg": "9db3e62c0604f28e968c93f0e81452ae",
"assets/assets/images/svg/plus.svg": "bcd6a33b850b8f3b5df27e6992ca1c16",
"assets/assets/images/svg/pound.svg": "1fa367d1f4f2cb720ff4b0466a50823b",
"assets/assets/images/svg/power.svg": "ca340d6ac641ea05ed53d9a2e27fb4ec",
"assets/assets/images/svg/previous.svg": "4a9e82304097c8e3d39d1b2cf910b04c",
"assets/assets/images/svg/rain.svg": "50523e2aab120c9b51fb9bf7298c9fc0",
"assets/assets/images/svg/refresh.svg": "58e9d725c046d84d49560770fa54bf85",
"assets/assets/images/svg/rewind.svg": "59d13a0f7f8563fce6eb9c0a5a818d16",
"assets/assets/images/svg/rocket.svg": "29db41adefa6ddbd92f5e980241aff22",
"assets/assets/images/svg/ruler.svg": "0ff27a78c1ba724338265769b6ff9a34",
"assets/assets/images/svg/scissors.svg": "23ad1703063fa2c9adc30ffb2e5ddd7f",
"assets/assets/images/svg/search.svg": "ff68eac400c958101ed54689d9c620a6",
"assets/assets/images/svg/setting_cog.svg": "7acedfbf3c5de7fdf3aa68a7d37bda3a",
"assets/assets/images/svg/setting_edit.svg": "cf725e9c0ec17a9f1a74ce2d9db94917",
"assets/assets/images/svg/setting_wrench.svg": "a79ead87084049e10afcaebff8dae37b",
"assets/assets/images/svg/signal.svg": "8fef3df96935a596ea398cc5dbcdbd9f",
"assets/assets/images/svg/snow%2520and%2520rain.svg": "c4e5f7f4574a9c7f0746126cf648a8fa",
"assets/assets/images/svg/snow.svg": "cdcefad868fe924c2f0aa680cffa35a4",
"assets/assets/images/svg/splash_image.svg": "70afcfa488cf8f9262ccde367ebc0674",
"assets/assets/images/svg/star.svg": "dfa7234807bc98a4a91a6c7a2bbd3229",
"assets/assets/images/svg/steering%2520wheel.svg": "fd78afe951e293c29d314cf743dcbd92",
"assets/assets/images/svg/stop.svg": "4f237ad1663209fe9b4efa3f0df79164",
"assets/assets/images/svg/sun.svg": "7096ca19a9e11b8989fb9adfcc1e64ad",
"assets/assets/images/svg/tag.svg": "81ae10a83a67c30338b6e32fb68b4916",
"assets/assets/images/svg/team.svg": "8186752e991f61e85ee465ba06f4c83c",
"assets/assets/images/svg/telephone%2520directory.svg": "14fadaae395de23e21a766fa4474d369",
"assets/assets/images/svg/telephone.svg": "36b141ad4725020606e432caf1e9eb93",
"assets/assets/images/svg/text.svg": "df49ce6b4e4d849727862e0c37d15123",
"assets/assets/images/svg/thunder.svg": "7c7bf50f382294614783b2f532168140",
"assets/assets/images/svg/tie.svg": "0a2d13f24a77981c4eaec6a68bf72190",
"assets/assets/images/svg/umbrella.svg": "2157618f829780736f3d434cb87eb935",
"assets/assets/images/svg/unlocked.svg": "56259e463b89e62e67b5140e5b3d9063",
"assets/assets/images/svg/upload.svg": "d586f9560f09e41fbabdefeb81a39dbe",
"assets/assets/images/svg/user.svg": "d25dfab29b689547d4465d7062b85d19",
"assets/assets/images/svg/van.svg": "1a10944d22f243e071facb370587af6f",
"assets/assets/images/svg/VIP.svg": "54bf3a11f3243e46a6a61cc720a84adf",
"assets/assets/images/svg/volume.svg": "5cc6baa2190f338ffeb977e037345b80",
"assets/assets/images/svg/wallet.svg": "4a3fecb5b7b39f65b733ffcb148c2554",
"assets/assets/images/svg/warehouse.svg": "9ad96f38ad5cdaaafb8351cbcfc1e8a9",
"assets/assets/images/svg/wifi.svg": "5ff36a0f0c0090e005384cc3b7b3ce5b",
"assets/assets/images/svg/wine.svg": "638a1e8a73435df5ce306b9d25133abf",
"assets/assets/images/svg/yuan.svg": "87d004a239bb9928b2b9abd0b65f9a7e",
"assets/assets/images/svg/zoom%2520in.svg": "df22febb7580e934688be3d8618b2277",
"assets/assets/images/svg/zoom%2520out.svg": "48f2f3444f1f096fe314804b28200bf0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "60a9823b3b5222bffa0da3ad2c833b47",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b3eae32e192dd8f3db59c65abc515606",
"/": "b3eae32e192dd8f3db59c65abc515606",
"main.dart.js": "5a1872d31bb91fe6f492634e643e90b3",
"manifest.json": "fdfbf72d2251c00dae538fdbee33b1d4",
"version.json": "46f630b89ef1bedd6ef931d0b1c92b9b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
