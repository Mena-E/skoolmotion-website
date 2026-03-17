# SkoolMotion Marketing Website — Product Requirements Document

**Last Updated:** March 16, 2026
**Status:** Live (Waitlist Phase)
**Owner:** SkoolMotion Team

---

## 1. Overview

SkoolMotion is a premium school transportation service for the Greater Boston area. This marketing website serves as the primary acquisition channel during the pre-launch waitlist phase. It communicates the brand, builds trust with parents, captures waitlist signups, and establishes a legal/compliance foundation.

**Live URL:** Deployed on Vercel (auto-deploys from `main` branch)

---

## 2. Target Audience

- **Primary:** Parents and guardians of school-age children in Greater Boston (Boston, Brookline, Cambridge, Newton, Somerville, and surrounding communities)
- **Secondary:** Press, potential employees, partners

---

## 3. Goals

| Goal | Metric |
|------|--------|
| Build brand awareness and trust | Site traffic, time on page |
| Capture waitlist signups | Waitlist conversion rate |
| Communicate safety and reliability | Bounce rate, scroll depth |
| Establish legal/compliance foundation | Presence of privacy, terms, cookie, and SMS opt-in pages |

---

## 4. Core Value Propositions

1. **Safety** — Massachusetts 7D-certified drivers, background checks, state compliance
2. **Real-Time Visibility** — GPS tracking and instant notifications
3. **Reliability** — 99.8% on-time rate
4. **Flexibility** — Morning, afternoon, or round-trip rides
5. **Transparent Pricing** — Starting at $15/ride, distance-based, no hidden fees
6. **Support** — 24/7 customer support, 4.9-star parent rating

---

## 5. Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Static HTML5, CSS3, Vanilla JavaScript (ES6+) |
| Font | Outfit (Google Fonts) — weights 300–700 |
| Hosting | Vercel |
| Database | Supabase (PostgreSQL) |
| Serverless | Supabase Edge Functions |
| Email | Supabase Edge Function (branded templates) |
| SMS | Twilio (phone verification) |
| Version Control | Git / GitHub |

---

## 6. Site Map & Pages

| Route | Purpose | Status |
|-------|---------|--------|
| `/` (`index.html`) | Homepage — hero, features, FAQ, waitlist form | Live |
| `/support.html` | Help Center & FAQ | Live |
| `/privacy.html` | Privacy Policy (COPPA-compliant) | Live |
| `/terms.html` | Terms of Service | Live |
| `/cookie.html` | Cookie Policy | Live |
| `/sms-opt-in.html` | Twilio SMS verification opt-in | Live |
| `/careers.html` | Careers | Coming Soon (placeholder) |
| `/press.html` | Press | Coming Soon (placeholder) |

---

## 7. Homepage Sections (in order)

1. **Header** — Fixed nav with logo, links (How It Works, Safety, FAQ), and "Join Waitlist" CTA. Backdrop blur on scroll. Responsive hamburger menu on mobile.
2. **Hero** — Gradient headline ("Safe school rides, reimagined."), subtext, two CTAs ("Get Early Access", "Learn More"), stats bar (on-time rate, rating, support), and app mockup card.
3. **Trust Bar** — 4 icons: certified drivers, real-time tracking, flexible scheduling, transparent pricing.
4. **Story Section** — Emotional narrative contrasting a stressful school morning with the SkoolMotion experience.
5. **Features Grid** — 6 feature cards with icons and descriptions (certified drivers, real-time tracking, flexible scheduling, transparent pricing, ride notifications, 24/7 support).
6. **How It Works** — 3-step process: Sign Up, Schedule Rides, Ride With Confidence.
7. **Safety & Compliance** — Left-side content + right-side stats grid emphasizing certifications and safety record.
8. **FAQ Accordion** — Expandable questions covering service area, pricing, safety, booking, and cancellations.
9. **CTA Section** — Waitlist email capture form with gradient background.
10. **Footer** — 4-column grid: brand info, quick links, legal links, contact info.

---

