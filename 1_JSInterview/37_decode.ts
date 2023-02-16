function encode(str) {
    const splitStr = str.toLowerCase().split("");
    const encodedStr = [];
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let letter of splitStr) {
        if (alphabet.indexOf(letter) !== -1) {
            const newIndex = alphabet.indexOf(letter.toLowerCase()) + 1;
            encodedStr.push(alphabet[newIndex]);
        } else {
            encodedStr.push(letter);
        }
    };
    return encodedStr.join("");
};

console.log(encode("this is a fun fact"));
console.log(encode("uijt jt b gvo gbdu"));
