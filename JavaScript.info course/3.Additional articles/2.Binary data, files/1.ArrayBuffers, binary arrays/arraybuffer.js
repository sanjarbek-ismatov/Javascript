// const buffer = new ArrayBuffer(16)
// const view = new Uint16Array(buffer)
// console.log(view.byteLength)
// console.log(view.length)
// view[0] = 1
// view[1] = 2
// console.log(view.BYTES_PER_ELEMENT)
// for(let item of view){
//     console.log(item)
// }


const view = new Uint8Array([255, 255, 256, 257])
console.log(view.BYTES_PER_ELEMENT)
console.log(view.byteLength)
console.log(view.buffer)
// view.forEach(elem => console.log(elem))

const data = new DataView(view.buffer)
console.log(data.getUint8(0))

// TASKS

function concat(arrays) {
    // ...your code...
    const main = []
    for(let arr of arrays){
        main.push(...arr)
    }
    return new Uint8Array(main)
}
let chunks = [
    new Uint8Array([0, 1, 2]),
    new Uint8Array([3, 4, 5]),
    new Uint8Array([6, 7, 8])
];
console.log(Array.from(concat(chunks))); // 0, 1, 2, 3, 4, 5, 6, 7, 8

console.log(concat(chunks).constructor.name); // Uint8Array
