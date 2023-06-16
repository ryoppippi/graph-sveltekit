import { buildSchema, g, type InferResolvers } from "garph";
import type { YogaInitialContext } from "graphql-yoga";

export const queryType = g.type("Query", {
  greet: g
    .string()
    .args({
      name: g.string().optional().default("Max"),
    })
    .description("Greets a person"),
});

export const resolvers: InferResolvers<
  { Query: typeof queryType },
  { context: YogaInitialContext }
> = {
  Query: {
    greet: (parent, args, context, info) => `Hello, ${args.name}`,
  },
};

export const schema = buildSchema({ g, resolvers });
