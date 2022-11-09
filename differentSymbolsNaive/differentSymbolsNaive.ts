export function differentSymbolsNaive(s: string): number {
    const uniqueChars: string[] = [];
    const sArr = s.split("");
    sArr.forEach(letter => !uniqueChars.includes(letter) ? uniqueChars.push(letter) : "");
    return uniqueChars.length;
}

console.log(differentSymbolsNaive('cabca'));
