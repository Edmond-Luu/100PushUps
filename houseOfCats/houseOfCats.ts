export function houseOfCats(legs: number): number[] {
    const peopleCount = [];

    peopleCount.push((legs % 4)/2)

    peopleCount.push((legs/4))


    return peopleCount
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
