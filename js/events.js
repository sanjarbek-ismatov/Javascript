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
