# Site Architecture & Technical Design

## Overview

This portfolio is architected as a **scroll-driven experience engine**, not a traditional website. Every technical decision prioritizes motion quality, performance, and narrative control.

---

## 1. Scroll System Architecture

### How Scrolling Works

```
User Scroll Input
        ↓
Lenis Smooth Scroll (intercepts native scroll)
        ↓
Normalized Progress Value (0.0 → 1.0)
        ↓
GSAP ScrollTrigger (maps progress to animations)
        ↓
GPU-Accelerated Transforms (apply visual changes)
```

### Why This Approach?

**Native scroll** = jarring, inconsistent across browsers  
**Smooth scroll** = cinematic, controlled, predictable

### Implementation Details

```typescript
// Lenis configuration
const lenis = new Lenis({
  duration: 1.2,              // Scroll animation duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,               // Enable smooth scrolling
  smoothTouch: false,         // Disable on mobile (native is better)
});

// Connect to GSAP
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

---

## 2. Animation Timeline System

### Conceptual Model

The site operates on a **linear timeline** where scroll position directly controls animation states:

```
Progress:  0%        15%       30%        55%        80%     100%
Section:   [Hero] → [Summary] → [Experience] → [Projects] → [Skills] → [Contact]
State:     Enter    Animate    Hold        Exit       ...
```

### Scroll-Triggered Animations

Each section uses **ScrollTrigger** to define animation ranges:

```typescript
gsap.from(element, {
  opacity: 0,
  y: 100,
  scrollTrigger: {
    trigger: element,        // What element to watch
    start: 'top 80%',       // Start when top hits 80% of viewport
    end: 'top 30%',         // End when top hits 30% of viewport
    scrub: 1,               // Smooth scrubbing (1 = 1 second lag)
  },
});
```

### Animation Performance

All animations use **GPU-accelerated properties**:
- ✅ `transform: translate()`
- ✅ `transform: scale()`
- ✅ `opacity`
- ❌ `width`, `height`, `top`, `left` (cause reflow)

---

## 3. WebGL Layer Architecture

### Component Hierarchy

```
<Canvas> (React Three Fiber)
  ├── <Lighting> (ambientLight, directionalLight, pointLight)
  ├── <AnimatedSphere> (main visual focal point)
  │     └── <MeshDistortMaterial> (animated distortion)
  └── <Particles> (200 floating points)
```

### Rendering Loop

```javascript
useFrame((state) => {
  // Runs at 60fps (or display refresh rate)
  sphere.rotation.x = state.clock.elapsedTime * 0.1;
  sphere.rotation.y = state.clock.elapsedTime * 0.15;
});
```

### Why WebGL?

- **2D animations** = limited depth, flat feeling
- **WebGL** = real 3D depth, dynamic lighting, professional polish

### Performance Considerations

- Low polygon count (128x128 sphere)
- Minimal particles (200 points)
- No post-processing effects (too expensive)
- Simplified on mobile (via media queries)

---

## 4. Component Architecture

### Design Patterns Used

1. **Composition over inheritance**
   - Small, focused components
   - Reusable UI primitives (`RevealText`)

2. **Ref-based imperative animations**
   - Direct DOM manipulation via refs
   - Avoids React re-renders during animations

3. **Context isolation**
   - Each section manages its own GSAP context
   - Prevents memory leaks

### Example: Section Component Pattern

```typescript
export default function Section() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create GSAP context (auto-cleanup on unmount)
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, { /* animation */ });
    }, containerRef);
    
    return () => ctx.revert(); // Cleanup
  }, []);
  
  return <section ref={containerRef}>...</section>;
}
```

---

## 5. State Management

### No Global State Needed

This site **does not use Redux, Context, or Zustand** because:
- No user interactions beyond scroll
- No form state to manage
- No data fetching (static content)

### State Sources

1. **Scroll position** (managed by Lenis)
2. **Animation timelines** (managed by GSAP)
3. **WebGL state** (managed by Three.js)

---

## 6. Responsive Strategy

### Breakpoint Philosophy

```
Mobile:  < 768px   → Simplified, essential animations
Tablet:  768-1024  → Reduced intensity
Desktop: > 1024px  → Full experience
```

### Adaptive Techniques

1. **CSS media queries** (basic layout)
2. **Conditional animation intensity** (via JavaScript)
3. **Touch vs. mouse detection** (different scroll handling)

### Mobile Optimizations

```typescript
const isMobile = window.innerWidth < 768;

