export function confirmEnding(str: string, target: string) {
    // const strArr = str.split("");
    // const targetArr = target.split("");
    // strArr.splice(0, str.length - target.length);
    // return strArr.join("") === targetArr.join("");

    const start = str.length - target.length;
    return str.substring(start, str.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));