import { parse } from "ts-node";

export function digitDegree(n: number): number {
    let count: number = 0;
    let currentNumber = n;

    if (n <= 9) {
        return count;
    } else {
        while (true) {
            count++;
            currentNumber = getDigit(currentNumber);
            if (currentNumber <= 9) {
                break;
            }
        }


    }
    return count;
};

function getDigit(num: number) {
    const nums = num.toString().split("").map(element => parseInt(element));
    return nums.reduce((a: number, b: number) => a + b);
};

console.log(digitDegree(5));
console.log(digitDegree(100));
console.log(digitDegree(91));