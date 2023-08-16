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
        console.log(this.name); // (*)
    }
}

class Rabbit extends Animal {
    constructor() {
        super();
        this.name = "rabbit"
    }
    method() {
        console.log(false)
    }
}

new Animal().method()// animal
new Rabbit().method() // animal