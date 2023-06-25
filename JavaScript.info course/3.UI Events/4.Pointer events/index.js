// call elements

const ball = document.getElementById("ball");

// listeners
/**
 *
 * @param {PointerEvent} e
 */
function pointerDown(e) {
  console.log(e.pointerId); // id for every pointer
  console.log(e.pointerType); // type: mouse
  console.log(e.isPrimary); // it's true if pointer is alone
  console.log(e.pressure); // pressure
  console.log(e.height); // height of pointer
  console.log(e.width); // width of pointer
  ball.setPointerCapture(e.pointerId);

  ball.style.position = "absolute";
  if (e.ctrlKey) ball.addEventListener("pointermove", pointerMove);
}

function pointerUp() {
  ball.removeEventListener("pointermove", pointerMove);
}

/**
 *
 * @param {PointerEvent} e
 */
function pointerMove(e) {
  ball.style.top = e.pageY - ball.offsetHeight / 2 + "px";
  ball.style.left = e.pageX - ball.offsetWidth / 2 + "px";
}

/**
 *
 * @param {PointerEvent} e
 */

// call listeners
ball.ondragstart = function () {
  return false;
};
ball.addEventListener("pointerdown", pointerDown);

ball.addEventListener("pointerup", pointerUp);
ball.addEventListener("pointercancel", function () {
  console.log("canceled");
});
