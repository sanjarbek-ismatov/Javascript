// Function prototype

function Human(name){
    this.name = name
}
const sanjarbek = {
    writeCode(){
        console.log("Code has been written")
    }
}
// console.log(Human.prototype.constructor === Human) // true
Human.prototype = sanjarbek
Human.prototype.constructor = Human
// const human1 = Human.prototype.constructor("Sanjarbek")
const human = new Human("Sanjarbek")
const human2 = new human.constructor("Sanjarbek")
// console.log(human.writeCode())
console.log(human2)
// console.log(human1.valueOf())


// function Rabbit() {
//     prototype = {constructor: Rabbit}
// }
// Rabbit.prototype = {
//     jumps: true
// }
// Rabbit.prototype.jumps = true
// // Rabbit.prototype = {}
// const rabbit = new Rabbit()
// console.log(rabbit.jumps)
// console.log(rabbit.constructor === Rabbit) // true


// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true
// };
//
// let rabbit = new Rabbit();
//
// delete Rabbit.prototype.eats;
//
// console.log( rabbit.eats ); // ?