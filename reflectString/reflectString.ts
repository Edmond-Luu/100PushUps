export function reflectString(inputString: string): string {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const splitStr = inputString.split("");
    const newStr = [];

    for (let char of splitStr) {
        const index = alphabet.indexOf(char);
        const newIndex = (index + 1) * -1;
        const newLetter = alphabet.slice(newIndex)[0];
        newStr.push(newLetter);
    };
    return newStr.join("");
}

console.log(reflectString("name"));
