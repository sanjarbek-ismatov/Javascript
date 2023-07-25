const arr1 = new Array()
const arr2 = [true, 1, null, undefined, function(){console.log('hello')}]
arr2[4]()
// arr1.push(true)
// arr1[arr1.length] = true
console.log(arr1)
// arr1.pop() // true
// arr1.length = arr1.length - 1
// console.log(arr1) // true
arr1.unshift(1, 2, 3)
// Array.prototype.customUnShift = function(...values){
//     const originalArray = [...this]
//     this.length = this.length + values.length
//     for (let i = 0; i < this.length; i++) {
//         this[i + values.length] = originalArray[i];
//     }
//     for(let i = 0; i < values.length; i++){
//         this[i] = values[i]
//     }
//
// }
// arr1.customUnShift(4, 5, 6)
arr1.name = "Sanjarbek"
console.log(arr1)

const array = new Array(10, 2, 5)
const arrayWithoutLength = Array.of(10)
console.log(String(array)) // 10, 2, 5
console.log(String(array) === "10,2,5") // true
console.log(arrayWithoutLength)

const a = [] + 1 // [] = "", "" + 1 = 1
const b = [1, 2] + 2 // [1, 2] = 1,2, 1,22
// [] == 0 true, [] == "0" false
// [] -> "" -> 0
console.log(a, b)