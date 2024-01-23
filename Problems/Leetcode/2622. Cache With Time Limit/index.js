var TimeLimitedCache = function () {
  this.caches = 0;
  this.keys = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const doesExist = this.keys[key] !== undefined;
  if (doesExist) {
    clearTimeout(this.keys[key].ref);
    this.caches--;
  } else {
    this.keys[key] = {};
  }
  const foundKey = this.keys[key];
  foundKey.value = value;
  foundKey.ref = setTimeout(() => {
    foundKey.value = -1;
    this.caches--;
  }, duration);
  this.caches++;
  return doesExist;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  let returnResult = this.keys[key];
  return returnResult ? returnResult.value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.caches;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
