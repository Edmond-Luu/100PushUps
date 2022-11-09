export function electionsWinners(votes: number[], k: number): number {
    // const winners: numbers[] = [];
    // const currentWinner = Math.max(...votes);
    // votes.forEach(candidate => candidate + k > currentWinner ? winners.push(candidate) : "");
    // return winners.length;

    const currentWinner = Math.max(...votes);
    return votes.filter(item => item + k > currentWinner).length;
}

console.log(electionsWinners([2, 3, 5, 2], 3));