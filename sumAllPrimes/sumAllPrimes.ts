export function sumAllPrimes(num: number): number {
    const primeCheck = (number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    };
    let primesTotal = 0;
    for (let i = 2; i <= num; i++) {
        if (primeCheck(i)) {
            primesTotal += i;
        };
    };
    return primesTotal;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));