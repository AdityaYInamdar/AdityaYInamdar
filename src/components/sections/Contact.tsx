'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CONTACT_LINKS = [
  { label: 'Email', value: 'aditya.inamdar10@gmail.com', href: 'mailto:aditya.inamdar10@gmail.com' },
  { label: 'GitHub', value: 'github.com/AdityaYInamdar', href: 'https://github.com/AdityaYInamdar' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adityyinamdar', href: 'https://www.linkedin.com/in/adityyinamdar' },
  { label: 'Phone', value: '+91 83294 60483', href: 'tel:+918329460483' },
];

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  color: 'var(--text)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'inherit',
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll('.gsap-contact');
      if (elements) {
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:aditya.inamdar10@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} id="contact" className="section">
      <div className="site-container">
        <p className="section-label gsap-contact">Contact</p>
        <h2 className="section-title gsap-contact" style={{ marginBottom: '1rem' }}>
          Let&apos;s Work
          <br />
          Together.
        </h2>

        <p
          className="gsap-contact"
          style={{
            fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          Open to full-time roles, contract work, or interesting projects.
          Reach out and I&apos;ll get back within 24 hours.
        </p>

        {/* Primary email CTA */}
        <div className="gsap-contact" style={{ marginBottom: '2rem' }}>
          <a
            href="mailto:aditya.inamdar10@gmail.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.625rem',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontWeight: 700,
              color: 'var(--accent)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            aditya.inamdar10@gmail.com
            <span style={{ fontSize: '1.2rem' }}>↗</span>
          </a>
        </div>

        {/* Contact links grid */}
        <div className="contact-links-grid gsap-contact" style={{ marginBottom: '2rem' }}>
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                background: 'var(--card)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.375rem',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,211,238,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--card)')}
            >
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                {link.label}
              </span>
              <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', wordBreak: 'break-all' }}>
                {link.value}
              </span>
            </a>
          ))}
        </div>

        {/* Contact form */}
        <div
          className="card gsap-contact"
          style={{ padding: '2.25rem', marginBottom: '4rem' }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              marginBottom: '1.75rem',
              color: 'var(--text)',
            }}
          >
            Send a Message
          </h3>

          {submitted ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--green)', fontSize: '1rem', fontWeight: 600 }}>
              ✓ Opening your email client...
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-row">
                <div>
                  <label htmlFor="name" style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    style={INPUT_STYLE}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="your@email.com"
                    style={INPUT_STYLE}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="What are you working on?"
                  style={{ ...INPUT_STYLE, resize: 'vertical', lineHeight: 1.6 }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent-border)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>

              <div>
                <button
                  type="submit"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.875rem 2rem',
                    background: 'var(--accent)',
                    color: '#000',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,211,238,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Send Message →
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div
          className="gsap-contact"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © 2026 Aditya Inamdar. All rights reserved.
          </span>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Built with Next.js · TypeScript · GSAP
          </span>
        </div>
      </div>
    </section>
  );
}
