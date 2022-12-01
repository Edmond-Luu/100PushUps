export function makeArrayConsecutive2(statues: number[]): number {
    const missingStatues = [];
    statues.sort((a, b) => a - b);
    for(let i = statues[0]; i < statues[statues.length - 1]; i++){
        !statues.includes(i) ? missingStatues.push(i) : ""
    }
    return missingStatues.length;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));