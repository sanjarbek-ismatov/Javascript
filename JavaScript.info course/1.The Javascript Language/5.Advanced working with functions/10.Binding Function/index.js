// Binding function

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
designer.print = programmer.print.bind(programmer)
// programmer.print()
// const print = programmer.print.bind(programmer)
// print()

// designer.print()

function sum(a, b){
    return a + b
}

const sumWithoutArg = sum.bind(null, 2, 3)
console.log(sumWithoutArg())

Function.prototype.customBind = function(context, ...args){
    if(context) {
        for (let key in context) {
            this[key] = context[key]
        }
    }
    return function() {
        console.log(this)
       // return this(...args)
    }
}
const test = sum.customBind(null, 2, 3)
console.log(test())
