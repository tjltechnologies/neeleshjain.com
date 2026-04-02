export default function PortfolioPreview() {
  return (
    <section className="work-section" id="portfolio">
      <div className="work-inner">

        <h2 className="work-heading">SOME OF MY LATEST WORK</h2>

        <div className="work-grid">

          {/* ── Card 1 · Design System ───────────────────────── */}
          <a href="/portfolio" className="work-card" aria-label="My Figma design system">
            <div className="card-thumb thumb-ds">
              <div className="ds-badges">
                <span className="badge-approved">✓ Approved</span>
                <span className="badge-pending">⚠ Pending</span>
                <span className="badge-rejected">⊗ Rejected</span>
              </div>
              <div className="ds-toast">
                <span className="ds-toast-check">✓</span>
                <div className="ds-toast-body">
                  <strong>Website submitted</strong>
                  <span>You&apos;ll be notified if it&apos;s accepted</span>
                </div>
                <span className="ds-toast-close">×</span>
              </div>
              <div className="ds-controls">
                <span className="ctrl-radio">○ Radio</span>
                <span className="ctrl-check">☑ Checkbox</span>
                <span className="ctrl-tag">Tag</span>
              </div>
            </div>
            <div className="card-body">
              <h3>My Figma design system</h3>
              <span>Design system</span>
            </div>
          </a>

          {/* ── Card 2 · UI Design Book ──────────────────────── */}
          <a href="/portfolio" className="work-card" aria-label="My UI design book">
            <div className="card-thumb thumb-book">
              <div className="book-stack">
                <div className="book-shadow" />
                <div className="book-pages" />
                <div className="book-cover">
                  <span className="book-title">Practical<br />UI</span>
                  <span className="book-stripe" />
                </div>
              </div>
            </div>
            <div className="card-body">
              <h3>My UI design book</h3>
              <span>Book</span>
            </div>
          </a>

          {/* ── Card 3 · App interface ───────────────────────── */}
          <a href="/portfolio" className="work-card" aria-label="Creating a lean design system">
            <div className="card-thumb thumb-app">
              <div className="app-card-mock">
                <div className="app-card-header">
                  <span className="app-icon" aria-hidden="true">🏈</span>
                  <div>
                    <div className="app-match">Canberra vs South Sydney</div>
                    <div className="app-meta">11 May, 8:00PM, 120 markets</div>
                  </div>
                </div>
                <div className="app-teams">
                  <div className="app-team">
                    <span className="team-logo team-logo-a" />
                    <div>
                      <span className="team-name">Canberra</span>
                      <span className="team-odds">1.52</span>
                    </div>
                  </div>
                  <div className="app-divider" />
                  <div className="app-team">
                    <span className="team-logo team-logo-b" />
                    <div>
                      <span className="team-name">South Sydney</span>
                      <span className="team-odds">2.32</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h3>Creating a lean design system</h3>
              <span>Design system</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
