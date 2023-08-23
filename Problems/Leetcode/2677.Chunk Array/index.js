/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const length = arr.length
    const temp = []
    for(let i = 1; i <= Math.floor(length / size); i++){
        temp.push(arr.splice(0, size))
    }
    arr.length && temp.push(arr)
    return temp
};
console.log(chunk([1,2,3,4,5], 3))