export function firstDigit(inputString: string): string {
    // const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    // const strArr = inputString.split("")
    // for (let i = 0; i < strArr.length; i++) {
    //     if (digits.includes(strArr[i])) {
    //         return strArr[i];
    //     };
    // };


    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i < inputString.length; i++) {
        if(digits.includes(inputString[i])){
            return inputString[i];
        }
    };
};
console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
