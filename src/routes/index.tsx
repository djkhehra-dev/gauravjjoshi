import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAURAV J JOSHI — FILMMAKER" },
      { name: "description", content: "Gaurav J Joshi is a filmmaker and commercial director creating documentary-style films, branded stories and films rooted in people, craft and culture." },
      { property: "og:title", content: "GAURAV J JOSHI — FILMMAKER" },
      { property: "og:description", content: "Documentary-style films, branded stories and films rooted in people, craft and culture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto w-full max-w-[850px] px-5 pb-20 pt-24 sm:px-8 md:pt-28">
      <h1 className="sr-only">Gaurav J Joshi — Filmmaker</h1>
      <section aria-label="Selected work" className="grid grid-cols-1 gap-x-7 gap-y-14 sm:grid-cols-2 md:gap-y-12">
        {projects.map((project, index) => (
          <Link key={project.slug} to="/$slug" params={{ slug: project.slug }} className="group block">
            <div className="relative aspect-[2.4/1] overflow-hidden bg-muted">
              <img
                src={project.thumbnail}
                alt={`${project.title} — ${project.category}`}
                loading={index < 3 ? "eager" : "lazy"}
                width={1024}
                height={576}
                className="h-full w-full object-cover transition-opacity duration-300 ease-out group-hover:opacity-90 group-focus-visible:opacity-90"
              />
            </div>
            <h2 className="text-label mt-2.5 text-foreground">{project.title}</h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
