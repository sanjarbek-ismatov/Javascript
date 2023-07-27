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
console.log(userMap)
