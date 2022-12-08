export function mostFrequentDigitSum(n: number): number {
    let num = n
    const digitSumArr = []
    const countArr = [];
    while (num > 0) {
        let digits = num.toString().split("").map(digit => parseInt(digit));
        let digitSum = digits.reduce((a, b) => a + b)
        digitSumArr.push(digitSum)
        num -= digitSum
    }
    const sortedArr = [...new Set(digitSumArr)].sort((a, b) => b - a)
    for (let i = 0; i < sortedArr.length; i++) {
        let count = 0;
        for (let j = 0; j < digitSumArr.length; j++) {
            if (sortedArr[i] === digitSumArr[j]) {
                count++
            }
        }
        countArr.push(count);
    }
    const countArrSorted = [...countArr].sort((a, b) => b - a);
    const mostCommon = countArrSorted[0]
    return sortedArr[countArr.indexOf(mostCommon)];
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));