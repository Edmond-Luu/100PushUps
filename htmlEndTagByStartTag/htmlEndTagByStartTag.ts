export function htmlEndTagByStartTag(startTag: string): string {
    // const elementTag = startTag.replace(">","").split(" ")[0].split("");
    // elementTag.splice(1,0,"/");
    // elementTag.push(">");
    // const endingTag = elementTag.join("");
    // return endingTag;

    const elementTag = startTag.split(" ")[0].split("");
    elementTag.splice(1,0,"/");
    const endingTag = elementTag.join("");
    return endingTag[endingTag.length -1 ] === ">" ? endingTag : endingTag + ">";
    
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));