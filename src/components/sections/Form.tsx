'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Form() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [budget, setBudget] = useState('5k-10k');

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title letters
      const titles = titleRef.current?.querySelectorAll('.animation-title');
      titles?.forEach((title) => {
        const letters = title.querySelectorAll('.letter');
        if (letters.length > 0) {
          gsap.fromTo(
            letters,
            { y: '120%' },
            {
              y: '0%',
              stagger: 0.05,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: title,
                start: 'top 80%',
              },
            }
          );
        }
      });

      // Fade in form
      gsap.fromTo(
        'form',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: 'form',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} style={{ display: 'inline-block', marginRight: '1rem' }}>
        {word.split('').map((char, i) => (
          <span
            key={i}
            className="letter"
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            <span style={{ display: 'inline-block' }}>{char === ' ' ? '\u00A0' : char}</span>
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="form"
      id="connect"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--bg-color)',
      }}
    >
      <div className="container-custom">
        <div className="form__wrapper">
          <h3
            className="form-title-top text-small"
            style={{ marginBottom: '1rem', textTransform: 'uppercase' }}
          >
            Let&apos;s start the conversation
          </h3>

          <div ref={titleRef}>
            <h2
              className="form-title animation-title"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 8rem)',
                lineHeight: '0.9',
                fontWeight: 900,
                marginBottom: '1rem',
                textTransform: 'lowercase',
              }}
            >
              {splitText('great project')}
            </h2>

            <h3
              className="form-title-middle text-medium"
              style={{ marginBottom: '1rem', opacity: 0.7 }}
            >
              starts with
            </h3>

            <h2
              className="form-title animation-title"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 8rem)',
                lineHeight: '0.9',
                fontWeight: 900,
                marginBottom: '4rem',
                textTransform: 'lowercase',
              }}
            >
              {splitText('great collaboration')}
            </h2>
          </div>

          <form
            action="#"
            method="POST"
            style={{ opacity: 0, maxWidth: '800px' }}
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted! (Demo only)');
            }}
          >
            <div className="form-fields" style={{ marginBottom: '3rem' }}>
              <input
                type="text"
                name="name"
                placeholder="your name*"
                required
                className="text-small"
                style={{
                  width: '100%',
                  padding: '1.25rem 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid var(--text-color)',
                  marginBottom: '1.5rem',
                  color: 'var(--text-color)',
                  outline: 'none',
                }}
              />
              <input
                type="tel"
                name="phone"
                placeholder="phone*"
                required
                className="text-small"
                style={{
                  width: '100%',
                  padding: '1.25rem 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid var(--text-color)',
                  marginBottom: '1.5rem',
                  color: 'var(--text-color)',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="your email*"
                required
                className="text-small"
                style={{
                  width: '100%',
                  padding: '1.25rem 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid var(--text-color)',
                  marginBottom: '1.5rem',
                  color: 'var(--text-color)',
                  outline: 'none',
                }}
              />
              <textarea
                name="message"
                placeholder="How can I help you"
                required
                rows={3}
                className="text-small"
                style={{
                  width: '100%',
                  padding: '1.25rem 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid var(--text-color)',
                  marginBottom: '2rem',
                  color: 'var(--text-color)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />

              <h4 className="text-small" style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>
                project budget (usd)
              </h4>
              <div className="budget" style={{ marginBottom: '3rem' }}>
                <div className="budget__wrapper" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {['5k-10k', '10k-20k', 'more'].map((option) => (
                    <label
                      key={option}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer',
                      }}
                      className="text-small"
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={budget === option}
                        onChange={(e) => setBudget(e.target.value)}
                        style={{ width: '18px', height: '18px' }}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="link-line text-small"
              type="submit"
              style={{
                padding: '1rem 2rem',
                background: 'var(--text-color)',
                color: 'var(--bg-color)',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Discuss the project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
