// Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

function selectionSort(array) {
    // Only change code below this line
    const newArray = [];
    while(array.length > 0){
        const minVal = Math.min(...array);
        newArray.push(minVal);
        array.splice(array.indexOf(minVal), 1);
    };
    return newArray;
    // Only change code above this line
  };

  console.log(selectionSort([2,1,3,4,5,6,7,8,9]))