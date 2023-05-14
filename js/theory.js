/**
 * If we write some function in javascript, usually window object includes them
 */

/*
function helloFunction(){
    console.log("Hello I'm hello function")
}
helloFunction()
window.helloFunction()
console.log(window.innerHeight)
console.log(innerHeight)

 */

/**
 * confirm function shows message and if we click ok it returns true, else false
 */
/*
if(confirm("You're bro?")) alert("Change yourself")
else alert("Good luck")
*/

// console.log(document.body.offsetHeight)

/**
 * DOM order
 * parentNode method shows parent of current element
 */

// html tag
// console.log(document.documentElement)
// body tag
// console.log(document.body)
// head
// console.log(document.head)
const firstParagraph = document.getElementById('p')
const empty = document.getElementById('empty')
const divider = document.getElementById('div')
// call parent of paragrahp
// console.log(firstParagraph.parentNode)

// previous element
// console.log(firstParagraph.previousSibling)

// next element
// console.log(firstParagraph.nextSibling)

// call children
// divider.childNodes.forEach((e) => {console.log(e)})

// first child of div
// console.log(divider.firstChild)

// last child of div
// console.log(divider.lastChild)

// check has it children
// console.log(divider.hasChildNodes()) // true
// console.log(empty.hasChildNodes()) // false

// using array method in childNodes

// const arr = Array.from(divider.childNodes)

// head's brother is body
// console.log(document.head.nextElementSibling) // body
// console.log(document.body.previousElementSibling) // head

// calling only elements
// console.log(firstParagraph.parentElement)
// console.log(firstParagraph.nextElementSibling)

// calling div's children
// const children = Array.from(divider.children)
// children.forEach(e => console.log(e))

/**
 * Only if we call document.documentElement.parentNode, it's working wrong, because <!DOCTYPE html> is parent of html tag
 */