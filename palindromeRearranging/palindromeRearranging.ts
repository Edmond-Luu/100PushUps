export function palindromeRearranging(inputString: string): boolean {
    // const splitStr = inputString.split("");
    // const strLength = splitStr.length;
    // const charCounts = {}
    // for (let char of splitStr) {
    //     if (!charCounts.hasOwnProperty(char)) {
    //         charCounts[char] = 1;
    //     } else {
    //         charCounts[char]++
    //     }
    // }
    // const counts = Object.values(charCounts)
    // const evenOrOdd = counts.map(count => count % 2)
    // if (strLength % 2 === 0) {
    //     if evenOrOdd.includes(1){
    //         return false;
    //     } else {
    //         return true;
    //     }
    // } else {
    //     for (let i = 0; i < evenOrOdd.length; i++) {
    //         if (evenOrOdd[i] === 0) {
    //             evenOrOdd.splice(i, 1)
    //             if (evenOrOdd.includes(1)) {
    //                 return true;
    //             } else {
    //                 return false;
    //             }
    //         }
    //         return false;
    //     }
    // }





    let oddCount = 0;
    const chars = inputString.split("");
    const letterObject = {};
    for (let char of chars) {
        if (letterObject.hasOwnProperty(chars[char])) {
            letterObject[chars[char]]++;
        } else {
            letterObject[chars[char]] = 1;
        };
    };

    for (let key in letterObject) {
        if (letterObject[key] % 2 !== 0) {
            oddCount++
        }
    }

    return oddCount > 1 ? false : true;

}

console.log(palindromeRearranging('aabb'));
