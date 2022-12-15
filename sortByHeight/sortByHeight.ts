export function sortByHeight(a: number[]): number[] {
    const heights = [];
    const treeIndex = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            treeIndex.push(i);
        } else {
            heights.push(a[i]);
        }
    }
    const sortedHeights = heights.sort((a, b) => a - b);
    for (let index of treeIndex) {
        sortedHeights.splice(index, 0, -1)
    }
    return sortedHeights;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));