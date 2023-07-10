// Call elements

const ball = document.getElementById("ball");

// Listeners
/**
 *
 * @param {MouseEvent} event
 */
function mouseDown(event) {
  ball.style.position = "absolute";
  ball.style.zIndex = 1000;
  document.body.append(ball);
  const rect = ball.getBoundingClientRect();
  const shiftX = event.clientX - rect.left;
  const shiftY = event.clientY - rect.top;
  moveAt(event, ball, shiftX, shiftY);
  document.addEventListener("mousemove", mouseMove);

  /**
   * @param {MouseEvent} event
   */
  function mouseMove(event) {
    moveAt(event, ball, shiftX, shiftY);
  }

  // Functions
  /**
   *
   * @param {MouseEvent} event
   * @param {HTMLElement} elem
   * @param {number} shiftX
   * @param {number} shiftY
   */
  function moveAt(event, elem, shiftX, shiftY) {
    elem.style.top = event.clientY - shiftY + "px";
    elem.style.left = event.clientX - shiftX + "px";
  }

  ball.onmouseup = function () {
    document.removeEventListener("mousemove", mouseMove);
    ball.onmouseup = null;
  };
}

// Call listeners
// disable dragging
ball.ondragstart = function (event) {
  return false;
};
ball.addEventListener("mousedown", mouseDown);
