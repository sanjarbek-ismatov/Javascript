function isPowerOfTwo(n) {
  let result = false;
  while (n >= 1) {
    if (n === 1) result = true;
    n /= 2;
  }
  return result;
}

console.log(isPowerOfTwo(16));
// Big-O = O(log n)
function isPowerOfTwoWithRecursion(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 2 === 0) return isPowerOfTwoWithRecursion(n / 2);
  else return false;
}

// Big-O = O(log n)

function isPowerOfTwoBitWise(n) {
  return (n & (n - 1)) === 0;
}

// Big-O = O(1)

function isPowerOfTwoRec(n) {
  if (n === 1) return true;
  else if (n < 1) return false;
  return isPowerOfTwoRec(Number.isFinite(n) ? n / 2 : n);
}
console.log(isPowerOfTwoRec(32));
