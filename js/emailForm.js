var emailInput = document.getElementById("email-input");
var emailBtn = document.getElementById("email-btn");
var emailError = document.getElementById("email-error");
var emailWrapper = document.getElementById("email-wrapper");

const sendEmail = async () => {
  var validRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const email = emailInput.value;

  if (email) {
    if (email.match(validRegex)) {
      const response = await fetch(
        `https://eoffhavj1g6gv3m.m.pipedream.net/?email=${email}`
      );
      if (response.ok) {
        emailError.style.display = "block";
        emailError.innerText =
          "Thank you for contacting us! Your email has been successfully submitted.";
        emailError.classList.add("text-green-500");
        emailWrapper.style.display = "none";
      } else {
        emailError.style.display = "block";
        emailError.innerText = "Something went wrong. Please try again later.";
        emailError.classList.add("text-red-500");
        emailInput.focus();
        setTimeout(() => {
          emailError.style.display = "none";
        }, 5000);
        return;
      }
    } else {
      emailError.style.display = "block";
      emailError.innerText = "Please enter a valid email";
      emailError.classList.add("text-red-500");
      emailInput.focus();
      setTimeout(() => {
        emailError.style.display = "none";
      }, 5000);
    }
  } else {
    emailError.style.display = "block";
    emailError.innerText = "Please enter an email";
    emailError.classList.add("text-red-500");
    emailInput.focus();
    setTimeout(() => {
      emailError.style.display = "none";
    }, 5000);
  }
};

emailInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sendEmail();
  }
});

emailBtn.addEventListener("click", sendEmail);
