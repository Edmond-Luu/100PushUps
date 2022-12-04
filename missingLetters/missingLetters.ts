export function missingLetters(str: string): string {
    // const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // const splitStr = str.split("")
    // const shortAlphabet = alphabet.splice(alphabet.indexOf(splitStr[0]), splitStr.length)
    // if (alphabet.join("") === str)
    //     for (let i = 0; i < splitStr.length; i++) {
    //         if (splitStr[i] !== shortAlphabet[i]) {
    //             return shortAlphabet[i]
    //         }
    //     }
    // return "undefined";



    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const chars = str.split("");

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== alphabet[i]) {
            return alphabet[i]
        }
    }

    return undefined;
};

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));