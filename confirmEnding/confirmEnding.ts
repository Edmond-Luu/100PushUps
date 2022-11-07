export function confirmEnding(str: string, target: string) {
    const strArr = str.split("");
    const targetArr = target.split("");
    strArr.splice(0, str.length - target.length);
    return strArr.join("") === targetArr.join("");
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));