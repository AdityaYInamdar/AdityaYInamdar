import type { Metadata, Viewport } from 'next';
import { profile } from '@/content';
import './globals.css';

// Lowercase the focus line's first word ("Applied") but leave acronyms ("AI") alone.
const focus = /^[A-Z][a-z]/.test(profile.focus) ? profile.focus[0].toLowerCase() + profile.focus.slice(1) : profile.focus;
const description = `${profile.name} is a ${profile.title.toLowerCase()} in ${profile.location}, focused on ${focus}.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: `${profile.name}, ${profile.title}`,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    title: `${profile.name}, ${profile.title}`,
    description,
    url: profile.siteUrl,
    images: [{ url: 'headshot.jpg', width: 480, height: 480, alt: profile.name }],
  },
  twitter: { card: 'summary' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
