const object = {
    name: "Sanjarbek",
    "his age": 17,
    "": "nothing",
    18: "eight teen",
    true: "Right",
    ["girlfriend"]: "Sarvinoz",
    null: "this it empty",
    undefined: "this is undefined",
    10n: "BigInt",
    [Symbol.iterator]: "Symbol",
    for: "this is for",
    let: "this is let",
    notForUndefined: undefined
}
// console.log(object[Symbol.iterator], object.for)

function dynamicObject(property, value){
    return {
        ["use" + property + "Property"]: value
    }
}
// console.log(dynamicObject("name", "Sanjarbek"))
console.log("null" in object)
console.log("notForUndefined" in object)
console.log(object.notForUndefined !== undefined) // false

