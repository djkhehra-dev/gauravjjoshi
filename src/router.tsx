import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { DefaultError } from "./components/default-error";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultError,
  });

  return router;
};
