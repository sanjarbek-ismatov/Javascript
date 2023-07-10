document.addEventListener("DOMContentLoaded", function (e) {
  console.log("Dom is ready with script");
});
window.onload = function (e) {
  console.log("page loaded");
};
// window.onunload = function (e) {
//   navigator.sendBeacon("/analytics", { name: "Sanjarbek" });
// };

window.addEventListener("beforeunload", function (e) {
  e.returnValue = "Do you want to exit?";
});
console.log(document.readyState);
document.onreadystatechange = function (e) {
  console.log(document.readyState);
};
