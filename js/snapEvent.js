var snapMain = document.getElementById("scroll-main");
var snapBar = document.getElementById("snap-bar");

const scrollEvent = () => {
  if (snapMain.scrollTop > 0 && snapMain.scrollTop <= window.innerHeight / 2) {
    snapBar.style.top = `0%`;
  }
  if (
    snapMain.scrollTop > window.innerHeight / 2 &&
    snapMain.scrollTop <= (3 * window.innerHeight) / 2
  ) {
    snapBar.style.top = `25%`;
  }
  if (
    snapMain.scrollTop > (3 * window.innerHeight) / 2 &&
    snapMain.scrollTop <= (5 * window.innerHeight) / 2
  ) {
    snapBar.style.top = `50%`;
  }
  if (
    snapMain.scrollTop > (5 * window.innerHeight) / 2 &&
    snapMain.scrollTop <= (7 * window.innerHeight) / 2
  ) {
    snapBar.style.top = `75%`;
  }
};

snapMain.addEventListener("scroll", scrollEvent);
