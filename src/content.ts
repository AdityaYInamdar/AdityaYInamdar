// All site copy lives here. Edit this file to update the site.

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  period: string;
  summary: string;
  links: Link[];
};

export type FeaturedProject = Project & {
  role: string;
  points: string[];
  stack: string[];
};

export const profile = {
  name: 'Aditya Inamdar',
  title: 'Full-Stack Software Engineer',
  location: 'Pune, India',
  siteUrl: 'https://adityayinamdar.github.io/AdityaYInamdar/',
  email: 'aditya.inamdar10@gmail.com',
  phone: '+91 83294 60483',
  github: 'https://github.com/AdityaYInamdar',
  linkedin: 'https://www.linkedin.com/in/adityyinamdar',
  summary:
    'I’ve spent nearly four years shipping production systems in Python, FastAPI, React and PostgreSQL. I take products from database schema to deployment, at my day job, for freelance clients in India and the UK, and for my own startup.',
  now: [
    { text: 'Software Engineer at Metron Security.' },
    {
      text: 'Building ProctoHire, a proctored assessment and hiring platform:',
      link: { label: 'proctohire.com', href: 'https://proctohire.com' },
    },
    { text: 'Releasing an iOS coaching app for a UK cricket academy on the App Store.' },
  ] as { text: string; link?: Link }[],
};

