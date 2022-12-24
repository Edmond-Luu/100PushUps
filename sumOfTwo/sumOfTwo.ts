export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    for(let aNum of a){
        for (let bNum of b){
            if(aNum + bNum === v){
                return true;
            }
        }
    }
    return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 43));