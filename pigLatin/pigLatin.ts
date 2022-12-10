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
    if (vowelRegex.test(letters[0])) {
        return `${str}way`;
    } else {

    };
    return str;
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));



// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

// Example

// pigLatin("glove") should return "oveglay".
// pigLatin("eight") should return "eightway".