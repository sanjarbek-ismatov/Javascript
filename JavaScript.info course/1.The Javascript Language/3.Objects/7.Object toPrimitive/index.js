const user = {
    name: "Sanjarbek",
    age: 17,
    [Symbol.toPrimitive](hint){
        return hint === "number" ? this.age : this.name
    }
}
console.log(Number(user))
console.log(String(user))
console.log(user.valueOf())

const user2 = {
    name: "Sarvinoz",
    age: 17,
    toString(){
        return this.name
    },
    // valueOf(){
    //     return this.age
    // }
}

// console.log(user2 + "xon") // Sarvinoz
// console.log(user2.toString()) // the same as above
// console.log(+user2) // 17


const nonPrimitive = {
    [Symbol.toPrimitive](hint){
        switch (hint){
            case "string":
                return "Hello"
            case "number":
                return 10
        }
    }
    // toString() {
    //     return "10"
    // }
}
console.log(String(nonPrimitive))