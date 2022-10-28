export function alphabetSubsequence(s: string): boolean {
    const splitStr = s.split("")
    for (let i=0; i<splitStr.length; i++){
        if (splitStr.indexOf(splitStr[i]) !== i){
            return false;
        };
        };
    const placeholder = splitStr.slice();
    return placeholder.sort().join("") === splitStr.join("");
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
