
let burgerMenu = document.getElementById("burger-menu");
let nav = document.querySelector(".header__nav");
let headerWrap = document.querySelector(".header__wrap");
let orderWrap = document.querySelector(".order__wrap");

burgerMenu.addEventListener("click",function() {
  this.classList.toggle("header__burger--close");
  headerWrap.classList.toggle("header__wrap--active")
  nav.classList.toggle("header__nav--active");
  orderWrap.classList.toggle("order__wrap--active");
});
