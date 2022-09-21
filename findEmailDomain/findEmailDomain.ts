export function findEmailDomain(address: string): string {
    // return address.split("@").slice(-1)[0];

    const lastAtIndex = address.lastIndexOf("@");
    return address.slice(lastAtIndex + 1);
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));
