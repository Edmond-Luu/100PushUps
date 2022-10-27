export function addTwoDigits(n: any): number {
    const first:string = n.toString()[0];
    const second:string = n.toString()[1];
    return parseInt(first) + parseInt(second);


    // const nums = n.toString().split('');
    // return nums.reduce((a: string, b: string) => {
    //     return parseInt(a) + parseInt(b);
    // })

    // const nums = n.toString().split('');
    // return parseInt(nums[0]) + parseInt(nums[1]);
    
}

console.log(addTwoDigits(29));