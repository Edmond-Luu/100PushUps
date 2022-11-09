export function electionsWinners(votes: number[], k: number): number {
    // let winners: number = 0;
    // const currentWinner = Math.max(...votes);
    // votes.forEach(candidate => candidate + k > currentWinner ? winners++ : "");
    // return winners;



    // const currentWinner = Math.max(...votes);
    // return votes.filter(item => item + k > currentWinner).length;



    let inTheRunning = 0;
    const mostVotes = Math.max(...votes);
    const sortedVotes = votes.sort((a, b) => b - a);

    if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    };

    votes.forEach(voteCount => {
        if (mostVotes - voteCount < k) {
            inTheRunning++;
        }
    });

    return inTheRunning;

};

console.log(electionsWinners([2, 3, 5, 2], 3));