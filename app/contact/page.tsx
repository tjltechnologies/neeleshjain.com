import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Contact | Neelesh Jain' };

export default function ContactPage() {
  return (
    <div className="stub-page">
      <h1>contact</h1>
      <p>This section is coming soon.</p>
      <Link href="/">← Back home</Link>
    </div>
  );
}
