export function isTandemRepeat(inputString: string): boolean {
    const firstHalf = inputString.slice(0, inputString.length / 2)
    const secondHalf = inputString.slice(inputString.length / 2, inputString.length)
    return firstHalf === secondHalf
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
