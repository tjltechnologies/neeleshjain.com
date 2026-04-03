import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Neelesh Jain',
  description: 'About Neelesh Jain — product designer and full stack developer.',
};

/* ── Inline pie-chart SVG (50 / 50 designer–coder) ─────── */
function PieChart() {
  // Two semicircles: dark = designer (left), light = coder (right)
  return (
    <svg viewBox="0 0 160 160" className="pie-chart" aria-hidden="true">
      {/* background circle */}
      <circle cx="80" cy="80" r="70" fill="#e8e8e8" />
      {/* designer half — dark */}
      <path d="M80 10 A70 70 0 0 0 80 150 L80 80 Z" fill="#111112" />
      {/* coder half — light warm */}
      <path d="M80 10 A70 70 0 0 1 80 150 L80 80 Z" fill="#fff" stroke="#e2e2e2" strokeWidth="1" />
      {/* centre dot */}
      <circle cx="80" cy="80" r="22" fill="#f4f4f4" />
      <text x="80" y="75"  textAnchor="middle" fontSize="8" fontWeight="700" fill="#111" fontFamily="Poppins, sans-serif">designer</text>
      <text x="80" y="87"  textAnchor="middle" fontSize="7" fill="#888"    fontFamily="Poppins, sans-serif">50%</text>
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ══════════════════════════════════════════════
          1. INTRO  — title + bio + photo grid
      ══════════════════════════════════════════════ */}
      <section className="about-section about-intro-section">
        <div className="about-container">
          <div className="about-intro-grid">

            <div className="about-intro-text">
              <h1 className="page-title">about.</h1>
              <p className="about-bio">
                I&apos;m a product designer and full&#8209;stack developer based in
                India. Since 2015, I&apos;ve enjoyed turning complex problems into
                simple, beautiful and intuitive products. When I&apos;m not designing
                or building, you&apos;ll find me exploring the outdoors, cooking, or
                planning the next adventure.
              </p>
            </div>

            {/* Photo grid — 6 tiles */}
            <div className="about-photo-grid">
              <div className="photo-tile tile-portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ykrvuddurbtsyrdmmxlx.supabase.co/storage/v1/object/sign/website/hero%20section/designer.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MGM2ZWE4ZS1mOWZmLTQ2ZjEtOTVlNC0wZTJmMDJlYjgwODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2hlcm8gc2VjdGlvbi9kZXNpZ25lci5wbmciLCJpYXQiOjE3NzUxNDgzNzMsImV4cCI6MTgwNjY4NDM3M30.bpa61wbmJicm-QEGz59sf9L6zQkQfpVR68T01iq23PQ"
                  alt="Neelesh — designer"
                  className="photo-img"
                  draggable={false}
                />
                <span className="photo-caption">designer me</span>
              </div>
              <div className="photo-tile tile-landscape tile-color-1">
                <span className="photo-caption">Mumbai</span>
              </div>
              <div className="photo-tile tile-landscape tile-color-2">
                <span className="photo-caption">workspace</span>
              </div>
              <div className="photo-tile tile-portrait tile-color-3">
                <span className="photo-caption">the outdoors</span>
              </div>
              <div className="photo-tile tile-landscape tile-color-4">
                <span className="photo-caption">home sweet home</span>
              </div>
              <div className="photo-tile tile-landscape tile-color-5">
                <span className="photo-caption">cooking experiments</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. SKILLS — part designer / part coder
      ══════════════════════════════════════════════ */}
      <section className="about-section about-skills-section">
        <div className="about-container">
          <div className="skills-grid">

            <div className="skills-col skills-designer">
              <h2>Part designer</h2>
              <ul>
                <li>UI design</li>
                <li>UX design</li>
                <li>Design systems</li>
                <li>Interaction design</li>
                <li>Figma expert</li>
                <li>&ldquo;Making it pop&rdquo;</li>
              </ul>
            </div>

            <div className="skills-chart-col">
              <PieChart />
              <p className="skills-chart-label">designer&nbsp;&nbsp;•&nbsp;&nbsp;coder</p>
            </div>

            <div className="skills-col skills-coder">
              <h2>Part coder</h2>
              <ul>
                <li>Full-stack development</li>
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Node.js / APIs</li>
                <li>Supabase / PostgreSQL</li>
                <li>Swearing at CORS errors</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. RANDOM FACTS
      ══════════════════════════════════════════════ */}
      <section className="about-section about-facts-section">
        <div className="about-container">
          <div className="facts-grid">

            <div className="facts-text">
              <h2>Random facts</h2>
              <ul className="facts-list">
                <li>I&apos;m slightly addicted to building side projects</li>
                <li>Mountains are my happy place</li>
                <li>I want to visit every continent</li>
                <li>Big fan of clean, minimal design</li>
                <li>I love to cook — and overthink recipes</li>
                <li>Interior design is a secret hobby</li>
                <li>I enjoy creating things that last</li>
                <li>Yoda is still my mentor</li>
                <li>Tea &gt; coffee. Always.</li>
              </ul>
            </div>

            <div className="facts-image-col">
              {/* Coder image as the fun "random" visual */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ykrvuddurbtsyrdmmxlx.supabase.co/storage/v1/object/sign/website/hero%20section/coder.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85MGM2ZWE4ZS1mOWZmLTQ2ZjEtOTVlNC0wZTJmMDJlYjgwODAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWJzaXRlL2hlcm8gc2VjdGlvbi9jb2Rlci5wbmciLCJpYXQiOjE3NzUxNDgzMzMsImV4cCI6NDkyODc0ODMzM30.Fk9Pg1OuC9pgA-uKEaqmSqsBKjyC7Uh7KG1tbpuvb3w"
                alt="Neelesh — coder"
                className="facts-img"
                draggable={false}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. FEATURE CARDS — 2 × 2 grid
      ══════════════════════════════════════════════ */}
      <section className="about-section about-features-section">
        <div className="about-container">
          <div className="feature-cards-grid">

            <article className="feature-card">
              <div className="feature-card-image fc-img-portfolio" aria-hidden="true" />
              <div className="feature-card-body">
                <h2>Featured work</h2>
                <p>
                  I&apos;ve had the pleasure of working on products used by millions
                  of people across fintech, healthtech, and SaaS industries.
                  Here&apos;s a curated selection.
                </p>
                <Link href="/portfolio" className="feature-link">View portfolio →</Link>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-card-image fc-img-learn" aria-hidden="true" />
              <div className="feature-card-body">
                <h2>What I&apos;m learning</h2>
                <p>
                  I believe in continuous learning. I document the courses,
                  books, and resources that have shaped how I think about
                  design and engineering.
                </p>
                <Link href="/learn" className="feature-link">See learnings →</Link>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-card-image fc-img-blog" aria-hidden="true" />
              <div className="feature-card-body">
                <h2>Blog</h2>
                <p>
                  Thoughts on design, engineering, productivity, and everything
                  in between. I write about what I&apos;ve built, what broke,
                  and what I learned.
                </p>
                <Link href="/blog" className="feature-link">Read the blog →</Link>
              </div>
            </article>

            <article className="feature-card">
              <div className="feature-card-image fc-img-story" aria-hidden="true" />
              <div className="feature-card-body">
                <h2>My story</h2>
                <p>
                  How I went from a curious kid who loved computers to a
                  designer-coder hybrid. Key lessons, pivotal moments, and
                  the tools that shaped my path.
                </p>
                <Link href="/blog" className="feature-link">Read my story →</Link>
              </div>
            </article>

          </div>
        </div>
      </section>

    </div>
  );
}
