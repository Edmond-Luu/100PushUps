export function checkPalindrome(inputString: string): boolean {
    const lowerCased = inputString.toLowerCase();
    const reversed = lowerCased.split("").reverse().join("");
    return reversed === lowerCased;

    // const originalWord = inputString.toLowerCase();
    // const reversedWord = originalWord.split("").reverse().join("")
    // return originalWord === reversedWord;



}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
