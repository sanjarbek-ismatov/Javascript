const clickableButton = document.getElementById("clickable");
clickableButton.addEventListener("contextmenu", function (e) {
  console.log("Hello guy");
});
clickableButton.addEventListener("mouseover", function () {
  console.log("mouseover");
});
clickableButton.addEventListener("mouseout", function () {
  console.log("mouseout");
});
// when button has clicked, and take of
clickableButton.addEventListener("mouseup", function () {
  console.log("mouseup");
});
// when button is long clicking
clickableButton.addEventListener("mousedown", function () {
  console.log("mousedown");
});
clickableButton.addEventListener("click", function () {
  console.log("click");
});
clickableButton.addEventListener("mousemove", function (e) {
  console.log(e.offsetX, e.offsetY);
});

/* window */

window.addEventListener("keydown", function (e) {
  clickableButton.style.position = "absolute";
  switch (e.key) {
    case "w":
      clickableButton.style.top = 10 + "px";
      break;
  }
});
