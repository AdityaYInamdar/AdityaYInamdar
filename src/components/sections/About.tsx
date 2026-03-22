'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '2', label: 'Companies' },
  { value: '30+', label: 'Modules Built' },
  { value: '90%+', label: 'Test Coverage' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const elements = sectionRef.current?.querySelectorAll('.gsap-fade');
      if (elements) {
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.12,
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

  return (
    <section ref={sectionRef} id="about" className="section">
      <div className="site-container">
        <p className="section-label gsap-fade">About Me</p>

        <div className="about-grid">
          {/* Bio text */}
          <div>
            <h2 className="section-title gsap-fade" style={{ marginBottom: '2rem' }}>
              Building Systems
              <br />
              That Ship.
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p
                className="gsap-fade"
                style={{
                  fontSize: 'clamp(0.925rem, 1.3vw, 1.05rem)',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                }}
              >
                I&apos;m a Software Engineer based in Pune, India with 3+ years of experience
                building production systems from scratch. I specialize in backend engineering
                with Python and FastAPI, and I&apos;m equally comfortable owning the full stack
                with React and TypeScript.
              </p>
              <p
                className="gsap-fade"
                style={{
                  fontSize: 'clamp(0.925rem, 1.3vw, 1.05rem)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                At Integrated Active Monitoring, I owned a production ERP — DB schema,
                FastAPI backend, React UI, and deployment — used daily by 100+ field engineers
                for 2.5 years. I care about clean architecture, measurable performance,
                and tests that actually catch bugs before they reach production.
              </p>
              <p
                className="gsap-fade"
                style={{
                  fontSize: 'clamp(0.925rem, 1.3vw, 1.05rem)',
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                }}
              >
                Core stack: Python · FastAPI · React · PostgreSQL · Redis · AWS
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div
            className="gsap-fade"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              alignSelf: 'start',
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'var(--card)',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.25rem, 5vw, 3.25rem)',
                    fontWeight: 900,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
