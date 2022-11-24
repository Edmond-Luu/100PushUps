export function isLucky(n: number): boolean {
    let nArr: (number | string)[] = n.toString().split("")
    nArr = nArr.map(num => parseInt(num))
    const firstHalfArr = nArr.slice(0, nArr.length / 2)
    const lastHalfArr = nArr.slice(nArr.length / 2, nArr.length)
    const firstHalfSum = firstHalfArr.reduce((a, b) => a + b);
    const lastHalfSum = lastHalfArr.reduce((a, b) => a + b);
    return firstHalfSum === lastHalfSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));