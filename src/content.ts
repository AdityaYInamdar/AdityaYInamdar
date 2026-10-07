// All site copy lives here. Edit this file to update the site.

export type Link = { label: string; href: string };

export type Project = {
  name: string;
  period: string;
  summary: string;
  links: Link[];
};

export type FeaturedProject = Omit<Project, 'summary'> & {
  summary?: string;
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
    'I’ve spent 3+ years shipping production systems and now specialize in applied AI: agentic LLM workflows on the Claude, OpenAI and Gemini APIs. I build on a full-stack base of Python, FastAPI, React, PostgreSQL and AWS.',
  now: [
    { text: 'Building LLM delivery automation at Metron Security (team productivity up 50–60%).' },
    {
      text: 'Building ProctoHire, my own proctored assessment and hiring platform:',
      link: { label: 'proctohire.com', href: 'https://proctohire.com' },
    },
    { text: 'Freelancing for Indian and UK clients, including an iOS app for a UK cricket academy.' },
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
      'Built a multi-stage, LLM-powered software delivery pipeline on the Anthropic Claude API that automates research, documentation, spec writing, validation and deployment, raising team productivity 50–60%.',
      'Designed an agentic system that routes natural-language commands to the right automation through tool calling and context-injected instructions, so non-technical teammates can run multi-step workflows end to end.',
      'Codified reusable AI engineering workflows with Claude Code, custom Claude Skills and MCP integrations, cutting delivery time for each new automation.',
      'Built Python integrations for a CrowdStrike-based security plugin platform across REST APIs with varied auth (OAuth2, API key, HMAC, AWS SigV4), shipped on AWS with CI/CD.',
    ],
    stack: ['Python', 'Claude API', 'Claude Code', 'MCP', 'FastAPI', 'AWS', 'Docker', 'GitHub Actions'],
  },
  {
    company: 'Integrated Active Monitoring',
    role: 'Full Stack Engineer',
    period: 'Nov 2022 – Jun 2025',
    points: [
      'Owned every layer (schema, FastAPI, React/TypeScript, deployment) of a 30+ module production ERP used daily by 100+ field engineers, with zero downtime over 2.5 years.',
      'Designed 40+ FastAPI endpoints (p95 under 200ms), cut report queries from 8s to under 3s by fixing indexes and N+1 ORM queries, and cut database load ~40% with Redis caching.',
      'Implemented JWT auth with three-role RBAC (zero access-control incidents), drove pytest coverage above 90% on core logic, and refactored ~3,000 lines into a service layer.',
    ],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'WebSockets'],
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'ProctoHire',
    role: 'My own product, built end to end',
    period: '2026 – Present',
    links: [{ label: 'proctohire.com', href: 'https://proctohire.com' }],
    summary:
      'A proctored assessment and hiring platform, in production with a paying customer and 700+ candidate invitations sent in 90 days.',
    points: [
      'Integrity engine: tab-switch, focus and copy-paste tracking with a 0–100 score per attempt, plus webcam and screen clips, pasted-code detection and keystroke replay.',
      'Gemini grades open-ended answers, generates tests and parses résumés; code questions run against test cases in 22 languages.',
      'Multi-tenant SaaS with automated hiring stages, campus drives, one-way video interviews, online offer letters, signed webhooks and a public API.',
    ],
    stack: ['React', 'TypeScript', 'FastAPI', 'Socket.IO', 'Supabase (Postgres)', 'Gemini API', 'Hetzner', 'Cloudflare'],
  },
  {
    name: 'JobPipe',
    role: 'Personal project: an LLM-powered job matching and document generation engine',
    period: '2026',
    links: [],
    points: [
      'Pulls postings from 8 ATS APIs (Greenhouse, Lever, Ashby, Workday and more), then normalizes, deduplicates in SQLite and ranks them with weighted relevance scoring.',
      'Grounded generation on the Claude API writes tailored documents from a verified fact bank; a guardrail blocks hallucinated technologies and unverifiable metrics.',
    ],
    stack: ['Python', 'Claude API', 'SQLite', 'LaTeX'],
  },
  {
    name: 'JSCA Player Development',
    role: 'Client: a cricket academy in Bolton, UK',
    period: 'Jul 2026 – Present',
    links: [{ label: 'jameelstuartcricketacademy.com', href: 'https://www.jameelstuartcricketacademy.com' }],
    summary:
      'An iOS coaching app with coach, parent and player accounts, built around the academy’s player-development method, plus the academy’s website.',
    points: [
      'Coaches log a session by typing or dictating one sentence, and AI drafts the rest; assessments feed a Skill Index compared before and after each 28-day block.',
      'Parents and players get notes, videos, homework and deep-linked push notifications; row-level security on every table keeps each family’s data private.',
    ],
    stack: ['Expo', 'React Native', 'TypeScript', 'Supabase (Postgres, RLS, Edge Functions)', 'Gemini API', 'Next.js'],
  },
];

export const clientWork: Project[] = [
  {
    name: 'Nourish Agro',
    period: 'Aug 2026',
    links: [{ label: 'nourishagro.com', href: 'https://nourishagro.com' }],
    summary: 'Rebuilt a Pune organic food brand’s store as a 90-product Next.js shop with WhatsApp ordering.',
  },
  {
    name: 'The Modern Guitar Mentorship',
    period: 'Jul – Sep 2026',
    links: [{ label: 'varadguitar.com', href: 'https://varadguitar.com' }],
    summary: 'Lead funnel for a jazz guitar mentor: gated masterclass, email nurture, applications, Calendly.',
  },
  {
    name: 'Cravorii Indian Lounge & Bar',
    period: '2026',
    links: [{ label: 'cravorii.com', href: 'https://cravorii.com' }],
    summary: 'Restaurant website in Bury, UK, with menus, a gallery and online table reservations.',
  },
];

export const otherProjects: Project[] = [
  {
    name: 'Carpool',
    period: 'Aug 2026',
    links: [],
    summary: 'Android ride-sharing app with PostGIS matching of where riders join and leave a host’s route.',
  },
  {
    name: 'Query Reports',
    period: '2025',
    links: [{ label: 'GitHub', href: 'https://github.com/AdityaYInamdar/query-reports' }],
    summary: 'No-code SQL report builder with filter forms and Excel export, used at Integrated Active Monitoring.',
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
