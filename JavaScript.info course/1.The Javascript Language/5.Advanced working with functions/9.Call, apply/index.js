// DECORATOR

// function print(n) {
//   console.log(`The number is ${n}`);
// }
// function printDecarator(func) {
//   return function (n) {
//     if (!Number.isNaN(+n)) {
//       func(n);
//     }
//   };
// }
// print = printDecarator(print);
// print(10);

// CALL

// function sayHello(message) {
//   console.log(`${message}, ${this.name}`);
// }

// sayHello.call({ name: "Sanjarbek" }, "Salom");
// sayHello.call({ name: "Sarvinoz" }, "Hello");

const worker = {
  method(x) {
    return x + 1;
  },
  slow(x) {
    return this.method(x);
  },
};

function cacheDecorator(func) {
  const cache = new Map();
  return function (x) {
    const args = [].join.call(arguments);
    console.log("🚀 ~ file: index.js:38 ~ args:", args);
    if (cache.has(x)) return cache.get(x);
    let result = func.call(this, x);
    cache.set(x, result);
    return result;
  };
}
worker.slow = cacheDecorator(worker.slow);

console.log(worker.slow(1, 2, 3));
console.log(worker.slow.calls);
// console.log(worker.slow(2));

function callsCopy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }
  wrapper.calls = [];
  return wrapper;
}

worker.slow = callsCopy(worker.slow);
worker.slow(1, 2, 3);
worker.slow(1, 2, 3);
console.log(worker.slow.calls);
