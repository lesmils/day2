const patients = require("./patients");

/*patients.forEach(function(patient){
    console.log(patient.phoneNumber)}
);
*/

const phoneNumber = process.argv [2];

const specificPatient = patients.find(function(patient){
    return (phoneNumber === patient.phoneNumber);
})

console.log(specificPatient);