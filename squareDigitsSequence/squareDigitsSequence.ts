export function squareDigitsSequence(a0: number): number {
    const collection = [a0];
    let count = 1;
    function splitSquare(num) {
        let total = 0;
        const digits = num.toString().split("");
        digits.forEach(digit => total += parseInt(digit) ** 2);
        return total;
    };
    while (true) {
        const newNum = splitSquare(collection[collection.length - 1])
        if (!collection.includes(newNum)) {
            collection.push(newNum);
            count++;
        } else {
            count++;
            return count;
        };
    };
};

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));