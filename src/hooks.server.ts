import { dev } from "$app/environment";
import { yogaApp } from "$lib/graph.server";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  if (event.url.pathname.startsWith(yogaApp.graphqlEndpoint)) {
    if (event.request.method === "GET" && !dev) {
      return new Response("GET not allowed", { status: 405 });
    }
    return await yogaApp(event);
  }

  return resolve(event);
};
