/**
 * DomainsDB SDK
 * Author: Seriki Yakub
 * Version: 1.0.0
 */

class DomainsDB {
    constructor(options = {}) {
        this.baseUrl = options.baseUrl || "https://api.domainsdb.info";
        this.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            ...(options.headers || {})
        };
    }

    /**
     * Internal request handler
     */
    async request(endpoint = "") {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: "GET",
                headers: this.headers
            });

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${response.statusText}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error("[DomainsDB Error]", error);
            throw error;
        }
    }

    /**
     * API Information
     */
    async info() {
        return this.request("/");
    }

    /**
     * Search domains
     */
    async search(domain) {
        return this.request(
            `/v1/domains/search?domain=${encodeURIComponent(domain)}`
        );
    }

    /**
     * Search by TLD
     */
    async tld(tld) {
        return this.request(
            `/v1/domains/search?zone=${encodeURIComponent(tld)}`
        );
    }

    /**
     * Search by country
     */
    async country(country) {
        return this.request(
            `/v1/domains/search?country=${encodeURIComponent(country)}`
        );
    }

    /**
     * Search by keyword
     */
    async keyword(keyword) {
        return this.request(
            `/v1/domains/search?domain=${encodeURIComponent(keyword)}`
        );
    }

    /**
     * Custom endpoint
     */
    async custom(endpoint) {
        return this.request(endpoint);
    }

    /**
     * Print summary
     */
    printSummary(data) {
        console.log("====================================");
        console.log("DomainsDB Response");
        console.log("====================================");

        if (!data) {
            console.log("No response.");
            return;
        }

        console.log("Total:", data.total ?? "Unknown");

        if (Array.isArray(data.domains)) {
            console.log(`Domains Found: ${data.domains.length}\n`);

            data.domains.forEach((domain, index) => {
                console.log(`#${index + 1}`);
                console.log("Domain:", domain.domain);
                console.log("Country:", domain.country);
                console.log("Create Date:", domain.create_date);
                console.log("Update Date:", domain.update_date);
                console.log("Is Dead:", domain.isDead);
                console.log("------------------------------");
            });
        } else {
            console.log(data);
        }
    }
}

/* ==========================================
   Usage Examples
========================================== */

(async () => {

    const db = new DomainsDB();

    try {

        // API Information
        const info = await db.info();
        console.log("API INFO");
        console.log(info);

        // Search Domain
        const google = await db.search("google");
        db.printSummary(google);

        // Search OpenAI
        const openai = await db.search("openai");
        db.printSummary(openai);

        // Search GitHub
        const github = await db.search("github");
        db.printSummary(github);

        // Search by TLD
        const com = await db.tld("com");
        db.printSummary(com);

        // Search by Country
        const us = await db.country("US");
        db.printSummary(us);

        // Keyword Search
        const ai = await db.keyword("ai");
        db.printSummary(ai);

        // Custom Endpoint Example
        const custom = await db.custom(
            "/v1/domains/search?domain=web4"
        );
        db.printSummary(custom);

    } catch (err) {
        console.error(err);
    }

})();
