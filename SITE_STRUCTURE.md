# Site Structure & Experience Flow

## Visual Site Map

```
┌──────────────────────────────────────────────────────────────┐
│                    SCROLL TIMELINE (0% → 100%)                │
└──────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [0% - 15%] HERO SECTION                                            │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │                                                             │      │
│  │                     Aditya Inamdar                          │      │
│  │                  Software Engineer                          │      │
│  │                     Pune, India                             │      │
│  │                                                             │      │
│  └───────────────────────────────────────────────────────────┘      │
│  Entrance: Text fades + scales in                                   │
│  Scroll: Parallax fade out                                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [15% - 30%] SUMMARY SECTION                                        │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │  Overview                                                   │      │
│  │                                                             │      │
│  │  → Building and operating                                   │      │
│  │  → production systems                                       │      │
│  │  → for 3+ years.                                            │      │
│  │                                                             │      │
│  │  → Backend engineering,                                     │      │
│  │  → API design,                                              │      │
│  │  → automation...                                            │      │
│  └───────────────────────────────────────────────────────────┘      │
│  Entrance: Scale + fade in                                          │
│  Text: Line-by-line reveal with stagger                             │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [30% - 55%] EXPERIENCE SECTION                                     │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │  Experience                                                 │      │
│  │                                                             │      │
│  │  Jun 2025 — Present     Software Engineer                  │      │
│  │                         Metron Security                     │      │
│  │                         → Backend services...               │      │
│  │                         → Secure API communication...       │      │
│  │                                                             │      │
│  │  Nov 2022 — Jun 2025    Full Stack Engineer                │      │
│  │                         Integrated Active Monitoring        │      │
│  │                         → Owned production ERP...           │      │
│  │                         → Designed API-first backend...     │      │
│  └───────────────────────────────────────────────────────────┘      │
│  Entrance: Slide from left with fade                                │
│  Individual items: Sequential reveal                                │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [55% - 80%] PROJECTS SECTION                                       │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │  Selected Work                                              │      │
│  │                                                             │      │
│  │  ┌─────────────────────────────────────────────────┐       │      │
│  │  │  Query Reports                                   │       │      │
│  │  │                                                   │       │      │
│  │  │  Data processing and reporting platform...       │       │      │
│  │  │                                                   │       │      │
│  │  │  [Python] [FastAPI] [PostgreSQL] [Redis]         │       │      │
│  │  │                                                   │       │      │
│  │  │  Live Demo →  GitHub →                           │       │      │
│  │  └─────────────────────────────────────────────────┘       │      │
│  └───────────────────────────────────────────────────────────┘      │
│  Entrance: Vertical slide + fade                                    │
│  Cards: Hover effects, glass morphism style                         │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [80% - 90%] SKILLS SECTION                                         │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │  Technical Focus                                            │      │
│  │                                                             │      │
│  │  Languages & Frameworks    Backend & APIs                  │      │
│  │  [Python] [JavaScript]     [REST APIs] [Microservices]     │      │
│  │  [TypeScript] [FastAPI]    [Data Pipelines]                │      │
│  │                                                             │      │
│  │  Databases                 Infrastructure                   │      │
│  │  [PostgreSQL] [MySQL]      [AWS] [Docker]                  │      │
│  │  [Redis]                   [CI/CD]                          │      │
│  └───────────────────────────────────────────────────────────┘      │
│  Entrance: Alternating left/right slide                             │
│  Pills: Hover states with color transition                          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  [90% - 100%] CONTACT SECTION                                       │
│  ┌───────────────────────────────────────────────────────────┐      │
│  │                                                             │      │
│  │                  Let's Connect                              │      │
│  │                                                             │      │
│  │         Email                                               │      │
│  │         aditya.inamdar10@gmail.com                          │      │
│  │                                                             │      │
│  │         Mobile                                              │      │
│  │         +91 8329460483                                      │      │
│  │                                                             │      │
│  │         GitHub                                              │      │
│  │         github.com/adityainamdar                            │      │
│  │                                                             │      │
│  │         LinkedIn                                            │      │
│  │         linkedin.com/in/adityainamdar                       │      │
│  │                                                             │      │
│  └───────────────────────────────────────────────────────────┘      │
│  Entrance: Scale + fade heading, stagger links                      │
│  Links: Hover color change (white → blue)                           │
└─────────────────────────────────────────────────────────────────────┘
```

## Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│  Layer 4: USER INTERACTION                                  │
│  (Mouse, Touch, Scroll Events)                              │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  Layer 3: SCROLL SYSTEM                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  Lenis Smooth Scroll                                  │  │
│  │  • Intercepts native scroll                           │  │
│  │  • Converts to normalized progress (0.0 → 1.0)       │  │
│  │  • Applies easing and momentum                        │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  Layer 2: ANIMATION ENGINE                                  │
│  ┌───────────────────────────────────────────────────────┐  │
│  │  GSAP + ScrollTrigger                                 │  │
│  │  • Maps scroll progress to animation states          │  │
│  │  • Triggers section transitions                      │  │
│  │  • Controls timeline playback                        │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│  Layer 1: VISUAL RENDERING                                  │
│  ┌────────────────────────┐  ┌──────────────────────────┐  │
│  │  WebGL Background      │  │  DOM Content              │  │
│  │  (Three.js)            │  │  (React Components)       │  │
│  │                        │  │                           │  │
│  │  • Animated sphere     │  │  • Hero                   │  │
│  │  • Particle system     │  │  • Summary                │  │
│  │  • Dynamic lighting    │  │  • Experience             │  │
│  │  • Scroll-reactive     │  │  • Projects               │  │
│  │                        │  │  • Skills                 │  │
│  │  z-index: 0            │  │  • Contact                │  │
│  │                        │  │                           │  │
│  │                        │  │  z-index: 10              │  │
│  └────────────────────────┘  └──────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App (page.tsx)
│
├── WebGLBackground
│   ├── Canvas (React Three Fiber)
│   │   ├── Lights
│   │   ├── AnimatedSphere
│   │   │   └── MeshDistortMaterial
│   │   └── Particles
│   │       └── PointsMaterial
│
├── ScrollProgress
│   └── Progress Bar (fixed top)
│
└── Content Wrapper
    ├── Hero
    │   ├── Name (h1)
    │   ├── Title (p)
    │   └── Location (p)
    │
    ├── Summary
    │   ├── Heading
    │   └── RevealText[] (staggered)
    │
    ├── Experience
    │   ├── Heading
    │   └── ExperienceItem[]
    │       ├── Period
    │       ├── Role
    │       ├── Company
    │       └── Highlights[]
    │
    ├── Projects
    │   ├── Heading
    │   └── ProjectCard[]
    │       ├── Title
    │       ├── Description
    │       ├── Tech Tags[]
    │       └── Links
    │
    ├── Skills
    │   ├── Heading
    │   └── SkillCategory[]
    │       ├── Category Title
    │       └── Skill Pills[]
    │
    └── Contact
        ├── Heading
        └── ContactLink[]
            ├── Label
            └── Value (link)
```

## Data Flow

```
User scrolls
    ↓
Lenis calculates scroll delta
    ↓
Updates scroll position (requestAnimationFrame)
    ↓
GSAP ScrollTrigger detects position change
    ↓
Matches against registered triggers
    ↓
Calculates animation progress (0.0 → 1.0)
    ↓
Updates DOM transforms (translate, scale, opacity)
    ↓
Updates WebGL uniforms (rotation, position)
    ↓
Browser repaints (GPU-accelerated)
    ↓
User sees smooth animation
```

## File Organization

```
Portfolio3d/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout, fonts, metadata
│   │   ├── page.tsx           # Main page, scroll setup
│   │   └── globals.css        # Global styles, animations
│   │
│   └── components/
│       ├── WebGLBackground.tsx    # Three.js scene
│       ├── ScrollProgress.tsx     # Progress indicator
│       │
│       ├── sections/
│       │   ├── Hero.tsx           # Intro section
│       │   ├── Summary.tsx        # Professional summary
│       │   ├── Experience.tsx     # Work timeline
│       │   ├── Projects.tsx       # Featured projects
│       │   ├── Skills.tsx         # Technical skills
│       │   └── Contact.tsx        # Contact links
│       │
│       └── ui/
│           └── RevealText.tsx     # Animated text component
│
├── public/                    # Static assets (images, etc.)
│
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies
│
├── README.md                  # Main documentation
├── SETUP.md                   # Step-by-step setup guide
├── ARCHITECTURE.md            # Technical deep-dive
└── SITE_STRUCTURE.md          # This file
```

## Animation Timing

```
Timeline: 0.0 ────────────────────────────────────────────→ 1.0
          │                                                  │
          │                                                  │
Hero:     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
          0.00 ────→ 0.15
                      ↑ Fade out

Summary:  ░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░
                      0.15 ────→ 0.30
                           ↑ Fade in   ↑ Fade out

Experience: ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░
                                      0.30 ────→ 0.55

Projects: ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓
                                                  0.55 ────→ 0.80

Skills:   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▓▓
                                                          0.80 → 0.90

Contact:  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                                                              0.90 → 1.0
```

Legend:
- ▓ = Active (visible, animating)
- ░ = Inactive (hidden or static)

## Key Interactions

1. **Initial Load**
   - Preload fonts and assets
   - Initialize Lenis smooth scroll
   - Register GSAP ScrollTriggers
   - Start WebGL render loop

2. **Scroll Down**
   - Hero fades out (parallax)
   - Summary fades in (scale + opacity)
   - Text reveals line-by-line
   - WebGL sphere rotates

3. **Scroll Up**
   - Reverse playback (scroll-scrubbed)
   - Sections fade back in
   - Maintains smooth momentum

4. **Hover States**
   - Links: color change (white → blue)
   - Skill pills: border + text color
   - Project cards: subtle lift effect

5. **Mobile Touch**
   - Native scroll (no Lenis smooth)
   - Reduced animation intensity
   - Touch-optimized targets (44x44px min)

---

**This structure ensures:**
- Linear narrative flow
- Controlled pacing
- Minimal cognitive load
- Maximum visual impact
