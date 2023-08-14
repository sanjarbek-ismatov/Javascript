Object.defineProperty(Object.prototype, "some", {
    value: null,
    enumerable: false,
    configurable: false,
    writable: true
})
const obj = {}
console.log(obj.__proto__ === Object.prototype)
console.log(obj.toString === Object.prototype.toString) // true
console.log(10..some === Object.prototype.some) // true

const arr = []
console.log(arr.__proto__ === Array.prototype)
console.log(arr.__proto__.__proto__ === Object.prototype) // true

const customArray = {
    0: "S",
    1: "S",
    2: "S",
    length: 3
}
customArray.join = Array.prototype.join
console.log(customArray.join(','))