export function boxBlur(image: number[][]): number[][] {
    let length:number = 0;
    let total:number = 0;
    const final:number[][] = [];
    for (let array=0; array<image.length; array++){
        for(let i=0; i<image[array].length; i++){
            length++;
            total += image[array][i]
        }
    }
    final.push([Math.floor(total/length])
    return final;
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));