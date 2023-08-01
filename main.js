const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const menuCheckbox = document.getElementById("menubar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

menuCheckbox.addEventListener("change", () => {
  hamburger.classList.toggle("active", menuCheckbox.checked);
});