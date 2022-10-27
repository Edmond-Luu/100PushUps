export function allLongestStrings(inputArray: string[]): string[] {
    // let largestLength:number = inputArray[0].length;
    // const largestStrings = []

    // for (let i=1; i < inputArray.length; i++){
    //     const length = inputArray[i].length
    //     largestLength = length > largestLength ? length : largestLength;
    // }

    // for (let i=0; i < inputArray.length; i++){
    //     if (inputArray[i].length === largestLength){
    //         largestStrings.push(inputArray[i]);
    //     }
    // }

    // return largestStrings;



    let longestLength = 0;
    const longestWords = [];
    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength
    });
    inputArray.forEach((word: string) => {
        if(word.length === longestLength){
            longestWords.push(word);
        }
    })

    return longestWords;
}

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));