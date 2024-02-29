var navbar = document.getElementById("navbar");
var exitNavbarButton = document.getElementById("exit-navbar");
var burgerButton = document.getElementById("burger");

function toggleNavbar() {
  navbar.classList.toggle("hidden");
}

// Add an event listener for the "click" event
burgerButton.addEventListener("click", toggleNavbar);

exitNavbarButton.addEventListener("click", toggleNavbar);
