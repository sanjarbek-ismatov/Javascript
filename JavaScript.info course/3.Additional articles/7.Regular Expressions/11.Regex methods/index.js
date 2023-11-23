const text = "Hello Sanjarbek"
const regex = /(?<hello>\w+)\s(?<name>\w+)/g
// console.log(text.replace(regex, (...match) => {
//     const group = match.pop()
//     console.log(group.name)
//     return match[0]
// }))
console.log(text.replace(regex, "$<name>"))