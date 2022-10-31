export function circleOfNumbers(n: number, firstNumber: number): number {
    const circle: number[] = []
    for (let i = 0; i<n; i++){
        circle.push(i);
    }
    return circle[n - firstNumber - 1];
}

console.log(circleOfNumbers(10, 2));