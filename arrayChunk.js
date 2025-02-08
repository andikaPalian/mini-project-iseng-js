/*
Chunk adalah sebuah fungsi yang digunakan untuk membagi array menjadi beberapa bagian sesuai dengan size yang diberikan.
Contoh :
Input : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
Size : 5
Output : [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]
*/

function chunk(array, size) {
    const result = [];
    let index = 0;

    while (index < array.length) {
        result.push(array.slice(index, index + size));
        index += size;
    };

    return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5));