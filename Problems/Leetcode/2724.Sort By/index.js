/**
 * Quick sort algorithm
 * @param {number[]} arr
 * @param {(x: number) => number} fn
 */
function quickSort(arr, fn){
    if(arr.length <= 1) return arr
    let pivot = arr.length - 1
    const left = []
    const right = []
    for(let i = 0; i < arr.length - 1; i++){
        if(fn(arr[i]) < fn(arr[pivot])){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left, fn), arr[pivot], ...quickSort(right, fn)]
}
console.log(quickSort([{"x":1},{"x": 0},{"x": -1}], x => x.x))