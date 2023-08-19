console.log([] instanceof Array) // true
console.log([].__proto__ === Array.prototype) // true

class Animal{
    // static [Symbol.hasInstance](obj){
    //     return Boolean(obj.eat)
    // }
    eat(){
        console.log("I eat")
    }
}
function Rabbit(){}
// first way

// Rabbit.__proto__ = Animal
// Rabbit.prototype.__proto__ = Animal.prototype

// second way

// Object.setPrototypeOf(Rabbit, Animal)
// Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)
const rabbit = new Rabbit()
// console.log(rabbit instanceof Animal) // true
Rabbit.prototype = {}
console.log(rabbit instanceof Rabbit) // false

console.log(Object.prototype.toString.call(10)) // [object Number]

const user = {
    [Symbol.toStringTag]: "User"
}
console.log(user.toString()) // [object User]

console.log(user[Symbol.toStringTag]) // User