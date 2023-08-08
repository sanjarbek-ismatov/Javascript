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

function sayHello(message) {
  console.log(`${message}, ${this.name}`);
}

sayHello.call({ name: "Sanjarbek" }, "Salom");
sayHello.call({ name: "Sarvinoz" }, "Hello");
