export function squareDigitsSequence(a0: number): number {
    // const collection = [a0];
    // let count = 1;
    // function splitSquare(num) {
    //     let total = 0;
    //     const digits = num.toString().split("");
    //     digits.forEach(digit => total += parseInt(digit) ** 2);
    //     return total;
    // };
    // while (true) {
    //     count++;
    //     const newNum = splitSquare(collection[collection.length - 1])
    //     if (!collection.includes(newNum)) {
    //         collection.push(newNum);
    //     } else {
    //         return count;
    //     };
    // };



    let count = 1;
    const uniqueNums = [a0];
    function digitPower(num: number): number {
        const digits = num.toString().split("").map(element => parseInt(element) ** 2);
        const sum = digits.reduce((a, b) => a + b)

        return sum;
    };
    while (true) {
        count++;
        a0 = digitPower(a0);

        if (uniqueNums.includes(a0)) {
            return count;
        } else {
            uniqueNums.push(a0);
        };
    };
};

console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));