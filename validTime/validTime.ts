export function validTime(time: string): boolean {
    const [hour, min] = time.split(":");
    if (parseInt(hour) >= 24 || parseInt(min) >= 60) {
        return false;
    };
    return true;
};

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));