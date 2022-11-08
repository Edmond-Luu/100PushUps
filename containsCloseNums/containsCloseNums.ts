export function containsCloseNums(nums: number[], k: number): boolean {
    for (let i=1; i<k; i++){
        if (nums[i] === nums[i + k]){
            return true
        }
    }
    return false;
};
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));