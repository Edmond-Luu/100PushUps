export function htmlEndTagByStartTag(startTag: string): string {
    // const elementTag = startTag.replace(">","").split(" ")[0].split("");
    // elementTag.splice(1,0,"/");
    // elementTag.push(">");
    // const endingTag = elementTag.join("");
    // return endingTag;



    // const elementTag = startTag.split(" ")[0].split("");
    // elementTag.splice(1,0,"/");
    // const endingTag = elementTag.join("");
    // return endingTag[endingTag.length -1 ] === ">" ? endingTag : endingTag + ">";



    const splitString = startTag.split(" ");
    const splitTag = splitString[0].toString().split("");
    let endTag = '</'

    for (let i = 1; i < splitTag.length; i++) {
        endTag += splitTag[i];
    };

    endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += ">"
    return endTag;
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));