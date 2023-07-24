/**
 * Cartesian Product
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function cartesianProduct(a, b){
    const arr = []
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
            arr.push([a[i], b[j]])
        }
    }
    return arr
}
console.log(cartesianProduct([1, 2], [3, 4])) // 1, 3 1, 4 2, 3 2, 4