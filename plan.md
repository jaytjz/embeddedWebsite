# Plan: Make AquaGrow Website Compelling & Accessible

## Goals
- **Compelling marketing** with data-driven content
- **Graphics and video** integration
- **High accessibility** (WCAG compliance)
- Placeholders acceptable for now (easy to swap later)

---

## Changes Overview

### 1. Hero Section Overhaul
**File:** `src/App.jsx`

- Add animated statistics counters (water saved, plants monitored, uptime %)
- Embed a demo video placeholder (YouTube embed or placeholder image with play button)
- Stronger value proposition with specific benefits
- Add a "Watch Demo" CTA button

**Example stats to display:**
```
70% Water Savings | 24/7 Monitoring | 5-Minute Setup
```

---

### 2. Add Data/Stats Section
**File:** `src/App.jsx`

New section with impactful metrics:
- Water efficiency percentage
- Number of plants supported
- Battery life / power consumption
- Response time for alerts
- User satisfaction (placeholder)

Visual: Animated counters or progress bars

---

### 3. Video Integration
**File:** `src/App.jsx`

- Hero: Embedded demo video (placeholder YouTube embed or custom player)
- "How It Works" section: Short explainer video option
- Responsive video containers (16:9 aspect ratio maintained)

---

### 4. Graphics & Visual Improvements
**Files:** `src/App.jsx`, `src/assets/`

Replace emojis with:
- SVG icons (can use Heroicons or custom)
- Placeholder images for hardware photos
- System architecture diagram (SVG or image placeholder)
- Gradient backgrounds and visual polish

---

### 5. Accessibility Improvements
**File:** `src/App.jsx`, `src/index.css`

- Add `aria-labels` to all interactive elements
- Ensure proper heading hierarchy (h1 → h2 → h3)
- Add `alt` text to all images
- Ensure color contrast ratios meet WCAG AA (4.5:1)
- Add `role` attributes where needed
- Keyboard navigation support (focus states)
- Skip-to-content link
- Reduce motion option (`prefers-reduced-motion`)

---

### 6. Social Proof Section
**File:** `src/App.jsx`

Add testimonials/quotes section:
- Placeholder testimonials from "users"
- Star ratings
- Logos of technologies used (ESP32, AWS, React)

---

### 7. Call-to-Action Improvements
**File:** `src/App.jsx`

- Stronger CTAs throughout
- "Get Started" / "Pre-Order" / "Contact Us" buttons
- Newsletter signup placeholder
- Social media links

---

## Implementation Order

1. [ ] Add statistics/data section with animated counters
2. [ ] Integrate video placeholder in hero
3. [ ] Replace emojis with SVG icons
4. [ ] Add image placeholders for hardware/screenshots
5. [ ] Implement accessibility improvements (aria, alt, contrast)
6. [ ] Add social proof/testimonials section
7. [ ] Enhance CTAs and add contact/newsletter section
8. [ ] Add skip-to-content and keyboard focus styles

---

## Files to Modify

- `src/App.jsx` - Main component (all sections)
- `src/index.css` - Accessibility styles, focus states, animations
- `public/` - Add placeholder images if needed

---

## Verification

- Run `npm run dev` to preview
- Test with keyboard-only navigation
- Run Lighthouse accessibility audit
- Check color contrast with browser dev tools
- Test video embeds load correctly
- Verify responsive design on mobile

---

## Placeholder Strategy

All placeholders will be clearly marked and easy to replace:
- Images: Use `placeholder.com` URLs or gray boxes with labels
- Videos: YouTube embed with placeholder video or static thumbnail
- Stats: Realistic example numbers with comments noting they're placeholders
- Testimonials: Clearly fake names like "Jane D., Plant Enthusiast"
