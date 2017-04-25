//Form Validation
//This script validates the information on the simple form
//Every field on the form is checked for errors before being allowed to be submitted.


var contactForm = document.getElementById("contact-form");
function checkForm() {

  //CHECK NAME ENTRY
  var name = document.getElementById("eName");
  var nameHelp = document.getElementById("nameHelp");
  if (name.value === "") {
    //alert("Please enter your name");
    nameHelp.innerHTML = "Please enter your name";
    name.focus();
    return false;
  } else {
    nameHelp.innerHTML = "";
  }

  //CHECK EMAIL ENTRY
  var email = document.getElementById("eEmail").value;
  var emailHelp = document.getElementById("emailHelp");

  //CHECK FOR PROBLEMS
  if (email === "") {
    emailHelp.innerHTML = "Don't forgt your email address";
    return false;
  } else {
    emailHelp.innerHTML = "";
  }
  if (email.indexOf("@") < 1 || email.indexOf("@") > email.length - 5) {
    emailHelp.innerHTML = "Please enter a valid email";
    return false;
  } else {
    emailHelp.innerHTML = "";
  }
  if (email.indexOf(".") - email.indexOf("@") < 2 || email.indexOf(".") >
    email.length - 3) {
    emailHelp.innerHTML = "Please enter a valid email";
    return false;
  } else {
    emailHelp.innerHTML = "";
  }

  //CHECK PHONE ENTRY
  var phone = document.getElementById("ePhone");
  var phoneHelp = document.getElementById("phoneHelp");
  if (phone.value === "" || phone.value.length < 10) {
    phoneHelp.innerHTML = "Please enter a 10-digit phone number";
    phone.focus();
    return false;
  } else {
    phoneHelp.innerHTML = "";
  }
  if (phone.value !== "") {
    var phoneNumber = phone.value.split("-").join("");
    for (i = 0; i < phoneNumber.length; i++) {
      if (isNaN(phoneNumber[i]) || phoneNumber.length < 10) {
        phoneHelp.innerHTML = "Please use numbers 0-9, not letters";
        return false;
      } else {
        phoneHelp.innerHTML = "";
      }
    }
  }
  //CHECK MESSAGE ENTRY
  var message = document.getElementById("message");
  var messageHelp = document.getElementById("messageHelp");
  if (message.value === "") {
    messageHelp.innerHTML = "Please include a message or some happy thoughts";
    message.focus();
    return false;
  } else {
    messageHelp.innerHTML = ""
  }
};
contactForm.onsubmit = checkForm;
