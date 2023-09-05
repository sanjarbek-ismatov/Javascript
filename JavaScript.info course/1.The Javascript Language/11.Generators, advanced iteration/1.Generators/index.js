function* generator(){
    yield 1
    yield 2
    yield 3
    yield 4
}
// function generatorCustom(){
//     let value = 1
//     return {
//         [Symbol.iterator](){
//             return this
//         },
//         [Symbol.isConcatSpreadable]: true,
//         next(){
//             return {
//                 done: value > 4,
//                 value: value++,
//             }
//         }
//     }
// }

const gn1 = generator()

console.log(gn1.next())
console.log(gn1.next())
console.log(gn1.next())
console.log(gn1.return(10))
console.log(gn1.next())

// const gn2 = generatorCustom()
// for(const result of gn1){
//     console.log(result)
// }
// for(const result of gn2){
//     console.log(result)
// }

// console.log([0, ...gn1])
// console.log([0,...gn2])


// const range = {
//     from: 0,
//     to: 10,
//     *[Symbol.iterator](){
//         for(let i = this.from; i <= this.to; i++){
//             yield i
//         }
//     }
// }
// function* generator(){
//     yield* range
// }
// console.log(...range)
// for(const result of range){
//     console.log(result)
// }
// for(const result of generator()){
//     console.log(result)
// }


// function* gen() {
//     // Pass a question to the outer code and wait for an answer
//         let result = yield "2 + 2 = ?"; // (*)
//         console.log(result);
//         let result2 = yield "Your name: "
//         console.log(result2);
// }
//
// let generator = gen();
// console.log(generator.next().value)
// generator.next(3)
// generator.next("Sanjarbek")
// try {
//     generator.throw(new Error("I don't know what error is"))
// }catch (ex){
//     console.log(ex)
// }

function* pseudoRandom(seed){
    const DIVIDER = 2147483647
    const DEF =  16807 % DIVIDER
    let prev = 1
    let i = 1
    const result = []
    while(i <= seed){
        result.push(prev *= DEF)
        i++
    }
    yield* result
}
const gen = pseudoRandom(2)
console.log(gen.next().value)