export const experience = [
  {
    company: 'Metron Security',
    role: 'Software Engineer',
    period: 'Jun 2025 – Present',
    points: [
      'Build Python services that integrate the REST APIs of 5+ security platforms (OAuth2 and API-key auth) through a shared transformation layer, so new integrations never touch existing pipelines.',
      'Added retries with exponential backoff for upstream timeouts, plus structured JSON logging and health checks wired into alerting on AWS.',
      'Set up GitHub Actions CI that blocks merges when tests fail or coverage drops.',
    ],
    stack: ['Python', 'FastAPI', 'AWS (EC2, S3)', 'Docker', 'GitHub Actions'],
  },
  {
    company: 'Integrated Active Monitoring',
    role: 'Full Stack Engineer',
    period: 'Nov 2022 – Jun 2025',
    points: [
      'Built and owned a production ERP end to end (schema, FastAPI backend, React/TypeScript frontend, deployment) with 30+ modules, used daily by 100+ field engineers for 2.5 years.',
      'Cut slow report queries by ~60% (8s to under 3s) by fixing missing indexes and N+1 ORM queries. Redis caching cut database load ~40% and brought dashboard endpoints from ~800ms to under 200ms.',
      'Implemented JWT auth with role-based access for admins, managers and field engineers, with pytest coverage above 90% on core logic.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets'],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'ProctoHire',
    role: 'My own product, built end to end',
    period: 'Live since 2026',
    links: [{ label: 'proctohire.com', href: 'https://proctohire.com' }],
    summary:
      'A proctored assessment and hiring platform. Companies run technical tests and interviews, review integrity evidence, and move candidates from invite to offer. It is in production with paying customers and sent 743 candidate invitations in the 90 days to September 2026.',
    points: [
      'Integrity engine: tab-switch, focus and copy-paste tracking, webcam and screen clips, server-side detection of pasted code from keystroke logs, and keystroke replay, combined into a 0–100 integrity score per attempt.',
      'MCQ, SQL, Python, JavaScript, C++, spreadsheet and descriptive questions; code runs against test cases in 22 languages. Gemini grades open-ended answers, generates tests and parses resumes.',
      'Multi-tenant SaaS with hiring pipelines (automatic stage moves, campus drives with bulk invites, one-way video interviews, online offer letters), signed webhooks and a public API.',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Socket.IO', 'PostgreSQL (Supabase)', 'Gemini API', 'Nginx', 'Hetzner', 'Cloudflare'],
  },
  {
    name: 'JSCA Player Development',
    role: 'iOS app for Jameel Stuart Cricket Academy, Bolton, UK',
    period: 'Aug 2026 – Present',
    links: [],
    summary:
      'A coaching app with separate coach, parent and player accounts, built around the academy’s player-development method. The App Store release is in progress.',
    points: [
      'Assessments across five skill areas roll up into a Skill Index with a radar chart, tracked across 28-day training blocks of drills and homework.',
      'Coaches log a session by typing or dictating one sentence and AI drafts the rest. Match logging covers batting and bowling stats with a wagon wheel.',
      'Parents and players see notes, videos and homework, with push notifications that open the right screen. Row-level security on every table keeps each family’s data private.',
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase (Postgres, RLS, Edge Functions)', 'Gemini API'],
  },
];

export const clientWork: Project[] = [
  {
    name: 'Nourish Agro',
    period: 'Aug 2026',
    links: [{ label: 'nourishagro.com', href: 'https://nourishagro.com' }],
    summary:
      'Rebuilt the online shop of a Pune organic food brand after its WordPress store was hacked: 90 products with pack-size pricing re-checked on the server, WhatsApp ordering, and a domain cutover that kept company email running. Next.js, Vercel.',
  },
  {
    name: 'The Modern Guitar Mentorship',
    period: 'Jul – Sep 2026',
    links: [{ label: 'varadguitar.com', href: 'https://varadguitar.com' }],
    summary:
      'Sales funnel for a jazz guitar mentor: email-gated masterclass, MailerLite nurture emails, a 16-question application with Calendly booking, and Meta Pixel and UTM conversion tracking. Vercel serverless functions.',
  },
  {
    name: 'Jameel Stuart Cricket Academy',
    period: 'Jul – Aug 2026',
    links: [{ label: 'jameelstuartcricketacademy.com', href: 'https://www.jameelstuartcricketacademy.com' }],
    summary:
      'Website for a cricket academy in Bolton, UK: eight programme pages with WhatsApp enquiries, structured-data SEO and a scroll-driven 3D cricket scene. Next.js, Three.js, Vercel.',
  },
  {
    name: 'Cravorii Indian Lounge & Bar',
    period: '2026',
    links: [{ label: 'cravorii.com', href: 'https://cravorii.com' }],
    summary: 'Restaurant website in Bury, UK, with menus, a gallery and online table reservations. Next.js, Vercel.',
  },
  {
    name: 'Website support',
    period: 'Sep 2026 – Present',
    links: [],
    summary:
      'Ongoing support for six restaurants and venues in the UK and Switzerland, including moving one client’s hosting and domain into their own name with no email downtime.',
  },
];

export const otherProjects: Project[] = [
  {
    name: 'Carpool',
    period: 'Aug 2026',
    links: [],
    summary:
      'Android ride-sharing app where riders join part of a host’s route. PostGIS matching finds where a rider joins and leaves the route, pickup points are blurred for privacy, and fares are split per seat. Expo, Supabase, PostGIS, OSRM.',
  },
  {
    name: 'SalaryIQ',
    period: 'May 2026',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/salary-management' }],
    summary:
      'Salary management for 10,000 employees: paginated employee CRUD, salary insights by country, role and department, and a KPI dashboard. FastAPI, async SQLAlchemy, Next.js.',
  },
  {
    name: 'Multi-View Data Explorer',
    period: 'Mar 2026',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/MultiViewDataExplorer' }],
    summary:
      'One dataset shown as a synced table, chart and JSON view with shared filters, virtualized to stay fast at 1M+ rows. React, TypeScript, Vite.',
  },
  {
    name: 'Query Reports',
    period: '2025',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/query-reports' }],
    summary:
      'No-code SQL report builder: saved queries with variables become filter forms, with per-column filtering and styled Excel export. Used by the operations team at Integrated Active Monitoring.',
  },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { label: 'Backend', items: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'REST', 'WebSockets / Socket.IO', 'JWT / OAuth2'] },
  { label: 'Frontend & mobile', items: ['React', 'Next.js', 'React Native (Expo)', 'TanStack Query'] },
  { label: 'Data', items: ['PostgreSQL', 'Supabase', 'PostGIS', 'MySQL', 'Redis'] },
  { label: 'AI', items: ['Gemini API for grading, generation and document parsing'] },
  {
    label: 'Infrastructure',
    items: ['AWS (EC2, S3)', 'Docker', 'Nginx', 'Linux servers', 'Cloudflare', 'Vercel', 'GitHub Actions'],
  },
];

export const education = [
  {
    school: 'Vishwakarma Institute of Technology, Pune',
    period: '2020 – 2024',
    detail: 'B.Tech, Mechanical Engineering · CGPA 8.57/10',
  },
];
