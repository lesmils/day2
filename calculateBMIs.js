const patients = require("./patients");

const BMIs = patients.map((patient) => {

    const {height, weight} = patient;
  
    return (Math.round(weight / (height * height)))
});

console.log(BMIs);


const BMRs = patients.map((patient) => {
    const {weight, height, age, gender} = patient;
    
    let BMR;

  if (gender === "m") {
    BMR = 10 * weight + 6.25 * (height*100) - 5 * age + 50;
  } else {
    BMR = 10 * weight + 6.25 * (height*100) - 5 * age - 150;
  }

  return BMR;
})

console.log(BMRs);
