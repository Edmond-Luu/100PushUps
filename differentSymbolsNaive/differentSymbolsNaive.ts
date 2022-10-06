export function differentSymbolsNaive(s: string): number {
    // const uniqueChars: string[] = [];
    // const sArr: string[] = s.split("");
    // sArr.forEach(letter => !uniqueChars.includes(letter) ? uniqueChars.push(letter) : "");
    // return uniqueChars.length;


    //     const uniqueChars: string[] = [];
    //     const inputChars: string[] = s.split("");

    //     inputChars.forEach((char) => {
    //         if (!uniqueChars.includes(char)) {
    //             uniqueChars.push(char);
    //         }
    //     });
    //     return uniqueChars.length


    // const uniqueChars = {};
    // const inputChars: string[] = s.split("");

    // inputChars.forEach((char) => {
    //     uniqueChars[char] = 1;
    // });

    // return Object.keys(uniqueChars).length;



    const uniqueChars = new Set();  //Sets have no duplicates (ES6 and above only).
    const inputChars = s.split("");
    inputChars.forEach((chars) => uniqueChars.add(chars));
    return uniqueChars.size;

}

console.log(differentSymbolsNaive('cabca'));
