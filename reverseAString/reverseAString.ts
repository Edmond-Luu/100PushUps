export function reverseAString(str: string): string {
    // const splitStr = str.split("").reverse()
    // return splitStr.join("")


    return str.split("").reverse().join("");
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));