/**
 * JSON
 */
const user = {
    name: "Sanjarbek",
    toString(){
        return `name=${this.name}`
    }
}
// console.log(String(user))

const object = {
    string: "string",
    number: 0,
    [Symbol('id')]: "symbol",
    // bigInt: 0n,
    boolean: true,
    null: null,
    undefined: undefined,
    method(){},
    array: [1, 2, 3],
    user
}
user.parent = object // it'll be showed error when trying to convert
// const json = JSON.stringify(object, ['string', 'number', "user", "name", /* "parent" */]) // selecting
const json = JSON.stringify(object, function (key, value){
    if(key === "parent") return undefined
    return value
}, 99)
console.log(json)


const obj1 = {
    some: true,
    toJSON(){
        return true
    }
}
console.log(JSON.stringify(obj1))

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
const parsedJson = JSON.parse(str, function(key, value){
    if(key === "date") return new Date(value)
    return value
})
console.log(parsedJson.date.toLocaleString())