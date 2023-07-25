const unsortedArray = [2, 45, 45, 3, 2, 5, 7, 9, 1]
const easySorted = unsortedArray.sort((a, b) => a - b)
/*
function bubbleSort (arr){
    let swapped = false;
    while(!swapped){
        swapped = sort(arr)
    }
    return arr
}
function sort(arr){
    let swapped = false;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
            swapped = true
        }
    }
    return swapped
}

 */

Array.prototype.bubbleSort = function (){
    arr = this
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
    } while (swapped)
    return arr
}



console.log(unsortedArray.bubbleSort())