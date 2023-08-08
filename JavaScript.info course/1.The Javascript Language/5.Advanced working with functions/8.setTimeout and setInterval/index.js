let timeout = setTimeout(
  (name) => console.log("hello, %s", name),
  2000,
  "Sanjarbek"
);

// setTimeout("console.log(true)", 500) // shows error in nodejs, but not in browser
// console.log(timeout);
setTimeout(() => clearTimeout(timeout), 500);

// setInterval

// let intervalId = setInterval(
//   () => console.log(new Date().toLocaleTimeString()),
//   1000
// );

// use setTimeout as interval

// let timeoutAsInterval = setTimeout(function inner() {
//   console.log(new Date().toLocaleTimeString());
//   timeoutAsInterval = setTimeout(inner, 1000);
// }, 1000);

// increase interval by amount
// let delay = 1000;
// let timeoutId = setTimeout(function timeout() {
//   console.log(`${delay / 1000}s`);
//   delay += 1000;
//   timeoutId = setTimeout(timeout, delay);
// });

let a = 5;
setTimeout(() => (a = 10));
setTimeout(() => console.log(a)); // 10
console.log(a); // 5

// Tasks

// function printNumbers(from, to) {
//   let i = from;
//   let interval = setInterval(() => {
//     console.log(i);
//     if (i === to) clearInterval(interval);
//     i++;
//   }, 1000);
// }

function printNumbers(from, to) {
  let i = from;
  let timeout = setTimeout(function run() {
    console.log(i);
    if (i < to) timeout = setTimeout(run, 1000);
    i++;
  }, 1000);
}
printNumbers(1, 10);
