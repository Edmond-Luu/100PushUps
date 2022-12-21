export function stringsConstruction(a: string, b: string): number {
    const splitA = a.split("");
    const splitB = b.split("");
    const bCharsCount = {};
    let count = 0;

    for (let char of splitB) {
        bCharsCount.hasOwnProperty(char) ? bCharsCount[char]++ : bCharsCount[char] = 1;
    };
    while (!Object.values(bCharsCount).includes(0)) {
        for (let char of splitA) {
            if (bCharsCount.hasOwnProperty(char)) {
                bCharsCount[char]--;
            }
        }
        count++;
    };

    return count;
}

console.log(stringsConstruction('abc', 'abccba'));