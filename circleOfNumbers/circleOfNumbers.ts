export function circleOfNumbers(n: number, firstNumber: number): number {
    const circle: number[] = []
    for (let i = 0; i<n; i++){
        circle.push(i);
    }
    const oppositeIndex = (n/2) + firstNumber
    if (oppositeIndex >= n){
        return circle[n-oppositeIndex];
    } else{
        return circle[oppositeIndex];
    }
}

console.log(circleOfNumbers(10, 2));