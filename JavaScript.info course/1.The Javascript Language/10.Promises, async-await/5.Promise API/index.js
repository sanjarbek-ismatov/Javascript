const promises = [
    new Promise((resolve, reject) => {
        resolve(1)
    }),
    new Promise((resolve, reject) => {
        resolve(4)
    }),
    new Promise((resolve, reject) => {
        reject(1)
    })
]
// Promise.all(promises).then(data => console.log(data))
Promise.allSettled(promises).then(result => {
    console.log(result)
})
/**
 *  Promise.allSettled clone
 * @param {Promise[]} promises
 * @returns {Promise<unknown>}
 */
function allSettledClone(promises){
    return new Promise((resolve, reject) => {
        const result = []
        for(const promise of promises){
            promise.then(value => result.push({status: "fulfilled", value}), reason => result.push({status: "rejected", reason}))
        }
        resolve(result)
    })
}

Object.defineProperty(Promise, "allSettledClone", {
    value: allSettledClone,
    configurable: false,
    writable: false
})
Promise.allSettledClone(promises).then(result => console.log(result))

Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
]).catch(result => console.log(result.constructor.name));

Promise.reject(10).catch(value => console.log(value))