let func = new Function('a', 'b', "return a + b")
let func2 = new Function('a, b', 'return a + b')
console.log(func(2, 3))
console.log(func2(2, 3))
// let value = "Hello" // it doesn't help
function outer(){
    let value = "Sanjarbek"
    return new Function('console.log(value)') // value is not defined
}
// outer()()