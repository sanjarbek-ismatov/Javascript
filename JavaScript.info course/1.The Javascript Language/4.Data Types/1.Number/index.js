/*
const num1 = 1000000000
const easyReadableNum = 1_000_000_000
const shortNum = 1e+9
console.log(easyReadableNum === shortNum)

const NUM = 0x7d5

const nums = {}
nums.decimal = parseInt(NUM, 10) // number
nums.binary = NUM.toString(2) // string
nums.octagon = NUM.toString(8) // string
nums.heximal = NUM.toString(16)
console.log(nums)
console.log(2005 === 0o3725) // true
console.log(parseInt(NUM)) // 2005

console.log(1223232..toString(36))
*/

/* Math */
/*
console.log(Math.ceil(5.4)) // 6
console.log(Math.floor(5.6)) // 5
console.log(Math.round(5.5)) // 6
console.log(Math.trunc(5.32434)) // 5

console.log(~~(Math.PI * 100) / 100) // 3.14
console.log(Math.PI.toFixed(2)) // 3.14, string

console.log(Number(Math.PI.toFixed(2)).toFixed(5))

console.log(0.2 + 0.1) // not 0.3
console.log(0.7 + 0.1) // 0.799999999999999
console.log((0.2 + 0.1).toFixed(1))
console.log( 9999999999999999 ) // 10000000000000000

console.log(isNaN(10))

console.log(NaN === NaN) // false

console.log(Number.isNaN("str")) // false, argument should be number
console.log(isNaN("str")) // true, because isNaN converts given value to number

Number.isFinite("123") // false
isFinite("123") // true

console.log(Object.is(NaN, NaN)) // true

console.log(Object.is(0, -0)) // false

console.log(+"99%") // NaN
console.log(parseInt("99%")) // 99
console.log(parseInt("%99")) // NaN

console.log(parseInt("0xFF", 16)) // if we give value as string, we can give radix to second parameter
console.log(parseInt(0xff)) // 255
*/

/* Math functions */
// get random number from 10 to 20
console.log(~~((Math.random() * 11) + 10))

function random(min, max){
    return ~~(min + Math.random() * (max - min))
}
console.log(random(1, 5))