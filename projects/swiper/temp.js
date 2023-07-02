// call elements from dom

const swiper = document.querySelector(".swiper");
const container = swiper.querySelector(".swiper-container");
const singleItem = container.querySelector(".swiper-item");
let index = 0;
let activeElement = container.children[index];

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
  swiper.addEventListener("pointerup", pointerUp);

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
    swiper.removeEventListener("pointerup", pointerUp);
    container.style.left = -index * singleItem.clientWidth + "px";

    container.style.transition = "left 0.3s ease-in-out";
    container.addEventListener("transitionend", transitionEnd);
  }
}

function transitionEnd() {
  container.style.transition = "";
  container.removeEventListener("transitionend", transitionEnd);
  activeElement.removeAttribute("active");
  activeElement = container.children[index];
  activeElement.setAttribute("active", true);
}

// Functions
/**
 *
 * @param {number} clientX
 * @param {number} shiftX
 */
function moveAt(clientX, shiftX) {
  container.style.left = clientX - shiftX + "px";

  let tempIndex = Math.floor(
    Math.abs(container.offsetLeft) / singleItem.clientWidth
  );
  const halfWidth = singleItem.clientWidth / 2;
  index = Math.abs(container.offsetLeft) > halfWidth ? ++tempIndex : tempIndex;
  if (container.offsetLeft > 0) index = 0;
  if (
    container.offsetLeft <
    -singleItem.clientWidth * (container.children.length - 1)
  ) {
    console.log("Hi");
    index = container.children.length - 1;
  }
}

// call listeners
swiper.addEventListener("dragstart", function (e) {
  e.preventDefault();
});
swiper.addEventListener("pointerdown", pointerDown);
