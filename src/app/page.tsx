import {
  clientWork,
  education,
  experience,
  featuredProjects,
  otherProjects,
  profile,
  skills,
  type Link,
} from '@/content';

const basePath = '/AdityaYInamdar';

function ExternalLink({ link }: { link: Link }) {
  const external = link.href.startsWith('http');
  return (
    <a href={link.href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {link.label}
    </a>
  );
}

function ContactLinks() {
  return (
    <ul className="links">
      <li>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </li>
      <li>
        <ExternalLink link={{ label: 'LinkedIn', href: profile.linkedin }} />
      </li>
      <li>
        <ExternalLink link={{ label: 'GitHub', href: profile.github }} />
      </li>
      <li>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
      </li>
    </ul>
  );
}

export default function Home() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: profile.siteUrl,
    address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressCountry: 'IN' },
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="intro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}/headshot.jpg`} alt={profile.name} width={88} height={88} />
        <div>
          <h1>{profile.name}</h1>
          <p className="headline">
            {profile.title} · {profile.location}
          </p>
          <p className="summary">{profile.summary}</p>
          <ul className="now">
            {profile.now.map((item) => (
              <li key={item.text}>
                {item.text}
                {item.link && (
                  <>
                    {' '}
                    <ExternalLink link={item.link} />
                  </>
                )}
              </li>
            ))}
          </ul>
          <ContactLinks />
        </div>
      </header>

      <main>
        <section className="section" id="experience">
          <h2>Experience</h2>
          <div>
            {experience.map((job) => (
              <article className="entry" key={job.company}>
                <div className="entry-head">
                  <h3>
                    {job.role}, {job.company}
                  </h3>
                  <span className="entry-meta">{job.period}</span>
                </div>
                <ul className="points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <p className="stack">{job.stack.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div>
            <div className="group">
              {featuredProjects.map((project) => (
                <article className="entry" key={project.name}>
                  <div className="entry-head">
                    <h3>{project.name}</h3>
                    <span className="entry-meta">{project.period}</span>
                  </div>
                  <p className="entry-sub">
                    {project.role}
                    {project.links.map((link) => (
                      <span key={link.href}>
                        {' · '}
                        <ExternalLink link={link} />
                      </span>
                    ))}
                  </p>
                  <p>{project.summary}</p>
                  <ul className="points">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="stack">{project.stack.join(' · ')}</p>
                </article>
              ))}
            </div>

            {clientWork.length > 0 && (
            <div className="group">
              <h3 className="group-label">Client websites</h3>
              <ul className="list">
                {clientWork.map((site) => (
                  <li key={site.name}>
                    <div className="entry-head">
                      <span>
                        <strong>{site.name}</strong>
                        {site.link && (
                          <>
                            {' · '}
                            <ExternalLink link={site.link} />
                          </>
                        )}
                      </span>
                      <span className="entry-meta">{site.period}</span>
                    </div>
                    <p className="entry-sub">{site.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
            )}

            <div className="group">
              <h3 className="group-label">Other projects</h3>
              <ul className="list">
                {otherProjects.map((project) => (
                  <li key={project.name}>
                    <div className="entry-head">
                      <span>
                        <strong>{project.name}</strong>
                        {project.links.map((link) => (
                          <span key={link.href}>
                            {' · '}
                            <ExternalLink link={link} />
                          </span>
                        ))}
                      </span>
                      <span className="entry-meta">{project.period}</span>
                    </div>
                    <p className="entry-sub">{project.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((row) => (
              <div key={row.label} style={{ display: 'contents' }}>
                <dt>{row.label}</dt>
                <dd>{row.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="section" id="education">
          <h2>Education</h2>
          <div>
            {education.map((item) => (
              <div className="entry" key={item.school}>
                <div className="entry-head">
                  <h3>{item.school}</h3>
                  <span className="entry-meta">{item.period}</span>
                </div>
                <p className="entry-sub">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <p>
          Open to full-time roles and freelance work. The fastest way to reach me is email:{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>.
        </p>
      </footer>
    </div>
  );
}
