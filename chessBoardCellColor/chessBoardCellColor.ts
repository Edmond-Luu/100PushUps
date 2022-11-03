export function chessBoardCellColor(cell1: string, cell2: string): boolean {
    const xCoord = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    }

    const cell1xNum: number = xCoord[cell1[0].toLowerCase()];
    const cell1yNum: number = parseInt(cell1[1])
    const cell1Total: number = cell1xNum + cell1yNum;

    const cell2xNum: number = xCoord[cell2[0].toLowerCase()];
    const cell2yNum: number = parseInt(cell2[1])
    const cell2Total: number = cell2xNum + cell2yNum;

    return cell1Total % 2 === cell2Total % 2;

    
}

// console.log(chessBoardCellColor('A1', 'C3'));
// console.log(chessBoardCellColor('A1', 'H3'));
