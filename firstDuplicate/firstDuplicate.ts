export function firstDuplicate(a: number[]): number {
    // const arrayValues = [];
    // for (let i = 0; i < a.length; i++) {
    //     if (arrayValues.includes(a[i])) {
    //         return a[i];
    //     } else {
    //         arrayValues.push(a[i]);
    //     };
    // };
    // return -1;


    const firstDup = {};

    for (let num of a) {
        if (firstDup.hasOwnProperty(num)) {
            return num
        }
            firstDup[num] = num;
    };

    return -1;
};

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
