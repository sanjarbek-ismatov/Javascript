const bigint1 =  BigInt(100)
const bigint2 = 30n
console.log(bigint1 / bigint2)
// console.log(+bigint1) // Error
console.log(Number(bigint1)) // 100
console.log(9 == 9n)
console.log(9 === 9n)