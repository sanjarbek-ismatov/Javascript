const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "painting", "hiking"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    }
};


Object.defineProperty(person, "name", {
    get(){
        return this.firstName + " " + this.lastName
    },
    set(name){
        [this.firstName, this.lastName] = name.split(/\s+/i)
    },
    enumerable: true,
    configurable: true
})

console.log(person.name)
person.name = "Sanjarbek Ismatov"
console.log(person.lastName)


function Person(name){
    function splitter(name){
        return name.split(/\s+/i)
    }
    [this.firstName, this.lastName] = splitter(name)
    Object.defineProperty(this, "name", {
        get() {
           return this.firstName + " " + this.lastName
        },
        set(v) {
            [this.firstName, this.lastName] = splitter(v)
        },
        configurable: false,
        enumerable: false
    })
}
const person1 = new Person("Sanjarbek Ismatov")
person1.name = "Sarvinoz Ismoilova"
console.log(person1)