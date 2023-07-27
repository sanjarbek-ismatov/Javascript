const map1 = new Map([["age", 17]])
const obj1 = {}
map1.set("name", "Sanjarbek")
map1[obj1] = "Programmer"
console.log(map1["[object Object]"])
console.log(map1)

console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())

map1.forEach((value, key, map) => {
    console.log(`${key}: ${value}`)
})

// convert object to map

const user = {
    name: "Sanjarbek",
    age: 17,
    isMarried: false
}
const userMap = new Map(Object.entries(user))

const mapToUser = Object.fromEntries(userMap.entries())
const mapTUser2 = Object.fromEntries(userMap)
console.log(mapToUser) // now it's object
console.log(mapTUser2) // the same as above
console.log(userMap)

// Set

const set = new Set([1, 2, 1])
set.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain)
})
console.log(set)


// function aclean(arr){
//     const temp = []
//     const indexes = []
//     const sorted = arr.map(e => [...e].sort((a, b) => a.localeCompare(b)).join('').toLowerCase())
//     for(let i = 0;i < sorted.length; i++){
//         if(!temp.includes(sorted[i])) {
//             temp.push(sorted[i])
//             indexes.push(i)
//         }
//     }
//     return arr.filter((e, i) => indexes.includes(i))
// }

function aclean(arr){
    const map = new Map()
    for(const item of arr){
        const sorted = item.toUpperCase().split("").sort().join()
        map.set(sorted, item)
    }
    return Array.from(map.values())
}
console.log(aclean(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))