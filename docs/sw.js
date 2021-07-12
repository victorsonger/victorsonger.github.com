// https://developers.google.com/web/fundamentals/primers/service-workers
var CACHE_NAME = "my-site-cache-v1";
var urlsToCache = [
  // "/", // 这里就别缓存根路径了  不然html怎么变更内容都不会更新
 "/swCache.css", 
 "/swCache.js"];


// 这仅是一个示例，实际您可以在 install 事件中执行其他任务，或完全避免设置 install 事件侦听器。
self.addEventListener("install", function(event) {
  // Perform install steps
  /*   此处，我们以所需的缓存名称调用 caches.open()，之后再调用 cache.addAll() 并传入文件数组。 这是一个 promise 链（caches.open() 和 cache.addAll()）。 event.waitUntil() 方法带有 promise 参数并使用它来判断安装所花费的时间，以及安装是否成功。 */
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// 这里我们定义了 fetch 事件，并且在 event.respondWith() 中，我们传入来自 caches.match() 的一个 promise。 此方法检视该请求，并从服务工作线程所创建的任何缓存中查找缓存的结果。
// self.addEventListener("fetch", function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       console.log("event.request-----", event.request);
//       console.log("response-----", response);
//       // Cache hit - return response
//       // 如果发现匹配的响应，则返回缓存的值，否则，将调用 fetch 以发出网络请求，并将从网络检索到的任何数据作为结果返回。 这是一个简单的例子，它使用了在安装步骤中缓存的所有资产。
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

// 连续缓存新的请求
/* self.addEventListener("fetch", (event) => {
  console.log('进入fetch， event----', event);
  console.log('caches----', caches.keys());
  // https://developer.mozilla.org/zh-CN/docs/Web/API/FetchEvent/respondWith
  // FetchEvent 接口的 respondWith() 方法旨在包裹代码，这些代码为来自受控页面的request生成自定义的response。这些代码通过返回一个 Response 、 network error 或者 Fetch的方式resolve。
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log('response----', response);
      if (response) {
        return response;
      }

      // 一个请求流只能被消费一次
      // IMPORTANT:Clone the request. A request is a stream and
      // can only be consumed once. Since we are consuming this
      // once by cache and once by the browser for fetch, we need
      // to clone the response.
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // 检查返回是否合法
        // 确保响应类型为 basic，亦即由自身发起的请求。 这意味着，对第三方资产的请求也不会添加到缓存
        if (!response || response.status !== 200 || response.type !== "basic") {
          console.log("response.type", response.type);
          // 不合法的话就不缓存了  直接透传出去
          return response;
        }

        // 如果是合法返回，就缓存起来  再透传出去

        // 响应流也只能被消费一次，同样地，先缓存起来
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
}); */
