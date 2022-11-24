export function integerToStringOfFixedWidth(number: number, width: number): string {
    let newStr = [];
    const strArr = number.toString().split("");
    let strLength = strArr.length;
    if (strLength === width) {
        return number;
    }  
    for(let i = 0; i < width; i++){
        while(strLength < width){
            strArr.unshift("0")
            strLength = strArr.length
        }
        newStr.push(strArr[i])
    }    
    return newStr.join("");



}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
