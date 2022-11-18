export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
    // let days = 0;
    // let currentHeight = 0;

    // while (currentHeight < desiredHeight) {
    //     currentHeight += upSpeed;
    //     if (currentHeight < desiredHeight) {
    //         currentHeight -= downSpeed;
    //     }
    //     days++;
    // }
    // return days;



    let day = 0;
    let totalHeight = 0;

    while (totalHeight < desiredHeight) {
        day++
        totalHeight += upSpeed;

        if (totalHeight < desiredHeight) {
            totalHeight -= downSpeed;
        };
    };
    return day;
};

console.log(growingPlant(100, 10, 910))