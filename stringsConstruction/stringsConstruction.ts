export function stringsConstruction(a: string, b: string): number {
    // const splitA = a.split("");
    // const splitB = b.split("");
    // const bCharsCount = {};
    // let count = 0;

    // for (let char of splitA) {
    //     if (!splitB.includes(char)) {
    //         return 0;
    //     }
    // }

    // for (let char of splitB) {
    //     bCharsCount.hasOwnProperty(char) ? bCharsCount[char]++ : bCharsCount[char] = 1;
    // };
    // while (!Object.values(bCharsCount).includes(0)) {
    //     for (let char of splitA) {
    //         if (bCharsCount.hasOwnProperty(char)) {
    //             bCharsCount[char]--;
    //         }
    //     }
    //     count++;
    // };

    // return count;




    function getAlphabetCount(string) {
        const chars = string.split("");
        const alphabetCount = {};
        chars.forEach(char => alphabetCount.hasOwnProperty(char) ? alphabetCount[char]++ : alphabetCount[char] = 1);
        return alphabetCount;
    };

    const aCount = getAlphabetCount(a);
    const bCount = getAlphabetCount(b);
    const counts = [];

    for (let char in aCount) {
        if (bCount.hasOwnProperty(char)) {
            counts.push(Math.floor(bCount[char]));
        } else {
            return 0;
        };
    };
    return Math.min(...counts);
};

console.log(stringsConstruction('abc', 'abccba'));