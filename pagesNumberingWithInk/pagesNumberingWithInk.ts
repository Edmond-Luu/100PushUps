export function pagesNumberingWithInk(current: number, numberOfDigits: number): number {
    let digits = ""
    const numbers = []
    for (let i = current; digits.length < numberOfDigits; i++) {
        digits += `${i}`;
        numbers.push(i);
    }
    if (digits.length !== numberOfDigits) {
        numbers.splice(numbers.length - 1, 1);
    }
    return numbers.sort((a, b) => b - a)[0];

}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));