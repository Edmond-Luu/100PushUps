export function sumOddFibonacciNums(num: number): number {
    // if (num === 1) {
    //     return 2;
    // };
    // const fibonacciNums = [1, 1];
    // let oddTotal = 0;
    // while (fibonacciNums[fibonacciNums.length - 1] < num) {
    //     const lastIndex = fibonacciNums.length;
    //     const nextNumber = fibonacciNums[lastIndex - 1] + fibonacciNums[lastIndex - 2];
    //     fibonacciNums.push(nextNumber);
    // }
    // for (let element of fibonacciNums) {
    //     if (element < num && element % 2 !== 0) {
    //         oddTotal += element;
    //     }
    // };
    // return oddTotal;



    let result = 0;
    let previous = 0;
    let current = 1;

    while (current <= num) {
        if (current % 2 !== 0) {
            result += current;
        }
        const nextCurrent = current + previous;
        previous = current;
        current = nextCurrent;
    }
    return result
}

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));