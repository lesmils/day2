function CheckZeroPatients(number) {
    if (patientsWeighingLessThan.length === 0){
        console.log("Sorry, no patients match your criteria.", 
        '\n', "Please try a different value");
        process.exit();
    }
}

const patients = require("./patients");
const weight = parseInt(process.argv[2]);

const patientsWeighingLessThan = patients.filter(function(patient){
    return patient.weight < weight;
});

CheckZeroPatients (patientsWeighingLessThan);

console.log("OUTPUT:", patientsWeighingLessThan);
console.log("TOTAL NUMBER OF PATIENTS", patients.length);
console.log(`NUMBER OF PATIENTS WEIGHING LESS THAN ${weight}:`, patientsWeighingLessThan.length);
