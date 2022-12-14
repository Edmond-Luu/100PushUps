export function properNounCorrection(noun: string): string {
    const firstLetter = noun.slice(0,1);
    const otherLetters = noun.slice(1);
    return firstLetter.toUpperCase() + otherLetters.toLowerCase();
};

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));