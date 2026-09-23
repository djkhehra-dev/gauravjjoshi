import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/data/projects";

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
    <main className="home-main">
      <h1 className="sr-only">Gaurav J Joshi — Filmmaker</h1>
      <section aria-label="Selected films" className="video-gallery">
        {projects.map((project) => (
          <article key={project.slug} className="video-entry">
            <div className="video-frame bg-muted">
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeoId}?title=0&byline=0&portrait=0&color=1e4487`}
                title={`${project.title} film`}
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h2 className="text-label text-foreground">{project.title}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
