const patients = require("./patients");
const firstPatient = patients[0];

// DIY's
// 1. assign the weight, age and height of the firstPatient to variables weight, age and height

const {age, height, weight} = firstPatient;
console.log(age, height, weight);

// 2. declare a variable fullName and assign the firstName, and lastName of the firstPatient to it
const {firstName, lastName} = firstPatient;
const fullName = firstName + " " + lastName;
console.log(fullName);

// 3. if the firstPatient does not exercise, console.log: "does not exercise" else console.log: "this patient exercises"
const {dailyExercise} = firstPatient;
if (dailyExercise === "no") {
    console.log("patient does not Exercise");
} else {
console.log("this patient exercises");
};
