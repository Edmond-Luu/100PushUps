function encode(str) {
    const splitStr = str.toLowerCase().split("");
    const encodedStr = [];
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let letter of splitStr) {
        if (alphabet.indexOf(letter) !== -1) {
            if (alphabet.indexOf(letter) !== alphabet.length - 1) {
                const newIndex = alphabet.indexOf(letter.toLowerCase()) + 1;
                encodedStr.push(alphabet[newIndex]);
            } else {
                encodedStr.push(alphabet[0]);
            }
        } else {
            encodedStr.push(letter);
        };
    };
    return encodedStr.join("");
};

function decode(str) {
    const splitStr = str.toLowerCase().split("");
    const decodedStr = [];
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let letter of splitStr) {
        if (alphabet.indexOf(letter) !== -1) {
            if (alphabet.indexOf(letter) !== 0) {
                const newIndex = alphabet.indexOf(letter.toLowerCase()) - 1;
                decodedStr.push(alphabet[newIndex]);
            } else {
                decodedStr.push(alphabet[alphabet.length - 1]);
            };
        } else {
            decodedStr.push(letter);
        };
    };
    return decodedStr.join("");
};

console.log(encode("this is a fun fact"));
console.log(decode("uijt jt b gvo gbdu"));
console.log(encode("plaza"));
console.log(decode("qmbab"));
