export function sumAllPrimes(num: number): number {
    // const primeCheck = (number) => {
    //     for (let i = 2; i < number; i++) {
    //         if (number % i === 0) {
    //             return false;
    //         }
    //     }
    //     return true;
    // };
    // let primesTotal = 0;
    // for (let i = 2; i <= num; i++) {
    //     if (primeCheck(i)) {
    //         primesTotal += i;
    //     };
    // };
    // return primesTotal;



    let primesTotal = 0;

    for (let i = 2; i < num; i++) {
        for (let j = 2; j <= i; j++) {
            if (i === j) {
                primesTotal += i;
            }
            if (i % j === 0) {
                break;
            }
        }
    }
    return primesTotal;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));