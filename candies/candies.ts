export function candies(n: number, m: number): number {
    // return (Math.floor(m/n))*n;

    const candy = Math.floor(m / n);
    return candy * n;

}

console.log(candies(3, 10));