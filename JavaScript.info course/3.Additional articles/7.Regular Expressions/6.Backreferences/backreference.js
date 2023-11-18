// START

const example = "He's \"name\" is Sanjar"
const examRegx = /(["'])(.*?)\1/gi
console.log(example.match(examRegx))


const cardRegex = /(?<singlepart>\d{4}\s)\k<singlepart>\1\1/g
console.log(cardRegex.exec("0000 0000 0000 0000 "))
