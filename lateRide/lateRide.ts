export function lateRide(n: number): number {
    let time = n;
    let newHour = 0;
    let newMinute = 0;
    let digitSum = 0;
    const hours = [];
    while (time >= 60) {
        hours.push(60)
        time -= 60
    };
    if (time > 0) {
        hours.push(time);
        time -= time;
    };
    hours.forEach(item => item === 60 ? newHour++ : newMinute += item)
    const hourStr = newHour.toString().split("");
    const minuteStr = newMinute.toString().split("");
    hourStr.forEach(digit => digitSum += parseInt(digit));
    minuteStr.forEach(digit => digitSum += parseInt(digit));
    return digitSum

}

console.log(lateRide(240));
console.log(lateRide(808));
