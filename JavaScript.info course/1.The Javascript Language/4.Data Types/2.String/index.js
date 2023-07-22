
const name1 = "Sanjarbek\nIsmatov"
const name2 = `Sanjarbek
Ismatov`
/*
console.log(name2 === name1) // true

console.log(name1.at(-1))

for(let char of name1){
    console.log(char)
}

name1[0] = "s" // doesn't work
console.log(name1)

console.log(name1.indexOf('a', 10)) // 13

console.log(name1.startsWith("Sanjarbek"))
console.log(name2.endsWith("Ismatov"))

console.log(name1.slice(-7))
// substring the same as slice
console.log(name1.substring(10, 0)) // Sanjarbek

console.log(name1.substr(0, 9)) // Sanjarbek

console.log(name1.substr(-7, 7)) // Ismatov

*/

/**
 * String to Hex converter
 * @param {string} str
 */
function stringToHex(str){
    let result = ""
    for(let char of str){
        result += char.codePointAt(0).toString(16) + " "
    }
    return result
}

/**
 * Hex to String
 * @param {string} hex
 */
function hexToStr(hex){
    let value = ""
    const arr = hex.split(' ')
    for(const val of arr){
        const point = parseInt(val, 16)
        if(!Number.isNaN(point))
            value += String.fromCodePoint(point)
    }
    return value
}
const hex = stringToHex(name1)
console.log(hexToStr(hex))

console.log("hello".repeat(20))