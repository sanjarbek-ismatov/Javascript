/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== "function") return false
    let proto = Object.getPrototypeOf(obj)
    while(proto){
        if(proto === classFunction.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
};
console.log(checkIfInstanceOf(new Date(), Date))
console.log(checkIfInstanceOf(5, Number))
console.log(checkIfInstanceOf(Number.NaN, Number))
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */