const expresiones = {
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const form = document.getElementById("form");

const btn = document.getElementById("btn");

const fromInputs = {
  user: false,
  name: false,
  password: false,
  email: false,
  phone: false,
};

// inputs
const inputs = document.querySelectorAll(".form-control");

const validateInput = (input, expression) => {
  if (expression.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    fromInputs[input.name] = true;
  } else {
    input.classList.add("is-invalid");
    fromInputs[input.name] = false;
  }
};

const validatePassword = () => {
  const password = document.getElementById("password");
  const repeatpassword = document.getElementById("repeatpassword");
  if (repeatpassword.value != password.value) {
    repeatpassword.classList.add("is-invalid");
    fromInputs.password = false;
  } else {
    repeatpassword.classList.remove("is-invalid");
    repeatpassword.classList.add("is-valid");
    fromInputs.password = true;
  }
};

const validate = (e) => {
  switch (e.target.name) {
    case "user":
      validateInput(e.target, expresiones.usuario);
      break;
    case "name":
      validateInput(e.target, expresiones.nombre);
      break;
    case "password":
      validateInput(e.target, expresiones.password);
      validatePassword();
      break;
    case "repeatpassword":
      validatePassword();
      break;
    case "email":
      validateInput(e.target, expresiones.correo);
      break;
    case "phone":
      validateInput(e.target, expresiones.telefono);
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validate);
  input.addEventListener("blur", validate);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const terns = document.getElementById("terns");
  if (
    fromInputs.user &&
    fromInputs.name &&
    fromInputs.password &&
    fromInputs.email &&
    fromInputs.phone &&
    terns.checked
  ) {
    form.reset();
    Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      location.href = "/";
    }, 2000);
  } else {
    Swal.fire({
      icon: "error",
      title: "Something went wrong",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
