export function ratingThreshold(threshold: number, ratings: number[][]): number[] {
    // const toReview = [];
    // for (let i = 0; i < ratings.length; i++) {
    //     let avgScore = 0
    //     for (let rating of ratings[i]) {
    //         avgScore += rating / ratings[i].length
    //     }
    //     if (avgScore < threshold) {
    //         toReview.push(i)
    //     }
    // }
    // return toReview;






}

console.log(ratingThreshold(3.5,
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));