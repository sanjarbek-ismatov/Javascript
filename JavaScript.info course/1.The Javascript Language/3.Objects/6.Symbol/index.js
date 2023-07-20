const id1 =  Symbol("id")
const id2 = Symbol("id")
console.log(id1 === id2) // false

const user = {
    [id1]: "FIRST"
}
// user[id1] = "ID1"
user[id2] = "ID2"
user.id1 = "No"
console.log(user[id1], user)

for(let key in user){
    console.log(key)
}
console.log(Object.keys(user))

const newUser = Object.assign({}, user)
console.log(newUser)

const globalSymbol1 = Symbol.for("id")
const globalSymbol2 = Symbol.for("id")
console.log(globalSymbol1 === globalSymbol2)

console.log(Symbol.keyFor(globalSymbol1), Symbol.keyFor(id1))

console.log(Object.getOwnPropertySymbols(user))