function helloWorld(){
    return 0
}
let helloWorld2 = function(){
    return 0
}
console.log(helloWorld.name) // helloWorld
console.log(helloWorld2.name) // helloWorld2

// const functions = [fn = function(){}, function(){}]
// console.log(functions[0].name) // fn
// console.log(functions[1].name) // ""


function fn(a,...d){
    console.log(a.length)
}
// fn(() => console.log('hello'))
console.log(fn.length) // 1
fn.bla = "bla"

console.log(fn.bla)


function makeCount(){
    function counter(){
        return counter.count++
    }
    counter.count = 0
    return counter
}

const counter = makeCount()
counter.count = 100
console.log(counter())
console.log(counter())
console.log(counter())


let sayHi = function func(name){
    if(!name)
        // return sayHi("Sarvinoz") // sayHi is not a function
    return func("Sarvinoz")
    console.log(name)
}
sayHi()
const nested = sayHi
sayHi = null
nested()

// Tasks


function makeCounter() {
    let count = 0;

    // ... your code ...
    function counter(){
        return counter.count++
    }
    counter.count = count
    counter.set = function(count){
        counter.count = count
    }
    counter.decrease = function(){
        counter.count--
    }
    return counter
}

let counter1 = makeCounter();

console.log( counter1() ); // 0
console.log( counter1() ); // 1

counter1.set(10); // set the new count

console.log( counter1() ); // 10

counter1.decrease(); // decrease the count by 1

console.log( counter1() ); // 10 (instead of 11)


function sum(a){
    let currentSum = a
    function f(b){
        currentSum += b
        return f
    }
    f.toString = function(){
        return currentSum
    }
    f.valueOf = function(){
        return currentSum
    }
    return f
}
console.log(+sum(2)(3)(4)) // 9