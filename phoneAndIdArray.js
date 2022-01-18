const patients = require("./patients");

const phoneNo = patients.map(function(patient) {
    return patient.phoneNumber;
})

console.log(phoneNo);

const idNo = patients.map(function(patient) {
    return patient.id;
})

console.log(idNo);
