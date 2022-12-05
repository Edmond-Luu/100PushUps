export function pigLatin(str: string): string {
    const vowels = ["a", "e", "i", "o", "u"]
    const splitStr = str.split("")
    const consonantCluster = []
    if (vowels.includes(splitStr[0])) {
        const newStr = splitStr.concat(["way"]);
        return newStr.join("");
    } else {
        let consonantCount = 0
        for (let i = 0; i < splitStr.length; i++) {
            if (vowels.indexOf(splitStr[i]) === -1) {
                consonantCount++
            } else {
                const backStr = splitStr.splice(0, consonantCount);
                return splitStr.concat(backStr).concat(["ay"]).join("");
            }

        }
    }
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));