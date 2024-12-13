const prompt = require("prompt-sync")({ sigint: true });

const namaPertama = prompt("Masukkan nama kamu : ");
const namaKedua =prompt("Massukkan nama pasangan kamu : ");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// console.log(`Love Score ${namaPertama} dengan ${namaKedua} adalah : ${loveScore}`);

const loveScore = Math.floor(Math.random() * 100) + 1;
if (loveScore > 70) {
    console.log(`Love Score ${namaPertama} dengan ${namaKedua} : ${loveScore}%. Kalian sangat cocok!`);
} else {
    console.log(`Love Score ${namaPertama} dengan ${namaKedua} : ${loveScore}%. Kalian tidak cocok! Semangatlah!!`);
};
// console.log(`Love Score ${namaPertama} dengan ${namaKedua} adalah : ${loveScore}%`);