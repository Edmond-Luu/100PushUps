export function absoluteValuesSumMinimization(a: number[]): number {
    // if (a.length % 2 === 1){
    //     return a[(a.length - 1) / 2]
    // } else {
    //     return a[(a.length - 2) / 2]
    // }

    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2  - 1] : a[Math.floor(a.length / 2)]
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));