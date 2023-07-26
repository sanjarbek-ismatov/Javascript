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

const string = "Hello World Sanjarbek"
console.log(string.split(" ", 2))

const emptyArray = []
// emptyArray.reduce()  error

const requirement = {
    min: 18,
    max: 60,
    checkAge(age){
        return this.min <= age && age <= this.max
    }
}

const users = [10, 18, 70, 20]
console.log(users.filter(requirement.checkAge, requirement))


// users.fill(0, 0, 10)

users.copyWithin(0, 3)
console.log(users)

function camelize(string){
    const arr = string.split("-").map((e, i) => {
        if(i === 0){
            return e
        } else {
            return e[0].toUpperCase() + e.slice(1)
        }
    })
    return arr.join('')
}
console.log(camelize("-webkit-transition"))
console.log(camelize("background-color"))
let arr1 = [5, 3, 8, 1]
function filterRangeInPlace(arr, start, end){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > end || arr[i] < start){
            arr.splice(i, 1)
        }
    }
}
// filterRangeInPlace(arr1, 1, 4)
console.log(arr1)

class Calculator{
    constructor(){
        this.methods = [{name: "+", method: (a, b) => a + b}, {name: "-", method: (a, b) => a - b}]
    }
    addMethod(name, method){
        this.methods.push({name, method})
    }
    calculate(name, value){
        const [a, operand, b] = name.split(/\s+/gi)
        const method = this.methods.find(e => e.name.includes(operand)).method
        return method(+a, +b)
    }
}
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);

let result = powerCalc.calculate("12 + 34");
console.log( result ); // 8

function shuffle(arr){
    arr.sort(() => Math.random() - 0.5)
}
shuffle(arr1)
console.log(arr1)