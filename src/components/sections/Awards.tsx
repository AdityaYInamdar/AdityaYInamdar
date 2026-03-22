'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const awards = [
  { name: 'GitHub', count: 'Active' },
  { name: 'Stack Overflow', count: '1.5k+ rep' },
  { name: 'Open Source', count: '10+ projects' },
  { name: 'Tech Blogs', count: '20+ articles' },
];

export default function Awards() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title letters
      const letters = titleRef.current?.querySelectorAll('.letter');
      if (letters) {
        gsap.fromTo(
          letters,
          { y: '120%' },
          {
            y: '0%',
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Animate award blocks
      const blocks = sectionRef.current?.querySelectorAll('.awards-block');
      blocks?.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className="letter"
        style={{ display: 'inline-block', overflow: 'hidden' }}
      >
        <span style={{ display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="awards"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--bg-color)',
      }}
    >
      <div className="container-custom">
        <div className="awards__title" style={{ marginBottom: '3rem' }}>
          <h2
            ref={titleRef}
            className="animation-title text-huge"
            style={{ fontWeight: 900, textTransform: 'lowercase' }}
          >
            {splitText('achievements')}
          </h2>
        </div>

        <div className="awards__text text-medium" style={{ marginBottom: '4rem', maxWidth: '800px' }}>
          <p>
            Active contributor to the <span style={{ color: 'var(--text-color)', fontWeight: 700 }}>
              open source community
            </span> and technology ecosystem
          </p>
        </div>

        <div
          className="awards__blocks"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
            background: 'var(--text-color)',
            border: '2px solid var(--text-color)',
          }}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="awards-block"
              style={{
                padding: '2rem',
                backgroundColor: 'var(--bg-color)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              <div
                className="awards-block__title"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <h3 className="text-medium" style={{ fontWeight: 700 }}>
                  {award.name}
                  <span style={{ color: 'var(--text-gray-color)', marginLeft: '1rem' }}>
                    ( {award.count} )
                  </span>
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                    stroke="var(--text-color)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
