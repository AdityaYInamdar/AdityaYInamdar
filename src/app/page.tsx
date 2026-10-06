import {
  clientWork,
  education,
  experience,
  featuredProjects,
  otherProjects,
  profile,
  skills,
  type Link,
  type Project,
} from '@/content';

const basePath = '/AdityaYInamdar';

function TextLink({ link }: { link: Link }) {
  const external = link.href.startsWith('http');
  return (
    <a href={link.href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {link.label}
    </a>
  );
}

function LinkSuffix({ links }: { links: Link[] }) {
  return (
    <>
      {links.map((link) => (
        <span key={link.href}>
          {' · '}
          <TextLink link={link} />
        </span>
      ))}
    </>
  );
}

function ProjectList({ label, projects }: { label: string; projects: Project[] }) {
  return (
    <div className="group">
      <h3 className="group-label">{label}</h3>
      <ul className="list">
        {projects.map((project) => (
          <li key={project.name}>
            <div className="entry-head">
              <span>
                <strong>{project.name}</strong>
                <LinkSuffix links={project.links} />
              </span>
              <span className="entry-meta">{project.period}</span>
            </div>
            <p className="entry-sub">{project.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  description: profile.summary,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  image: `${profile.siteUrl}headshot.jpg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressCountry: 'IN' },
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <div className="page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <header className="intro">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="photo" src={`${basePath}/headshot.jpg`} alt={profile.name} width={88} height={88} />
        <div className="identity">
          <h1>{profile.name}</h1>
          <p className="headline">
            <span>{profile.title}</span>
            <span className="headline-sep"> · </span>
            <span>{profile.focus}</span>
          </p>
          <p className="headline">{profile.location}</p>
        </div>
        <div className="intro-body">
          <p className="summary">{profile.summary}</p>
          <ul className="now">
            {profile.now.map((item) => (
              <li key={item.text}>
                {item.text}
                {item.link && (
                  <>
                    {' '}
                    <TextLink link={item.link} />
                  </>
                )}
              </li>
            ))}
          </ul>
          <ul className="links">
            <li>
              <a href={`${basePath}/${profile.resume}`}>Résumé (PDF)</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <TextLink link={{ label: 'LinkedIn', href: profile.linkedin }} />
            </li>
            <li>
              <TextLink link={{ label: 'GitHub', href: profile.github }} />
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
          </ul>
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
                {job.note && <p className="entry-sub">{job.note}</p>}
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
                    <LinkSuffix links={project.links} />
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
            <ProjectList label="Freelance client work" projects={clientWork} />
            <ProjectList label="Other projects" projects={otherProjects} />
          </div>
        </section>

        <section className="section" id="skills">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map((row) => (
              <div className="skill-row" key={row.label}>
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
          Open to full-time roles and freelance projects. Email is the fastest way to reach me:{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </div>
  );
}
