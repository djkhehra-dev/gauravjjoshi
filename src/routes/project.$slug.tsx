import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject } from "@/data/projects";

function ProjectNotFound() {
  return <main className="flex min-h-[70vh] items-center justify-center px-6 pt-32 text-center"><div><h1 className="text-project-title">Film not found</h1><Link to="/" className="mt-6 inline-block text-label text-brand-blue">Back to work</Link></div></main>;
}

function ProjectError({ reset }: { error: Error; reset: () => void }) {
  return <main className="flex min-h-[70vh] items-center justify-center px-6 pt-32 text-center"><button type="button" onClick={reset} className="text-label text-brand-blue">Try again</button></main>;
}

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
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectError,
});

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <main className="px-5 pb-20 pt-36 sm:px-8 md:pt-44">
      <article className="mx-auto max-w-[1250px]">
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

        <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="grid grid-cols-2 gap-2">
            {project.stills.map((still, index) => (
              <img key={`${project.slug}-${index}`} src={still} alt={`${project.title} still ${index + 1}`} loading="lazy" className="aspect-[4/3] w-full border border-foreground object-cover" />
            ))}
          </div>
          <div className="text-center text-credit">
            <h1 className="text-project-heading">{project.heading}</h1>
            <p className="mt-4 text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-7">
              {project.credits.map((credit) => <p key={credit}>{credit}</p>)}
            </div>
          </div>
        </div>

        <Link to="/" className="mt-16 inline-flex border-b border-brand-blue pb-1 text-label text-brand-blue">
          Back to work
        </Link>
      </article>
    </main>
  );
}