export function evenDigitsOnly(n: number): boolean {
    let evenCount:number = 0
    const digits: number[] = [];
    const splitStr = n.toString().split("");
    splitStr.forEach(item => digits.push(parseInt(item)));
    for (let digit of digits) {
        if (digit % 2 === 0){
            evenCount ++
        }
    };
    return evenCount === splitStr.length;
};

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));