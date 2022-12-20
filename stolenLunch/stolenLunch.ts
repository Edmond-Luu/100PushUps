export function stolenLunch(note: string): string {
    // const codes = {
    //     a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9
    // };

    // const letters = Object.values(codes).map(num => num.toString());

    // const splitStr = note.split("");
    // for (let i = 0; i < splitStr.length; i++) {
    //     if (codes.hasOwnProperty(splitStr[i])) {
    //         splitStr[i] = codes[splitStr[i]]
    //     } else if (letters.includes(splitStr[i])) {
    //         splitStr[i] = Object.keys(codes)[parseInt(splitStr[i])];
    //     }
    // }
    // return splitStr.join("");



    const chars: string[] = note.split("");
    let translatedMessage = '';
    const codeDictionary = {
        0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h", 8: "i", 9: "j",
        a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9
    };

    for (let char of chars) {
        translatedMessage += codeDictionary.hasOwnProperty(char) ? codeDictionary[char] : char;
    }
    return translatedMessage;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));