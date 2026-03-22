'use client';

import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'background 0.3s, backdrop-filter 0.3s, border-color 0.3s',
        background: scrolled ? 'rgba(9,9,11,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div
        className="site-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.125rem 1.25rem',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 900,
            letterSpacing: '0.02em',
            color: 'var(--text)',
            textTransform: 'uppercase',
          }}
        >
          Aditya<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: '2.25rem', alignItems: 'center' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                letterSpacing: '0.03em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hire Me CTA */}
        <a
          href="mailto:aditya.inamdar10@gmail.com"
          className="hidden md:inline-flex"
          style={{
            padding: '0.5rem 1.25rem',
            background: 'var(--accent-dim)',
            border: '1px solid var(--accent-border)',
            borderRadius: '6px',
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-dim)';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text)',
            padding: '0.25rem',
            alignItems: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu — floating dropdown */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: '1.25rem',
            width: '220px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            overflow: 'hidden',
          }}
        >
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.875rem 1.25rem',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-subtle)',
                borderBottom: i < NAV_LINKS.length - 1 ? '1px solid var(--border)' : 'none',
                transition: 'color 0.15s, background 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.background = 'var(--surface)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-subtle)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border)' }}>
            <a
              href="mailto:aditya.inamdar10@gmail.com"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.625rem 0',
                textAlign: 'center',
                background: 'var(--accent)',
                color: '#000',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