## 8. Key Features & Functionality

### 8.1 Waitlist Signup Flow
- Email input with client-side validation
- Submission routed through Supabase Edge Function (`skoolmotion-waitlist`)
- Edge Function handles:
  - Storing email in Supabase database
  - Sending branded welcome email to subscriber
  - Sending admin notification email
  - Duplicate detection (shows "already registered" message)
- Success state displays confirmation message mentioning email

### 8.2 SMS Opt-In (Twilio)
- Dedicated `/sms-opt-in.html` page for phone number verification
- Required for Twilio SMS compliance
- Supports account verification and ride notification consent

### 8.3 Centralized Configuration (`config.js`)
- Stores contact info (phone, email, address)
- Auto-populates elements via class names (`config-phone`, `config-email`, etc.)
- Disables links to unreleased pages (careers, press)

### 8.4 Responsive Design
- Mobile-first, 3 breakpoints: <480px, 480–768px, >1024px
- Hamburger navigation on mobile (<900px)

### 8.5 SEO & Social
- Structured data (JSON-LD `LocalBusiness` schema)
- Open Graph and Twitter Card meta tags
- `og-image.png` (1200x630)
- `sitemap.xml` and `robots.txt`

### 8.6 Accessibility
- Semantic HTML with proper heading hierarchy
- ARIA attributes (e.g., `aria-expanded` on FAQ)
- Focus management on interactive elements
- Alt text on images

---

## 9. Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--purple` | `#281C82` | Primary brand |
| `--purple-dark` | `#1a1259` | Darker accent |
| `--pink` | `#D31C82` | Highlight / gradient accent |
| `--cream` | `#FDFCFA` | Page background |
| `--cream-dark` | `#F5F3EF` | Section background |
| `--text` | `#1a1a1f` | Primary text |
| `--text-soft` | `#4a4a52` | Secondary text |
| `--text-muted` | `#7a7a85` | Tertiary text |
| `--border` | `#e8e6e1` | Dividers |
| `--success` | `#16a34a` | Status indicators |

### Typography
- **Font:** Outfit (sans-serif)
- **Weights:** 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Visual Style
- Rounded corners (12–24px border-radius)
- Subtle shadows and hover elevation
- Glassmorphism (backdrop-filter blur on header)
- Gradient decorative blobs in hero
- Purple-to-pink gradient text on headings
- Generous whitespace

### Assets
| Asset | Purpose |
|-------|---------|
| `logo.png` | Standard color logo |
| `logo-white.png` | White logo for dark backgrounds / email |
| `og-image.png` | Social sharing preview (1200x630) |

---

## 10. Integrations

| Service | Purpose | Details |
|---------|---------|---------|
| **Supabase** | Database + Edge Functions | Project ID: `npriumbwhuvizswuocqe`. Stores waitlist emails, powers serverless email sending. |
| **Twilio** | SMS verification | Phone number opt-in for ride notifications and account verification. |
| **Vercel** | Hosting & deployment | Auto-deploys from `main` branch on push. |
| **Google Fonts** | Typography | Outfit font family. |

---

## 11. Legal & Compliance Pages

- **Privacy Policy** — Includes COPPA compliance section for handling children's data
- **Terms of Service** — Full service terms
- **Cookie Policy** — Details on tracking and cookie usage
- **SMS Opt-In** — Twilio-compliant consent page for SMS communications

---

## 12. Future / Planned

- [ ] Careers page (currently placeholder)
- [ ] Press page (currently placeholder)
- [ ] Full app launch (transition from waitlist to live service)

---

## 13. Content & Messaging Summary

**Headline:** "Safe school rides, reimagined."

**Tagline:** "Premium school transportation with certified drivers, real-time tracking, and the peace of mind every parent deserves."

**Brand narrative:** Contrasts the stressful school morning rush with a calm, confident SkoolMotion experience. Core emotional hook: *"We don't just transport children—we give families their mornings back."*

**CTAs:** "Get Early Access" (primary), "Join Waitlist" (header), "Learn More" (secondary)
