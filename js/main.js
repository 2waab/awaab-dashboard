let menuContainer = document.querySelector(".menu-container");
let navBar = document.querySelector(".navbar");
let head = document.querySelector(".header");

menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("open");
    navBar.classList.toggle("open");
    head.classList.toggle("open");
});