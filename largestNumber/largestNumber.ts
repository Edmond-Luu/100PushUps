export function largestNumber(n: number): number {
    // let largest = "";
    // for (let i = 0; i < n; i++){
    //     largest += "9"
    // }
    // return parseInt(largest)


    // let word = "";
    // for (let i = 0; i < n; i++) {
    //     word = word.concat("9");
    // }
    // return parseInt(word);


    return parseInt("9".repeat(n))
}

console.log(largestNumber(2));