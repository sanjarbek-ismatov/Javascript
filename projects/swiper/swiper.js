// call elements from dom

const swiper = document.querySelector(".swiper");
const container = swiper.querySelector(".swiper-container");

// Listeners

/**
 * @param {PointerEvent} e
 */
function pointerDown(e) {
  const rect = container.getBoundingClientRect();
  const shiftX = e.clientX - rect.left;
  moveAt(e.clientX, shiftX);
  swiper.setPointerCapture(e.pointerId);
  swiper.addEventListener("pointermove", pointerMove);

  /**
   * @param {PointerEvent} e
   */
  function pointerMove(e) {
    moveAt(e.clientX, shiftX);
  }

  /**
   * @param {PointerEvent} e
   */
  function pointerUp(e) {
    swiper.removeEventListener("pointermove", pointerMove);
  }

  swiper.addEventListener("pointerup", pointerUp);
}

// Functions
/**
 *
 * @param {number} clientX
 * @param {number} shiftX
 */
function moveAt(clientX, shiftX) {
  container.style.marginLeft = clientX - shiftX + "px";
}

// call listeners
swiper.addEventListener("dragstart", function (e) {
  e.preventDefault();
});
swiper.addEventListener("pointerdown", pointerDown);
