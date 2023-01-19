/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str) {
    const splitStr: string[] = str.split("");
    const reversedStr: string[] = [];
    for (let i = splitStr.length - 1; i >= 0; i--) {
        reversedStr.push(splitStr[i]);
    };
    for (let i = 0; i <= splitStr.length; i++) {
        if (splitStr[i] !== reversedStr[i]) {
            return false;
        };
    };
    return true;
};

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));
