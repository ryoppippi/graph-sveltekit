import { resolved, query } from "$lib/graph.client";
export const load = async () => {
  const data = resolved(() => {
    return query.greet({ name: "Mish" });
  });
  return { data };
};
