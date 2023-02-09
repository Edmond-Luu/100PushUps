/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = ["tater", "tree", "teart", "tetra", "heart", "hamster"];

function removeSpecialChars(str) {
    return str.toLowerCase().replace(/\s/g, '').replace(/[^a-zA-Z ]/g, "").split("").sort().join("");
}
function isAnagramInArray(anagram, arr) {
    const correctArr = [];
    const orderedArr = [];
    const orderedAnagram = removeSpecialChars(anagram);
    arr.map(item => orderedArr.push(removeSpecialChars(item)));
    for (let i = 0; i <= orderedArr.length; i++) {
        if (orderedArr[i] === orderedAnagram) {
            correctArr.push(arr[i]);
        };
    };
    return correctArr;
};

console.log(isAnagramInArray("Treat", anagrams));
