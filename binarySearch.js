function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            // Target ditemukan, kembalikan indeks
            return mid;
        } else if (arr[mid] < target) {
            // Jika target lebih besar, cari di bagian kanan / geser ke kanan
            left = mid + 1;
        } else {
            // Jika target lebih kecil, cari di bagian kiri / geser ke kiri
            right = mid - 1;
        }
    }
    // Jika target tidak ditemukan, kembalikan -1
    return -1;
}

let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let target = 16
let result = binarySearch(arr, target)
console.log(result); // Output: 7