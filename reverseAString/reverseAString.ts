export function reverseAString(str: string): string {
    const splitStr = str.split("").reverse()
    return splitStr.join("")
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));