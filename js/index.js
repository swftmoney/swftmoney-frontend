var burgerButton = document.getElementById("burger");
var navbar = document.getElementById("navbar");
var exitNavbarButton = document.getElementById("exit-navbar");

function toggleNavbar() {
  navbar.classList.toggle("hidden");
}

// Add an event listener for the "click" event
burgerButton.addEventListener("click", function () {
  // Your code to be executed when the button is clicked
  toggleNavbar();
});

exitNavbarButton.addEventListener("click", function () {
  // Your code to be executed when the button is clicked
  toggleNavbar();
});
