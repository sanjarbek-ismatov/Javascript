const inputChange = document.querySelector("#change-input");
const select = document.querySelector("#select");
const customCopy = document.querySelector("#custom-copy");
// inputChange.oninput = function (e) {
//   console.log(e.target.value);
// };
select.addEventListener("change", function (e) {
  console.log(e.target.value);
});

inputChange.oncut = inputChange.oncopy = function (e) {
  console.log(document.getSelection().toString());
};
inputChange.onpaste = function (e) {
  e.preventDefault();
  alert("blocked data " + e.clipboardData.getData("text/plain"));
};
customCopy.onclick = function (e) {
  navigator.clipboard.writeText("Hello World");
};
