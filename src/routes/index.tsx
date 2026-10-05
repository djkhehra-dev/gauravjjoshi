import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeSocialFooter } from "@/components/home-social-footer";
import { projects } from "@/data/projects";

const recognition = [
  { status: "Silver", details: "Abby Awards, Young Maverick 2023 | Zero Man of India" },
  { status: "Shortlisted", details: "Abby Awards 2024, Green Abby & Red Abby | Thaaragai Aarathana" },
  { status: "Shortlisted", details: "Good Ads Matter, Young Director 2024 | Thaaragai Aarathana" },
  { status: "Featured", details: "Vimeo Staff Pick | Call of Yamuna" },
];

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
      <div className="home-recognition" aria-label="Recognition">
        <div className="home-recognition-track">
          {[0, 1].map((copy) => (
            <ul key={copy} className="home-recognition-list" aria-hidden={copy === 1 ? true : undefined}>
              {recognition.map(({ status, details }, index) => (
                <li key={index}>
                  <strong>{status}</strong> | {details}
                  <span className="home-recognition-dot" aria-hidden="true">•</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <section aria-label="Selected films" className="video-gallery">
        {projects.map((project) => (
          <article key={project.slug} className="video-entry">
            <Link
              to="/project/$slug"
              params={{ slug: project.slug }}
              className="video-link"
              aria-label={`View ${project.title}`}
            >
              <div className="video-frame bg-muted">
                <img
                  src={project.thumbnail}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2 className="text-label text-foreground">{project.title}</h2>
            </Link>
          </article>
        ))}
      </section>
      <HomeSocialFooter />
    </main>
  );
}
