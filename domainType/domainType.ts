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


    // const domainType: string[] = [];

    // for (let i = 0; i < domains.length; i++) {
    //     const domain = domains[i].split(".");
    //     const lastDomain = domain[domain.length - 1];

    //     if (lastDomain === "org") {
    //         domainType.push("organization");
    //     } else if (lastDomain === "com") {
    //         domainType.push("commercial");
    //     } else if (lastDomain === "net") {
    //         domainType.push("network");
    //     } else if (lastDomain === "info") {
    //         domainType.push("information");
    //     };
    // };

    // return domainType;
};

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));