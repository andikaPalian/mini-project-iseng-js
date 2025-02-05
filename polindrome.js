// Polindrome
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces

function polindrome(str) {
    const reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return true;
    }

    return false;
}

console.log(polindrome("hello")); // return false
console.log(polindrome("kodok")); // return true