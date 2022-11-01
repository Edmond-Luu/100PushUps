export function arrayPreviousLess(items: number[]): number[] {
    const prevArray: number[] = [-1]
    for (let i = 1; i < items.length; i++){
        prevArray.push(items[i] > items[i-1] ? items[i-1] : -1)
    }
    return prevArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));