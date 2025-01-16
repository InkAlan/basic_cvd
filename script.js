const burgir = document.querySelector(".toggle__menu");
const headerav = document.querySelector(".header .header__nav");
burgir.addEventListener("click",() => {
burgir.classList.toggle("open");
headerav.classList.toggle("open");
 });
