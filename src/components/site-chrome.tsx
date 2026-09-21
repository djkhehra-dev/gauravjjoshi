import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, MapPin, Phone, Play } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/gauravjjoshi", Icon: Instagram },
  { label: "Vimeo", href: "https://vimeo.com/gauravjjoshi", Icon: Play },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav-j-joshi", Icon: Linkedin },
];

export function SiteChrome() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex h-28 items-start justify-center pt-8 pointer-events-none">
        <Link to="/" className="pointer-events-auto block text-center leading-none text-brand-blue" aria-label="Gaurav J Joshi, home">
          <span className="block text-brand">Gaurav J Joshi</span>
          <span className="mt-1 block text-role">Filmmaker + Director</span>
        </Link>
      </header>

      <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className={`menu-dots ${open ? "is-open" : ""}`}>
        {Array.from({ length: 9 }, (_, index) => <span key={index} />)}
      </button>

      <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open} onClick={() => setOpen(false)}>
        <div className="menu-socials" onClick={(event) => event.stopPropagation()}>
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={20} strokeWidth={1.8} /></a>
          ))}
        </div>
        <nav className="menu-nav" aria-label="Main navigation" onClick={(event) => event.stopPropagation()}>
          <div className="menu-nav-links">
            <Link to="/" onClick={() => setOpen(false)}><MapPin size={14} fill="currentColor" /> Home</Link>
            <Link to="/contact" onClick={() => setOpen(false)}><Phone size={14} fill="currentColor" /> Contact</Link>
          </div>
          <div className="menu-rule" />
        </nav>
      </div>
    </>
  );
}