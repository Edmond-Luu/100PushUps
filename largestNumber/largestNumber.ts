export function largestNumber(n: number): number {
    let largest = "";
    for (let i = 0; i < n; i++){
        largest += "9"
    }
    return parseInt(largest)
}

console.log(largestNumber(2));