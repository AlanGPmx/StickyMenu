/*!
 * StickyMenu - https://alangpmx.github.io/
 * Version - 1.0.0
 * Licensed under the GNU General Public License v3 - https://opensource.org/licenses/GPL-3.0
 *
 * Copyright (c) 2020 Alan Garduño P.
 * 
 */

console.log('%c Licensed under the GNU General Public License v3', 'color: #292b2c; font-size: 35px; text-shadow: 0 0 2px #fff');
console.log('%c Copyright (c) 2020 Alan Garduño P.', 'color: #292b2c; font-size: 35px; text-shadow: 0 0 2px #fff');

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
  //Toggle menu icon
  document.getElementById('iconResponsive').classList.toggle("fa-times-circle");
  document.getElementById('iconResponsive').classList.toggle("fa-bars");
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
