// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
const navbar = document.getElementById("nav-bar");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll("ul li .nav-link");
const links = document.querySelectorAll("a");
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
