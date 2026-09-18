import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title.toUpperCase()} — GAURAV J JOSHI` },
      { name: "description", content: loaderData.description },
      { property: "og:title", content: `${loaderData.title.toUpperCase()} — GAURAV J JOSHI` },
      { property: "og:description", content: loaderData.description },
      { property: "og:type", content: "video.other" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <main className="px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-32">
      <article className="mx-auto max-w-[1600px]">
        <div className="aspect-video w-full bg-muted">
          <iframe
            src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=f5f5f0`}
            title={`${project.title} film`}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="grid gap-12 pb-16 pt-10 md:grid-cols-12 md:gap-8 md:pb-28 md:pt-14">
          <header className="md:col-span-5">
            <p className="text-meta text-muted-foreground">{project.year} / {project.category}</p>
            <h1 className="mt-3 text-project-title text-foreground">{project.title}</h1>
          </header>
          <div className="md:col-span-5 md:col-start-8">
            <p className="max-w-xl text-body text-foreground/80">{project.description}</p>
            {project.credits && (
              <ul className="mt-10 space-y-2 text-meta text-muted-foreground">
                {project.credits.map((credit) => <li key={credit}>{credit}</li>)}
              </ul>
            )}
          </div>
        </div>

        <Link to="/" className="text-label inline-flex border-b border-foreground/40 pb-1 text-foreground transition-colors hover:border-foreground">
          Back to work
        </Link>
      </article>
    </main>
  );
}