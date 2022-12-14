export function properNounCorrection(noun: string): string {
    // const firstLetter = noun[0];
    // const otherLetters = noun.slice(1);
    // return firstLetter.toUpperCase() + otherLetters.toLowerCase();



    const firstChar = noun[0].toUpperCase();
    const restOfWord = noun.slice(1, noun.length).toLowerCase();
    return firstChar.concat(restOfWord);
};

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));