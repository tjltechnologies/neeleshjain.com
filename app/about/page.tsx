import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About | Neelesh Jain' };

export default function AboutPage() {
  return (
    <div className="stub-page">
      <h1>about</h1>
      <p>This section is coming soon.</p>
      <Link href="/">← Back home</Link>
    </div>
  );
}
