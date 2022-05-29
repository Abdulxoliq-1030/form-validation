const signInZone = document.querySelector(".sign-in-zone");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const checkbox = document.querySelector(".show-password");

// Sign in zone
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const emailValue = email.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else if (usernameValue.length < 6) {
    setErrorFor(username, "Username is too small");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not value");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "password must be at least 6 characters long");
  } else {
    setSuccessFor(password);
  }

  if (password2Value === "" || password2Value < passwordValue) {
    setErrorFor(password2, "Password2 cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords2 does not match");
  } else {
    setSuccessFor(password2);
  }
}

function showPasswords() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
checkbox.addEventListener("click", () => showPasswords());

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
