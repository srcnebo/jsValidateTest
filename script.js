//https://www.w3schools.com/jsref/jsref_obj_regexp.asp
//https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp
//https://regex101.com/r/bL0Nfv/2/

const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

console.log(inputs);

const patterns = {
  firstname: /^[a-zA-Z]{3,15}$/,
  lastname: /^[a-zA-Z]{3,15}$/,
  email: /^[a-z]+[\.]*[a-z]*@[a-z]+\.[a-z]{2,3}[\.]?[a-z]{1,2}$/,
  password: /^[\w\W\s]{6,20}$/
};

const fName = document.querySelector("#firstname");
console.log(fName.value);
if (patterns.firstname.test(fName)) {
  console.log("true");
}

// const formValidator = (element, pattern) => {
//   if (pattern.test(element.value)) {
//     element.className = "valid";
//     button.className = "submit-button";
//     button.disabled = false;
//   } else {
//     element.className = "invalid";
//     button.classList.remove("submit-button");
//     button.disabled = true;
//   }
// };
