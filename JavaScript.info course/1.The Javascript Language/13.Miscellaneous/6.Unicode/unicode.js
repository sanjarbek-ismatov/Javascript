const unicode = '\xFF'
const unicode2 = '\u00FF'
const emoji = '\u{1F60D}'
const emoji2 = '😍'
console.log(unicode === unicode2) // true
console.log(emoji) // 😍
console.log(emoji2 === emoji) // true
console.log(emoji.length) // 2
console.log(emoji[0] +  emoji2[1])

console.log(emoji2.charCodeAt(0).toString(16))
const hexCode1 = emoji2.charCodeAt(0).toString(16)
const hexCode2 = emoji2.charCodeAt(1).toString(16)
const code = parseInt(hexCode1, 16) + parseInt(hexCode2, 16)
console.log(code.toString(16))