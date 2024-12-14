const prompt = require("prompt-sync")({ sigint: true });

const guestList = ["Noval", "Imran", "Shafly", "Moren", "Arnov", "Rafli", 'Jesica'];
const gueastName = prompt("Masukkan nama kamu : ");
if (guestList.includes(gueastName)) {
    console.log(`Selamat datang ${gueastName} kamu ada di daftar undangan!`);
} else {
    console.log(`Maaf ${gueastName} kamu tidak ada di daftar undangan!`);
};