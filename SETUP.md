# Setup Guide — Step by Step

This guide walks you through setting up the interactive portfolio from scratch.

---

## Prerequisites

Before starting, ensure you have:

- **Node.js** 18.0 or higher ([download here](https://nodejs.org/))
- **npm** 9.0+ (comes with Node.js)
- **Git** (optional, for version control)
- **VS Code** (recommended editor)

Check your versions:
```bash
node --version   # Should be v18.0.0 or higher
npm --version    # Should be 9.0.0 or higher
```

---

## Step 1: Install Dependencies

Navigate to the project directory and install all packages:

```bash
cd c:\Users\ASUS\Projects\Portfolio3d
npm install
```

This will install:
- Next.js (framework)
- React (UI library)
- Three.js (WebGL rendering)
- GSAP (animations)
- Lenis (smooth scroll)
- TypeScript (type safety)
- Tailwind CSS (styling)

**Installation takes ~2-3 minutes** depending on your connection.

---

## Step 2: Start Development Server

Run the development server:

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- ready in 2.3s
```

Open **http://localhost:3000** in your browser.

---

## Step 3: Verify Everything Works

### Check 1: Page Loads
- You should see "Aditya Inamdar" in large text
- Background should show animated 3D sphere

### Check 2: Smooth Scroll
- Scroll down slowly
- Motion should feel smooth and weighted (not instant)

### Check 3: Animations
- Text should fade in progressively
- Sections should slide into view
- Scroll progress bar at top should fill

### Check 4: WebGL Background
- Blue sphere should rotate slowly
- Particles should float in space
- Sphere should move with scroll

**If any check fails**, see Troubleshooting section below.

---

## Step 4: Customize Content

Edit these files to update your information:

### 1. Personal Info (Hero Section)
**File:** `src/components/sections/Hero.tsx`

```typescript
<h1>Your Name</h1>
<p>Your Title</p>
<p>Your Location</p>
```

### 2. Professional Summary
**File:** `src/components/sections/Summary.tsx`

Update the `summaryLines` array:
```typescript
const summaryLines = [
  "Your first line",
  "Your second line",
  // ...
];
```

### 3. Work Experience
**File:** `src/components/sections/Experience.tsx`

Update the `experiences` array:
```typescript
const experiences: ExperienceItem[] = [
  {
    period: 'Jan 2024 — Present',
    role: 'Your Role',
    company: 'Company Name',
    highlights: [
      'Your achievement 1',
      'Your achievement 2',
    ],
  },
];
```

### 4. Projects
**File:** `src/components/sections/Projects.tsx`

Update the `projects` array:
```typescript
const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2'],
    links: {
      demo: 'https://demo.com',
      github: 'https://github.com/...',
    },
  },
];
```

### 5. Skills
**File:** `src/components/sections/Skills.tsx`

Update `skillCategories`:
```typescript
const skillCategories = [
  {
    title: 'Category Name',
    skills: ['Skill1', 'Skill2'],
  },
];
```

### 6. Contact Info
**File:** `src/components/sections/Contact.tsx`

Update `contactLinks`:
```typescript
const contactLinks = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
];
```

---

## Step 5: Customize Styling

### Colors

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: '#0A0A0A',    // Background color
  secondary: '#F5F5F5',  // Text color
  accent: '#3B82F6',     // Accent/link color
}
```

### Typography

**File:** `src/app/layout.tsx`

Change fonts (currently using Inter and Space Grotesk):
```typescript
import { YourFont } from "next/font/google";
```

Browse Google Fonts: https://fonts.google.com/

### WebGL Sphere Color

**File:** `src/components/WebGLBackground.tsx`

```typescript
<MeshDistortMaterial
  color="#3B82F6"  // Change this hex code
/>
```

---

## Step 6: Test Responsiveness

### Desktop
- Open in Chrome DevTools (F12)
- Responsive mode (Ctrl+Shift+M)
- Test at: 1920x1080, 1440x900, 1280x720

### Tablet
- Test at: 768x1024 (iPad)

### Mobile
- Test at: 375x667 (iPhone SE), 414x896 (iPhone 11)

