import { formatDiagnosticsWithColorAndContext } from "typescript";

export function alphabeticShift(inputString: string): string {
    const shifted: string[] = [];
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const splitString = inputString.split('');

    splitString.forEach(letter => {
        const position = alphabet.indexOf(letter);
        if (position === alphabet.length - 1) {
            shifted.push(alphabet[0]);
        } else {
            shifted.push(alphabet[position + 1]);
        }
    });
    return shifted.join("");


    // const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // // It is faster to create an object with a key-value pair that already shifted by one and then read in the keys.

    // let inputShifted = inputString.split('');

    // for (let i=0; i < inputShifted.length; i++){
    //     let index = 0;

    //     if(inputShifted[i] !== 'z'){
    //         index = alphabet.indexOf(inputShifted[i]) + 1;
    //     }

    //     inputShifted[i] = alphabet[index];
    // }

    // return inputShifted.join('');

};

console.log(alphabeticShift('crazy'));