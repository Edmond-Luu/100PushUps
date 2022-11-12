export function fareEstimator(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {
    // const timeFares: number[] = [];
    // const distFares: number[] = [];
    // const totalFares: number[] = [];
    // for (let i = 0; i < cost_per_minute.length; i++) {
    //     timeFares.push(cost_per_minute[i] * ride_time);
    // };
    // for (let i = 0; i < cost_per_mile.length; i++) {
    //     distFares.push(cost_per_mile[i] * ride_distance);
    // };
    // for (let i = 0; i < timeFares.length; i++) {
    //     totalFares.push((timeFares[i] + distFares[i]));
    // };

    // return totalFares;

    const totalFares = cost_per_minute.map((item, index) =>{
        return (item * ride_time) + (ride_distance * cost_per_mile[index]);
    });
    return totalFares;
};

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));
