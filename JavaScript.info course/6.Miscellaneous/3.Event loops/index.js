const callBtn = document.getElementById("call");
// let i = 0;
//
// function count(startTime) {
//   do {
//     i++;
//   } while (i % 1e6 != 0);
//   if (i == 1e9)
//     alert(
//       "Hey bro, I've just finished it within " + (Date.now() - startTime) + "ms"
//     );
//   else setTimeout(() => count(startTime));
// }

// function count(startTime) {
//   do {
//     i++;
//   } while (i <= 1e9);
//   alert(
//     "Hey bro, I've just finished it within " + (Date.now() - startTime) + "ms"
//   );
// }
//
// callBtn.onclick = function () {
//   i = 0;
//   const startTime = Date.now();
//   count(startTime);
//   console.log("hello");
// };

/* -------------------------------------------------------------------- */

const title = document.getElementById("count-title");

// function counter(i = 0) {
//   do {
//     title.innerHTML = i.toString();
//     i++;
//   } while (i <= 1e3);
// }

function counter(i = 0) {
  do {
    i++;
    title.innerHTML = i.toString();
  } while (i % 1e3 != 0);
  if (i != 1e4) queueMicrotask(() => counter(i));
}

callBtn.onclick = function () {
  counter();
  console.log("next call");
};
