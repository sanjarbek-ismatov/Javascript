const promise = new Promise((resolve, reject) => {
    resolve(5)
})
promise.then(data => data + " mutated").catch(err => console.log("err")).then(data => console.log(data))
promise.then(data => console.log(data))


// promise.then(data => console.log(data), err => console.log(err)).finally(() => console.log(true))

// promise.catch(err => console.log(err))
// promise.then(null, err => console.log(err))

// promise.finally(() => console.log("Finished")).then(data => console.log(data)).catch(err => console.log(err))