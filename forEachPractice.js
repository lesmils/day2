const patients = require("./patients");


// DIY's
// - for each patient log their weight
patients.forEach (function(patient) {
    console.log(patient.firstName, patient.lastName, ": ", patient.weight);
});

// - for each patient, log their last name and gender

patients.forEach (function(patient) {
    console.log(patient.lastName, ": ", patient.gender);
});


// - for each patient,
//      - if they are of gender 'm' console.log Mr. and their lastName
//      - if they are of gender 'f' console.log Mrs. and their lastName


patients.forEach (function(patient) {
    console.log((patient.gender === "m") ? "Mr. " : "Mrs.", patient.lastName);
});