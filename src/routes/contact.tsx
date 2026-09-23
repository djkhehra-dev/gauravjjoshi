import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import portraitAsset from "@/assets/gaurav-contact.jpg.asset.json";
import { Button } from "@/components/ui/button";

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
          <h1 id="about-title" className="text-contact-kicker">About Gaurav J Joshi</h1>
          <p>I’m a filmmaker and commercial director drawn to people, craft, and culture. My work brings a documentary eye to honest stories and considered visual worlds.</p>
          <p>If you have a story to tell or a project to discuss, I’d be glad to hear from you.</p>
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