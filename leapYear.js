const prompt = require("prompt-sync")({ sigint: true });

// Syarat untuk tahun kabisat adalah :
// 1. Tahun habis dibagi 4
// 2. Tahun tidak habis dibagi 100
// 3. Tahun habis dibagi 400
function leapYear() {
    const year = prompt("Masaukkan tahun : ");

    // Cara pertama : 
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(`${year} adalah tahun kabisat!`);
    } else {
        console.log(`${year} bukan tahun kabisat!`);
    };

    // Bisa juga ditulis seperti ini / carak kedua :
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(`${year} adalah tahun kabisat!`);
            } else {
                console.log(`${year} bukan tahun kabisat!`);
            };
        } else {
            console.log(`${year} adalah tahun kabisat!`);
        };
    } else {
        console.log(`${year} bukan tahun kabisat!`);
    };
    return year;
};

leapYear();