const box = document.getElementById("box");
const copyBtn = document.getElementById("copy");
const removeBtn = document.getElementById("remove");
const restart = document.getElementById("restart");
const insert = document.getElementById("insert");
const extract = document.getElementById("extract");
const clone = document.getElementById("clone");
const block = document.getElementById("block");
const range = new Range();
const cloneHTML = box.innerHTML.toString();
range.setStart(box, 0);
range.setEnd(box, 1);
copyBtn.onclick = function () {
  document.getSelection().addRange(range);
};
removeBtn.onclick = function () {
  range.deleteContents();
};
restart.onclick = function () {
  box.innerHTML = cloneHTML;
  range.setStart(box, 0);
  range.setEnd(box, 1);
  document.getSelection().removeAllRanges();
  document.getSelection().addRange(range);
};

insert.onclick = function () {
  const elem = document.createElement("p");
  elem.textContent = "Hello World";
  range.insertNode(elem);
};

extract.onclick = function () {
  const extractedElem = range.extractContents();
  document.body.append(extractedElem);
};
clone.onclick = function () {
  const clonedElem = range.cloneContents();
  range.insertNode(clonedElem);
  document.body.append(clonedElem);
};
// block.addEventListener("selectstart", function (e) {
//   e.preventDefault();
// });
const cloned = document.getElementById("text");
const result = document.getElementById("result");
document.addEventListener("selectionchange", function (e) {
  const selection = document.getSelection();
  result.innerHTML = "";
  // console.log("Selecting from " + anchorNode.data, anchorOffset);
  // console.log("To " + focusNode.data, focusOffset);
  for (let i = 0; i < selection.rangeCount; i++) {
    result.append(selection.getRangeAt(i).cloneContents());
  }
});

range.selectNodeContents(box);
document.getSelection().removeAllRanges();
document.getSelection().addRange(range);

/* --------------------------------------------------------------------- */

const selectionInput = document.querySelector("#selection-input");
const selectionArea = document.querySelector("#selection-area");
const commentBtn = document.querySelector("#comment-btn");
const commentLorem = document.querySelector("#comment-lorem");

selectionInput.addEventListener("select", function (e) {
  console.log(selectionInput.selectionStart);
  console.log(selectionInput.selectionEnd);
  console.log(selectionInput.selectionDirection);
});

selectionArea.onfocus = function (e) {
  setTimeout(() => {
    selectionArea.selectionStart = selectionArea.selectionEnd = 10;
  });
};
commentBtn.onclick = function (e) {
  const selectedText = selectionArea.value.slice(
    selectionArea.selectionStart,
    selectionArea.selectionEnd
  );
  selectionArea.setRangeText(`/*${selectedText}*/`);
};
commentLorem.onclick = function (e) {
  const index = selectionArea.value.indexOf("Lorem");
  selectionArea.setRangeText(`/*Lorem*/`, index, index + 5, "select");
};
