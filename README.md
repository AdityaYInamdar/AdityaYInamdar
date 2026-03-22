# Interactive Portfolio — Aditya Inamdar

A high-fidelity, interactive portfolio experience built with Next.js, Three.js, and GSAP. This is not a traditional resume website—it's a cinematic, scroll-driven single-page application that feels like a designed product.

## 🎯 Design Philosophy

This site operates as a **scroll-controlled timeline experience** where:

- **Scroll position determines animation state** (not page position)
- Text reveals progressively, never overwhelming the screen
- All motion is GPU-accelerated and eased
- WebGL background reacts to scroll progress
- No traditional navigation bar or footer
- Desktop-first, mobile-adaptive

## 🏗️ Architecture

### Core Systems

1. **Smooth Scroll System** (Lenis)
   - Intercepts native scroll
   - Converts scroll delta to normalized progress (0.0 → 1.0)
   - Drives all animations via timeline

2. **Animation Engine** (GSAP + ScrollTrigger)
   - Scroll-based animation triggers
   - Parallax effects
   - Progressive text reveals
   - Section transitions

3. **WebGL Layer** (Three.js + React Three Fiber)
   - Animated sphere with distortion effects
   - Particle system
   - Reacts to scroll position
   - Runs on GPU for performance

4. **Section Timeline**
   ```
   Hero:        0.00 – 0.15
   Summary:     0.15 – 0.30
   Experience:  0.30 – 0.55
   Projects:    0.55 – 0.80
   Skills:      0.80 – 0.90
   Contact:     0.90 – 1.00
   ```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page with scroll system
│   └── globals.css         # Global styles & animations
├── components/
│   ├── WebGLBackground.tsx # Three.js animated background
│   ├── ScrollProgress.tsx  # Progress indicator
│   ├── sections/
│   │   ├── Hero.tsx        # Intro section
│   │   ├── Summary.tsx     # Professional summary
│   │   ├── Experience.tsx  # Work history
│   │   ├── Projects.tsx    # Featured projects
│   │   ├── Skills.tsx      # Technical skills
│   │   └── Contact.tsx     # Contact links
│   └── ui/
│       └── RevealText.tsx  # Animated text component
```

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| 3D/WebGL | Three.js + React Three Fiber |
| Animations | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis |
| Styling | Tailwind CSS |
| Fonts | Inter + Space Grotesk |

## ⚡ Performance Optimizations

- **GPU-accelerated transforms** (`translate`, `scale`, `opacity`)
- **No layout thrashing** (avoid reflow/repaint)
- **Optimized scroll handling** (RAF-based)
- **Reduced motion on mobile**
- **Lazy-loaded images** (if added later)
- **Code splitting** (Next.js automatic)

## 📱 Responsive Design

- **Desktop**: Full experience with all animations
- **Tablet**: Reduced animation intensity
- **Mobile**: Simplified effects, touch-optimized scroll

## 🎭 Motion System

Every element follows these principles:

1. **Nothing appears instantly** — everything eases in
2. **Scroll drives state** — position controls visibility/animation
3. **Parallax depth** — different scroll speeds create depth
4. **Momentum-based easing** — natural, weighted feel

### Animation Types Used

- Opacity fades (in/out)
- Y-axis translation (vertical reveals)
- Scale transforms (zoom effects)
- Staggered reveals (sequential timing)
- Scroll-scrubbed timelines (1:1 with scroll)

## 🔧 Customization

### Modify Section Content

Edit files in `src/components/sections/` to update:
- Professional experience
- Projects
- Skills
- Contact information

### Adjust Animation Timing

In each section component, modify GSAP timeline properties:
```typescript
gsap.from(element, {
  y: 100,
  opacity: 0,
  duration: 1.2,  // Animation duration
  delay: 0.3,     // Start delay
  ease: 'power3.out',  // Easing function
});
```

### Change WebGL Effects

Edit `src/components/WebGLBackground.tsx`:
- Sphere distortion: `distort` prop
- Particle count: `count` variable
- Colors: `color` props

### Customize Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#0A0A0A',    // Background
  secondary: '#F5F5F5',  // Text
  accent: '#3B82F6',     // Highlights
}
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export:
```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 🎯 Key Features

✅ **Scroll-driven timeline** — scroll position maps to animation states  
✅ **WebGL background** — interactive 3D sphere and particles  
✅ **Progressive text reveals** — content appears line-by-line  
✅ **Smooth momentum scroll** — cinematic, weighted feel  
✅ **GPU-accelerated animations** — 60fps performance  
✅ **Responsive & mobile-adaptive** — works on all devices  
✅ **Zero layout shift** — stable, predictable rendering  
✅ **Professional content presentation** — not a resume dump  

## 📝 Content Updates

To update your information:

1. **Personal Details**: Edit `Hero.tsx`
2. **Summary**: Edit `Summary.tsx` (lines array)
3. **Experience**: Edit `experiences` array in `Experience.tsx`
4. **Projects**: Edit `projects` array in `Projects.tsx`
5. **Skills**: Edit `skillCategories` in `Skills.tsx`
6. **Contact**: Edit `contactLinks` in `Contact.tsx`

## 🐛 Troubleshooting

### Animations not working
- Ensure GSAP ScrollTrigger is registered
- Check browser console for errors
- Verify scroll container is set up correctly

### Performance issues
- Reduce particle count in WebGL background
- Disable some animations on lower-end devices
- Check for memory leaks in useEffect hooks

### Mobile scroll feels off
- Adjust Lenis `smoothTouch` option
- Test on actual devices, not just browser emulation

## 📄 License

This project is open source and available for personal/commercial use.

## 🙋 Support

For issues or questions:
- Email: aditya.inamdar10@gmail.com
- GitHub: [github.com/adityainamdar](https://github.com/adityainamdar)

---

**Built with** Next.js • Three.js • GSAP • Lenis • TypeScript  
**Inspired by** award-winning interactive portfolios like olhalazarieva.com
