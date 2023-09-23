const navbar = document.querySelector(".navbar");
const menu = document.getElementById("menu-icon");
const darkMode = document.getElementById("dark-mode");
menu.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menu.classList.toggle("bx-x");
});

window.addEventListener("scroll", () => {
  navbar.classList.remove("open");
  menu.classList.remove("bx-x");
});

darkMode.addEventListener("click", () => {
  darkMode.classList.toggle("bx-sun");
  document.body.classList.toggle("dark");
});