gsap.from(element, {
  y: isMobile ? 20 : 100,        // Less movement on mobile
  duration: isMobile ? 0.6 : 1.2, // Faster on mobile
});
```

---

## 7. Performance Budget

### Target Metrics

| Metric | Target | Why |
|--------|--------|-----|
| FCP | < 1.5s | First visual feedback |
| LCP | < 2.5s | Main content visible |
| FID | < 100ms | Interactive quickly |
| CLS | < 0.1 | No layout shift |
| FPS | 60fps | Smooth animations |

### Optimization Techniques

1. **Code splitting** (Next.js automatic)
2. **Font preloading** (Google Fonts optimized)
3. **No heavy images** (placeholder for now)
4. **Lazy WebGL initialization** (after initial render)
5. **Animation cleanup** (GSAP context revert)

---

## 8. Tech Stack Rationale

### Why Next.js?

- Server-side rendering (SEO)
- Automatic code splitting
- Image optimization (if needed later)
- TypeScript support out-of-box

### Why GSAP over CSS animations?

- **Precise control** (timeline scrubbing)
- **ScrollTrigger** (scroll-based animations)
- **Better performance** (optimized RAF loop)
- **Easier debugging** (GSAP DevTools)

### Why React Three Fiber over vanilla Three.js?

- **React integration** (hooks, lifecycle)
- **Declarative** (easier to reason about)
- **Smaller bundle** (tree-shaking)

### Why Lenis over Locomotive Scroll?

- **Lighter** (smaller bundle size)
- **Modern** (actively maintained)
- **Better mobile** (native touch handling)

---

## 9. Accessibility Considerations

### Intentional Tradeoffs

This site **prioritizes visual storytelling** over accessibility.

**What's supported:**
- Keyboard navigation (native scroll)
- Semantic HTML (`<section>`, `<h1>`, etc.)
- Focus indicators (links)

**What's not prioritized:**
- Screen reader optimization (motion-heavy)
- Reduced motion mode (core to experience)
- High contrast mode (design-dependent)

### Future Enhancements

If accessibility becomes critical:
1. Add `prefers-reduced-motion` detection
2. Provide "skip animations" button
3. Ensure all content is keyboard-accessible
4. Add ARIA labels to sections

---

## 10. Deployment Architecture

### Build Process

```
npm run build
   ↓
Next.js compiles TypeScript
   ↓
Webpack bundles JavaScript
   ↓
PostCSS processes Tailwind
   ↓
Outputs optimized .next/ folder
```

### Hosting Options

| Platform | Pros | Cons |
|----------|------|------|
| **Vercel** | Zero-config, automatic SSL, CDN | Vendor lock-in |
| **Netlify** | Similar to Vercel, good DX | Slightly slower builds |
| **AWS S3** | Full control, cheap | Manual setup |
| **GitHub Pages** | Free for static sites | No SSR support |

**Recommendation:** Vercel (built by Next.js team)

---

## 11. Future Enhancements

### Potential Additions

1. **Cursor follower** (custom cursor with trails)
2. **Sound design** (subtle audio feedback)
3. **Page transitions** (if adding more pages)
4. **Preloader** (with percentage counter)
5. **Easter eggs** (hidden interactions)
6. **Analytics** (scroll depth tracking)

### Code Health

- Add unit tests (Jest + React Testing Library)
- Add E2E tests (Playwright)
- Set up CI/CD (GitHub Actions)
- Add performance monitoring (Web Vitals)

---

## 12. Maintenance Guide

### When to Update Dependencies

- **Monthly**: Check for security updates
- **Quarterly**: Update minor versions
- **Yearly**: Update major versions (test thoroughly)

### Critical Dependencies

| Package | Role | Risk if Broken |
|---------|------|----------------|
| `gsap` | Animations | Site unusable |
| `three` | WebGL | Visual layer missing |
| `lenis` | Smooth scroll | Jarring experience |
| `next` | Framework | Build fails |

### Debugging Animations

1. Install **GSAP DevTools** (Chrome extension)
2. Use `ScrollTrigger.getAll()` to inspect triggers
3. Add `markers: true` to ScrollTrigger for visual debugging

---

## Summary

This portfolio is engineered as a **motion-first experience platform** where:

- Scroll = timeline control mechanism
- Animations = primary communication layer
- WebGL = depth and polish
- Performance = non-negotiable

Every decision prioritizes:
1. **Motion quality**
2. **Performance**
3. **Narrative control**

This is not a document. It's an experience.
