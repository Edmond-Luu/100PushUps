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



    // const res = [];

    // for (let y = 0; y < image.length - 2; y++) {
    //     const line = [];

    //     for (let x = 0; x < image[y].length - 2; x++) {
    //         let sum = 0;
    //         let count = 0;

    //         for (let a = y; a < y + 3; a++) {
    //             for (let b = x; b < x + 3; b++) {
    //                 sum += image[a][b];
    //                 count++;
    //             }
    //         }
    //         line.push(Math.floor(sum/count));
    //     }
    //     res.push(line);
    // }

    // return res;



}

    console.log(boxBlur([[1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]]));