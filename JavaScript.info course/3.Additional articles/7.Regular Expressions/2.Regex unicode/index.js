const letters = "S с";
const digits = "10 xAF";
const hello = "Hello Привет 你好 123_456 $10";
console.log(letters.match(/\p{Letter}/gu));
console.log(letters.match(/\p{Ll}/gu));
console.log(letters.match(/\p{Lu}/gu));
console.log(letters.match(/\p{Letter}/gu));
console.log(digits.match(/\p{Hex_Digit}/gu));

console.log(hello.match(/\p{sc=Han}/u));
console.log(hello.match(/\p{Sc}\d+/gu));
