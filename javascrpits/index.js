// --> All in one Javascript package for XtendShop <---

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

// Index File -->

// ==> Subscribe Submittion

let submitSub = document.getElementById("sub");
let inputSub = document.getElementById("hero-field");

// ==> Subscribe Regular Expressions
const inputRegex = /^([a-z0-9]+)@([a-z]+).com$/;

submitSub.addEventListener("click", () => {
  if (inputRegex.test(inputSub.value)) {
    swal({
      title: "Amazing!",
      text: "Thank you so much for subscribing us, We'll let you know about our latest updates on our store via Email. Stay tuned!",
      icon: "success",
      button: "Cool!",
    });
  } else {
    swal({
      title: "Alas!",
      text: "Please fill out the text-area with a valid Email. \n Or, Blank area cannot get submitted",
      icon: "error",
      button: "Aww yiss!",
    });
  }

  inputSub.value = "";
});

// ==> Forms Regular Expression
const nameRegex = /^([a-zA-Z]){3,12}$/;
const emailRegex = /^([a-z0-9]+)@([a-z]+).com$/;
const messageRegex = /^([a-zA-Z0-9]){1,100}$/;

// Common Name, Email and Submit Button Grabbing
let givenName = document.getElementById("name");
let givenEmail = document.getElementById("email");
let givenMessage = document.getElementById("message");
let button = document.getElementById("submit");

// ==> Verifing the Inputs are given

// --> Name Regular Expression<---
givenName.addEventListener("blur", () => {
  nameRegex.test(givenName.value)
    ? givenName.classList.toggle("green")
    : swal(
        "Error!",
        "Name cannot contain any numbers or must contain 3 to 12 words."
      );
});
// --> Email Regular Expression <---
givenEmail.addEventListener("blur", () => {
  emailRegex.test(givenEmail.value)
    ? givenEmail.classList.toggle("green")
    : swal("Error!", "You must put a Valid Email address");
});
// --> Message Regular Expression <---
givenMessage.addEventListener("blur", () => {
  messageRegex.test(givenMessage.value)
    ? givenMessage.classList.toggle("green")
    : swal(
        "Error!",
        "Your Message could not contain more than 100 Words. \n Or, Your message couldn't be empty."
      );
});

// => Clicking on the Button (Onclick)
button.addEventListener("click", () => {
  if (givenName.value!= 0 && givenEmail.value != 0) {
    swal({
      title: "Success!",
      text: "Your Form Has been Submitted!",
      icon: "success",
      button: "Hurray!",
    });
  } else {
    swal({
      title: "Alas!",
      text: "Please fill out the text-area. \n Or, Blank area cannot get submitted",
      icon: "error",
      button: "Oops!",
    });
  }
  givenName.value = "";
  givenEmail.value = "";
  givenMessage.value = "";

  givenName.classList.remove("green");
  givenMessage.classList.remove("green");
  givenEmail.classList.remove("green");
});

// Index Page Javascript has been completed!


