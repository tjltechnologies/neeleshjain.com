import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Admin | Neelesh Jain' };

export default function AdminPage() {
  return (
    <div className="stub-page">
      <h1>admin</h1>
      <p>CMS dashboard — coming soon.</p>
      <Link href="/">← Back home</Link>
    </div>
  );
}
