// call elements from dom

const swiper = document.querySelector(".swiper");
const container = swiper.querySelector(".swiper-container");
const singleItem = container.querySelector(".swiper-item");
let index = 0;

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
    console.log(e);
    swiper.removeEventListener("pointermove", pointerMove);
    console.log(index);
    container.style.marginLeft = -index * singleItem.clientWidth + "px";
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
  index = ~~Math.abs(container.offsetLeft / singleItem.clientWidth);
}

// call listeners
swiper.addEventListener("dragstart", function (e) {
  e.preventDefault();
});
swiper.addEventListener("pointerdown", pointerDown);
