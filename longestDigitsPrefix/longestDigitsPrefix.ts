export function longestDigitsPrefix(inputString: string): string {
    // const splitStr = inputString.split("");
    // let digitsStr = ""
    // for (let i = 0; i < splitStr.length; i++) {
    //     if (parseInt(splitStr[i])) {
    //         digitsStr += splitStr[i]
    //     } else {
    //         return digitsStr
    //     }
    // }



    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const chars = inputString.split("");
    let prefix = "";

    for (let char of inputString) {
        if (!digits.includes(char)) {
            break;
        } else {
            prefix += char
        }
    }
    return prefix;
}

console.log(longestDigitsPrefix('123aa1'));