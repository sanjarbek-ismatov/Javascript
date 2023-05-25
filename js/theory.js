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
// const firstParagraph = document.getElementById('p')
// const empty = document.getElementById('empty')
// const divider = document.getElementById('div')
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

/**
 * Searching elements
 */

// Both of these the same
// const empty = document.getElementById('empty')
// console.log(empty)

/**
 * querySelector matches also css selectors
 */

// const lastParagraphWithSelector = document.querySelector('div > p:hover')
// console.log(lastParagraphWithSelector)

// checks that img have src with ending png
/*
for(const elem of document.body.children)
{
    console.log("Parent element",elem)
    if(elem.hasChildNodes()){
        console.log('his child elements: ')
        for (const elem2 of elem.children){
            if(elem2.matches('img[src$="png"]'))console.log(elem2)
        }
    }
}
*/

// const child = document.querySelector('#div > p')
// console.log(child.closest('html'))

// console.log(document.getElementsByName('hello'))

// console.log(document.nodeName) // #document
// console.log(document.body.tagName) // BODY

// const empty = document.querySelector('#empty')
// empty.outerHTML = `
//     <ul id="empty">
//         <li>First</li>
//     </ul>
// `
// const list = document.getElementById('empty')

// const div = document.getElementById('div')
// console.log(div.firstChild.data)
// div.hidden = true // this method hides the element
const input = document.getElementById("input");
// input.customEvent = function(){
//     alert(this.name)
// }
// input.customEvent()

// console.log(input.type)
// console.log(input.name)
// console.log(input.id)
// console.log(input.getAttribute('custom'))

// String.prototype.reverse = function(){
//     return this.toString().split('').reverse().join('')
// }
// console.log("Hello".reverse())

// console.log(document.body.hasAttributes())
// document.body.getAttribute("attribute name")
// document.body.setAttribute('propety', 'value')
// document.body.removeAttribute('name of need remove attribute')

// for(const attr of input.attributes){
//     console.log(attr.name, attr.value)
// }

// const button = document.querySelector('button')
// console.log(button.dataset.text)

/**
 * Creating elements
 * can possible write two and more arguments to these functions
 */

const customDiv = document.createElement("div");
customDiv.innerText = "Hi i'm born";
// document.createTextNode('Bla bla')
// document.body.innerHTML = ""
// document.body.append(customDiv)
// document.body.prepend(customDiv)
// the div is added to before body
// document.body.before(customDiv)
// the div is added to after body
// document.body.after(customDiv)
// the div is replaced with body
// document.body.replaceWith(customDiv)

// document.body.insertAdjacentHTML('beforebegin', '<p>Before begin</p>')
// document.body.insertAdjacentHTML('afterbegin', '<p>Before its childs</p>')
// document.body.insertAdjacentHTML('afterend', '<p>After end</p>')
// document.body.insertAdjacentHTML('beforeend', '<p>After its childs</p>')

// document.body.append(customDiv)
// setTimeout(() => customDiv.remove(), 3000)

// Fragment
async function main() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const ul = document.getElementById("ul");
  // const fragment = new DocumentFragment();
  // for (const post of data) {
  //   const li = document.createElement("li");
  //   li.textContent = post.title;
  //   fragment.append(li);
  // }
  // ul.append(fragment);

  // without fragment
  // const result = [];
  // for (const post of data) {
  //   const li = document.createElement("li");
  //   li.textContent = post.title;
  //   result.push(li);
  // }
  // ul.append(...result);
}

// main();

// document.body.appendChild(customDiv);
// document.body.insertBefore(customDiv, document.getElementById("p"));
// document.body.children[0].replaceChild(document.getElementById("p"), customDiv);

// document.body.removeChild() // deletes only child
