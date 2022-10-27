export function addBorder(picture: string[]): string[] {
    // const lengthOfWall = picture[0].length + 2;
    // let outerWall: string = "";
    // for (let i=0; i<lengthOfWall; i++){
    //     outerWall += "*";
    // }

    // for (let j=0; j<picture.length; j++){
    //     picture[j]="*".concat(picture[j], "*")
    // }
    // picture.unshift(outerWall)
    // picture.push(outerWall)
    // return picture;

    const wall = "*".repeat(picture[0].length + 2);

    picture.unshift(wall);
    picture.push(wall);

    for (let i = 0; i < picture.length; i++){
        picture[i] = "*".concat(picture[i],"*")
    }

    return picture;

}

console.log(addBorder(["abc", "ded"]));