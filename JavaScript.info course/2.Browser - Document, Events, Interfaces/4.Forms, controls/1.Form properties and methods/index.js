// call elements

const authForm = document.forms.authForm;

// functions
/**
 * Form parser
 * @param {HTMLFormElement | HTMLFieldSetElement} form
 * @param {boolean} recur
 * @returns {{[key: string]: string | File | File[]}}
 */
// function parseForm(form, recur) {
//   const body = {};
//   for (const input of form.elements) {
//     if (input.tagName === "FIELDSET" && !recur) {
//       body[input.name] = parseForm(input, true);
//     } else body[input.name] = input.value;
//   }
//   return body;
// }

console.log(authForm.firstname.name);
console.log(authForm.elements.firstname.name);
authForm.firstname.name = "name";
console.log(authForm.name.name, authForm.firstname.name);
console.log(authForm.elements.name, authForm.elements.firstname?.name);
console.log(authForm.about.value);
console.log(authForm.elements.job.options); // options select element
console.log(authForm.job.value);
// listeners
const testOption = new Option("Bugger", "bugger", true, true);
document.getElementById("job").append(testOption);
authForm.addEventListener("input", function (e) {
  const { target } = e;
  console.log(target.options[1].selected);
  console.log(target.options[1].text);
  console.log(target.options[1].index);

  // authForm.elements.jobSelected.selectedIndex = target.selectedIndex;
  // authForm.elements.jobSelected.options[target.selectedIndex].selected = true;
  // authForm.elements.jobSelected.value = target.value;
});
