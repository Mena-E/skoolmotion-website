# SkoolMotion Referral Program
## Viral Loops Configuration + Strategy

---

## Reward Tiers

| Tier | Name | Referrals Required | Reward | Estimated Cost to You |
|------|------|--------------------|--------|----------------------|
| 1 | Early Bird | 1 | Priority access at launch | $0 |
| 2 | Advocate | 3 | First ride free | ~$15-20 |
| 3 | Champion | 5 | First month of rides free | ~$200-400 |
| 4 | Top Referrer | 10 | Top-referrer reward | Ongoing |

**Why this works:**
- Tier 1 is achievable for everyone — just share once. This gets the flywheel started.
- Tier 2 (3 referrals) is the sweet spot — most active sharers will hit this.
- Tier 3 (5 referrals) is aspirational but reachable for motivated parents.
- Tier 4 (10 referrals) creates a VIP class of early advocates who feel invested in your success.

---

## How the Viral Loop Works

```
Parent A joins waitlist
    ↓
Gets unique referral link + sees reward tiers
    ↓
Shares link with Parent B (via text, social, email)
    ↓
Parent B joins waitlist using Parent A's link
    ↓
Parent A gets credit → moves closer to next reward tier
    ↓
Parent B now ALSO gets a referral link
    ↓
Parent B shares with Parent C...
    ↓
(Cycle repeats)
```

**Viral coefficient target:** If each person refers 1.5 people on average, your waitlist grows exponentially. Even at 0.5 referrals per person, you're getting 50% more signups for free on top of your paid/organic acquisition.

---

## Pre-Written Share Messages

These are the messages users can one-click share. Configure in Viral Loops.

### WhatsApp / SMS
```
Hey! I just joined the waitlist for SkoolMotion — it's a new school ride service for Greater Boston with certified drivers and GPS tracking. You can track your kid's ride in real time! We both get rewards when you sign up using my link: [referral_link]
```

### Facebook Share
```
Just discovered SkoolMotion — certified school rides with live GPS tracking and PIN verification for pickup. Launching soon in Greater Boston. If you have school-age kids, check it out: [referral_link]
```

### X (Twitter)
```
Found this new school ride service for Boston families — certified drivers, real-time GPS tracking, PIN verified pickup. Launching soon. [referral_link] #BostonParents
```

### Email
```
Subject: Have you heard about SkoolMotion?

Hey,

I just signed up for the SkoolMotion waitlist — they're launching a school ride service in Greater Boston with certified drivers, live GPS tracking, and a verification PIN for every pickup.

If you're tired of the school transportation juggle, you might want to check it out: [referral_link]

We both get perks when you join through my link!
```

---

## Integration with Website

### Option A: Replace Current Waitlist Form (Recommended)

Replace the Supabase-powered email form on skoolmotion.com with the Viral Loops widget. This ensures every signup automatically enters the referral program.

**Steps:**
1. In Viral Loops, go to Widget → Customize
2. Match SkoolMotion branding (purple CTA button, cream background)
3. Copy the embed code
4. In index.html, replace the current `<form>` in the waitlist section with the Viral Loops widget
5. After signup, users see their referral dashboard (position, link, progress)

### Option B: Two-Step Flow

Keep current Supabase form → on success page, redirect to Viral Loops referral page. This preserves your existing data flow but adds an extra step.

### Recommended: Option A
Fewer steps = higher conversion. Every person who signs up immediately sees their referral link and rewards.

---

## Promoting the Referral Program

### In Emails (Already Built Into Sequences)
- Every email includes the referral link and current tier status
- Email 5 is a dedicated referral push email
- Email 6 adds urgency ("tiers close at launch")

### On Social Media
- Week 1, Day 6: Dedicated referral program announcement post
- Week 3, Day 20: Referral reminder post
- Week 4, Day 26: "Last chance" referral post
- Stories: Weekly referral reminders with link stickers

### On the Website
- After waitlist signup: full referral dashboard
- Consider adding a "Refer a Friend" link in the navigation

### In Ads
- Ad Set 6 (in `03-AD-COPY.md`) specifically promotes the referral program
- Can also add referral tier info to other ad descriptions

---

## Tracking Referral Performance

### Key Metrics to Watch (Weekly)
| Metric | What It Tells You | Target |
|--------|-------------------|--------|
| Viral coefficient (K-factor) | Referrals per signup | >0.5 |
| Referral conversion rate | % of referred visitors who sign up | >20% |
| Share rate | % of signups who share their link | >15% |
| Top referrers | Your most active advocates | ID and engage |
| Tier distribution | How many people at each tier | Tier 2+ = 10-15% |

### If Referrals Are Low
- Make sharing easier (pre-written messages, one-click share buttons)
- Increase reward value at Tier 1 (e.g., add a small discount)
- Add urgency (referral tiers close at launch)
- Feature top referrers on social media ("Our top referrer brought in 12 families!")
- Send a dedicated referral push email to existing waitlist

### If Referrals Are High
- Consider adding a Tier 5 (20 referrals = Ambassador with highest discount)
- Feature the leaderboard publicly to create competition
- Send thank-you notes to top referrers (personal touch goes far)
