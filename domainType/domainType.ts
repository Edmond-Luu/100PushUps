export function domainType(domains: string[]): string[] {
    const domainResults: string[] = [];
    const domainTypes = {
        com: "commercial",
        org: "organization",
        net: "network",
        info: "information"
    };

    for (let i = 0; i < domains.length; i++) {
        domainResults.push(domainTypes[domains[i].split(".").slice(-1)[0]]);
    };
    return domainResults;
}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));