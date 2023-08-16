function f(phrase) {
    return class {
        sayHi() { console.log(phrase); }
    };
}

class User extends f("Hello") {
    constructor() {
        super();
        super.sayHi()
        // console.log("Im working")
        this.bro = 18
    }
    customSay(){
        super.sayHi()
    }
}

// new User().sayHi(); // Hello
// console.log(new User().bro)
// new User().customSay()


class Animal {
    name = 'animal';
    method(){
         console.log(true)
    }
    constructor() {
        // console.log(this.name); // (*)
    }
}

class Rabbit extends Animal {
    constructor() {
        super();
        // super.method() true
        // this.__proto__.method() // false
        this.name = "rabbit"
    }
    method() {
        this.__proto__.method() // true
        // this.__proto__.method.call(this)
        // console.log(false)
    }
}
console.log(Rabbit.prototype.__proto__ === Animal.prototype) // true
// new Animal().method()// animal
new Rabbit().method() // animal

const animal = {
    eat(){
        console.log("I'm an animal")
    }
}
const plant = {
    eat(){
        console.log("I'm a plant")
    }
}
const rabbit = {
    __proto__: animal,
    eat(){
        super.eat()
    }
}
const tree = {
    __proto__: plant,
    eat: rabbit.eat,
    eatAsPlant(){
        super.eat()
    }
}
rabbit.eat()
tree.eat()
tree.eatAsPlant()