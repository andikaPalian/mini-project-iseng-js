// Dengan perulangan biasa
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    };
};

// Dengan menggunakan array 
function fizzBuzz() {
    const number = 15;
    let array = [];

    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("fizzbuzz");
        } else if (i % 3 === 0) {
            array.push("fizz");
        } else if (i % 5 === 0) {
            array.push("buzz");
        } else {
            array.push(i);
        };
    };
    console.log(array);
};

fizzBuzz();
