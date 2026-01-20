# Gourang Patidar - Personal Portfolio Website

## Project Overview

A single-page personal website for Gourang Patidar—a 21-year-old AI automation specialist focused on building tools that solve real problems for founders and operators.

**Primary Goal:** Convert visitors into booked 15-minute calls through a clean, minimal founder portfolio experience.

## Design Philosophy

- **Calm, human, and focused**—designed for conversation, not selling
- **Trust-building aesthetic**—minimal friction, maximum clarity
- **Generous white space**—breathing room throughout
- **Modern and minimal**—removes noise, keeps substance

## Technical Constraints

- Single page only
- Max width: 1200px
- Responsive: Desktop two-column hero → Mobile stacked layout
- Light background (#F5F5F5)
- Cards: white with soft shadows, 16px border radius

## Layout Structure

### 1. Hero Section (Above the fold)

#### Desktop Layout: Two-Column Split

**Left Column: Profile Content**
- Circular avatar (120px diameter, accent color border)
- Name: "Gourang Patidar"
- Hero headline: "Building AI systems by learning from real founders."
- Body text: "I talk to founders, understand broken workflows, and build small AI tools to fix real problems."
- Supporting line: "If you're building something and feel stuck, let's talk."

**Right Column: Calendar Integration**
- Embedded Google Calendar iframe
- Section title: "Book a 15-min chat"
- Container styling: white background, soft shadow, 16px border radius

#### Mobile Layout: Stacked
- Avatar and profile content stack first
- Calendar integration flows below on mobile

### 2. About Section

**Structure:** Single column, centered, max width 700px

**Content:**
```
I'm 21 and deeply focused on AI automation and agents.

Instead of guessing ideas alone, I talk to people who run real businesses
and learn where work actually breaks.

My goal is simple:
Learn fast. Build fast. Solve real problems.
```

**Typography:** Body typography with relaxed line height for readability

### 3. Current Focus Section

**Structure:** Simple bullet list in a soft card container

**Title:** "What I'm doing right now"

**Bullet points:**
- Weekly calls with founders and operators
- Studying real workflows and bottlenecks
- Building small AI tools and experiments
- Documenting everything I learn

**Styling:** No graphics, no product cards, no revenue metrics—just clean text in a card

## Design System Requirements

### Use From Existing System
- Typography scale (hierarchy maintained)
- Spacing system (consistent padding/margins)
- Card styles (white backgrounds, soft shadows)
- Avatar styling conventions
- CTA button style
- Color palette

### Remove From System
- Masonry grids (SaaS-specific)
- Product cards (not relevant)
- Revenue charts (removed entirely)
- SaaS showcase elements
- Heavy animations or transitions

### Keep Interactions Minimal
- Subtle hover effects on buttons only
- No page animations
- Calendar integration is the main interaction point

## Color & Styling Palette

**Background:** Light neutral #F5F5F5

**Cards:** Pure white (#FFFFFF) with soft shadow (0 2px 8px rgba(0,0,0,0.08))

**Accent Color:** Used sparingly—CTA buttons and avatar border only

**Text:** Standard body and heading hierarchy from design system

**Shadows:** Soft, subtle—single-layer shadow for depth without harshness

## Primary Call-to-Action

**Main CTA:** Embedded Google Calendar
- Centrally positioned in hero right column
- No competing actions
- No email capture form
- No newsletter signup
- No social media widgets

**Rationale:** Direct booking removes friction and builds trust

## Navigation & Information Architecture

**Navigation:** None—single page, no navbar required

**Footer:** Minimal or removed—focus stays on the calendar CTA

**Information Hierarchy:**
1. Hero section (name, headline, supporting text)
2. About section (personal context and philosophy)
3. Current focus (tangible activities)
4. Calendar (conversion point)

## Accessibility Requirements

- Semantic HTML structure
- ARIA labels for embedded calendar
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation for all interactive elements
- Alt text for avatar image
- Responsive text sizing
- Focus indicators on interactive elements

## Development Guidelines

### What This Page Should Feel Like
- ✓ Calm (no urgency or pressure)
- ✓ Human (personal voice, authentic)
- ✓ Focused (one clear goal—book a call)
- ✓ Trust-building (transparency, simplicity)
- ✓ Conversational (not transactional)

### What This Page Should NOT Feel Like
- ✗ Corporate or overly polished
- ✗ Sales-driven or aggressive
- ✗ Complex or cluttered
- ✗ Generic SaaS template
- ✗ Heavy or demanding of attention

### Code Structure
- Mobile-first responsive approach
- CSS Grid for two-column desktop layout
- Flexbox for stacking sections
- CSS variables for spacing and colors (from design system)
- Embedded Google Calendar API integration

### Performance Considerations
- Minimal JavaScript (calendar integration only)
- Optimized avatar image
- Fast page load (single page, few assets)
- Smooth transitions on interaction

## Google Calendar Integration

**Implementation:**
- Embed calendar using iframe with Google Calendar public sharing
- Set calendar to show 15-minute slot availability
- Configure timezone appropriately
- Style iframe container to match card design

**Container Styling:**
- White background matching other cards
- Soft shadow (consistent with design system)
- 16px border radius
- Responsive width (100% width on mobile, fixed column width on desktop)

## Section Spacing & Whitespace

- Hero section: 80px top/bottom padding
- About section: 60px top/bottom padding
- Current Focus section: 60px top/bottom padding
- Section margins: 40px between sections
- Internal padding: 32px (generous white space)

## Responsive Breakpoints

**Desktop (1200px+)**
- Two-column hero layout
- Max width enforced
- Generous margins

**Tablet (768px - 1199px)**
- Flexible two-column or single column
- Reduced padding

**Mobile (< 768px)**
- Full stacked layout
- Calendar flows below profile
- Reduced padding, maintaining readability

## File Structure (Recommended)

```
project/
├── index.html          # Single-page document
├── css/
│   ├── design-system.css    # From provided design system
│   ├── portfolio.css         # Portfolio-specific styles
│   └── responsive.css        # Responsive adjustments
├── js/
│   └── calendar.js           # Calendar integration
├── images/
│   └── avatar.png           # Profile photo
└── CLAUDE.md               # This file
```

## Success Metrics

- Page loads quickly (< 2s)
- Calendar is immediately visible and usable
- No friction between reading and booking
- Mobile experience matches desktop quality
- Visitors feel the "founder approach" immediately

---

**Last Updated:** January 2026

**Status:** Ready for development

**Next Steps:** Set up project structure, integrate Google Calendar, apply design system, implement responsive layout
