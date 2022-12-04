export function minimalNumberOfCoins(coins: number[], price: number): number {
    let total = price;
    let coinUse = 0;
    const sortedCoins = coins.sort((a, b) => b - a);

    while (total !== 0) {
        for (let coin of sortedCoins) {
            if (coin < total) {
                const amountOfCoins = Math.floor(total / coin)
                total -= coin * amountOfCoins
                coinUse += amountOfCoins;
            } else {
                continue;
            }
        }
    }
    return coinUse;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));