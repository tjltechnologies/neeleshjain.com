import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn | Neelesh Jain',
  description: 'Resources, courses and books that shaped how I think about design and engineering.',
};

const RESOURCES = [
  {
    category: 'Books',
    emoji: '📚',
    items: [
      { title: 'Practical UI', author: 'Adham Dannaway', desc: 'Quick, practical and powerful UI design guidelines.', accent: '#dbeafe' },
      { title: 'The Design of Everyday Things', author: 'Don Norman', desc: 'The foundational text on user-centred design thinking.', accent: '#d1fae5' },
      { title: 'Refactoring UI', author: 'Adam Wathan & Steve Schoger', desc: 'Practical UI tips from the creators of Tailwind CSS.', accent: '#ede9fe' },
      { title: 'Atomic Design', author: 'Brad Frost', desc: 'How to create design systems using atomic methodology.', accent: '#fef3c7' },
    ],
  },
  {
    category: 'Courses',
    emoji: '🎓',
    items: [
      { title: 'UI Design Fundamentals', author: 'Gary Simon', desc: 'Core principles: spacing, colour, typography and layout.', accent: '#fce7f3' },
      { title: 'Advanced React & Next.js', author: 'Vercel', desc: 'App router, streaming, server components and deployment.', accent: '#ecfeff' },
      { title: 'Complete SQL & Databases', author: 'Bret Fisher', desc: 'Relational databases, queries and schema design.', accent: '#fef2f2' },
      { title: 'Figma for Beginners → Advanced', author: 'DesignCourse', desc: 'Variables, prototyping and advanced component techniques.', accent: '#f0fdf4' },
    ],
  },
  {
    category: 'Tools',
    emoji: '🛠',
    items: [
      { title: 'Figma', author: 'Design tool', desc: 'My primary design tool for everything from wireframes to production UI.', accent: '#fae8ff' },
      { title: 'VS Code + GitHub Copilot', author: 'Microsoft', desc: 'My daily code editor with AI assistance built in.', accent: '#e0f2fe' },
      { title: 'Supabase', author: 'Backend as a service', desc: 'Postgres database, auth, storage and edge functions.', accent: '#dcfce7' },
      { title: 'Linear', author: 'Project management', desc: 'Fast, keyboard-driven issue tracker for solo and team projects.', accent: '#fef9c3' },
    ],
  },
];

export default function LearnPage() {
  return (
    <div className="inner-page">

      {/* ── Hero intro ─────────────────────────────── */}
      <section className="inner-hero">
        <div className="inner-container">
          <h1 className="page-title">learn.</h1>
          <p className="inner-lead">
            I believe in continuous, intentional learning. Here&apos;s a curated
            collection of the books, courses and tools that have genuinely shaped
            how I think about design and engineering.
          </p>
        </div>
      </section>

      {/* ── Resource categories ─────────────────────── */}
      {RESOURCES.map((group) => (
        <section key={group.category} className="inner-section learn-group-section">
          <div className="inner-container">
            <h2 className="learn-group-heading">
              <span className="learn-group-emoji">{group.emoji}</span>
              {group.category}
            </h2>
            <div className="learn-grid">
              {group.items.map((item) => (
                <article key={item.title} className="learn-card" style={{ '--learn-accent': item.accent } as React.CSSProperties}>
                  <div className="learn-card-accent" style={{ background: item.accent }} />
                  <div className="learn-card-body">
                    <h3 className="learn-card-title">{item.title}</h3>
                    <span className="learn-card-author">{item.author}</span>
                    <p className="learn-card-desc">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

    </div>
  );
}
