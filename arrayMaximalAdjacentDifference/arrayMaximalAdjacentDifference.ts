export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        const diff = Math.abs(inputArray[i] - inputArray[i + 1]);
        max = max < diff ? diff : max;
    }
    return max


    // let maxDiff = Math.abs(inputArray[0] - inputArray[1]);

    // for (let i = 0; i < inputArray.length; i++) {
    //     let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);
    //     maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
    // }

    // return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));