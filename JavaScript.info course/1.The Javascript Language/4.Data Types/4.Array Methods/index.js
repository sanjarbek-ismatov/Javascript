const arr = [1, 2, 3]
console.log(arr.concat(4, 5, 6))
console.log(arr.concat([4, 5, 6]))
const objectAsArray = {
    0: 4,
    1: 5,
    2: 6,
    [Symbol.isConcatSpreadable]: true,
    [Symbol.iterator]: function*() {
        for(const key in this){
            if(key !== "length")
            yield this[key]
        }
    },
    length: 3
}
console.log(arr.concat(objectAsArray)) // 1, 2, 3, 4, 5, 6
for(const item of objectAsArray){
    console.log(item)
}
console.log(Array.from(objectAsArray))
const nan = [NaN]
console.log(nan.includes(NaN)) // true, this method got added later
console.log(nan.indexOf(NaN)) // - 1

arr.sort() //  wrong, because this method checks element with its lexical case