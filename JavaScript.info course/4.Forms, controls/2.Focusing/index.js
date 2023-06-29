const authForm = document.forms.authForm;
Array.from(authForm.elements).forEach((e) => {
  e.addEventListener("focus", function (e) {
    const { currentTarget } = e;
    console.log(document.activeElement);
    currentTarget.classList.add("focused");
    // currentTarget.classList.remove("error");
  });
  e.addEventListener("blur", function (e) {
    const { currentTarget } = e;
    if (e.target.type === "email" && !currentTarget.value.includes("@")) {
      currentTarget.classList.add("error");
      // currentTarget.focus();
    }
    currentTarget.classList.remove("focused");
  });
});
