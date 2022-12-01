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


    const chars = inputString.split("");
    let prefix = "";

    for (let char of inputString) {
        const num = parseInt(char)
        if (!num) {
            break;
        } else {
            prefix += char
        }
    }
    return prefix;
}

console.log(longestDigitsPrefix('123aa1'));