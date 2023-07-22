/**
 * Merge sort
 * @param {number[]} arr
 */
function mergeSort(arr){
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    const leftSorted = mergeSort(left)
    const rightSorted = mergeSort(right)
    return merge(leftSorted, rightSorted)
}

/**
 * Merge function
 * @param {number[]} left
 * @param {number[]} right
 */
function merge(left, right){
    /**
     * @type {number[]}
     */
    const merged = []
    while(left.length && right.length){
        if(left[0] < right[0]) merged.push(left.shift())
        else merged.push(right.shift())
    }
    return merged.concat(left.concat(right))
}

const unsortedArray = [5, 4, 3, 2, 1]
const sortedArray = mergeSort(unsortedArray)
console.log(sortedArray)