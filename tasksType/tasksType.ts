export function tasksTypes(deadlines: number[], day: number): number[] {
    const counts = [0, 0, 0];
    deadlines.forEach(task => {
        if (task <= day) {
            counts[0]++;
        } else if (day + 7 >= task) {
            counts[1]++;
        } else {
            counts[2]++;
        }
    })
    return counts;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
