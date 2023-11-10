// START
const string = "it's called \"Hello world\" or \"Hello <programming language>\""
console.log(string.match(/".+?"/g))
console.log(string.match(/"[^"]+"/g))

let str1 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';

const regx1 = /<a href=".*?" class="doc">/g
const regx2 = /<a href="[^"]+" class="doc">/g
console.log(regx1.exec(str1))
console.log(regx2.exec(str2))