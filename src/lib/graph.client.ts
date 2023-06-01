import { type InferClient, createClient } from "@garph/gqty";
import {
  createScalarsEnumsHash,
  createGeneratedSchema,
} from "@garph/gqty/dist/utils";
import { schema, queryType } from "$lib/graph.server";

console.log({
  generatedSchema: createGeneratedSchema(schema),
  scalarsEnumsHash: createScalarsEnumsHash(schema),
});

export const API_PATH = "/api/graphql" as const satisfies string;

export type ClientTypes = InferClient<{ query: typeof queryType }>;

export const { resolved, query } = createClient<ClientTypes>({
  generatedSchema: createGeneratedSchema(schema),
  scalarsEnumsHash: createScalarsEnumsHash(schema),
  url: API_PATH,
});

// Needed for the babel plugin
export { schema as compiledSchema };
