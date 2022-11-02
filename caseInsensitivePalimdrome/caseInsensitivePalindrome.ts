export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowercase = inputString.toLowerCase();
    const reverse = lowercase.split("").reverse().join("")
    return lowercase === reverse;


    // const originalLowerCase = inputString.toLowerCase();
    // const reversedWord = originalLowerCase.split('').reverse().join("");
    // return originalLowerCase === reversedWord;
}
console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));