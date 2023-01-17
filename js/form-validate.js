const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message_body = document.getElementById("message");
const form = document.getElementById("form");
const name = document.getElementById("name");

form.addEventListener("submit", e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error");

  errorDisplay.innerHTML = message;
  formControl.classList.add("error");
  formControl.classList.remove("success");
};

const setSuccess = element => {
  const formControl = element.parentElement;
  const errorDisplay = formControl.querySelector(".error");
  errorDisplay.innerHTML = "";
  formControl.classList.add("success");
  formControl.classList.remove("error");
};

const validateInputs = () => {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message_body.value.trim();

  if (nameValue === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else {
    setSuccess(email);
  }

  if (subjectValue === "") {
    setError(subject, "Subject is required");
  } else {
    setSuccess(subject);
  }
  if (messageValue === "") {
    setError(message_body, "Message is required");
  } else {
    setSuccess(message_body);
  }


};

// form.addEventListener("submit", (e) => {
//     let messages = [];

//     if(name.value === '' || name.value == null){
//         messages.push("Name is required");
//         error_text.style.display = "block";
//     }else{
//         error_text.style.display = "none";
//     }

//         if(messages.length > 0 ){
//             e.preventDefault();
//             error_text.innerHTML = messages.join(', ')
//         }
// })

// function check() {
//     if (email.value.match(regExp)){
//         email.style.borderColor = "#27ae60";
//         icon1.style.display = "none";
//         icon2.style.display = "block";
//         error_text.style.display = "none";

//     }else{
//         email.style.borderColor = "#e74c3c";
//         icon1.style.display = "block";
//         icon2.style.display = "none";
//         error_text.style.display = "block";
//     }
// }
