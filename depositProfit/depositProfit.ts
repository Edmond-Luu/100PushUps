export function depositProfit(deposit: number, rate: number, threshold: number): number {
    let yearCount = 0;
    while (deposit < threshold) {
        deposit = deposit * 1.2;
        yearCount++;
    }
    return yearCount;

    // let year = 0;
    // let account = deposit;

    // while (account < threshold) {
    //     account += account * (rate / 100);
    //     year++;
    // };

    // return year;
};

console.log(depositProfit(100, 20, 170))