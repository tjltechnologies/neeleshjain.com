import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Portfolio | Neelesh Jain' };

export default function PortfolioPage() {
  return (
    <div className="stub-page">
      <h1>portfolio</h1>
      <p>This section is coming soon.</p>
      <Link href="/">← Back home</Link>
    </div>
  );
}
