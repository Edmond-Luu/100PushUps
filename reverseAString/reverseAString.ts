export function reverseAString(str: string): string {
    // const splitStr = str.split("").reverse()
    // return splitStr.join("")


    // return str.split("").reverse().join("");


    let reversedWord = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    return reversedWord;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));