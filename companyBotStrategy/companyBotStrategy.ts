export function companyBotStrategy(trainingData: number[][]): number {
    let correctTime: number = 0;
    let correctCount: number = 0;

    for(let array of trainingData){
        if (array[1] === 1){
            correctTime += array[0];
            correctCount ++;
        }
    }
    if(correctTime / correctCount){
        return correctTime / correctCount 
    } else{
        return 0;
    }
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
