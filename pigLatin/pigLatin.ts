export function pigLatin(str: string): string {
    // const vowels = ["a", "e", "i", "o", "u"]
    // const splitStr = str.split("")
    // const consonantCluster = []
    // if (vowels.includes(splitStr[0])) {
    //     const newStr = splitStr.concat(["way"]);
    //     return newStr.join("");
    // } else {
    //     let consonantCount = 0
    //     for (let i = 0; i < splitStr.length; i++) {
    //         if (vowels.indexOf(splitStr[i]) === -1) {
    //             consonantCount++
    //         } else {
    //             const backStr = splitStr.splice(0, consonantCount);
    //             return splitStr.concat(backStr).concat(["ay"]).join("");
    //         }

    //     }
    // }




    const letters = str.split("");
    const vowelRegex = /[aeiou]/;
    if (vowelRegex.test(str[0])) {
        return `${str}way`;
    }

    while (true) {
        if (!vowelRegex.test(letters[0])) {
            letters.push(letters.splice(0, 1))
        } else {
            break;
        }
    }
    str = letters.join("") + "ay";
    return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));