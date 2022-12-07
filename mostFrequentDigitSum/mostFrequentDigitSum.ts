export function mostFrequentDigitSum(n: number): number {
    let num = n
    const digitSumArr = []
    while (num > 0) {
        let digits = num.toString().split("").map(digit => parseInt(digit));
        let digitSum = digits.reduce((a, b) => a + b)
        digitSumArr.push(digitSum)
        num -= digitSum
    }
    const noDuplicates = new Set(digitSumArr)
    const noDuplicatesArr = new Array(...noDuplicates)
    for (let item of noDuplicates) {
        for (let i = 0; i < digitSumArr.length; i++) {

        }
    }
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));