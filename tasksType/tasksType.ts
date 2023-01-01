export function tasksTypes(deadlines: number[], day: number): number[] {
    // const counts = [];
    // let todayCount = 0;
    // let upcomingCount = 0;
    // let laterCount = 0;
    // deadlines.forEach(task => {
    //     if (task <= day) {
    //         todayCount++;
    //     } else if (day + 7 >= task) {
    //         upcomingCount++;
    //     } else {
    //         laterCount++;
    //     }
    // })
    // counts.push(todayCount);
    // counts.push(upcomingCount);
    // counts.push(laterCount);
    // return counts;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
