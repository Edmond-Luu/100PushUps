export function validTime(time: string): boolean {
    // const [hour, min] = time.split(":");
    // if (parseInt(hour) < 0 || parseInt(hour) > 23 || parseInt(min) < 0 || parseInt(min) > 59) {
    //     return false;
    // };
    // return true;


    const [hours, minutes] = time.split(":");
    if (parseInt(hours) < 0 || parseInt(hours) > 23) {
        return false;
    };
    if (parseInt(minutes) < 0 || parseInt(minutes) > 59) {
        return false;
    };
    return true;

};

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));