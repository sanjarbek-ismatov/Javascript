const observableElem = document.getElementById("observable");
const observer = new MutationObserver((mutationRecords, mutationObserver) => {
  mutationRecords.forEach((e) => {
    if (e.type === "characterData") {
      console.log(`${e.oldValue}\n${e.target.textContent}`);
    } else if (e.type === "attributes") {
      console.log(e.oldValue);
    } else if (e.type === "childList") {
      for (const node of e.removedNodes) {
        console.log(node);
      }
    }
  });
});

observer.observe(observableElem, {
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["data-text"],
  childList: true,
});
// observer.disconnect();
observableElem.className = "ll";
observableElem.setAttribute("data-text", "Salom");
// observableElem.onclick = function (e) {
//   alert(e.target.dataset.text);
// };
