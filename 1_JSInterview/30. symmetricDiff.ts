// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

function diff(arr1: number[], arr2: number[]) {
    const diffSet = new Set();
    for (let item of arr1) {
        if (!arr2.includes(parseInt(item))) {
            diffSet.add(parseInt(item))
        };
    };
    for (let item of arr2) {
        if (!arr1.includes(parseInt(item))) {
            diffSet.add(parseInt(item))
        };
    };
    return [...diffSet];
}


function sym(...arrs) {
    while (arrs.length > 1) {
        arrs.splice(0, 2, diff(arrs[0], arrs[1]))
    }
    return arrs[0];
};

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
