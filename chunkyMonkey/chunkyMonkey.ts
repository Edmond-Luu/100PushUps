export function chunkyMonkey(arr: any[], size: number): any[][] {
    const endArray: [][] = [];

    const array1 = arr.slice(0:size);
    const array2 = arr.slice(size:arr.length);
    endArray.push(array1)
    endArray.push(array2)

    return endArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));