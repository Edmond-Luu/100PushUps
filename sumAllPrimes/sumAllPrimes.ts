export function sumAllPrimes(num: number): number {
    const primeCheck = (number) => {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    };
    const primeNumbers = [];
    for (let i = 2; i <= num; i++) {
        if (primeCheck(i)) {
            primeNumbers.push(i);
        };
    };
    return primeNumbers.reduce((a, b) => a + b);
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));