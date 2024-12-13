const prompt = require("prompt-sync")({ sigint: true });

function bmiCalculator() {
    const name = prompt("Masukkan nama kamu : ");
    const weight = prompt("Masukkan berat badan kamu (kg) : ");
    const height = prompt("Masukkan tinggi badan kamu (m) : ");

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2)
    if (bmi < 18.5) {
        console.log(`${name} BMI kamu ${bmi}, berat badan kamu kurang!`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`${name} BMI kamu ${bmi}, berart badan kamu normal!`);
    } else {
        console.log(`${name} BMI kamu ${bmi}, berat badan kamu berlebih!`);
    };
    return bmi;
};

bmiCalculator();