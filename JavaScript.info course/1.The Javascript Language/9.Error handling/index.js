try{
    // setTimeout(() => alert("There's no alert in nodejs"), 1000) // but try-catch can't catch it
} catch{
    console.log("Error has been caught")
}
try{
    console.log(a)
}catch(ex){
    console.log(ex.name) // ReferenceError
    console.log(ex.message) // a is not defined
    console.log(ex.stack) // full message
    console.log(ex)
}

try{
    var a = 10
}catch {
//     nothing
}
console.log(a)

try{
    const json = '{"name": "Sanjarbek"}'
    const user = JSON.parse(json)
    if(!user.age) throw new SyntaxError("json doesn't have age prop")
    new ReferenceError()
    new TypeError()
    new SyntaxError()
    new Error()
} catch (ex){
    if(ex instanceof SyntaxError){
        console.log(ex.constructor.name) // SyntaxError
    }
    throw new ReferenceError("Fucked")
}


function main(){
    try {
        console.log("I'm try")
        return 0;
    }finally {
        // return 1;
        console.log("I'm finally")
    }
}
main()
// console.log(main())

process.on("uncaughtException", (err, origin) => {
    console.log("Error is ", err)
})
process.on('unhandledRejection', (err, promise) => {
    console.log(err)
})