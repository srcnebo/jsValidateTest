//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

console.log(inputs);

//Converts the Nodelist to array
const inputsToArray = Array.from(inputs);


//Object of patterns for each input
const patterns = {
  firstname: /Steve/,
  lastname: /^[a-zA-Z]{3,15}$/,
  email: /^[a-z]+[\.]*[a-z]*@[a-z]+\.[a-z]{2,3}[\.]?[a-z]{1,2}$/,
  password: /^[\w\W\s]{6,20}$/,
  telephone: /^[+]\d{8,15}$/,
  bio: /^[a-zA-Z0-9]{5,200}$/
};

//function to check if the input value is valid
inputs.forEach(element => {
  element.addEventListener("input", e => {
    formValidator(e.target, patterns[e.target.name]);
  });
});

//function to check that every element is validated before submit is enabled.
//Every element must have a class of valid 
  return inputsToArray.every(element => {
    return element.className == "valid";
  });
}
//Takes 2 arguments 
//Outer if tests that the individual elements are valid and assigns class valid,
//innner if checks that all elements have a class of valid before the submit is enabled.
const formValidator = (element, pattern) => {
  if (pattern.test(element.value)) {
    element.className = "valid";
    if (isValid()) {
      button.className = "submit-button";
      button.disabled = false;
    } else {
      button.classList.remove("submit-button");
      button.disabled = true;
    }
  } else {
    element.className = "invalid";
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
