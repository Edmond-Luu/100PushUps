export function arrayConversion(inputArray: number[]): number {
    let isOdd: boolean = true;

    while (inputArray.length !== 1) {
        if (isOdd) {
            for (let i = 0; i < inputArray.length; i++) {
                inputArray.splice(i, 2, inputArray[i] + inputArray[i + 1]);
            }
            isOdd = false;
        } else {
            for (let i = 0; i < inputArray.length; i++) {
                inputArray.splice(i, 2, inputArray[i] * inputArray[i + 1]);
            }
            isOdd = true;
        }
    }
    return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
