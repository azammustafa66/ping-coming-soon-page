import "./style.css";

let form = document.querySelector("form");
let emailInput = document.querySelector('input[type="email"]');
let errorMessage = document.querySelector(".errormessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.value.trim() === "") {
    displayErrorMessage("Whoops! It looks like you forgot to add your email");
  } else if (!validateEmail(emailInput.value)) {
    displayErrorMessage("Please provide a valid email address");
  } else {
    form.submit();
  }
});

const validateEmail = (email) => {
  let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const displayErrorMessage = (message) => {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
};
