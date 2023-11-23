const fullName = "Sanjarbek Ismatov Asqarali o'g'li"
const regexp = /\w+/y
regexp.lastIndex = 10
console.log(regexp.exec(fullName))