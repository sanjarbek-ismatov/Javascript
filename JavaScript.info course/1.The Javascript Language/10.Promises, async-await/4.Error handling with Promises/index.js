const promise = new Promise((resolve, reject) => {
     // throw new Error("Hello from error")
    // reject(new Error("Hello from reject"))
    resolve(true)
}).then(data => {
    throw new Error("Errorjon")
}).catch(e => console.log(`Error is ${e}`)).then(data => {
    console.log("I'm working")
})


const promise1 = new Promise((resolve, reject) => {
    throw new Error("fucked")
}).catch(e => console.log(e)).then(value => console.log(`I'm value, ${value}`))

process.on('unhandledRejection', (error, sendHandle) => {
    console.log(error.message)
})