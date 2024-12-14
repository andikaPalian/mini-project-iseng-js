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
    let number = 1;
    let array = [];
// Menggunakan while loop
    while (number <= 100) {
        if (number % 3 === 0 && number % 5 === 0) {
            array.push("fizzbuzz");
        } else if (number % 3 === 0) {
            array.push("fizz");
        } else if (number % 5 === 0) {
            array.push("buzz");
        } else {
            array.push(number);
        };
        number++;
    };
    console.log(array);
};

fizzBuzz();
