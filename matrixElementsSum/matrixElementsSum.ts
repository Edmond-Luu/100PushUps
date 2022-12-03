export function matrixElementsSum(matrix: any[][]): number {
    let totalPrice = matrix[0].reduce((a, b) => a + b);
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i - 1][j] !== 0) {
                totalPrice += matrix[i][j]
            }
        }
    }
    return totalPrice;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
