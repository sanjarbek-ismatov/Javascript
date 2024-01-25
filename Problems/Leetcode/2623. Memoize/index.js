/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const savedArgs = {};
  return function (...args) {
    const argsAsStr = String(args);
    if (savedArgs[argsAsStr] === undefined || savedArgs[argsAsStr] === null) {
      const result = fn.call(this, ...args);
      savedArgs[argsAsStr] = result;
      return result;
    }
    return savedArgs[argsAsStr];
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(0, 0); // 5
memoizedFn(0, 0); // 5
console.log(callCount); // 1
