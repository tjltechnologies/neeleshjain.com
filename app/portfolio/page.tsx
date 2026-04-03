import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Neelesh Jain',
  description: 'Product design case studies by Neelesh Jain.',
};

const PROJECTS = [
  {
    title: 'Figma design system',
    category: 'Design system',
    desc: 'A lean, accessible and beautiful Figma design system built from years of studying hundreds of design systems.',
    accent: '#e8f3fc',
    icon: '◈',
    iconColor: '#3b82f6',
    featured: true,
  },
  {
    title: 'E-commerce checkout redesign',
    category: 'Product design',
    desc: 'Reduced cart abandonment by 22% through a streamlined, single-page checkout experience.',
    accent: '#f0fdf4',
    icon: '◎',
    iconColor: '#10b981',
    featured: true,
  },
  {
    title: 'SaaS dashboard UI',
    category: 'Product design',
    desc: 'Designed the core analytics dashboard for a B2B SaaS platform. Focus on data clarity and task efficiency.',
    accent: '#faf5ff',
    icon: '◉',
    iconColor: '#8b5cf6',
    featured: false,
  },
  {
    title: 'Mobile banking app',
    category: 'UX / UI design',
    desc: 'End-to-end UX for a fintech startup — from discovery and wireframes to high-fidelity prototypes.',
    accent: '#fff7ed',
    icon: '✦',
    iconColor: '#f59e0b',
    featured: false,
  },
  {
    title: 'Design tokens system',
    category: 'Design system',
    desc: 'Built a multi-brand token architecture covering colour, typography, spacing and elevation.',
    accent: '#fef2f2',
    icon: '◈',
    iconColor: '#ef4444',
    featured: false,
  },
  {
    title: 'Portfolio website',
    category: 'Side project',
    desc: 'This very website — designed and built with Next.js, TypeScript and Supabase.',
    accent: '#ecfeff',
    icon: '◎',
    iconColor: '#0891b2',
    featured: false,
  },
];

export default function PortfolioPage() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest     = PROJECTS.filter((p) => !p.featured);

  return (
    <div className="inner-page">

      {/* ── Hero intro ─────────────────────────────── */}
      <section className="inner-hero">
        <div className="inner-container">
          <h1 className="page-title">portfolio.</h1>
          <p className="inner-lead">
            Check out some of my latest product design case studies. I&apos;ve
            worked across startups, agencies, and enterprises — leading projects
            that ship products used by real people.
          </p>
        </div>
      </section>

      {/* ── Featured projects (large cards) ────────── */}
      <section className="inner-section bg-white">
        <div className="inner-container">
          <div className="portfolio-featured-grid">
            {featured.map((p) => (
              <article key={p.title} className="port-card port-card-featured" style={{ '--card-accent': p.accent } as React.CSSProperties}>
                <div className="port-card-thumb" style={{ background: p.accent }}>
                  <span style={{ fontSize: '3.5rem', color: p.iconColor, opacity: 0.3 }}>{p.icon}</span>
                </div>
                <div className="port-card-body">
                  <span className="port-card-category">{p.category}</span>
                  <h2 className="port-card-title">{p.title}</h2>
                  <p className="port-card-desc">{p.desc}</p>
                  <span className="port-card-link">View case study →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── All projects grid ───────────────────────── */}
      <section className="inner-section bg-light">
        <div className="inner-container">
          <h2 className="section-label">MORE WORK</h2>
          <div className="portfolio-grid">
            {rest.map((p) => (
              <article key={p.title} className="port-card" style={{ '--card-accent': p.accent } as React.CSSProperties}>
                <div className="port-card-thumb port-card-thumb-sm" style={{ background: p.accent }}>
                  <span style={{ fontSize: '2.5rem', color: p.iconColor, opacity: 0.3 }}>{p.icon}</span>
                </div>
                <div className="port-card-body">
                  <span className="port-card-category">{p.category}</span>
                  <h2 className="port-card-title">{p.title}</h2>
                  <p className="port-card-desc">{p.desc}</p>
                  <span className="port-card-link">View case study →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
