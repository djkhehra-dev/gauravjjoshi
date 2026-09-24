import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <Link to="/" className="block text-center text-brand-blue" aria-label="Gaurav J Joshi, home">
          <span className="block text-brand">Gaurav J Joshi</span>
          <span className="mt-1 block text-role">Filmmaker + Director</span>
        </Link>
      </header>

      <Button type="button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className={`menu-toggle ${open ? "is-open" : ""}`}>
        <span className="menu-dot-grid" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</span>
        <span className="menu-close" aria-hidden="true"><i /><i /></span>
      </Button>

      <div className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open} onPointerDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
        <div className="menu-socials" onClick={(event) => event.stopPropagation()}>
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} onClick={() => setOpen(false)}><Icon size={17} strokeWidth={1.8} /></a>
          ))}
        </div>
        <nav className="menu-nav" aria-label="Main navigation" onClick={(event) => event.stopPropagation()}>
          <div className="menu-nav-links">
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </nav>
      </div>
    </>
  );
}