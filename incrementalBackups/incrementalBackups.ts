export function incrementalBackups(lastBackupTime: number, changes: number[][]): number[] {
    const backupSet = new Set();
    changes = changes.filter(file => file[0] > lastBackupTime)
    for (let file of changes) {
        backupSet.add(file[1])
    }
    return [...backupSet].sort((a, b) => a - b);



    
}

console.log(incrementalBackups(461620205, [[461620203, 1],
[461620204, 2],
[461620205, 6],
[461620206, 5],
[461620207, 3],
[461620207, 5],
[461620208, 1]]));
