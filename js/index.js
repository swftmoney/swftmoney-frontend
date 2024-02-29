var burgerButton = document.getElementById("burger");
var navbar = document.getElementById("navbar");
var exitNavbarButton = document.getElementById("exit-navbar");
var scrollContainer = document.getElementById("scroll-container");
var scrollLeftBtn = document.getElementById("scrollLeftBtn");
var scrollRightBtn = document.getElementById("scrollRightBtn");
var snapBar = document.getElementById("snap-bar");
var scrollMain = document.getElementById("scroll-main");
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

const scrollEvent = () => {
  if (
    scrollMain.scrollTop > 0 &&
    scrollMain.scrollTop <= window.innerHeight / 2
  ) {
    snapBar.style.top = `0%`;
  }
  if (
    scrollMain.scrollTop > window.innerHeight / 2 &&
    scrollMain.scrollTop <= (3 * window.innerHeight) / 2
  ) {
    snapBar.style.top = `25%`;
  }
  if (
    scrollMain.scrollTop > (3 * window.innerHeight) / 2 &&
    scrollMain.scrollTop <= (5 * window.innerHeight) / 2
  ) {
    snapBar.style.top = `50%`;
  }
  if (
    scrollMain.scrollTop > (5 * window.innerHeight) / 2 &&
    scrollMain.scrollTop <= (7 * window.innerHeight) / 2
  ) {
    snapBar.style.top = `75%`;
  }
};

scrollMain.addEventListener("scroll", scrollEvent);

// Function to scroll the container to the left
function scrollLeft() {
  scrollContainer.scrollLeft -= 50; // You can adjust the scroll amount as needed
}

// Function to scroll the container to the right
function scrollRight() {
  scrollContainer.scrollLeft += 50; // You can adjust the scroll amount as needed
}

function toggleNavbar() {
  navbar.classList.toggle("hidden");
}

scrollLeftBtn.addEventListener("click", scrollLeft);
scrollRightBtn.addEventListener("click", scrollRight);

// Add an event listener for the "click" event
// burgerButton.addEventListener("click", toggleNavbar);

// exitNavbarButton.addEventListener("click", toggleNavbar);
