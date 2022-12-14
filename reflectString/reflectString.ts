export function reflectString(inputString: string): string {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const splitStr = inputString.split("");
    let newStr = "";

    for (let char of splitStr) {
        const index = alphabet.indexOf(char);
        const newIndex = (index + 1) * -1;
        newStr += alphabet.slice(newIndex)[0];

    };
    return newStr;

    //Suggested solution is too long.
}

console.log(reflectString("name"));
