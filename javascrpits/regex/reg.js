const nameRegex = /^([a-zA-Z]){3,12}$/;
const emailRegex = /^([a-z0-9]+)@([a-z]+).com$/;
//
let givenName = document.getElementById("name");
let givenEmail = document.getElementById("email");
//
let button = document.getElementById("submit");

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
      : swal("Error!", "You must put a Valid Email address.");
  });

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

    givenName.classList.remove("green");
    givenEmail.classList.remove("green");
  });
remove