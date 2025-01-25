/**
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5
 */
function fibonacci(n) {
    let arr = [];
    if (n === 1) {
        arr = [0];
    } else if (n === 2) {
        arr = [0, 1];
    } else {
        arr = [0, 1];
        for (let i = 2; i < n; i++) {
            arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
        }
    }

    return arr;
};

console.log(fibonacci(11));