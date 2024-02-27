const { isPrime } = require("./index");
/**
 * Prints prime numbers from 2 to n
 * @param {number} n
 */
function primeNumbers(n) {
  if (n < 2) return [];
  const arr = primeNumbers(n - 1);
  return isPrime(n) ? [...arr, n] : arr;
}

console.log(primeNumbers(10));
