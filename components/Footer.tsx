'use client';

import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'about',     href: '/about'     },
  { label: 'learn',     href: '/learn'     },
  { label: 'portfolio', href: '/portfolio' },
  { label: 'blog',      href: '/blog'      },
  { label: 'contact',   href: '/contact'   },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <p className="footer-credit">© 2026 Neelesh Jain</p>

        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2.5 9.5l4.5-5 4.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <nav className="footer-nav" aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

      </div>
    </footer>
  );
}
