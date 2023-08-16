/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const mergedArray = [...nums1, ...nums2]
    const sortedArr = mergeSort(mergedArray)
    const dif = sortedArr.length - (m + n)

    nums1.splice(0, nums1.length, dif !== 0 ? sortedArr.slice(dif) : sortedArr)
    console.log(nums1)
};

/**
 * Sorter function
 * @param {number[]} arr
 */
function mergeSort(arr){
    if(arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const leftSorted = mergeSort(arr.slice(0, mid))
    const rightSorted = mergeSort(arr.slice(mid))
    return mrg(leftSorted, rightSorted)
}
function mrg(left, right){
    const merged = []
    while(left.length && right.length){
        if(left[0] > right[0]){
            merged.push(right.shift())
        } else merged.push(left.shift())
    }
    return merged.concat(left.concat(right))
}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

