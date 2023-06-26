// call elements
const clickedList = document.getElementById("clicked-list");
const input = document.getElementById("test-input");

// listeners
/**
 * @param {KeyboardEvent} e
 */
function onKeyDown(e) {
  clickedList.innerHTML +=
    JSON.stringify({ key: e.key, code: e.code }) + "<br>";
}

/**
 * @param {Event} e
 */
function onInput(e) {
  console.log(e.target.value);
}

/**
 * @param {Event} e
 */
function onCopy(e) {
  e.preventDefault();
  alert("copy is disabled by oncopy");
}

/**
 * @param {KeyboardEvent} e
 */
function disableCopy(e) {
  if (e.ctrlKey && e.code === "KeyC") e.preventDefault();
  if (e.defaultPrevented) alert("copy is disabled by onkeyup");
}

// call listeners

// window.addEventListener("keydown", onKeyDown);
input.addEventListener("input", onInput);
// clickedList.addEventListener("copy", onCopy);
window.addEventListener("keydown", disableCopy);
