'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const TECH_STACK = ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Docker'];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ['.hero-badge', '.hero-name', '.hero-subtitle', '.hero-desc', '.hero-pills', '.hero-actions', '.hero-meta', '.hero-photo'],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '90px 0 50px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '35%',
          left: '25%',
          width: '600px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.07) 0%, transparent 65%)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="site-container" style={{ width: '100%' }}>
        <div className="hero-grid">
          {/* ── Left column: content ── */}
          <div>
            {/* Available badge */}
            <div
              className="hero-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 1rem',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                marginBottom: '2rem',
                fontSize: '0.8rem',
                color: 'var(--text-subtle)',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px rgba(74,222,128,0.8)',
                  flexShrink: 0,
                }}
              />
              Available for new opportunities
            </div>

            {/* Name */}
            <h1
              className="hero-name"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.25rem, 9vw, 7.5rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--text)',
                marginBottom: '1.25rem',
              }}
            >
              ADITYA
              <br />
              <span style={{ color: 'var(--accent)' }}>INAMDAR</span>
            </h1>

            {/* Role */}
            <div
              className="hero-subtitle"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.05rem)',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Software Engineer
              </span>
              <span style={{ color: 'var(--border)', fontSize: '1.2rem' }}>·</span>
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.05rem)',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                Full Stack Developer
              </span>
            </div>

            {/* Description */}
            <p
              className="hero-desc"
              style={{
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                maxWidth: '520px',
                marginBottom: '2rem',
              }}
            >
              3+ years building production-grade backends and full-stack systems.
              FastAPI APIs, React frontends, PostgreSQL databases, and AWS
              infrastructure — all the way from schema to deployment.
            </p>

            {/* Tech stack pills */}
            <div
              className="hero-pills"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
            >
              {TECH_STACK.map((tech) => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              className="hero-actions"
              style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '3rem' }}
            >
              <a
                href="#work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.75rem',
                  background: 'var(--accent)',
                  color: '#000',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(34,211,238,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View My Work ↓
              </a>
              <a
                href="https://github.com/AdityaYInamdar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.75rem',
                  background: 'none',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--text-subtle)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                GitHub →
              </a>
              <a
                href="https://www.linkedin.com/in/adityyinamdar"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '0.75rem 1.75rem',
                  background: 'none',
                  color: 'var(--text-muted)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--text-subtle)';
                  e.currentTarget.style.color = 'var(--text)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                LinkedIn →
              </a>
            </div>

            {/* Meta info row */}
            <div
              className="hero-meta"
              style={{
                display: 'flex',
                gap: '2.5rem',
                flexWrap: 'wrap',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              {[
                { label: 'Location', value: 'Pune, India' },
                { label: 'Experience', value: '3+ Years' },
                { label: 'Status', value: 'Open to Work' },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Photo ── */}
          <div className="hero-photo hero-photo-col">
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              <Image
                src="/profile-no-bg.jpeg"
                alt="Aditya Inamdar"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 400px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Gradient overlay at bottom */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 55%, rgba(9,9,11,0.55) 100%)',
                }}
              />
            </div>
            {/* Accent glow behind photo */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '18px',
                background: 'linear-gradient(135deg, rgba(34,211,238,0.25) 0%, transparent 50%)',
                zIndex: -1,
                pointerEvents: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
