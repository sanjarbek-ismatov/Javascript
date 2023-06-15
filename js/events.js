const clickableButton = document.getElementById("clickable");
clickableButton.addEventListener("contextmenu", function (e) {
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
class EventHandler {
  handleEvent(e) {
    const listenerType = "on" + e.type[0].toUpperCase() + e.type.slice(1);
    this[listenerType](e);
  }

  onClick(e) {
    console.log("click");
  }

  onMousedown(e) {
    console.log("mousedown");
  }
}

const eventHandler = new EventHandler();
const button3 = document.getElementById("button3");
button3.addEventListener("click", eventHandler);
button3.addEventListener("mousedown", eventHandler);
