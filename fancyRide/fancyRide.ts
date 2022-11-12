export function fancyRide(l: number, fares: number[]): string {
    // const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    // const totalFares = fares.map(fare => fare * l);
    // const affortableFares = totalFares.filter(item => item <= 20);
    // const maxFare = Math.max(...affortableFares);
    // return rides[totalFares.indexOf(maxFare)];


    const rides: string[] = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
    for (let i = rides.length - 1; i >= 0; i--) {
        if (fares[i] * l <= 20) {
            return rides[i];
        }
    }
};

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));