export function makeArrayConsecutive2(statues: number[]): number {
    // let missingStatuesCount = 0;
    // statues.sort((a, b) => a - b);
    // for(let i = statues[0]; i < statues[statues.length - 1]; i++){
    //     !statues.includes(i) ? missingStatuesCount ++ : ""
    // }
    // return missingStatuesCount;


    let count = 0;
    const sortedStatues = statues.sort((a, b) => a - b);
    const min = statues[0];
    const max = statues[statues.length - 1];
    for (let i = min; i < max; i++) {
        if (!sortedStatues.includes(i)) {
            count++;
        }
    }
    return count;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));