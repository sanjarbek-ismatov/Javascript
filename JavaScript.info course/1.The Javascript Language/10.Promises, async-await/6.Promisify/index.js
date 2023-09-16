const fs = require('fs')
/**
 * Converts callback to promise
 * @param func
 * @returns {function(...[*]): Promise<unknown>}
 */
function promisify(func){
    return function(...args) {
        return new Promise((resolve, reject) => {
            function callback(err, data){
                err && reject(err)
                data && resolve(data)
            }
            args.push(callback)
            func.call(this, ...args)
        })
    }
}


// callback(err => console.log(err), data => console.log(data))

// promisify(callback).then(data => console.log(data))
promisify(fs.readFile)('./eval.js', {encoding: "UTF-8"}).then(result => console.log(result))