function cloner(obj){
    const tempObj = {}
    for(let key in obj){
        tempObj[key] = obj[key]
    }
    return tempObj
}

const person = {
    name: "Sanjarbek",
    lovedGirl: {
        name: "Sarvinoz",
    },
    isMarried(){
        return false
    }
}
const referencedPerson = person
// const copyPerson1  = structuredClone(person)
const copyPerson2 = {...person}
const copyPerson3 = JSON.parse(JSON.stringify(person))
const copyPerson4 = cloner(person)
const copyPerson5 = Object.assign({}, person)
// copyPerson1.name = "Sarvinoz"
// copyPerson2.name = "Sarvinoz"
// copyPerson3.name = "Sarvinoz"
// console.log(person === copyPerson1) // false
console.log(person === referencedPerson) // true
console.log(Object.is(person, referencedPerson)) // true
console.log(copyPerson5 === person) // false
// console.log(copyPerson1.lovedGirl === person.lovedGirl) // false
console.log(copyPerson3.lovedGirl === person.lovedGirl) // false
console.log(copyPerson4.lovedGirl === person.lovedGirl) // true
console.log(copyPerson5.lovedGirl === person.lovedGirl) // true
console.log(copyPerson3.isMarried) // undefined
/* structuredClone is good, however it doesn't support cloning functions */

