function CheckZeroPatients(number) {
    if (patientsLongerThan.length === 0){
        console.log("Sorry, no patients match your criteria.", 
        '\n', "Please try a different value");
        process.exit();
    }
}

const patients = require("./patients");
const height = parseFloat(process.argv[2]);

const patientsLongerThan = patients.filter(function(patient){
    return patient.height > height;
});

CheckZeroPatients (patientsLongerThan);

console.log("OUTPUT:", patientsLongerThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS LONGER THAN ${height}:`, patientsLongerThan.length);
