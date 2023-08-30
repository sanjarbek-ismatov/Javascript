const fs = require('fs')
/**
 * Converts callback to promise
 * @param func
 * @returns {function(...[*]): Promise<unknown>}
 */
function promisify(func){
    return function(...args) {
        return new Promise((resolve, reject) => {
            func(...args, (err, data) => {
                err && reject(err)
                data && resolve(data)
            })

        })
    }
}


// callback(err => console.log(err), data => console.log(data))

// promisify(callback).then(data => console.log(data))
promisify(fs.readFile)('./index.js', {encoding: "UTF-8"}).then(result => console.log(result))