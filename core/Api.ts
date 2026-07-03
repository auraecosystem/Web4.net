import { AuraQuery } from "@aura/query";

const engine = new AuraQuery();

const result = await engine.execute({
    language: "sql",
    source: users,
    query: "SELECT * FROM users WHERE age > 18"
});
