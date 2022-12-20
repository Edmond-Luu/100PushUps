export function stolenLunch(note: string): string {
    const codes = {
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9
    };

    const letters = Object.values(codes).map(num => num.toString());

    const splitStr = note.split("");
    for (let i = 0; i < splitStr.length; i++) {
        if (codes.hasOwnProperty(splitStr[i])) {
            splitStr[i] = codes[splitStr[i]]
        } else if (letters.includes(splitStr[i])) {
            splitStr[i] = Object.keys(codes)[parseInt(splitStr[i])];
        }
    }
    return splitStr.join("");
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));