class Class{
    static user = "Sanjarbek"
    method(){
        console.log("I'm method")
    }
    static getName(){
        this.prototype.method()
        console.log(this.user, this.lastname)
    }
}
Class.lastname = "Ismatov"
class Class2 extends Class{}
Class2.getName()
console.log(Class2.lastname)

console.log(Class2.prototype.__proto__ === Class.prototype) // true
console.log(Class2.__proto__ === Class) // true

class Rabbit extends Object {
    constructor(name) {
        super()
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

console.log( rabbit.hasOwnProperty('name') ); // Error

console.log(Object.hasOwnProperty('getOwnPropertyNames')) // true
console.log(Rabbit.getOwnPropertyNames({a: '1'}))