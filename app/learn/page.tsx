import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Learn | Neelesh Jain' };

export default function LearnPage() {
  return (
    <div className="stub-page">
      <h1>learn</h1>
      <p>This section is coming soon.</p>
      <Link href="/">← Back home</Link>
    </div>
  );
}
