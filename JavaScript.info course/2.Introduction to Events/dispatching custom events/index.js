// calling dom elements

const customEventButton = document.getElementById("custom-event");
const customMouseEventElem = document.getElementById("mouse-div");
const fullyCustomElem = document.getElementById("fully-custom-event");

// creating custom event

const myFirstCustomEvent = new Event("hello", {
  bubbles: true,
  cancelable: false,
});

customEventButton.addEventListener("hello", function (e) {
  console.log(e.target);
});
customEventButton.dispatchEvent(myFirstCustomEvent);

// Creating mouse event
// But I couldn't it

const centerMouseEvent = new MouseEvent("center", {
  bubbles: true,
  cancelable: true,
});

customMouseEventElem.addEventListener("center", function (e) {
  console.log(e);
});
customMouseEventElem.dispatchEvent(centerMouseEvent);

// Creating fully custom event

function hide() {
  const customEvent = new CustomEvent("hide", {
    bubbles: true,
    cancelable: true,
  });

  if (fullyCustomElem.dispatchEvent(customEvent)) {
    fullyCustomElem.hidden = true;
  } else alert("The event was blocked by preventDefault");
}

fullyCustomElem.addEventListener("hide", function (e) {
  if (confirm("Will you block the event?")) e.preventDefault();
});
