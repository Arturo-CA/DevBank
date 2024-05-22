const navMenu = document.getElementById("nav__menu"),
  navToggle = document.getElementById("nav__toggle"),
  menuClose = document.getElementById("menu__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show");
    menuClose.style.display = "flex";
  });
}

if (menuClose) {
  menuClose.addEventListener("click", () => {
    navMenu.classList.remove("show");
    menuClose.style.display = "none";
  });
}

// const itemLink = document.querySelectorAll(".item__link");
// const linkAction = () => {
//   const navMenu = document.getElementById("nav__menu");
//   navMenu.classList.remove("show-menu");
// };
// itemLink.forEach((e) => e.addEventListener("click", linkAction));
