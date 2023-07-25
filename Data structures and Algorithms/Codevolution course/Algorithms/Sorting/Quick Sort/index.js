/**
 * Quick sort algorithm
 * @param {number[]} arr array
 * @param {"asc" | "des"} sortType
 * @returns {number[]} result
 */
function quickSort(arr, sortType = "asc"){
    if(arr.length <= 1) return arr
    const pivotIndex = Math.floor(Math.random() * arr.length)
    let pivot = arr[pivotIndex]
    /**
     * @type {number[]}
     */
    const right = []
    /**
     * @type {number[]}
     */
    const left = []
    for(let i = 0; i < arr.length; i++){
        if(i === pivotIndex) continue
        if(arr[i] < pivot)
            sortType === "asc" ?
            left.push(arr[i]) : right.push(arr[i])
        else sortType === "asc" ? right.push(arr[i]) : left.push(arr[i])
    }

    return [...quickSort(left, sortType), pivot, ...quickSort(right, sortType)]
}

const unsortedArray = [2, 45, 45, 3, 2, 5, 7, 9]
const sortedArray = quickSort(unsortedArray, "des")
console.log(sortedArray)