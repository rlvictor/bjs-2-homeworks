//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = md5(args);
    const objectInCache = cache.find((item) => item.hash === hash);
    if (objectInCache) {
      console.log("Из кеша: " + objectInCache.result);
      return "Из кеша: " + objectInCache.result;
    }
    const result = func(...args);
    cache.push({ hash, result });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId;
  let hasCalled = false;
  function wrapper(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(args);
      wrapper.count++;
    }, delay);
    if (!hasCalled) {
      func(...args);
      wrapper.count++;
      hasCalled = true;
    }
    wrapper.allCount++;
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
