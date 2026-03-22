'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const EXPERIENCES = [
  {
    id: '01',
    period: 'Jun 2025 — Present',
    company: 'Metron Security',
    role: 'Software Engineer',
    location: 'Pune, India',
    highlights: [
      'Built Python services integrating 5+ external security platform REST APIs (OAuth2 & API keys), plus a shared transformation layer so new integrations slot in without touching existing pipelines.',
      'Added retry logic with exponential backoff for upstream timeouts and partial failures.',
      'Deployed services on AWS EC2/S3 with structured JSON logging and health-check endpoints wired into the alerting pipeline — issues caught in minutes, not hours.',
      'Set up GitHub Actions CI/CD pipelines blocking merges on test failures or coverage drops; code review conventions caught an entire class of integration edge-case bugs before production.',
    ],
    tech: ['Python', 'FastAPI', 'AWS EC2', 'S3', 'Docker', 'GitHub Actions'],
  },
  {
    id: '02',
    period: 'Nov 2022 — Jun 2025',
    company: 'Integrated Active Monitoring',
    role: 'Full Stack Engineer',
    location: 'Pune, India',
    highlights: [
      'Owned the complete production ERP (DB schema → FastAPI backend → React frontend → deployment), used daily by 100+ field engineers for 2.5 years. 30+ modules, 50+ operations/day, zero downtime.',
      'Built React/TypeScript frontend with role-gated views, paginated data tables, and live WebSocket status updates. Delivery ownership end-to-end: schema to deployed UI.',
      'Designed 20+ FastAPI endpoints in a router/service/repository architecture; p95 response time under 200ms throughout 2.5 years.',
      'Cut query times ~60%: ran EXPLAIN ANALYZE, fixed missing indexes and N+1 ORM patterns without schema changes.',
      'Added Redis caching for dashboard aggregations — DB load dropped ~40%, key endpoints went from ~800ms to under 200ms.',
      'JWT auth with 3-role RBAC (admin, manager, field engineer). 90%+ test coverage on core logic. Zero access control incidents across 2.5 years.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker', 'SQLAlchemy'],
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.exp-item');
      items?.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="section">
      <div className="site-container">
        <p className="section-label">Experience</p>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>
          Where I&apos;ve
          <br />
          Worked
        </h2>

        <div>
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="exp-item"
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2.5rem',
                paddingBottom: '2.5rem',
              }}
            >
              {/* Header row */}
              <div className="exp-header">
                <div className="exp-num">
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 900,
                      color: 'var(--text-muted)',
                      opacity: 0.45,
                    }}
                  >
                    {exp.id}
                  </span>
                </div>

                <div className="exp-meta">
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        color: 'var(--text)',
                        lineHeight: 1,
                      }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '0.15rem 0.6rem',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                      }}
                    >
                      {exp.location}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {exp.role}
                  </div>
                </div>

                <div className="exp-period">{exp.period}</div>
              </div>

              {/* Bullet points */}
              <div
                className="exp-body"
                style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.25rem' }}
              >
                {exp.highlights.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <span
                      style={{
                        color: 'var(--accent)',
                        flexShrink: 0,
                        marginTop: '0.3rem',
                        fontSize: '0.55rem',
                      }}
                    >
                      ▸
                    </span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div className="exp-body" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {exp.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </div>
    </section>
  );
}
