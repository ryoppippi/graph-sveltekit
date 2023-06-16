import { type InferClient, createClient } from "@garph/gqty";
import {
  createScalarsEnumsHash,
  createGeneratedSchema,
} from "@garph/gqty/dist/utils";
import { schema, queryType } from "../routes/api/graphql/schema";

console.log({
  generatedSchema: createGeneratedSchema(schema),
  scalarsEnumsHash: createScalarsEnumsHash(schema),
});

export const API_PATH = "http://localhost:5173/api/graphql";

export type ClientTypes = InferClient<{ query: typeof queryType }>;

export const { resolved, query } = createClient<ClientTypes>({
  generatedSchema: createGeneratedSchema(schema),
  scalarsEnumsHash: createScalarsEnumsHash(schema),
  url: API_PATH,
});

// Needed for the babel plugin
export { schema as compiledSchema };
