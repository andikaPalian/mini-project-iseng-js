function quickShort(arr) {
    // Kondisi awal: Jika array kosong atau hanya memiliki satu elemen, maka array sudah terurut.
    if (arr.length <= 1) {
        return arr;
    }

    // Memilih elemen pivot (dalam hal ini, terakhir dalam array)
    let pivot = arr[arr.length - 1];

    // Array untuk elemen yang lebih kecil dan lebih besar dari pivot
    let left = [];
    let right = [];

    // Membagi array di sekitar pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            // Elemen yang lebih kecil dimasukkan ke array left
            left.push(arr[i]);
        } else {
            // Elemen yang lebih besar dimasukkan ke array right
            right.push(arr[i]);
        }
    }

    // Rekursif memanggil quickSort pada array left dan right lalu menggabungkannya dengan pivot
    return [...quickShort(left), pivot, ...quickShort(right)];
}

const array = [5, 2, 8, 1, 9, 3];
console.log("Initial Array:", array);

const sortedArray = quickShort(array);
console.log("Sorted Array:", sortedArray);