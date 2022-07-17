// => Navigation Bar for Mobile Devices
// --> Grabbing Navigation Elements
let nav = document.getElementById("nav");
let ul = document.getElementById("ul");
let logo = document.getElementById("logo");
let watermark = document.getElementById("watermark");

// --> Grabbing Hamburger
let hamburger = document.getElementById("hamburg");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("hide");
  ul.classList.toggle("hide");
  logo.classList.toggle("hide");
  watermark.classList.toggle("hide");
});