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