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


    const review: number[] = [];

    for (let i = 0; i < ratings.length; i++) {
        let totalRating = 0;
        ratings[i].forEach((rating: number) => totalRating += rating);
        if (totalRating / ratings[i].length < threshold) {
            review.push(i)
        }
    }
    return review;
}

console.log(ratingThreshold(3.5,
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));