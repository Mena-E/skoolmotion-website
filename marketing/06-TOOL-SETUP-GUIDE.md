# SkoolMotion Tool Setup Guide
## Step-by-Step Instructions for Every Tool

---

## 1. Social Media Accounts (Day 1)

### Instagram Business Account
1. Download Instagram, create account with username `@skoolmotion`
2. Go to Settings → Account → Switch to Professional Account → Business
3. Select category: "Transportation Service"
4. Add bio:
   ```
   Safe school rides for Greater Boston families.
   Certified drivers. GPS tracking. PIN verification.
   Launching soon — join the waitlist below.
   ```
5. Add profile picture: SkoolMotion logo (logo.png)
6. Add website link: https://skoolmotion.com
7. Set up action button: "Sign Up" → link to waitlist

### Facebook Page
1. Go to facebook.com/pages/create
2. Page name: "SkoolMotion"
3. Category: "Transportation Service"
4. Add same bio, logo, and cover image
5. Add CTA button: "Sign Up" → waitlist link
6. Complete all "About" fields (address, phone, hours, description)

### TikTok Business Account
1. Download TikTok, create account `@skoolmotion`
2. Switch to Business Account in settings
3. Category: "Transportation"
4. Add bio (max 80 chars): "Safe school rides for Boston families. Join the waitlist ↓"
5. Add website link to waitlist

### X (Twitter)
1. Create account `@skoolmotion`
2. Bio: "Safe, certified school rides for Greater Boston families. Live GPS tracking. PIN verification. Launching soon. Join the waitlist ↓"
3. Add website link, logo, and header image

---

## 2. Publer — Social Media Scheduling (Day 1)

1. Sign up at publer.io ($12/mo Professional plan)
2. Connect all 4 social accounts (IG, FB, TikTok, X)
3. Set up posting schedule:
   - Instagram: 10:00 AM daily (when parents are on morning break)
   - Facebook: 12:00 PM daily (lunchtime browsing)
   - TikTok: 6:00 PM (evening scroll time)
   - X: 8:00 AM, 12:00 PM, 5:00 PM (3x daily)
4. Create content labels: "Safety", "Pain Point", "Feature", "Community", "Referral"
5. **Bulk schedule:** Use the content from `02-CONTENT-CALENDAR.md` and schedule all Week 1 + Week 2 posts on Day 1
6. **Enable Recycling:** For evergreen posts (safety features, how-it-works), enable auto-recycling every 14 days so key messages repeat
7. **Queue slots:** Set up a queue so you can drop new content in and it auto-schedules to the next available slot

---

## 3. Beehiiv — Email Marketing (Day 1-2)

1. Sign up at beehiiv.com (free tier handles up to 2,500 subscribers)
2. Create publication: "SkoolMotion"
3. Set sender: hello@skoolmotion.com (or support@)
4. **Import existing waitlist:**
   - Export emails from Supabase (run SQL query on waitlist table)
   - Download as CSV
   - Import to Beehiiv as subscribers
5. **Create automation sequence:**
   - Go to Automations → New Automation
   - Trigger: "New subscriber"
   - Add 7 email steps with delays (use copy from `01-EMAIL-SEQUENCES.md`):
     - Email 1: Immediately
     - Email 2: +2 days
     - Email 3: +3 days (Day 5)
     - Email 4: +3 days (Day 8)
     - Email 5: +4 days (Day 12)
     - Email 6: +8 days (Day 20)
     - Email 7: +7 days (Day 27)
6. **Enable Beehiiv Referral Program:**
   - Go to Referral Program settings
   - Set milestones matching the tiered rewards
   - This gives each subscriber a unique referral link
