export function centuryFromYear(year: number): number {
    const string = year.toString()
    if (string[string.length-1] === "0"){
        return Math.floor(year/100);
    } else{
        return Math.floor(year/100) + 1
    }



    // const century = year / 100;
    // if (year % 100 === 0) {
    //     return century
    // }
    // return Math.floor(year / 100) + 1


}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));