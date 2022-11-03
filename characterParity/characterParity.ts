export function characterParity(symbol: string): string {
    const integer = parseInt(symbol)
    if (isNaN(integer)) {
        return "not a digit"
    }
    return integer % 2 === 0? "even": "odd"
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))

