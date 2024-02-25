var burgerButton = document.getElementById("burger");
var navbar = document.getElementById("navbar");
var exitNavbarButton = document.getElementById("exit-navbar");
var scrollContainer = document.getElementById("scroll-container");
var scrollLeftBtn = document.getElementById("scrollLeftBtn");
var scrollRightBtn = document.getElementById("scrollRightBtn");

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
burgerButton.addEventListener("click", function () {
  // Your code to be executed when the button is clicked
  toggleNavbar();
});

exitNavbarButton.addEventListener("click", function () {
  // Your code to be executed when the button is clicked
  toggleNavbar();
});
