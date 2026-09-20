import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title.toUpperCase()} — GAURAV J JOSHI` },
      { name: "description", content: `${loaderData.title}, directed by Gaurav J Joshi.` },
      { property: "og:title", content: `${loaderData.title.toUpperCase()} — GAURAV J JOSHI` },
      { property: "og:description", content: `${loaderData.title}, directed by Gaurav J Joshi.` },
      { property: "og:type", content: "video.other" },
      { name: "twitter:card", content: "summary_large_image" },
    ] : [],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <main className="px-5 pb-20 pt-24 sm:px-8 md:pt-28">
      <article className="mx-auto max-w-[1000px]">
        <div className="aspect-video w-full bg-muted">
          <iframe
            src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=000000`}
            title={`${project.title} film`}
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-2 pb-14 pt-5 sm:flex-row sm:items-baseline sm:justify-between">
          <h1 className="text-project-title text-foreground">{project.title}</h1>
          <p className="text-meta shrink-0 text-muted-foreground">{project.category} / {project.year}</p>
        </div>

        <Link to="/" className="text-label inline-flex border-b border-foreground/40 pb-1 text-foreground transition-colors hover:border-foreground">
          Back to work
        </Link>
      </article>
    </main>
  );
}