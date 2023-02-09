// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.  

function updateInventory(arr1, arr2) {
    const curInvArr = []
    const newInvArr = []

    for (let item of arr1) {
        curInvArr.push(item[1]);
    };
    for (let item of arr2) {
        newInvArr.push(item[1]);
    };
    for (let item of newInvArr) {
        if (!curInvArr.includes(item)) {
            curInvArr.push(item)
        }
    };

    curInvArr.sort();

    for (let i = 0; i < curInvArr.length; i++) {
        curInvArr.splice(i, 1, [0, curInvArr[i]])
    };

    for (let item of curInvArr) {
        for (let arr of arr1) {
            if (arr[1] === item[1]) {
                item[0] = item[0] + arr[0]
            };
        };
        for (let arr of arr2) {
            if (arr[1] === item[1]) {
                item[0] = item[0] + arr[0]
            };
        };
    };
    return curInvArr
};

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));