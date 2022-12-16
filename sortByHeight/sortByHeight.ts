export function sortByHeight(a: number[]): number[] {
    // const heights = [];
    // const treeIndex = [];

    // for (let i = 0; i < a.length; i++) {
    //     if (a[i] === -1) {
    //         treeIndex.push(i);
    //     } else {
    //         heights.push(a[i]);
    //     };
    // };
    // const sortedHeights = heights.sort((a, b) => a - b);
    // for (let index of treeIndex) {
    //     sortedHeights.splice(index, 0, -1)
    // };
    // return sortedHeights;


    const array2 = a.filter(element => {
        if (element !== -1) {
            return element;
        }
    }).sort((a, b) => a - b);

    let indexVal = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== -1) {
            a[i] = array2[indexVal]
            indexVal++
        };
    };
    
    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));