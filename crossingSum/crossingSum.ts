export function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum = 0;

    for (let i = 0; i < matrix[a].length; i++) {
        sum += matrix[a][i];
    };

    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][b]
    };

    sum -= matrix[a][b]
    return sum;


    // const columnTotal = matrix[a].reduce((a, b) => a + b);
    // let rowTotal = 0;

    // for (let i = 0; i < matrix.length; i++) {
    //     rowTotal += i !== a ? matrix[i][b] : 0;
    // };

    // return columnTotal + rowTotal;
}

console.log(crossingSum([[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3]], 1, 3));