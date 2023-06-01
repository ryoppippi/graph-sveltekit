import { useGraphQlJit } from "@envelop/graphql-jit";
import type { RequestEvent } from "@sveltejs/kit";
import { buildSchema, g, type InferResolvers } from "garph";
import { createYoga, type YogaInitialContext } from "graphql-yoga";
import { API_PATH } from "./graph.client";

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

export const yogaApp = createYoga<RequestEvent>({
  schema,
  plugins: [useGraphQlJit()],
  graphqlEndpoint: API_PATH,
  fetchAPI: globalThis,
});
