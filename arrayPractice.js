// arrayPractice.js

// importing our array of patients using `require`
const patients = require("./patients");

console.log(patients);


// accesing elements in an array
const firstPatient = patients[0];

console.log(firstPatient);

// which element to access can also be dependent on a variable
const numberOfPatients = patients.length;
const whichElementOfArray = 9;
const tenthPatient = patients[whichElementOfArray];
const secondPatient = patients[1];
const lastPatient = patients[numberOfPatients-1];
// const tenthPatient = patients[9];



console.log(tenthPatient);
console.log(secondPatient);
console.log(lastPatient);
