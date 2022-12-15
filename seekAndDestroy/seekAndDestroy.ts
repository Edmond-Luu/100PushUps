export function seekAndDestroy(arr1: number[], arr2: number[]): number[] {
    const filteredArr = [];
    for (let num of arr1) {
        if (!arr2.includes(num)) {
            filteredArr.push(num);
        }
    }
    return filteredArr;
}

console.log(seekAndDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], [2, 3]));