**Key checks:**
- Text is readable
- Buttons are tappable (min 44x44px)
- No horizontal scroll
- Animations don't stutter

---

## Step 7: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build:
- Minified JavaScript
- Optimized images (if added)
- Removed development code
- Tree-shaken CSS

**Build takes ~30-60 seconds**.

Test the production build locally:
```bash
npm start
```

Open **http://localhost:3000** to verify.

---

## Step 8: Deploy to Vercel (Recommended)

### Option A: With Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts:
1. Set up and deploy? **Yes**
2. Which scope? **Your account**
3. Link to existing project? **No**
4. What's your project's name? **portfolio-3d**
5. In which directory? **./
6. Override settings? **No**

Vercel will:
- Upload your code
- Build automatically
- Assign a URL (e.g., portfolio-3d.vercel.app)

### Option B: With GitHub + Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

**Deployment takes ~2-3 minutes**.

---

## Step 9: Set Up Custom Domain (Optional)

If you have a custom domain (e.g., your-name.com):

### Vercel Dashboard
1. Go to your project
2. Click "Domains"
3. Add your domain
4. Follow DNS setup instructions

### DNS Configuration
Add these records to your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**DNS propagation takes 5-15 minutes**.

---

## Step 10: Performance Optimization

### Check Web Vitals

1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Run audit (Mobile + Desktop)

**Target scores:**
- Performance: 90+
- Accessibility: 85+
- Best Practices: 95+
- SEO: 90+

### Optimize if Needed

**If Performance < 90:**
- Reduce WebGL particles (from 200 to 100)
- Disable some animations on mobile
- Lazy load below-fold content

**If bundle size is large:**
- Check import statements (use named imports)
- Remove unused dependencies
- Enable experimental `optimizePackageImports` in Next.js

---

## Troubleshooting

### Issue: "Module not found" errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Animations not working

**Check:**
1. Browser console for errors
2. GSAP is imported in component
3. Refs are attached to DOM elements

**Debug:**
```typescript
ScrollTrigger.getAll().forEach(st => console.log(st));
```

### Issue: WebGL not rendering

**Check:**
- Browser supports WebGL (visit https://get.webgl.org/)
- No console errors from Three.js
- Canvas element is in DOM

**Debug:**
```typescript
console.log(Canvas, AnimatedSphere); // Should not be undefined
```

### Issue: Page loads slowly

**Check:**
- Network tab in DevTools
- Large assets being loaded?
- Too many animations running?

**Solution:**
- Reduce initial animations
- Add loading state
- Defer non-critical assets

### Issue: Scroll feels laggy

**Check:**
- Browser FPS (DevTools > Rendering > FPS meter)
- GPU usage

**Solution:**
```typescript
// Reduce particle count
const count = 100; // was 200

// Reduce animation scrub sensitivity
scrollTrigger: {
  scrub: 2, // was 1 (higher = more lag/smoother)
}
```

### Issue: Mobile scroll doesn't work

**Check:**
- `smoothTouch` is set to `false` in Lenis config

**Solution:**
```typescript
const lenis = new Lenis({
  // ...
  smoothTouch: false, // Important for mobile
});
```

---

## Next Steps

✅ **Content is updated**  
✅ **Styling is customized**  
✅ **Site is deployed**  

### Enhancements to Consider

1. **Add Google Analytics**
   - Track visitor behavior
   - Measure scroll depth

2. **Add Contact Form**
   - Use Formspree or similar
   - Capture leads

3. **Add Blog Section**
   - Write about projects
   - Share technical insights

4. **Add Dark/Light Mode Toggle**
   - User preference
   - System detection

5. **Add More Projects**
   - Case studies
   - Video demos

---

## Getting Help

If you encounter issues:

1. **Check documentation:** README.md, ARCHITECTURE.md
2. **Search GitHub Issues:** Next.js, GSAP, Three.js repos
3. **Ask community:** Stack Overflow, Reddit (r/webdev)
4. **Contact me:** aditya.inamdar10@gmail.com

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [Three.js Journey](https://threejs-journey.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)

---

**You're ready to launch!** 🚀
