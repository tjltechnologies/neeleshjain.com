import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Neelesh Jain',
  description: 'Thoughts on design, engineering and everything in between.',
};

type Post = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  accent: string;
  icon: string;
};

const POSTS: Post[] = [
  {
    title: '14 logic-driven UI design tips to improve any interface',
    excerpt: 'Practical UI design tips to improve your interface designs using logic rather than gut feel.',
    category: 'UI Design',
    date: '1 January 2026',
    readTime: '8 min read',
    accent: '#e8f3fc',
    icon: '◈',
  },
  {
    title: '16 little UI design tips that make a big impact',
    excerpt: 'A step-by-step UI design case study to quickly fix an example interface using logic-driven tips.',
    category: 'UI Design',
    date: '15 December 2025',
    readTime: '10 min read',
    accent: '#f0fdf4',
    icon: '◎',
  },
  {
    title: 'How to build a design system from scratch',
    excerpt: 'A step-by-step guide to building a design system with predefined styles, components, and usage guidelines.',
    category: 'Design Systems',
    date: '4 November 2025',
    readTime: '12 min read',
    accent: '#faf5ff',
    icon: '◉',
  },
  {
    title: 'Best design system examples to learn from',
    excerpt: 'Key things I\'ve learned from studying top design system examples to help you build or improve your own.',
    category: 'Design Systems',
    date: '20 October 2025',
    readTime: '7 min read',
    accent: '#fff7ed',
    icon: '✦',
  },
  {
    title: 'UX design books you should read in 2026',
    excerpt: 'The most useful and practical UX design books to help you create seamless user experiences.',
    category: 'Resources',
    date: '10 September 2025',
    readTime: '5 min read',
    accent: '#fef2f2',
    icon: '◈',
  },
  {
    title: 'Best free web design inspiration sites in 2026',
    excerpt: 'My go-to free web design inspiration sites with detailed breakdowns to spark your next project.',
    category: 'Web Design',
    date: '1 August 2025',
    readTime: '6 min read',
    accent: '#ecfeff',
    icon: '◎',
  },
];

const CATEGORIES = ['All', 'UI Design', 'Design Systems', 'Web Design', 'Resources'];

export default function BlogPage() {
  return (
    <div className="inner-page">

      {/* ── Hero intro ─────────────────────────────── */}
      <section className="inner-hero">
        <div className="inner-container">
          <h1 className="page-title">blog.</h1>
          <p className="inner-lead">
            Thoughts on UI design, design systems, front-end development, and
            everything in between. I write about what I&apos;ve built, what
            broke, and what I learned.
          </p>
        </div>
      </section>

      {/* ── Category filters ─────────────────────── */}
      <section className="inner-section bg-white" style={{ paddingBottom: 0 }}>
        <div className="inner-container">
          <div className="blog-filters">
            {CATEGORIES.map((c) => (
              <button key={c} className={`blog-filter-btn${c === 'All' ? ' active' : ''}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured post (first + large) ─────────── */}
      <section className="inner-section bg-white">
        <div className="inner-container">
          <article className="blog-post-featured">
            <div className="blog-post-thumb blog-thumb-lg" style={{ background: POSTS[0].accent }}>
              <span className="blog-thumb-icon" style={{ color: '#3b82f6' }}>{POSTS[0].icon}</span>
            </div>
            <div className="blog-post-body">
              <div className="blog-post-meta">
                <span className="blog-post-category">{POSTS[0].category}</span>
                <span className="blog-post-date">{POSTS[0].date}</span>
                <span className="blog-post-read">{POSTS[0].readTime}</span>
              </div>
              <h2 className="blog-post-title blog-post-title-lg">{POSTS[0].title}</h2>
              <p className="blog-post-excerpt">{POSTS[0].excerpt}</p>
              <span className="port-card-link">Read article →</span>
            </div>
          </article>
        </div>
      </section>

      {/* ── Post grid ──────────────────────────────── */}
      <section className="inner-section bg-light">
        <div className="inner-container">
          <h2 className="section-label">MORE ARTICLES</h2>
          <div className="blog-grid">
            {POSTS.slice(1).map((post) => (
              <article key={post.title} className="blog-card">
                <div className="blog-post-thumb" style={{ background: post.accent }}>
                  <span className="blog-thumb-icon" style={{ color: '#888' }}>{post.icon}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-post-meta">
                    <span className="blog-post-category">{post.category}</span>
                    <span className="blog-post-date">{post.date}</span>
                  </div>
                  <h2 className="blog-post-title">{post.title}</h2>
                  <p className="blog-post-excerpt blog-post-excerpt-sm">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-post-read">{post.readTime}</span>
                    <span className="port-card-link">Read →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
