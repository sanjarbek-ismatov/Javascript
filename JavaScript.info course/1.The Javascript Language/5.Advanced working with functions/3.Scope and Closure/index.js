{
    let message1 = "String"
    var message2 = "String"
}
// console.log(message1) // error
console.log(message2) // String

let variable1 = "a"
// let variable1 = "b" // it has been declared

var variable2 = "a"
var variable2 = "b"

console.log(variable2) // b


function outer(){
    console.log(name)
    // let name = "Sanjarbek"
    function inner(){

        console.log(name)
    }
    return inner
}
let name = "Bro"
const inner = outer()
console.dir(outer)

function counter(){
    let count = 0
    return function(){
        return count++
    }
}
let  count1 = counter()
const count2 = counter()
count1 = null
// console.log(count())

// let name_1 = "John";

// function sayHi() {
//     console.log("Hi, " + name_1);
// }

// name_1 = "Pete";
//
// sayHi(); // Pete
//
// name_1 = "Bro"
//
// sayHi() // Bro

let phrase = "Hello";

{
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi()

function sum(a){
    return (b) => a + b
}


// let x = 1;
//
// function func() {
//     console.log(x); // Reference Error
//
//     let x = 2;
// }
//
// func();

// Tasks

let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    // ...your code...
    return function(e){
        return a <= e && e <= b
    }
}

function inArray(arr) {
    // ...your code...
    return function(e){
        return arr.includes(e)
    }
}

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2



function byField(fieldName){

    // Your code goes here.
    return function(a, b){
        return a[fieldName] > b[fieldName] ? 1 : -1
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.sort(byField('age'));

function makeCount(){
    const counts = []
    // let i = 0
    // while(i < 10){
    //     let j = i
    //     const count = function (){
    //         console.log(j)
    //     }
    //     counts.push(count)
    //     i++
    // }
    for(let i = 0; i < 10; i++){
        const count = function (){
              console.log(i)
            }
           counts.push(count)
    }
    return counts
}
const counts = makeCount()
console.log(counts[5]())