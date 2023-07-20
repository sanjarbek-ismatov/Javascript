/*
   [3, 4, 2, 1, 5]
   [3, 4, 2, 1, 5]
   [3, 2, 4, 1, 5]
   [2, 3, 4, 1, 5]
 */

/**
 * Insertion sort algorithm
 * @param {any[]} arr
 * @return {any[]}
 */
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let insertToNumber = arr[i]
        let j = i - 1
        while(j >= 0 && arr[j] > insertToNumber){
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = insertToNumber
    }
    return arr
}

const unsortedArr = [3, 4, 2, 1, 5]
const insertionSorted = insertionSort(unsortedArr)
console.log(insertionSorted)