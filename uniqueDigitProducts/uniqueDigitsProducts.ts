export function uniqueDigitProducts(a: number[]): number {
    // const products = [];
    // a.forEach(num => {
    //     let product = 1;
    //     const digits = num.toString().split("").map(digit => parseInt(digit));
    //     digits.forEach(value => product *= value);
    //     if (!products.includes(product)) {
    //         products.push(product);
    //     }
    // });
    // return products.length;



    function getDigitProduct(num: number) {
        const digits: string[] = num.toString().split("");
        let product = 1;
        digits.forEach(digit => product *= parseInt(digit));
        return product;
    }

    const products: number[] = [];
    a.forEach(num => {
        const product = getDigitProduct(num);
    });
};

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));