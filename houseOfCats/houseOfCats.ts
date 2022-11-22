export function houseOfCats(legs: number): number[] {
    const peopleCount: number[] = [];

    while (legs >= 0){
        peopleCount.unshift(legs/2);
        legs -= 4
    };

    return peopleCount
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
