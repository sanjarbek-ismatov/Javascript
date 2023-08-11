// Object properties
"use strict" // show error
const user = {
    name: "Sarvinoz",
    age: 17,
    none: null
}
Object.defineProperty(user, 'herLove', {
    value: "Sanjarbek",
    enumerable: true,
    // writable: false, if we comment it, writable will be still false
    configurable: true
})
Object.defineProperty(user, 'none', {
    enumerable: false
})
// user.herLove = "Other" // doesn't work
console.log(Object.getOwnPropertyDescriptor(user, 'herLove'))
console.log(user.herLove)

for (let key in user){
    console.log(key) // none isn't enumerable
}
console.log(Object.keys(user)) // none isn't still showing

Object.defineProperty(user, 'valueOf', {
    enumerable: true
})

// Object.defineProperty(Math, 'PI', {
//     writable: true,
//     configurable: true
// }) // this shows error, because reconfigure is false
// Math.PI = 10 // error


const person = {
    name: "Sanjarbek"
}

Object.defineProperties(person, {
    age: {
        value: 17,
        writable: true,
        configurable: false,
        enumerable: true
    },
    hisLove: {
        value: "Sarvinoz",
        enumerable: false,
        configurable: false,
        writable: false
    }
})

console.log(person.hisLove) // works

const cloned = Object.defineProperties({}, Object.getOwnPropertyDescriptors(person))
console.log(cloned)


// Define an object representing a person
const object = {
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
//
// Object.preventExtensions(object)
// object.firstName = "Sanjarbek"
// delete object.firstName // works
// // object.none = null //  object is not extensible
// console.log(object)

// Object.seal(object) // configurable false
// object.firstName = "Sardor" // works
// delete object.firstName // cannot delete
// object.none = null // cannot extend
// console.log(object)

// Object.freeze(object) configurable and writable false

// all actions are frozen

console.log(Object.isFrozen(Math)) // false
console.log(Object.isSealed(Math)) // false
console.log(Object.isExtensible(object)) // true





