// call elements from dom

const swiper = document.querySelector(".swiper");
const container = swiper.querySelector(".swiper-container");
const singleItem = container.querySelector(".swiper-item");
const spinner = swiper.querySelector(".swiper-spinner");
let index = 0;
let activeElement = container.children[index];
let startX = 0;
const itemsLength = container.children.length;

// Listeners

/**
 * @param {PointerEvent} e
 */
function pointerDown(e) {
  startX = e.clientX;
  moveAt(e.clientX);
  swiper.setPointerCapture(e.pointerId);
  swiper.addEventListener("pointermove", pointerMove);
  swiper.addEventListener("pointerup", pointerUp);

  /**
   * @param {PointerEvent} e
   */
  function pointerMove(e) {
    moveAt(e.clientX);
  }

  /**
   * @param {PointerEvent} e
   */
  function pointerUp(e) {
    swiper.removeEventListener("pointermove", pointerMove);
    swiper.removeEventListener("pointerup", pointerUp);
    const shiftX = e.clientX - startX;
    const threshold = singleItem.clientWidth * 0.2;
    if (Math.abs(shiftX) > threshold) {
      if (shiftX < 0) index = Math.min(++index, itemsLength - 1);
      else index = Math.max(--index, 0);
    }
    const currentPosition = -index * singleItem.clientWidth;
    container.style.left = currentPosition + "px";

    container.style.transition = "left 0.3s ease-in-out";
    spinner.style.transition = "width .3s linear";
    container.addEventListener("transitionend", transitionEnd);
    spinnerHandle(currentPosition);
  }
}

function transitionEnd() {
  container.style.transition = "";
  spinner.style.transition = "";
  container.removeEventListener("transitionend", transitionEnd);

  activeElement.removeAttribute("active");
  activeElement = container.children[index];
  activeElement.setAttribute("active", true);
}

// Functions
/**
 *
 * @param {number} clientX
 */
function moveAt(clientX) {
  const shiftX = clientX - startX;
  const currentPosition = -index * singleItem.clientWidth;
  container.style.left = currentPosition + shiftX + "px";
  spinnerHandle(currentPosition + shiftX);
}

function spinnerHandle(currentPosition) {
  const percent =
    (-currentPosition / ((itemsLength - 1) * singleItem.clientWidth)) * 100;
  spinner.style.width = `${percent}%`;
}

// call listeners
swiper.addEventListener("dragstart", function (e) {
  e.preventDefault();
});
swiper.addEventListener("pointerdown", pointerDown);
