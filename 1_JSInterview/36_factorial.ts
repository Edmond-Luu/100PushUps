function factorial(number) {
    let result = 1;
    for (let i = number; i > 0; i--) {
        result *= i;
    };
    return result;
};

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(10));