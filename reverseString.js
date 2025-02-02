function reverse_string(string) {
    let left = 0;
    let right = string.length -1;

    let arr = string.split("")

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr.join("");
}

let string = "hello";
let reverse = reverse_string(string);
console.log(reverse);