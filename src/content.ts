// All site copy lives here. Edit this file to update the site.

export type Link = { label: string; href: string };

export const profile = {
  name: 'Aditya Inamdar',
  title: 'Software Engineer',
  location: 'Pune, India',
  siteUrl: 'https://adityayinamdar.github.io/AdityaYInamdar/',
  email: 'aditya.inamdar10@gmail.com',
  phone: '+91 83294 60483',
  github: 'https://github.com/AdityaYInamdar',
  linkedin: 'https://www.linkedin.com/in/adityyinamdar',
  summary:
    'Full-stack engineer with 3+ years of building production systems in Python, FastAPI, React and PostgreSQL. I build products end to end, from the database schema to deployment, for my employers, for clients, and for my own company.',
  now: [
    { text: 'Software Engineer at Metron Security.' },
    {
      text: 'Building ProctoHire, a technical hiring and assessment platform.',
      link: { label: 'proctohire.com', href: 'https://proctohire.com' },
    },
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

export const featuredProjects = [
  {
    name: 'ProctoHire',
    role: 'Founder and sole engineer',
    period: '2025 – Present',
    links: [{ label: 'proctohire.com', href: 'https://proctohire.com' }] as Link[],
    summary:
      'A remote technical interview and assessment platform: recruiters create tests, candidates take them in a proctored browser session, and results are graded automatically.',
    points: [
      'Five assessment types (Python, SQL, JavaScript, MCQ, descriptive) with sandboxed in-browser code execution.',
      'Real-time proctoring over WebSockets, role-based access for admins, recruiters and candidates, and automated plus manual grading.',
    ],
    stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL (Supabase)', 'Nginx', 'Hetzner'],
  },
];

export const clientWork: { name: string; summary: string; period: string; link?: Link }[] = [];

export const otherProjects = [
  {
    name: 'SalaryIQ',
    period: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/salary-management' }] as Link[],
    summary:
      'Salary management tool for 10,000 employees: paginated employee CRUD, salary insights by country, role and department, and a KPI dashboard. FastAPI, async SQLAlchemy, Next.js.',
  },
  {
    name: 'Multi-View Data Explorer',
    period: '2026',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/MultiViewDataExplorer' }] as Link[],
    summary:
      'One dataset shown as a synced table, chart and JSON view with shared filters, virtualized to stay fast at 1M+ rows. React, TypeScript, Vite.',
  },
  {
    name: 'Query Reports',
    period: '2025',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/query-reports' }] as Link[],
    summary:
      'No-code SQL report builder: saved queries with variables turn into filter forms, with per-column filtering and styled Excel export. Used by the operations team at Integrated Active Monitoring.',
  },
];

export const skills = [
  { label: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { label: 'Backend', items: ['FastAPI', 'SQLAlchemy', 'Pydantic', 'REST', 'WebSockets', 'JWT / OAuth2'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'TanStack Query'] },
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'Supabase'] },
  { label: 'Infrastructure', items: ['AWS (EC2, S3)', 'Docker', 'Nginx', 'Linux', 'GitHub Actions'] },
];

export const education = [
  {
    school: 'Vishwakarma Institute of Technology, Pune',
    period: '2020 – 2024',
    detail: 'B.Tech, Mechanical Engineering · CGPA 8.57/10',
  },
];
