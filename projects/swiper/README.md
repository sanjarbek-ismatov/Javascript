```javascript
const swiper = document.querySelector(".swiper");
const container = swiper.querySelector(".swiper-container");
const singleItem = container.querySelector(".swiper-item");
let index = 0;
let activeElement = container.children[index];
let startX = 0; // Added variable to store initial pointer X position

// Listeners

/**
 * @param {PointerEvent} e
 */
function pointerDown(e) {
    const rect = container.getBoundingClientRect();
    startX = e.clientX; // Store initial pointer X position
    moveAt(e.clientX);
    swiper.setPointerCapture(e.pointerId);
    swiper.addEventListener("pointermove", pointerMove);
    swiper.addEventListener("pointerup", pointerUp);
}

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
    container.style.transition = "left 0.3s ease-in-out";

    const diffX = e.clientX - startX; // Calculate the difference between initial and final pointer X positions
    const threshold = singleItem.clientWidth * 0.2; // Define a threshold for swipe detection (20% of the item width)

    if (Math.abs(diffX) > threshold) {
// Swipe direction detection
        if (diffX < 0) {
            index = Math.min(index + 1, container.children.length - 1); // Increment index for left swipe
        } else {
            index = Math.max(index - 1, 0); // Decrement index for right swipe
        }
    }

    container.style.left = -index * singleItem.clientWidth + "px";
    container.addEventListener("transitionend", transitionEnd);
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
 */
function moveAt(clientX) {
    const diffX = clientX - startX; // Calculate the difference between initial and current pointer X positions
    const currentPosition = -index * singleItem.clientWidth;
    const newPosition = currentPosition + diffX; // Calculate the new position of the container

    container.style.left = newPosition + "px";
}

// Call listeners
swiper.addEventListener("dragstart", function (e) {
    e.preventDefault();
});
swiper.addEventListener("pointerdown", pointerDown);
```