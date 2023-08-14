// Prototype methods

let animal = {
    eats: true
};

const rabbit = Object.create(animal, {
    runs: {
        value: {
            result: true
        }
    }
})
// const rabbit = {}
// rabbit.__proto__ = animal
// Object.setPrototypeOf(rabbit, animal)
// console.log(rabbit.runs, rabbit.eats)

const rabbitClone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit))
console.log(rabbitClone === rabbit)

const human = {
    live: true
}
const person = {
    name: "Sanjarbek"
}
const hum1 = {
    __proto__: human
}
hum1.__proto__.name = person.name
console.log(hum1.live, hum1.name)

class CustomObject{
    static getPrototypeOf(){

    }
    get __proto__(){

    }
    set __proto__(o){
    //
    }
}

let obj = Object.create(null);
// or: obj = { __proto__: null }

let key = "__proto__"
obj[key] = "some value";

console.log(obj[key]); // "some value"


const strongObj = Object.create(null)
// strongObj.toString() // it's not defined
strongObj.hi = "Hi"
console.log(strongObj.hi)

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    console.log(this.name);
};

let rabbit1 = new Rabbit("Rabbit");
rabbit1.sayHi(); // Rabbit
Rabbit.prototype.sayHi(); // undefined
Object.getPrototypeOf(rabbit1).sayHi(); // undefined
rabbit1.__proto__.sayHi(); // undefined