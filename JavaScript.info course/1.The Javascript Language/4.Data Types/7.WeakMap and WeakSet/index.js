let user = {
    name: "Sanjarbek"
}
let user2 = user
const arr = [user]
// user = null
user.name = "Sarvinoz"

const map = new Map()
map.set(user, "my love")
// user.name = "Egovcha"
// user = null
// console.log(user, arr, user2)
console.log(map.keys()) // key didn't removed

const weakMap = new WeakMap()
weakMap.set(user, "my love")
user = null
console.log(weakMap.get(user)) // undefined


let user1 = {
    name: "Bro"
}

const userMap = new WeakMap()

function auth(user){
    userMap.set(user1, "done")
}
auth(user1)
user1 = null
console.log(userMap.get({user1}))

let obj1 = {
    name: "Sanjarbek"
}
let obj2 = {
    name: "Sarvinoz"
}
let obj3 = {
    name: "Hali nom qo'ymadik"
}

const set = new Set()
const weakSet = new WeakSet()
set.add(obj1)
weakSet.add(obj1)
set.add(obj2)
weakSet.add(obj2)
set.add(obj3)
weakSet.add(obj3)
obj1 = null
console.log(set.size) // size is still 3 but item of weakSet will be removed
