// Binding function
Function.prototype.customBind = function(context, ...args){
    const temp = {}
    if(context) {
        for (let key in context) {
            if(key !== this.name) {
                temp[key] = context[key]
            }
        }
    }
    temp[this.name] = this
    return () =>  {
        return temp[this.name](...args)
    }
}
const programmer = {
    name: "Sanjarbek",
    type: "Front end",
    print(){
        console.log(`${this.name} is ${this.type} developer`)
    }
}
const designer = {
    name: "John",
}
designer.print = programmer.print.customBind({name: "Bro"})
// programmer.print()
// const print = programmer.print.bind(programmer)
// print()

designer.print()

function sum(a, b){
    return a + b
}

const sumWithoutArg = sum.bind(null, 2, 3).bind(null, 3, 4)
console.log(sumWithoutArg())


const test = sum.customBind(null, 2, 3)
// console.log(test(a,...[], ...[2]))

function partial(func, ...extraArgs){
    return function(...args){
        return func.call(this,...extraArgs,  ...args)
    }
}
const userPro = {
    name: "Sanjarbek",
    sayHello(one, two){
        return this.name + one + two
    }
}
console.log(userPro.sayHello(1, 2))

userPro.sayHello = partial(userPro.sayHello, 1)
console.log(userPro.sayHello(2))