import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Blog | Neelesh Jain' };

export default function BlogPage() {
  return (
    <div className="stub-page">
      <h1>blog</h1>
      <p>This section is coming soon.</p>
      <Link href="/">← Back home</Link>
    </div>
  );
}
