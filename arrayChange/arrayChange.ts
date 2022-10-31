export function arrayChange(inputArray: number[]): number {
    let shifts:number = 0;
    for (let i=1; i < inputArray.length; i++){
        while(inputArray[i] <= inputArray[i-1]){
            inputArray[i] = inputArray[i] + 1;
            shifts += 1;
        }
    } 
    return shifts;
}

console.log(arrayChange([1, 1, 1]));