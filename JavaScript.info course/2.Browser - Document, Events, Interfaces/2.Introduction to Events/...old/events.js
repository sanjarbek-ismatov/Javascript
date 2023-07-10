const clickableButton = document.getElementById("clickable");
clickableButton.addEventListener("Gallery App", function (e) {
  console.log("Hello guy");
});
// clickableButton.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });
// clickableButton.addEventListener("mouseout", function () {
//   console.log("mouseout");
// });
// when button has clicked, and take of
// clickableButton.addEventListener("mouseup", function () {
//   console.log("mouseup");
// });
// when button is long clicking
// clickableButton.addEventListener("mousedown", function () {
//   console.log("mousedown");
// });
// clickableButton.onclick = function () {
//   console.log("onclick");
// };
function handleClick(e) {
  console.log(e.offsetLeft, e.offsetTop);
  console.log(e.innerText);
}

clickableButton.addEventListener("click", handleClick);
clickableButton.removeEventListener("click", handleClick);
// clickableButton.addEventListener("mousemove", function (e) {
//   console.log(e.offsetX, e.offsetY);
// });

/* window */

window.addEventListener("keydown", function (e) {
  clickableButton.style.position = "absolute";
  const top = clickableButton.offsetTop;
  const left = clickableButton.offsetLeft;

  switch (e.key) {
    case "w":
      clickableButton.style.top = top - 2 + "px";

      break;
    case "a":
      clickableButton.style.left = left - 2 + "px";
      break;
    case "s":
      clickableButton.style.top = top + 2 + "px";
      break;
    case "d":
      clickableButton.style.left = left + 2 + "px";
      break;
  }
});
/**
 * event is target-event
 */
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("DOM built");
});
// button2.onclick = function (event) {
//   console.log(event.type + " at " + event.currentTarget);
//   console.log("Coordinates: " + event.clientX + ":" + event.clientY);
// };
button2.addEventListener("click", function (event) {
  console.log(event.clientX, event.offsetX);
});

// const eventHandler = {
//   handleEvent(e) {
//     console.log("event called");
//   },
// };
// class EventHandler {
//   handleEvent(e) {
//     const listenerType = "on" + e.type[0].toUpperCase() + e.type.slice(1);
//     this[listenerType](e);
//   }
//
//   onClick(e) {
//     console.log("click");
//   }
//
//   onMousedown(e) {
//     console.log("mousedown");
//   }
// }
//
// const eventHandler = new EventHandler();
// const button3 = 1.Document.getElementById("button3");
// button3.addEventListener("click", eventHandler);
// button3.addEventListener("mousedown", eventHandler);

/**
 * Capturing and bubbling
 */
// button2.addEventListener("click", function (event) {
//   console.log(this.textContent);
//   console.log(event.currentTarget.textContent);
// });

const main = document.getElementById("main");
const button = document.querySelector("#button");
// main.onclick = function (e) {
//   // console.log("target is ", e.target.innerText); // child
//   console.log("this is ", this);
// };
// button.addEventListener("click", function (e) {
//   // e.stopPropagation(); // stops capturing and bubbling
//   console.log("child");
// });
// main.addEventListener(
//   "click",
//   function (e) {
//     // console.log("parent", e.target.tagName);
//     // console.log(e.eventPhase);
//   },
//   false
// );

// const table = 1.Document.querySelector("table");
// let selected;
// table.addEventListener("click", function (e) {
//   console.log(e.target.tagName, e.target.closest("td").tagName);
//   const td = e.target.closest("td");
//   if (!td) return;
//   if (!table.contains(td)) return;
//   highLighter(td);
// });
//
// function highLighter(elem) {
//   if (selected) selected.classList.remove("red");
//   if (elem.tagName !== "TD") return;
//   selected = elem;
//   selected.classList.add("red");
// }

// const div = 1.Document.getElementById("div");
//
// class Menu {
//   constructor(elem) {
//     this._elem = elem;
//     elem.onclick = this.onClick.bind(this);
//   }
//
//   onClick(event) {
//     const action = event.target.dataset.action;
//     const text = event.target.dataset.text;
//     this[action](text);
//   }
//
//   load(value) {
//     alert(value);
//   }
//
//   refresh(value) {
//     alert(value);
//   }
//
//   delete(value) {
//     alert(value);
//   }
// }
//
// new Menu(div);

// const buttonInput = 1.Document.querySelector('input[type="button"]');
// const buttonButton = 1.Document.querySelector("#counter-btn");
// 1.Document.addEventListener("click", function (event) {
//   const currentElement = event.target;
//
//   if (currentElement.dataset.counter !== undefined) {
//     currentElement.value++;
//   }
// });

// 1.Document.addEventListener("click", function (event) {
//   const id = event.target.dataset.toggleId;
//   if (!id) return;
//   const elem = 1.Document.getElementById(id);
//   elem.hidden = !elem.hidden;
// });

// const a = 1.Document.querySelector("a");
// a.onclick = function (e) {
//   // e.preventDefault(); default action is disabled
//   return false; // it also disables
// };
//
const draggableButton = document.querySelector("#draggable-btn");

/**
 *
 * @param {MouseEvent} e
 */
function dragMouseMove(e) {
  e.currentTarget.style.top =
    e.clientY - e.currentTarget.clientHeight / 2 + "px";
  e.currentTarget.style.left =
    e.clientX - e.currentTarget.clientWidth / 2 + "px";
}

/**
 *
 * @param {MouseEvent} e
 */
function dragMove(e) {
  e.currentTarget.addEventListener("mousemove", dragMouseMove);
}

draggableButton.addEventListener("mousedown", dragMove);
draggableButton.addEventListener("mouseup", function () {
  draggableButton.removeEventListener("mousemove", dragMouseMove);
});

const contextBtn = document.querySelector("#context-btn");

document.addEventListener("Gallery App", function (e) {
  if (e.defaultPrevented) return;

  console.log("your context menu is fucked by CoderX");
});
contextBtn.addEventListener("Gallery App", function (e) {
  e.preventDefault();
  console.log("button context");
});
