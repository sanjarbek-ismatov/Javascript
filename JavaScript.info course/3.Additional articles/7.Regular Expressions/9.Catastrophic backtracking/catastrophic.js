const regex1 = /^(\w+\s)*\w*$/i // first
const regex2 = /^(\w+\s?)*$/i // bad
const regex3 = /^((?=(?<word>\w+))\k<word>\s?)*$/ // great
let str = "An input string that takes a long time or even makes this regex hang!";
console.log(str.match(regex3))