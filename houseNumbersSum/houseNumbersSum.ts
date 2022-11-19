export function houseNumbersSum(inputArray: number[]): number {
    // const addedArr = [];
    // for (let i = 0; i < inputArray.length; i++) {
    //     if (inputArray[i] === 0) {
    //         break;
    //     } else {
    //         addedArr.push(inputArray[i])
    //     }
    // }

    // return addedArr.reduce((a, b) => a + b);

    let total = 0;

    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i] === 0){
            return total;
        } else{
            total += inputArray[i]
        }
    }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));