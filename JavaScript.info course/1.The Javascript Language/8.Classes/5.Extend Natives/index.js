class CustomArray extends Array{
    isEmpty() {
        return this.length === 0
    }
    static get [Symbol.species](){
        return Array
    }
}
// class CustomArray{
//     isEmpty(){
//         return this.length === 0
//     }
// }
// CustomArray.__proto__ = Array
// CustomArray.prototype = Array.prototype
// CustomArray.prototype.__proto__ = Array.prototype
// Object.setPrototypeOf(CustomArray.prototype, Array.prototype)
const arr = new CustomArray(1, 2, 3)
const filteredArr = arr.filter(v => v > 1)
console.log(CustomArray.hello)
// console.log(filteredArr.isEmpty()) // Error

class Class{
    static some(){
        return true
    }
}
class Bro{
    constructor() {
    }
}
// Bro.prototype = Class.prototype
// Bro.__proto__ = Class
Bro.prototype.__proto__ = Class.prototype
// console.log(Bro.some())