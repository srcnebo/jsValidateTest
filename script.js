//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

console.log(inputs);

const inputsToArray = Array.from(inputs);

const patterns = {
  firstname: /Steve/,
  lastname: /^[a-zA-Z]{3,15}$/,
  email: /^[a-z]+[\.]*[a-z]*@[a-z]+\.[a-z]{2,3}[\.]?[a-z]{1,2}$/,
  password: /^[\w\W\s]{6,20}$/,
  telephone: /00/,
  bio: /hi/
};

inputs.forEach(element => {
  element.addEventListener("input", e => {
    formValidator(e.target, patterns[e.target.name]);
  });
});

function isValid() {
  return inputsToArray.every(element => {
    return element.className == "valid";
  });
}
const formValidator = (element, pattern) => {
  if (pattern.test(element.value)) {
    element.className = "valid";
    console.log("Hi1");
    if (isValid()) {
      button.className = "submit-button";
      button.disabled = false;
      console.log("Hi2");
    } else {
      button.classList.remove("submit-button");
      button.disabled = true;
      console.log("Hi3");
    }
  } else {
    element.className = "invalid";
    console.log("hi4");
  }
};

// inputsToArray.every(formValidator)

// const formValidator = (element, pattern) => {
//   if () {
//     element.className = "valid";
//     button.className = "submit-button";
//     button.disabled = false;
//   } else {
//     element.className = "invalid";
//     button.classList.remove("submit-button");
//     button.disabled = true;
//   }
// };

//button.disabled = true;
//button.classList.remove("submit-button");
//button.className = "submit-button";
//element.className = "invalid";
//button.disabled = true;
//element.className = "valid";
