
a = 10
var name = "Sarvinoz"
console.log(a, globalThis.a)
console.log(globalThis.name) // it returns undefined in nodejs, but it works in browser
globalThis.fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data))

// Making Promise

// class CustomPromise{
//     constructor(cb) {
//         /**
//          * @private
//          */
//         this.callback = cb
//         /**
//          * @private
//          */
//         this.result = this.callback(this.resolve, this.reject)
//     }
//
//     /**
//      * @private
//      * @param value
//      */
//     resolve(value){
//         /**
//          * @private
//          */
//        this.value = value
//     }
//
//     /**
//      * @private
//      * @param err
//      */
//     reject(err){
//         /**
//          * @private
//          */
//         this.err = err
//     }
//     then(cb){
//         return cb(this.value)
//     }
//     catch(cb){
//         return cb(this.err)
//     }
// }
//
// const promise = new CustomPromise((resolve, reject) => {
//     resolve(true)
// })
// promise.then((data) => console.log(data))


