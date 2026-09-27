import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Phone, Pin, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/gauravjjoshi", Icon: Instagram },
  { label: "Vimeo", href: "https://vimeo.com/gauravjjoshi", Icon: Play },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav-j-joshi", Icon: Linkedin },
];

export function SiteChrome() {
  const [phase, setPhase] = useState<"closed" | "open" | "closing">("closed");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const open = phase === "open";

  const closeMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setPhase("closing");
    closeTimer.current = setTimeout(() => {
      setPhase("closed");
      closeTimer.current = null;
    }, 510);
  };

  const toggleMenu = () => {
    if (open) closeMenu();
    else {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setPhase("open");
    }
  };

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && phase === "open") closeMenu();
    };
    window.addEventListener("keydown", close);
    document.body.style.overflow = phase !== "closed" ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [phase]);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  return (
    <>
      <header className="site-header">
        <Link to="/" className="block text-center text-brand-blue" aria-label="Gaurav J Joshi, home">
          <span className="block text-brand">Gaurav J Joshi</span>
          <span className="mt-1 block text-role">Filmmaker + Director</span>
        </Link>
      </header>

      <Button type="button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={toggleMenu} className={`menu-toggle ${open ? "is-open" : ""}`}>
        <span className="menu-dot-grid" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</span>
        <span className="menu-close" aria-hidden="true">{Array.from({ length: 9 }, (_, index) => <i key={index} />)}</span>
      </Button>

      <div className={`menu-overlay ${phase === "open" ? "is-open" : phase === "closing" ? "is-closing" : ""}`} aria-hidden={phase === "closed"} inert={phase === "closed"} onPointerDown={(event) => { if (event.target === event.currentTarget && open) closeMenu(); }}>
        <div className="menu-socials" onClick={(event) => event.stopPropagation()}>
          {socials.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} onClick={closeMenu}><Icon size={17} strokeWidth={1.8} /></a>
          ))}
        </div>
        <nav className="menu-nav" aria-label="Main navigation" onClick={(event) => event.stopPropagation()}>
          <div className="menu-nav-links">
            <Link to="/" onClick={closeMenu}><Pin size={13} strokeWidth={2.6} aria-hidden="true" />Home</Link>
            <Link to="/contact" onClick={closeMenu}><Phone size={13} strokeWidth={2.6} aria-hidden="true" />Contact</Link>
          </div>
        </nav>
      </div>
    </>
  );
}