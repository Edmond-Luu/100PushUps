export function isCaseInsensitivePalindrome(inputString: string): boolean {
    const lowercase = inputString.toLowerCase();
    const reverse = lowercase.split("").reverse().join("")
    return lowercase === reverse;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));