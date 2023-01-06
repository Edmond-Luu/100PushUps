export function uniqueDigitProducts(a: number[]): number {
    const products = [];
    a.forEach(num => {
        let product = 1;
        const digits = num.toString().split("").map(digit => parseInt(digit));
        digits.forEach(value => product *= value);
        products.push(product);
    });
    const uniqueProducts = new Set(products)
    return [...uniqueProducts].length;
};

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));