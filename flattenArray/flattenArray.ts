export function flattenArray(arr: any[]): any[] {
    // const finalArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     finalArr.push(arr[i]);
    // };
    // for (let i = 0; i < finalArr.length; i++) {
    //     while(Array.isArray(finalArr[i])){
    //         finalArr.splice(i, 1, ...finalArr[i])
    //     }
    // };
    // return finalArr;


    const oneArray = [];

    flatten(arr);

    function flatten(arr: any[]) {
        arr.forEach(element => {
            if (Array.isArray(element)) {
                flatten(element);
            } else {
                oneArray.push(element);
            }
        });
    };

    return oneArray;
};
console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
