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
class Rabbit{}
// first way

// Rabbit.__proto__ = Animal
// Rabbit.prototype.__proto__ = Animal.prototype

// second way

Object.setPrototypeOf(Rabbit, Animal)
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype)
const rabbit = new Rabbit()
console.log(rabbit instanceof Animal) // true