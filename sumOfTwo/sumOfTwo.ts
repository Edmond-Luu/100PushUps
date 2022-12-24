export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    // for(let aNum of a){
    //     for (let bNum of b){
    //         if(aNum + bNum === v){
    //             return true;
    //         }
    //     }
    // }
    // return false;



    const hashMap = {};
    for (let num of a) {
        const difference = v - num;
        hashMap[difference] = difference;
    }
    for (let num of b) {
        if(hashMap.hasOwnProperty(num)){
            return true;
        }
    }
    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));