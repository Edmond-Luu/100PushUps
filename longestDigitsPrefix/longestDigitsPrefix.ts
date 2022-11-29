export function longestDigitsPrefix(inputString: string): string {
    const splitStr = inputString.split("");
    let digitsStr = ""
    for (let i = 0; i < splitStr.length; i++) {
        if (parseInt(splitStr[i])) {
            digitsStr += splitStr[i]
        } else {
            return digitsStr
        }
    }
}

console.log(longestDigitsPrefix('123aa1'));