7. **Design email template:**
   - Use SkoolMotion colors: Purple (#281C82), Pink (#D31C82), Cream (#FDFCFA)
   - Add logo at top
   - Keep design minimal — text-focused emails perform best

---

## 4. Viral Loops — Referral Waitlist (Day 2)

1. Sign up at viral-loops.com ($49/mo Startup plan)
2. Choose template: "Pre-Launch" (inspired by Harry's launch)
3. Configure reward tiers:

| Milestone | Referrals Needed | Reward |
|-----------|-----------------|--------|
| Tier 1 | 1 referral | Priority access at launch |
| Tier 2 | 3 referrals | First ride free |
| Tier 3 | 5 referrals | First month of rides free |
| Tier 4 | 10 referrals | Top-referrer reward |

4. **Design the referral widget:**
   - Match SkoolMotion branding (purple, white, cream)
   - Show current position, referral count, and next reward
5. **Embed on website:**
   - Option A: Replace current waitlist form with Viral Loops widget
   - Option B: Redirect to Viral Loops landing page after current Supabase signup
   - Recommended: Option A for simplicity
6. **Connect to Beehiiv:**
   - Use Viral Loops → Zapier → Beehiiv integration
   - When someone signs up via Viral Loops, auto-add to Beehiiv subscriber list
   - This triggers the email nurture sequence automatically
7. **Set up the referral sharing page:**
   - After signup, users see: their position, referral link, social share buttons
   - Pre-written share messages for WhatsApp, Facebook, X, email, SMS

---

## 5. ManyChat — DM Automation (Day 4)

1. Sign up at manychat.com ($15/mo Pro plan)
2. Connect Instagram + Facebook Page
3. **Set up Instagram automation:**
   - **Comment trigger:** When someone comments a keyword (e.g., "RIDES", "WAITLIST", "INFO") on any post, auto-DM them:
     ```
     Hey! Thanks for your interest in SkoolMotion! 🚗

     We're launching safe, certified school rides in Greater Boston soon.

     Here's the waitlist link to get early access + exclusive pricing:
     [waitlist link]

     Have questions? Just reply here — happy to help!
     ```
   - **Story reply trigger:** When someone replies to a story, auto-respond with waitlist link
   - **Default greeting:** When someone DMs the page for the first time, send an intro + waitlist link
4. **Set up Facebook Messenger automation:**
   - Same flows as Instagram
   - Add a "Get Started" button on your Facebook Page that triggers the welcome message
5. **Ad integration:**
   - For Meta ads, use "Send Message" objective variation
   - When someone clicks "Send Message" on an ad, ManyChat handles the conversation

**Important:** ManyChat's auto-replies should feel human, not robotic. Keep them short, friendly, and always include a clear CTA (waitlist link).

---

## 6. Chatbase — Website AI Chatbot (Day 5)

1. Sign up at chatbase.co ($19/mo Hobby plan)
2. **Train on your content:**
   - Upload or link: skoolmotion.com (it crawls automatically)
   - Add FAQ content:
     - "What areas do you serve?" → Boston, Brookline, Cambridge, Newton, Somerville, and surrounding Greater Boston
     - "How much does it cost?" → Starting at $15/ride with sibling and carpool discounts
     - "How are drivers vetted?" → Every driver is state-certified to drive schoolchildren (Massachusetts 7D), cleared through the state's criminal and sex-offender registries (CORI and SORI), and medically cleared
     - "When do you launch?" → Soon — join the waitlist for early access
     - "Is there an app?" → Coming soon to iOS and Android. Waitlist members get first access.
     - "How does GPS tracking work?" → Parents see real-time location on a map with pickup/drop-off notifications
     - "What's the verification PIN?" → A 4-digit code your child confirms before boarding. No PIN, no ride.
3. **Customize appearance:**
   - Chat bubble color: #281C82 (purple)
   - Bot name: "SkoolMotion"
   - Welcome message: "Hi! I'm here to answer any questions about SkoolMotion. What would you like to know?"
4. **Set conversion goal:**
   - After answering questions, the bot should suggest: "Want to join the waitlist for early access? → [link]"
5. **Embed on website:**
   - Copy the embed script from Chatbase
   - Add it before `</body>` in index.html

---

## 7. Google Analytics 4 + Microsoft Clarity (Day 1)

### Google Analytics 4
1. Go to analytics.google.com
2. Create property: "SkoolMotion Website"
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add the gtag.js snippet to `<head>` in all HTML pages
5. **Set up conversion event:**
   - Go to Admin → Events → Create Event
   - Event name: `waitlist_signup`
   - Trigger: when the success message appears on the page (or track the Supabase form submission)
6. Mark `waitlist_signup` as a conversion

### Microsoft Clarity
1. Go to clarity.microsoft.com
2. Create project: "SkoolMotion"
3. Copy the tracking script
4. Add it to `<head>` in all HTML pages (alongside GA4)
5. Clarity will automatically record heatmaps and session recordings — no further config needed
6. Check the dashboard weekly for:
   - Where users click most (is the waitlist form visible enough?)
   - Where users drop off (are they scrolling past the CTA?)
   - Rage clicks (frustrated users clicking something that's not clickable)

---

## 8. Meta Ads Manager Setup (Day 5-7)

1. **Business Manager:** Go to business.facebook.com → Create account
2. **Ad Account:** Create or link ad account
3. **Pixel/Conversions API:**
   - Install Meta Pixel on skoolmotion.com
   - Set up "Lead" event that fires on successful waitlist signup
4. **Verify domain:** skoolmotion.com in Business Manager settings
5. **Create Campaign:**
   - Objective: Leads
   - Campaign type: Advantage+ (let Meta's AI optimize)
   - Budget: $50-60/day
   - Audience: Location (Greater Boston, 30mi radius), Age 28-50, Parents (all)
   - Detailed targeting: school activities, after-school programs, summer camps, PTA, parenting magazines
   - Placements: Advantage+ (all placements)
6. **Upload Creative:**
   - Use ad copy from `03-AD-COPY.md`
   - Create 6-8 variations (mix of static images, carousels, and video)
   - Use Canva Pro for all creative

### Google Ads Setup
1. Go to ads.google.com → Create account
2. **Campaign type:** Performance Max
3. **Budget:** $25-30/day
4. **Asset groups:** Upload headlines, descriptions, images from `03-AD-COPY.md`
5. **Audience signals:** Parents, interest in education/school services, location: Greater Boston
6. **Conversion tracking:** Set up conversion for waitlist signup (Google Tag or import from GA4)

---

## Quick Reference: Login Credentials to Create

| Tool | URL | Plan | Monthly Cost |
|------|-----|------|-------------|
| Instagram | instagram.com | Business (free) | $0 |
| Facebook Page | facebook.com | Business (free) | $0 |
| TikTok | tiktok.com | Business (free) | $0 |
| X (Twitter) | x.com | Free | $0 |
| Publer | publer.io | Professional | $12 |
| Beehiiv | beehiiv.com | Free tier | $0 |
| Viral Loops | viral-loops.com | Startup | $49 |
| ManyChat | manychat.com | Pro | $15 |
| Chatbase | chatbase.co | Hobby | $19 |
| ChatGPT Plus | chat.openai.com | Plus | $20 |
| Canva Pro | canva.com | Pro | $13 |
| Google Analytics | analytics.google.com | Free | $0 |
| Microsoft Clarity | clarity.microsoft.com | Free | $0 |
| Meta Ads | business.facebook.com | Pay per ad | ~$1,500-1,800 |
| Google Ads | ads.google.com | Pay per ad | ~$750-900 |
