export function minesweeper(matrix: boolean[][]): number[][] {
    const board: [][] = [];
    for (let i = 0; i < matrix.length; i++) {
        board.push([])
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] === true ? board[i].push(1) : board[i].push(2);
        }
    }
    return board;

}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));