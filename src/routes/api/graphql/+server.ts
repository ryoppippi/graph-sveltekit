import { useGraphQlJit } from "@envelop/graphql-jit";
import type { RequestEvent } from "@sveltejs/kit";
import { createYoga } from "graphql-yoga";
import { schema } from './schema'

const yogaApp = createYoga<RequestEvent>({
  schema,
  plugins: [useGraphQlJit()],
  graphqlEndpoint: '/api/graphql',
  fetchAPI: globalThis,
});

export { yogaApp as GET, yogaApp as POST }
