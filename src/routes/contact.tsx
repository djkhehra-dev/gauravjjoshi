import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Play } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "CONTACT — GAURAV J JOSHI" },
      { name: "description", content: "Contact filmmaker and commercial director Gaurav J Joshi." },
      { property: "og:title", content: "CONTACT — GAURAV J JOSHI" },
      { property: "og:description", content: "Contact filmmaker and commercial director Gaurav J Joshi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/gauravjjoshi", Icon: Instagram },
  { label: "Vimeo", href: "https://vimeo.com/gauravjjoshi", Icon: Play },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav-j-joshi", Icon: Linkedin },
];

function ContactPage() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-6 pb-20 pt-36 text-center">
      <div>
        <p className="text-contact-kicker">Enquiries &amp; collaborations</p>
        <a className="mt-5 block text-contact-link" href="mailto:hello@gauravjjoshi.com">
          hello@gauravjjoshi.com
        </a>
        <div className="mt-10 flex items-center justify-center gap-7" aria-label="Social links">
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="text-brand-blue transition-opacity hover:opacity-60">
              <Icon size={21} strokeWidth={1.7} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}