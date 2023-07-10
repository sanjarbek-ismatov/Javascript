const form = document.forms[0];
const btnSubmit = document.querySelector("#submit-btn");
form.onsubmit = function (e) {
  console.log(form.image.value);
  return false;
};
btnSubmit.onclick = function (e) {
  form.submit();
};
