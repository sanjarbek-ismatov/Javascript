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

/**
 * Classes and styles
 */

const list = document.querySelector(".list");
list.classList.add("ul");
// console.log(Array.from(list.classList));

// remove styles

// list.style.color = "red";
// list.style.color = "";
// list.style.removeProperty("color");

// list.style.cssText = `
//   color: blue;
//   background-color: yellow;
// `;

// list.setAttribute("style", "color: gray;");
// const computedStyle = getComputedStyle(list, "hover");
// console.log(computedStyle.width);
/**
 * Size and scroll
 */

const box = document.querySelector(".box");
// console.log(box.offsetTop); // 180
// console.log(box.offsetLeft); // 180
// console.log(box.offsetWidth); // 210
// console.log(box.offsetHeight); // 210
// console.log(box.offsetParent); // body
// box.style.padding = "10px";
// console.log(box.offsetWidth); // 230
// box.style.display = "none";
// console.log(box.offsetWidth); // 0
// box.style.removeProperty("display");
// console.log(box.clientTop); // 5
// console.log(box.clientHeight); // 220

// after added scroll

// console.log(box.offsetWidth - box.clientWidth);

// console.log(box.scrollHeight); // 362
// console.log(box.scrollWidth);
// box.onscroll = function () {
//   const percent = (this.scrollTop / 142) * 100;
//   console.log(percent);
//   this.firstElementChild.style.width = `${percent}%`;
// };
// const SCROLL_HEIGHT = box.clientHeight;
// box.lastElementChild.addEventListener("click", function () {
//   if (box.clientHeight === box.scrollHeight) {
//     box.style.height = `${SCROLL_HEIGHT}px`;
//   } else box.style.height = `${box.scrollHeight}px`;
// });
// box.addEventListener("click", function () {
//   this.scrollBottom += 5;
// });
//
// Object.defineProperty(HTMLElement.prototype, "scrollBottom", {
//   get: function () {
//     return this.scrollHeight - this.scrollTop - this.clientHeight;
//   },
//   set: function (val) {
//     this.scrollTop = this.scrollHeight - this.clientHeight - val;
//   },
// });
// box.onscroll = function () {
//   console.log(this.scrollBottom);
// };

// console.log(box.offsetWidth - (box.clientLeft * 2 + box.clientWidth));

/**
 * Window size and scroll
 */

// get size of web page
// documentElement is <html> tag
// console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.clientHeight);

// get size with included panel

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// get full height of the page

// console.log(
//   window.innerHeight,
//   document.documentElement.clientHeight,
//   document.documentElement.offsetHeight,
//   document.documentElement.scrollHeight,
//   document.body.scrollHeight
// );

// window.onscroll = function () {
//   console.log(this.document.documentElement.scrollTop);
//   console.log(this.pageYOffset);
//   console.log(this.scrollY);
// };
// window.onclick = function () {
//   this.scrollBy(0, 30); // relative coordinates
//   // this.scrollTo(0, 10); // for exact coordinates
// };

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
// button1.onclick = function () {
// this.scrollIntoView({ behavior: "smooth", block: "center" });
// };
// button2.onclick = function () {
//   this.scrollIntoView(false);
// };

// disable scrolling

// button1.addEventListener("click", function () {
//   const { overflowY } = document.body.style;
//   document.body.style.overflowY = overflowY === "hidden" ? "" : "hidden";
// });

// more options for scrollTo and scrollBy
// window.scrollTo({ behavior: "smooth", top: 100, left: 0 });
// window.onmousemove = function (e) {
//   console.log(document.elementFromPoint(e.clientX, e.clientY));
// };

// window.onmousemove = function (e) {
//   console.log(e.clientX, e.clientY, "client");
//   console.log(e.offsetX, e.offsetY, "offset");
//   console.log(e.pageX, e.pageY, "page");
// };

// pageX, pageY - relative to html

// clientX, clientY - relative to window

// box.onclick = function (e) {
//   //   call cordinates, height, width, top, bottom, left, right
//   const cordinates = this.getBoundingClientRect();
//   console.log(
//     cordinates.x,
//     cordinates.y,
//     " the same as cordinates ",
//     box.offsetTop,
//     box.offsetLeft
//   );
//   console.log(
//     cordinates.top,
//     cordinates.left,
//     cordinates.width,
//     cordinates.height
//   );
//   //   the bottom and right isn't position, they are coordinates
// };
// const message = document.createElement("p");
// document.body.append(message);
// window.onclick = function (e) {
//   const selectedPoint = document.elementFromPoint(e.clientX, e.clientY);
//   const rect = selectedPoint.getBoundingClientRect();
//   message.innerText = selectedPoint.textContent;
//   message.style.position = "absolute";
//   message.style.top = rect.bottom + "px";
//   message.style.left = rect.left + "px";
// };

/**
 *
 * @param {HTMLElement} elem
 */
function getCord(elem) {
  const rect = elem.getBoundingClientRect();
  /* rect usually calculate position relative to window, if we want to get position relative to document, we should add pageYOffset and pageXOffset */
  return {
    top: rect.top + window.pageYOffset,
    left: rect.left + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset,
    right: rect.right + window.pageXOffset,
  };
}

/**
 *
 * @param {HTMLElement} elem
 */
function getCordWithoutRect(elem) {
  return {
    top: elem.offsetTop,
    left: elem.offsetLeft,
    bottom: elem.offsetTop + elem.offsetHeight,
    right: elem.offsetLeft + elem.offsetWidth,
  };
}

const cord = getCord(box);
const cord2 = getCordWithoutRect(box);
console.log(cord, cord2);
