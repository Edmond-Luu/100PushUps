export function alternatingSums(a: number[]): number[] {
    let team1:number = 0;
    let team2:number = 0;
    for (let i=0; i<a.length; i+=2){
        team1 += a[i]
    }
    for (let j=1; j<a.length; j+=2){
        team2 += a[j]
    }
    return [team1, team2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))