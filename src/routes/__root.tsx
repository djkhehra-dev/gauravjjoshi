import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Grid3X3, Instagram, Linkedin, Play } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GAURAV J JOSHI — FILMMAKER" },
      { name: "description", content: "Gaurav J Joshi is a filmmaker and commercial director." },
      { name: "author", content: "Gaurav J Joshi" },
      { property: "og:title", content: "GAURAV J JOSHI — FILMMAKER" },
      { property: "og:description", content: "Films rooted in people, craft and culture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <header className="relative flex h-24 items-start justify-center bg-background pt-7 md:h-28 md:pt-8">
          <Link to="/" className="block text-center leading-none" aria-label="Gaurav J Joshi, home">
            <span className="block text-brand">Gaurav J Joshi</span>
            <span className="mt-1 block text-role text-foreground">Filmmaker + Director</span>
          </Link>
          <Link to="/" aria-label="View all work" className="absolute right-5 top-7 text-foreground transition-opacity hover:opacity-60 sm:right-8 md:right-10 md:top-8">
            <Grid3X3 size={23} strokeWidth={2.5} />
          </Link>
        </header>
        <Outlet />
        <footer className="flex items-center justify-center gap-7 px-4 py-12 md:py-16" aria-label="Social links">
          <a href="https://www.instagram.com/gauravjjoshi" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-foreground"><Instagram size={16} strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/in/gaurav-j-joshi" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-foreground"><Linkedin size={16} strokeWidth={1.5} /></a>
          <a href="https://vimeo.com/gauravjjoshi" target="_blank" rel="noreferrer" aria-label="Vimeo" className="text-muted-foreground transition-colors hover:text-foreground"><Play size={16} strokeWidth={1.5} /></a>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
