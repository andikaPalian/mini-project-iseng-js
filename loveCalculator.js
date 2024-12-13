const prompt = require("prompt-sync")({ sigint: true });

const namaPertama = prompt("Masukkan nama kamu : ");
const namaKedua =prompt("Massukkan nama pasangan kamu : ");

// let loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore) + 1;
// console.log(`Love Score ${namaPertama} dengan ${namaKedua} adalah : ${loveScore}`);

const loveScore = Math.floor(Math.random() * 100) + 1;
if (loveScore > 70) {
    console.log(`Love Score ${namaPertama} dengan ${namaKedua} : ${loveScore}%. Kalian sangat cocok!`);
} else if (loveScore > 40 && loveScore <= 70) {
    console.log(`Love Score ${namaPertama} dengan ${namaKedua} : ${loveScore}%. Masih ada harapan! Semangatlah!!`);
} else {
    console.log(`Love Score ${namaPertama} dengan ${namaKedua} : ${loveScore}%. Kalian tidak cocok! bagaikan air dan minyak`)
}
// console.log(`Love Score ${namaPertama} dengan ${namaKedua} adalah : ${loveScore}%`);