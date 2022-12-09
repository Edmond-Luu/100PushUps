export function palindromeRearranging(inputString: string): boolean {
    let isPalindrome = true;
    const splitStr = inputString.split("");
    const strLength = splitStr.length;
    const charCounts = {}
    for (let char of splitStr) {
        if (!charCounts.hasOwnProperty(char)) {
            charCounts[char] = 1;
        } else {
            charCounts[char]++
        }
    }
    const counts = Object.values(charCounts)
    const evenOrOdd = counts.map(count => count % 2)
    if (strLength % 2 === 0) {
        if evenOrOdd.includes(1){
            return false;
        } else {
            return true;
        }
    } else {
        for (let i = 0; i < evenOrOdd.length; i++) {
            if (evenOrOdd[i] === 0) {
                evenOrOdd.splice(i, 1)
                if (evenOrOdd.includes(1)) {
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        }
    }

}

console.log(palindromeRearranging('aabb'));
