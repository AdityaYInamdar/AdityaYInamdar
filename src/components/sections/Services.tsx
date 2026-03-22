'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Backend Frameworks',
    skills: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'pytest', 'Uvicorn'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS EC2', 'AWS S3', 'AWS IAM', 'Docker', 'Nginx', 'Cloudflare'],
  },
  {
    category: 'APIs & Architecture',
    skills: ['REST APIs', 'WebSockets', 'OAuth2', 'JWT', 'RBAC', 'Microservices'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Unit Testing', 'Integration Testing', 'Agile', 'Linux'],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const rows = sectionRef.current?.querySelectorAll('.skill-row');
      rows?.forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          ease: 'power2.out',
          delay: i * 0.04,
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section">
      <div className="site-container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title" style={{ marginBottom: '2rem' }}>
          Tools &amp;
          <br />
          Technologies
        </h2>

        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {SKILL_GROUPS.map((group, index) => (
            <div
              key={group.category}
              className="skill-row"
              style={{
                borderBottom: index < SKILL_GROUPS.length - 1 ? '1px solid var(--border)' : 'none',
                background: index % 2 === 0 ? 'var(--card)' : 'var(--surface)',
              }}
            >
              <div className="skill-cat-label">{group.category}</div>
              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
