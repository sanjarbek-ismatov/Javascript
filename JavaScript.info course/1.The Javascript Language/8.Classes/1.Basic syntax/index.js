function Person2(name, age){
    this.name = name
    this.age = 17
}
/**
 * Person class
 * @class Person
 */
class Person1 extends Person2{
    /**
     * @constructor
     * @param {string} name
     */
    constructor(name, age){
        super(name, age)
    }
}

let Person3 = class extends Person2{
    constructor(name, age) {
        super(name, age);
    }
}
const person1 = new Person3("Sanjarbek", 17)
console.log(person1)
// console.log(typeof Person1)
// console.log(typeof Person2)

// console.log(Person1.name, Person2.name)

// console.log(Object.getOwnPropertyNames(Person1), Person1.length)


function classMaker(n){
    return class MiniClass{
        add(){
            console.log(n++)
        }
        ["increase" + String(n) + "ByOne"](){
            console.log(n++)
            return new MiniClass()
        }
    }
}
const Class = classMaker(0)
// new Class().add()
// new Class().add()
// new Class().add()
// new Class().increase0ByOne()
new Class().increase0ByOne().increase0ByOne()


class User{
    name = "Sanjarbek"
    constructor() {
        this.name = "Sarvinoz"
    }
    click = () => {
        console.log(this.name)
    }
    method(){

    }
}
const user1 = new User()
// console.log(user1.name)
// console.log(User.prototype.click) // undefined
// console.log(User.prototype.method) // is showed
// setTimeout(user1.click, 1000)