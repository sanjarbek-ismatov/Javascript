Array.prototype.insertionSort = function (){
    for(let i = 1; i < this.length; i++){
        let key = this[i]
        let j = i - 1
        while(j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key
    }
    return arr
}

const arr = [23, 34, -34, -12, 99, 100, 1]
console.log(arr.insertionSort())