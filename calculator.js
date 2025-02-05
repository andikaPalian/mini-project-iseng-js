const prompt = require("prompt-sync")({ sigint: true });

function calculator() {
    const angka1 = Number(prompt("Masukkan angka pertama : "));
    const angka2 = Number(prompt("Masukkan angka kedua : "));
    const operator = prompt("Masukkan operator (+, -, *, /) : ");

    switch (operator) {
        case "+":
            console.log(angka1 + angka2);
            break;
        case "-":
            console.log(angka1 - angka2);
            break;
        case "*":
            console.log(angka1 * angka2);
            break;
        case "/":
            console.log(angka1 / angka2);
            break;
        default:
            console.log("Operator tidak valid");
            break;
    }
}

calculator();