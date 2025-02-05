function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (const [key, value] of Object.entries(charMap)) {
        if (value > max) {
            max = value;
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(maxChar("abccccdddddddeeeeeeeee"));

// Penjelasan:
/**
- Sebagai contoh kita memiliki string "abccccdddddddeeeeeeeee".
- Kita membuat sebuah objek charMap untuk menyimpan jumlah kemunculan setiap karakter.
- Kita membuat variabel max untuk menyimpan jumlah kemunculan maksimum dan maxChar untuk menyimpan karakter dengan jumlah kemunculan maksimum.
- Kita menggunakan loop for of untuk mengiterasi setiap karakter dalam string.
- Jika karakter sudah ada dalam objek charMap, kita menambahkan 1 ke nilai karakter tersebut. Jika karakter belum ada dalam objek charMap, kita menambahkan karakter tersebut dengan nilai 1.
- contoh : {
a, lalu di for loop ini kita melakukan pengecekan apakah karakter tersebut sudah ada dalam objek charMap.
Jika belum ada kita menambahkan karakter tersebut dengan nilai 1.
jadi a: 1,
lalu sama dengan b,
b: 1,
lalu sama dengan c,
c: 1, lalu di karakter selanjutnya adalah c lagi jadi karena nilai c sebelumnya 1 dan di karakter selanjutnya itu c lagi
maka nilai c akan bertambah 1.
jadi c: 2 begitu seterusnya menghitung jumlah karakternya
sehingga setelah perulangan selesai menghasilkan value : {
a: 1,
b: 1,
c: 4,
d: 8,
e: 9
}
}

lalu di perlulangan selanjutnya kita menggunakan Object.entries() untuk mengambil key dan value dari objek charMap.
lalu kita menggunakan for of untuk mengiterasi setiap pasangan key-value dari objek charMap.
- Jika nilai karakter lebih besar dari max, kita memperbarui nilai max dengan nilai karakter tersebut dan memperbarui nilai maxChar dengan karakter tersebut.
- Setelah selesai mengiterasi seluruh karakter dalam string, kita mengembalikan nilai maxChar.
- Dalam contoh ini, kita mengembalikan karakter "e" karena karakter tersebut memiliki jumlah kemunculan maksimum.

 */