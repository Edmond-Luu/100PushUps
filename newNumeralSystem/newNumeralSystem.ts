export function newNumeralSystem(number: string): string[] {
    // const system = {
    //     a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25
    // }
    // const num = system[number.toLowerCase()]
    // const sums = [];
    // for (let i = 0; i <= Math.floor(num / 2); i++) {
    //     const diff = num - i
    //     const letter = Object.keys(system).find(key => system[key] === i)
    //     const secondLetter = Object.keys(system).find(key => system[key] === diff)
    //     sums.push(`${letter.toUpperCase()} + ${secondLetter.toUpperCase()}`)

    // }
    // return sums


    const numerals: string[] = [];
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0);

    while (startCharCount <= endCharCount) {
        const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--
    }
    return numerals;
}

console.log(newNumeralSystem('G'));