// Call elements
const mouseBtn = document.getElementById("mouse-btn");
const hardBtn = document.getElementById("hard-btn");
const dblClickBtn = document.getElementById("dbl-click-btn");
const cpyDisable = document.getElementById("copy-disable");
mouseBtn.addEventListener("mousedown", function (e) {
  console.log(e.button);
  // old method to check that which button called
  console.log(e.which);
});
hardBtn.addEventListener("click", function (e) {
  if (e.ctrlKey && e.altKey && e.shiftKey && e.metaKey) {
    console.log("You clicked me!");
  }
});

dblClickBtn.ondblclick = function (e) {
  console.log("I called, onmousedown can't disable me");
};
dblClickBtn.onmousedown = function (e) {
  return false;
};

cpyDisable.oncopy = function (e) {
  console.log("I'm sorry, you can't copy me");
  return false;
};
