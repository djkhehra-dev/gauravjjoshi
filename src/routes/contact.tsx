import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import portraitAsset from "@/assets/gaurav-contact.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "CONTACT — GAURAV J JOSHI" },
      { name: "description", content: "Contact award-winning New Delhi filmmaker Gaurav Joshi." },
      { property: "og:title", content: "CONTACT — GAURAV J JOSHI" },
      { property: "og:description", content: "Contact award-winning New Delhi filmmaker Gaurav Joshi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <main className="contact-main">
      <section className="contact-intro" aria-labelledby="about-title">
        <img src={portraitAsset.url} alt="Gaurav J Joshi" className="contact-portrait" />
        <div className="contact-copy">
          <h1 id="about-title" className="text-contact-kicker">About Gaurav Joshi</h1>
          <p>Gaurav Joshi is an award-winning filmmaker based in New Delhi, working across narrative, commercial and documentary film.</p>
          <p>He is drawn to stories about people, places, craft and culture, and is interested in finding the details that make a story feel real. His films balance a strong visual approach with honest moments, often spending time with people and their worlds before shaping the story around them.</p>
          <p>Over the last 12 years, Gaurav has worked across advertising, branded content and film. His work has taken him across India, from working closely with craftspeople and communities to making films for brands and organisations.</p>
          <p>He studied Journalism and currently runs Sparkk, a film production company focused on commercials, documentaries and films rooted in people, place and culture.</p>

          <section className="contact-recognition" aria-labelledby="recognition-title">
            <h2 id="recognition-title">Recognition</h2>
            <ul>
              <li>Silver | Abby Awards, Young Maverick 2023 | Zero Man of India</li>
              <li>Shortlisted | Abby Awards 2024, Green Abby &amp; Red Abby | Thaaragai Aarathana</li>
              <li>Shortlisted | Good Ads Matter, Young Director 2024 | Thaaragai Aarathana</li>
              <li>Featured | Vimeo Staff Pick | Call of Yamuna</li>
            </ul>
          </section>
        </div>
      </section>

      <section className="contact-panel" aria-labelledby="contact-title">
        <div className="contact-heading">
          <h2 id="contact-title" className="text-contact-kicker">Get in touch</h2>
          <a href="mailto:your.email@example.com">your.email@example.com</a>
          <span aria-hidden="true">—</span>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <div className="contact-fields">
            <div className="contact-stack">
              <input name="name" aria-label="Name" placeholder="Name" maxLength={100} required />
              <input name="email" type="email" aria-label="Email" placeholder="Email" maxLength={254} required />
              <input name="subject" aria-label="Subject" placeholder="Subject" maxLength={150} required />
            </div>
            <textarea name="message" aria-label="Message" placeholder="Type your message here..." maxLength={2000} required />
          </div>
          <div className="contact-actions">
            <label className="captcha-placeholder"><input type="checkbox" required /><span>I’m not a robot</span><small>Verification placeholder</small></label>
            <Button type="submit" className="contact-submit">Send</Button>
          </div>
          <p className="contact-status" role="status">{sent ? "Thank you — your message is ready to send once email delivery is connected." : ""}</p>
        </form>
      </section>
    </main>
  );
}