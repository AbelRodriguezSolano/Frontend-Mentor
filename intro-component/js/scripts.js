const btn = document.getElementById("btn");

const firstName = document.getElementById("firstName");

const errorR = document.querySelector(".data__error");

btn.addEventListener("click", () => {
  if (firstName.value.trim() === "") {
    errorR.classList.add("data__error--error");
    firstName.classList.add("form__input--error");
  } else {
    errorR.classList.remove("data__error--error");
    firstName.classList.remove("form__input--error");
  }
});
//faltan las validaciones del formario, solo esta la del first name
