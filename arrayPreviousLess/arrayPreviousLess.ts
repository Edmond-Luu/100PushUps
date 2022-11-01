export function arrayPreviousLess(items: number[]): number[] {
        const prevArray: number[] = [-1]
        for (let i = 1; i < items.length; i++){
            prevArray.push(items[i] > items[i-1] ? items[i-1] : -1)
        }
        return prevArray;


    
    // const lessThanList: number[] = [];

    // for (let i = items.length - 1; i >= 0; i--){
    //     for(let j = i; j >= 0; j--){
    //         if(items[i] > items[j]){
    //             lessThanList.unshift(items[j]);
    //             break;
    //         } else if (j===0){
    //             lessThanList.unshift(-1);
    //             break;
    //         }
    //     }
    // }
    // return lessThanList;

    
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]));