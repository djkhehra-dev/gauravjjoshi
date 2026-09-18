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
    <main className="pt-24 md:pt-28">
      <h1 className="sr-only">Gaurav J Joshi — Filmmaker</h1>
      <section aria-label="Selected work" className="grid grid-cols-1 gap-x-0.5 gap-y-8 sm:grid-cols-2 md:gap-y-0.5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Link key={project.slug} to="/$slug" params={{ slug: project.slug }} className="group relative block overflow-hidden bg-muted">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.thumbnail}
                alt={`${project.title} — ${project.category}`}
                loading={index < 3 ? "eager" : "lazy"}
                width={1024}
                height={576}
                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-work-caption px-4 pb-4 pt-16 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                <span className="text-label text-foreground">{project.title}</span>
                <span className="text-meta text-foreground/70">{project.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
