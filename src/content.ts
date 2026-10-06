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
  title: 'Senior Software Engineer',
  focus: 'Applied AI, LLM agents and full-stack systems',
  location: 'Pune, India',
  siteUrl: 'https://adityayinamdar.github.io/AdityaYInamdar/',
  resume: 'Aditya_Inamdar_Resume.pdf',
  email: 'aditya.inamdar10@gmail.com',
  phone: '+91 83294 60483',
  github: 'https://github.com/AdityaYInamdar',
  linkedin: 'https://www.linkedin.com/in/adityyinamdar',
  summary:
    'I’ve spent 3+ years shipping production systems and now focus on applied AI: agentic LLM workflows on the Claude, OpenAI and Gemini APIs, on a full-stack base of Python, FastAPI, React, PostgreSQL and AWS. Outside my day job I run my own hiring platform and build web and mobile products for clients in India and the UK.',
  now: [
    { text: 'Senior Software Engineer at Metron Security, building LLM-powered delivery automation.' },
    {
      text: 'Building ProctoHire, a proctored assessment and hiring platform:',
      link: { label: 'proctohire.com', href: 'https://proctohire.com' },
    },
    { text: 'Releasing an iOS coaching app for a UK cricket academy on the App Store.' },
  ] as { text: string; link?: Link }[],
};

export const experience: {
  company: string;
  role: string;
  period: string;
  note?: string;
  points: string[];
  stack: string[];
}[] = [
  {
    company: 'Metron Security',
    role: 'Senior Software Engineer',
    period: 'Jun 2025 – Present',
    note: 'Promoted from Software Engineer in May 2026.',
    points: [
      'Built a multi-stage, LLM-powered software delivery pipeline on the Anthropic Claude API that automates research, documentation, spec writing, validation and deployment, raising team productivity by 50–60%.',
      'Designed an agentic system that routes natural-language commands to the right automation through tool calling and context-injected instructions, so non-technical teammates can run multi-step workflows end to end.',
      'Codified reusable AI engineering workflows with Claude Code, custom Claude Skills and MCP integrations, cutting delivery time for each new automation.',
      'Built Python integration services for a CrowdStrike-based security plugin platform across REST APIs with varied auth (OAuth2, API key, HMAC, AWS SigV4), with retries, structured logging and CI/CD on AWS.',
    ],
    stack: ['Python', 'Claude API', 'Claude Code', 'MCP', 'FastAPI', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    company: 'Integrated Active Monitoring',
    role: 'Full Stack Engineer',
    period: 'Nov 2022 – Jun 2025',
    points: [
      'Owned every layer of a production ERP with 30+ modules used daily by 100+ field engineers (schema, FastAPI backend, React/TypeScript frontend, deployment), with zero downtime over 2.5 years.',
      'Designed 40+ FastAPI endpoints on a three-layer architecture at p95 under 200ms. Fixed missing indexes and N+1 queries to cut report queries from 8s to under 3s, and added Redis caching that cut database load ~40%.',
      'Implemented JWT auth with three-role RBAC (zero access-control incidents), drove pytest coverage above 90% on core logic, and refactored ~3,000 lines of procedural code into a service layer.',
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
      'A proctored assessment and hiring platform. Companies run technical tests and interviews, review integrity evidence, and move candidates from invite to offer. It is live in production and sent 743 candidate invitations in the 90 days to September 2026.',
    points: [
      'Integrity engine: tab-switch, focus and copy-paste tracking, webcam and screen clips, server-side detection of pasted code from keystroke logs, and keystroke replay, combined into a 0–100 integrity score per attempt.',
      'MCQ, SQL, Python, JavaScript, C++, spreadsheet and descriptive questions; code runs against test cases in 22 languages. Gemini grades open-ended answers, generates tests and parses resumes.',
      'Multi-tenant SaaS with hiring pipelines (automatic stage moves, campus drives with bulk invites, one-way video interviews, online offer letters), signed webhooks and a public API.',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Socket.IO', 'PostgreSQL (Supabase)', 'Gemini API', 'Nginx', 'Hetzner', 'Cloudflare'],
  },
  {
    name: 'JobPipe',
    role: 'Personal project',
    period: '2026',
    links: [],
    summary: 'An LLM-powered job matching and document generation engine.',
    points: [
      'Pulls postings from 8 ATS platform APIs (Greenhouse, Lever, Ashby, Workday and more) with automatic source detection, normalization, SQLite deduplication and weighted relevance scoring.',
      'A grounded generation layer on the Claude API writes tailored, ATS-safe PDF documents from a verified fact bank, and a validation guardrail blocks hallucinated technologies and unverifiable metrics before output.',
    ],
    stack: ['Python', 'Claude API', 'SQLite', 'LaTeX'],
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
  {
    label: 'AI & LLMs',
    items: [
      'Agentic and multi-agent systems',
      'RAG',
      'tool calling',
      'MCP',
      'prompt engineering',
      'evals and guardrails',
      'fine-tuning (LoRA)',
    ],
  },
  {
    label: 'LLM tooling',
    items: [
      'Claude API',
      'OpenAI API',
      'Gemini API',
      'LangChain',
      'LangGraph',
      'CrewAI',
      'Claude Code',
      'Langfuse',
      'LangSmith',
      'Ollama',
      'vLLM',
    ],
  },
  { label: 'Backend', items: ['Python', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'REST', 'WebSockets', 'microservices'] },
  { label: 'Data', items: ['PostgreSQL', 'pgvector', 'Pinecone', 'Qdrant', 'Supabase', 'MySQL', 'Redis'] },
  { label: 'Frontend & mobile', items: ['React', 'TypeScript', 'Next.js', 'React Native (Expo)'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS (EC2, S3, IAM)', 'Docker', 'Nginx', 'Cloudflare', 'Linux', 'GitHub Actions', 'OAuth2 / JWT / RBAC'],
  },
];

export const education = [
  {
    school: 'Vishwakarma Institute of Technology, Pune',
    period: '2020 – 2024',
    detail: 'B.Tech, Mechanical Engineering · CGPA 8.57/10',
  },
];
