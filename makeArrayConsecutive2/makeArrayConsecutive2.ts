export function makeArrayConsecutive2(statues: number[]): number {
    let missingStatuesCount = 0;
    statues.sort((a, b) => a - b);
    for(let i = statues[0]; i < statues[statues.length - 1]; i++){
        !statues.includes(i) ? missingStatuesCount ++ : ""
    }
    return missingStatuesCount;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));