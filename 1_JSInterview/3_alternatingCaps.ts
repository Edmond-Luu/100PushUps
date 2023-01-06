/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
    const chars: string[] = str.split("");
    const newChars = [];
    chars.forEach(char => {
        chars.indexOf(char) % 2 === 0 ? newChars.push(char.toUpperCase()) : newChars.push(char.toLowerCase());
    })
    return newChars.join("");
};

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));