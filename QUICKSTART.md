# ⚡ Quick Start Guide

## Immediate Next Steps

### 1. Finish Installation (if dependencies are still installing)

The npm install command is running. Once it completes, you'll see:
```
added 321 packages in 45s
```

### 2. Start Development Server

```bash
npm run dev
```

Open: **http://localhost:3000**

### 3. What You'll See

✅ **Hero**: Your name in large text with animated entry  
✅ **WebGL Background**: Blue rotating sphere with floating particles  
✅ **Smooth Scroll**: Weighted, cinematic feel  
✅ **Progressive Reveals**: Text and sections fade in as you scroll  
✅ **Scroll Progress**: Blue bar at top fills as you scroll  

---

## File Structure (What to Edit)

### 📝 Content Files (Update These First)

```
src/components/sections/
├── Hero.tsx           → Your name, title, location
├── Summary.tsx        → Professional summary lines
├── Experience.tsx     → Work history with highlights
├── Projects.tsx       → Featured projects with links
├── Skills.tsx         → Technical skills categorized
└── Contact.tsx        → Email, phone, GitHub, LinkedIn
```

### 🎨 Styling Files

```
tailwind.config.ts     → Colors (primary, secondary, accent)
src/app/globals.css    → Typography, animation classes
```

### 🎬 Animation Files

```
src/components/WebGLBackground.tsx  → 3D sphere and particles
src/app/page.tsx                    → Scroll system config
```

---

## Common Customizations

### Change Colors

**File**: `tailwind.config.ts`

```typescript
colors: {
  primary: '#0A0A0A',    // Background → Try '#1A1A1A' for lighter
  secondary: '#F5F5F5',  // Text → Try '#FFFFFF' for pure white
  accent: '#3B82F6',     // Highlights → Try '#10B981' for green
}
```

### Adjust Scroll Speed

**File**: `src/app/page.tsx` (line 27)

```typescript
const lenis = new Lenis({
  duration: 1.2,  // Lower = faster (try 0.8), Higher = slower (try 1.6)
  // ...
});
```

### Change Sphere Color

**File**: `src/components/WebGLBackground.tsx` (line 49)

```typescript
<MeshDistortMaterial
  color="#3B82F6"  // Change to any hex color
/>
```

### Reduce Particles (Better Performance)

**File**: `src/components/WebGLBackground.tsx` (line 69)

```typescript
const count = 100;  // Was 200 - lower for better FPS
```

---

## Testing Checklist

### Desktop
- [ ] Page loads without errors
- [ ] Scroll feels smooth and weighted
- [ ] All sections visible
- [ ] WebGL sphere rotates
- [ ] Text reveals progressively
- [ ] Links work
- [ ] Hover states work

### Mobile (Chrome DevTools → Toggle Device Toolbar)
- [ ] Touch scroll works
- [ ] Text is readable (not too small)
- [ ] No horizontal scroll
- [ ] Animations don't stutter
- [ ] Buttons are tappable

---

## Deployment (When Ready)

### Option 1: Vercel (Easiest)

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts → Get live URL in ~2 minutes

### Option 2: Build Manually

```bash
npm run build
npm start
```

Then deploy `.next/` folder to any static host.

---

## Troubleshooting

### Dependencies Won't Install
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Dev Server Won't Start
- Check port 3000 isn't in use
- Try: `npm run dev -- -p 3001`

### Animations Stuttering
- Reduce particle count (100 instead of 200)
- Check Chrome FPS meter (DevTools → Rendering)
- Disable some animations on scroll

### WebGL Not Showing
- Try different browser (Chrome recommended)
- Check GPU acceleration is enabled
- Visit: https://get.webgl.org/

### TypeScript Errors
- Wait for dependencies to finish installing
- Restart VS Code
- Run: `npm run build` to check for real errors

---

## Documentation Index

| File | Purpose |
|------|---------|
| **README.md** | Overview, features, setup basics |
| **SETUP.md** | Step-by-step installation guide |
| **ARCHITECTURE.md** | Technical decisions, deep dive |
| **SITE_STRUCTURE.md** | Visual layout, component hierarchy |
| **QUICKSTART.md** | This file - immediate actions |

---

## Performance Targets

| Metric | Target | How to Check |
|--------|--------|--------------|
| **FPS** | 60 | Chrome DevTools → Rendering → FPS Meter |
| **Load Time** | < 3s | Network tab → Load event |
| **Bundle Size** | < 500KB | npm run build → output report |
| **Lighthouse Score** | 90+ | DevTools → Lighthouse → Run audit |

---

## What Makes This Premium?

✅ **Scroll-driven timeline** (not just vertical stacking)  
✅ **WebGL background** (real 3D depth)  
✅ **Smooth momentum scroll** (Lenis)  
✅ **GPU-accelerated animations** (60fps guaranteed)  
✅ **Progressive text reveals** (no walls of text)  
✅ **Production-ready code** (TypeScript, best practices)  
✅ **Fully responsive** (desktop, tablet, mobile)  
✅ **Comprehensive docs** (you're reading it!)  

---

## Next Enhancements (Optional)

- [ ] Add custom cursor follower
- [ ] Add preloader with percentage
- [ ] Add sound design (subtle audio feedback)
- [ ] Add case study pages for projects
- [ ] Add contact form (Formspree integration)
- [ ] Add analytics (Google Analytics / Plausible)
- [ ] Add blog section
- [ ] Add dark/light mode toggle

---

## Support

**Questions?** → aditya.inamdar10@gmail.com  
**Bugs?** → Check GitHub Issues for GSAP, Next.js, Three.js  
**Inspiration?** → https://www.olhalazarieva.com/  

---

**You're all set! Time to customize and deploy.** 🚀

Run `npm run dev` and start editing!
