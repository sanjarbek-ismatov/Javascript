function isPrime(n) {
  if (n === 2) return true;
  for (let i = 2; i <= Math.floor(Math.sqrt(n) + 1); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

module.exports = { isPrime };
function primeNumbers(n) {
  if (n === 1) return [];
  const nums = primeNumbers(n - 1);
  return isPrime(n) ? [...nums, n] : nums;
}

console.log(primeNumbers(10));

/**
 * Classic approach
 * @param {number} n
 * @returns
 */
function isPrimeClassic(n) {
  if (n === 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeClassic(24862048));
