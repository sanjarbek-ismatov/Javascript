// sample fibonacci which returns array
function sampleFibonacciArray(end) {
  const arr = [0, 1];
  for (let i = 1; i < end - 1; i++) {
    arr[i + 1] = arr[i] + arr[i - 1];
  }
  return arr;
}
console.log(sampleFibonacciArray(10));

function simpleFibonacci(end) {
  let a = 0,
    b = 1;
  let count = 2;
  while (count <= end) {
    let c = a + b;
    a = b;
    b = c;
    count++;
  }
  return a;
}
console.log(simpleFibonacci(10));

function* generatorFibonacci() {
  const arr = [0, 1];
  let result;
  while (!result) {
    arr.push(arr.at(-1) + arr.at(-2));
    result = yield arr;
  }
}
const sequence = generatorFibonacci();
sequence.next();
sequence.next();
sequence.next();
console.log(sequence.next());
sequence.next(true);

function fibonacciRecursion(end) {
  if (end === 1) return [0];
  else if (end === 2) return [0, 1];
  const prevSequence = fibonacciRecursion(end - 1);
  return [...prevSequence, prevSequence.at(-2) + prevSequence.at(-1)];
}

// console.log(sampleFibonacciArray(12))
const fibonacci = generatorFibonacci();
function nthFibonacci(n) {
  if (n < 2) return n;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}

function recurFib(n) {}
