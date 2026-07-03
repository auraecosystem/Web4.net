const engine = createEngine();

engine.execute({
  language: "jsoniq",
  query: "for $u in users return $u.name",
  data
});

engine.execute({
  language: "sql",
  query: "SELECT name FROM users",
  data
});

engine.execute({
  language: "graphql",
  query: "{ users { name } }",
  data
});
