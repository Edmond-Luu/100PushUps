export function integerToStringOfFixedWidth(number: number, width: number): string {
    let newStr = [];
    const strArr: string[] = number.toString().split("");
    let strLength = strArr.length;
    if (width === strLength) {
        return number.toString();
    } else {
        if (width > strLength) {
            while (strLength < width) {
                strArr.unshift("0")
                strLength = strArr.length
            }

            for (let i = 0; i < width; i++) {
                newStr.push(strArr[i])
            }
        }
        if (width < strLength) {
            return strArr.slice(strLength - width).join("")
        }
    }
    
    return newStr.join("");



    // let stringifiedNum = number.toString();
    // const numberWidth = stringifiedNum.length;
    // const widthDiff = width - numberWidth;

    // if (numberWidth < width) {
    //     let padStart = "";
    //     for (let i = 0; i < widthDiff; i++) {
    //         padStart = padStart.concat("0");
    //     }
    //     return padStart.concat(stringifiedNum);
    // };

    // if (numberWidth > width) {
    //     return stringifiedNum.substring(widthDiff, stringifiedNum.length)
    // }

    // return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
