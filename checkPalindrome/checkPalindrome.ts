export function checkPalindrome(inputString: string): boolean {
    const lowerCased = inputString.toLowerCase();
    const reversed = lowerCased.split("").reverse().join("");
    return reversed === lowerCased;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
