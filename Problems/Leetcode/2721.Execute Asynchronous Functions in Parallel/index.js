/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        const result = new Array(functions.length)
        let count = 0
        for(let i = 0; i < functions.length; i++){
            functions[i]().then(data => {
                result[i] = data
                count++
                if(count === functions.length){
                    resolve(result)
                }
            }).catch(err => reject(err))
        }
    })

};
const promise = promiseAll([
    () => new Promise(res => res(42),
        () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
        () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100)))])
promise.then(console.log); // [42]
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */