'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const PROJECTS = [
  {
    id: '01',
    name: 'ProctorHire',
    tagline: 'Full Stack Remote Interview Platform',
    status: 'Live in Production',
    statusColor: 'var(--green)',
    description:
      'A complete technical interview platform built from scratch and live at proctorhire.com. FastAPI backend, React/TypeScript frontend, PostgreSQL via Supabase, deployed on a self-managed Hetzner VPS behind Nginx. Supports 5 evaluation types with sandboxed in-browser code execution.',
    highlights: [
      'Python, SQL, JavaScript, MCQ, and Descriptive evaluations in isolated sandboxed runtimes',
      'Real-time proctoring over WebSockets with sub-100ms event propagation',
      'JWT-based RBAC for three roles: admin, recruiter, candidate',
      'Automated and manual grading pipelines with paginated candidate management',
    ],
    tech: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Supabase', 'WebSockets', 'JWT', 'Nginx'],
    liveUrl: 'https://proctorhire.com',
    githubUrl: null,
  },
  {
    id: '02',
    name: 'Query Reports',
    tagline: 'Parameterized SQL Reporting Engine',
    status: 'Active in Production',
    statusColor: 'var(--accent)',
    description:
      'Backend reporting tool that runs parameterized SQL queries safely against production databases and returns structured CSV/JSON datasets through a REST API. Security was the primary design constraint — parameterized binding, input validation, and query sandboxing throughout.',
    highlights: [
      'Parameterized binding throughout to block SQL injection at the source',
      'Input validation and query sandboxing to prevent unauthorized access patterns',
      'Returns both CSV and JSON output formats through a clean REST API',
      'In active production use by operations team at Integrated Active Monitoring',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQL', 'REST API'],
    liveUrl: 'https://efsr.smart-iam.com/query-reports-demo',
    githubUrl: 'https://github.com/AdityaYInamdar/query-reports',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="site-container">
        <p className="section-label">Projects</p>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>
          Selected
          <br />
          Work
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="project-card card"
              style={{ padding: '2.25rem', transition: 'border-color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border-hover)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {project.id}
                    </span>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: project.statusColor,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: project.statusColor,
                        }}
                      />
                      {project.status}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      color: 'var(--text)',
                      lineHeight: 1,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {project.tagline}
                  </p>
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        padding: '0.5rem 1rem',
                        background: 'var(--accent-dim)',
                        border: '1px solid var(--accent-border)',
                        borderRadius: '6px',
                        fontSize: '0.775rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.04em',
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
                      Live ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.375rem',
                        padding: '0.5rem 1rem',
                        background: 'none',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        fontSize: '0.775rem',
                        fontWeight: 600,
                        color: 'var(--text-muted)',
                        letterSpacing: '0.04em',
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
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: '760px',
                  marginBottom: '1.25rem',
                }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {project.highlights.map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0, fontSize: '0.55rem', marginTop: '0.35rem' }}>▸</span>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{point}</p>
                  </div>
                ))}
              </div>

              {/* Tech pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
