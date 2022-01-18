// patientByEmail.js
const patients = require("./patients");
const email = process.argv[2];


let specificPatient = patients.find(function(patient) {
    return email === patient.email;
});

console.log(specificPatient);