import { Instagram, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/gauravjjoshi",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gauravjjoshi/",
    Icon: Linkedin,
  },
];

function VimeoMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.976 6.416c-.105 2.338-1.739 5.538-4.894 9.6-3.262 4.302-6.022 6.453-8.28 6.453-1.4 0-2.584-1.292-3.553-3.877-.646-2.369-1.292-4.738-1.938-7.107-.718-2.584-1.489-3.877-2.315-3.877-.18 0-.808.378-1.884 1.13L0 7.285c1.184-1.04 2.351-2.08 3.499-3.12 1.579-1.364 2.764-2.081 3.553-2.153 1.866-.18 3.015 1.095 3.445 3.823.466 2.943.789 4.773.969 5.492.538 2.441 1.13 3.661 1.776 3.661.502 0 1.256-.79 2.261-2.369.789-1.579 1.202-2.782 1.238-3.607.108-1.364-.431-2.046-1.615-2.046-.558 0-1.147.13-1.766.389 1.174-3.848 3.419-5.715 6.74-5.61 2.461.072 3.622 1.669 3.478 4.796Z"
      />
    </svg>
  );
}

export function HomeSocialFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={`home-social-footer${visible ? " is-visible" : ""}`} aria-label="Social media">
      <div className="home-social-links">
        {socialLinks.map(({ label, href, Icon }, index) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={label}
            data-social-index={index}
          >
            <Icon size={22} strokeWidth={2} aria-hidden="true" />
          </a>
        ))}
        <a
          href="https://vimeo.com/gauravjjoshi"
          target="_blank"
          rel="noopener"
          aria-label="Vimeo"
          data-social-index="2"
        >
          <VimeoMark />
        </a>
      </div>
    </footer>
  );
}