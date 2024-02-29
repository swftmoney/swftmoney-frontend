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

scrollLeftBtn.addEventListener("click", scrollLeft);
scrollRightBtn.addEventListener("click", scrollRight);
