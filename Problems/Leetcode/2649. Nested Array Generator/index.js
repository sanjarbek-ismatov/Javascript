/**
 * @param {Array} arr
 * @return {Generator}
 */
 function *inorderTraversal(arr){
     for(let elem of arr){
         if(Array.isArray(elem)) yield * inorderTraversal(elem)
         else yield elem
     }
}

// var inorderTraversal = function* rec(arr) {
//     function extract(arr) {
//         if(arr.every(value => !Array.isArray(value))) return arr
//         return extract(arr.flat())
//     }
//     yield* extract(arr)
// };


const gen = inorderTraversal([1, [2, 3]]);
console.log(gen.next().value); // 1
console.log(gen.next().value);
console.log(gen.next().value);

