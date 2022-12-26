export function squareDigitsSequence(a0: number): number {
    let repeat = true;
    const collection = [a0];
    function splitSquare(num) {
        let total = 0;
        const digits = num.toString().split("");
        digits.forEach(digit => total += parseInt(digit) ** 2);
        return total;
    };
    while (repeat) {
        const newNum = splitSquare(collection[collection.length - 1])
        if (!collection.includes(newNum)) {
            collection.push(newNum);
        } else {
            return collection.length + 1;
        };
    };
};


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));