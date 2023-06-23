// call elements on the top

const area = document.getElementById("area");

// listeners

/**
 * mouse over listener
 * @param {MouseEvent} event
 */
function mouseOver(event) {
  console.log("mouse over");
  // if (event.relatedTarget)
  //   console.log("related is " + event.relatedTarget.dataset.name);
  // console.log("target is " + event.target.dataset.name);
}

/**
 * mouse out listener
 * @param {MouseEvent} event
 */
function mouseOut(event) {
  console.log("mouse out");
  // if (event.relatedTarget)
  //   console.log("related is " + event.relatedTarget.dataset.name);
  // console.log("target is" + event.target.dataset.name);
}

/**
 * mouse enter listener
 * @param {MouseEvent} event
 */
function mouseEnter(event) {
  console.log(event.target.tagName);
}

/**
 * mouse leave listener
 * @param {MouseEvent} event
 */
function mouseLeave(event) {
  console.log(event.target.tagName);
}

// call listeners

// area.addEventListener("mouseover", mouseOver);
// area.addEventListener("mouseout", mouseOut);

// area.addEventListener("mouseenter", mouseEnter);
// area.addEventListener("mouseleave", mouseLeave);
