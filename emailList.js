// emailList.js
const patients = require("./patients");


// map executes the callback function for each element
const emailAdresses = patients.map(function(patient) {
  console.log("WHAT IS PATIENT", patient);
  // return only the email addresses to the output array
  return patient.email;
});

// patient can be replaced by any word

console.log(emailAdresses);
console.log(emailAdresses.length);
console.log(emailAdresses[3]);