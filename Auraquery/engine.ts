interface QueryEngine {
  parse(query: string): AST;
  optimize(ast: AST): AST;
  execute(ast: AST, data: unknown): unknown;
  explain(ast: AST): QueryPlan;
}
