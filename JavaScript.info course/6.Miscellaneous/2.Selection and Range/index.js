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
