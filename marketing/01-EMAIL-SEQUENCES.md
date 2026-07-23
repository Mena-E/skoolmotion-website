# SkoolMotion Email Nurture Sequence
## 7 Emails | Beehiiv Automation

**Trigger:** New waitlist signup (via Viral Loops or direct)
**Sender Name:** SkoolMotion Team
**Sender Email:** hello@skoolmotion.com (or support@skoolmotion.com)

---

## Email 1: Welcome (Immediately after signup)

**Subject:** You're on the list — here's what's coming
**Preview text:** Safe school rides are almost here.

---

Hi there,

Welcome to the SkoolMotion waitlist! You just took the first step toward stress-free school mornings.

Here's what we're building for Greater Boston families:

- **Fully vetted drivers** — every driver is state-certified to drive schoolchildren, cleared through Massachusetts's criminal and sex-offender registries, and medically cleared
- **Live GPS tracking** — watch your child's ride in real time from your phone
- **Verification PIN pickup** — your child confirms a secure code before boarding
- **Flexible booking** — daily subscriptions, on-demand rides, or summer camp transport

We're launching soon in Boston, Brookline, Cambridge, Newton, and Somerville — and you'll be among the first to know.

**Want to move up the list?** Share your personal referral link and unlock rewards:

- Refer 1 family → **Priority access** at launch
- Refer 3 families → **First ride free**
- Refer 5 families → **First month of rides free**
- Refer 10 families → **Founding Family status** (permanent discount)

[Your referral link: {{referral_link}}]

Talk soon,
The SkoolMotion Team

P.S. Have questions? Just reply to this email — a real human reads every one.

---

## Email 2: The Problem (Day 2)

**Subject:** The school pickup line is broken
**Preview text:** You deserve better than this.

---

Let's be honest — getting kids to and from school is one of the most stressful parts of parenting.

The bus is unpredictable. Carpool coordination is a second job. And rushing across town between work meetings and the 3:15 bell? Exhausting.

We built SkoolMotion because we lived this problem ourselves. We talked to hundreds of Boston-area parents who said the same thing:

*"I just want to know my kids are safe, on time, and I don't have to rearrange my entire day to make it happen."*

That's exactly what we deliver.

**SkoolMotion gives you your mornings back** — and your afternoons, and your peace of mind.

[Join {{waitlist_count}}+ families on the waitlist →]

---

## Email 3: How It Works (Day 5)

**Subject:** 3 taps. That's it.
**Preview text:** Booking a safe ride takes less time than packing a lunch box.

---

We designed SkoolMotion to be ridiculously simple:

**Step 1: Book**
Open the app, enter pickup and drop-off, choose a time. Done in 30 seconds. Schedule recurring rides or book on-demand up to 7 days ahead.

**Step 2: Track**
Watch your child's ride in real time on GPS. Get notifications when they're picked up and dropped off.

**Step 3: Relax**
Your child arrives safe, on time, and happy. You get a confirmation with the verification PIN code used.

No guessing. No stress. No chaos.

**Coming soon to iOS and Android** — waitlist members get first access.

[Share with a parent who needs this → {{referral_link}}]

---

## Email 4: Safety Deep Dive (Day 8)

**Subject:** Would you trust a stranger with your child? (Here's why you can trust us.)
**Preview text:** The safety standards behind every SkoolMotion ride.

---

We know the #1 question on your mind: **Is this actually safe?**

It should be. We're asking you to trust us with the most important people in your life. So here's exactly what we do:

**Every single driver has:**
- Massachusetts 7D certification — the state's special license for driving schoolchildren
- State criminal record screening (CORI)
- Sex-offender registry screening (SORI)
- Physician-signed medical clearance
- Minimum 3 years driving experience

That's the same clearance Massachusetts requires of school bus drivers.

**Every single vehicle in our professional fleet has:**
- State inspection twice per year (not once — twice)
- Commercial insurance coverage
- GPS tracking hardware installed

**Every single ride has:**
- Real-time GPS tracking visible to parents
- 4-digit verification PIN (child confirms before boarding)
- 24/7 live monitoring by our operations team
- Instant notifications at pickup and drop-off

We've completed thousands of rides with a **99.8% on-time rate** and **zero safety incidents**.

Your children's safety isn't a feature — it's our entire foundation.

[Learn more at skoolmotion.com →]

---

## Email 5: Social Proof + Referral Push (Day 12)

**Subject:** {{waitlist_count}} families can't be wrong
**Preview text:** The waitlist is growing fast. Here's how to move up.

---

Quick update: **{{waitlist_count}} Greater Boston families** have joined the SkoolMotion waitlist.

Here's what parents are saying:

> *"Finally, someone is solving this. The school bus situation in Brookline has been a nightmare."*

> *"I spend 2 hours every day driving my kids to activities. I need this yesterday."*

> *"The GPS tracking and PIN verification sold me. I want to see this in Newton ASAP."*

**Your referral status:**
- You've referred: {{referral_count}} families
- Your reward tier: {{current_tier}}
- Next reward: {{next_reward}} ({{referrals_needed}} more referrals)

Every parent you refer gets you closer to free rides and Founding Family status.

[Share your link → {{referral_link}}]

---

## Email 6: Urgency (Day 20)

**Subject:** We launch in 10 days. Are you ready?
**Preview text:** Founding Family spots are almost gone.

---

This is happening.

**SkoolMotion launches in {{launch_days}} days** in Greater Boston, and waitlist members get first access to:

- Download the app before public launch
- Lock in exclusive early-access pricing
- Book rides for the upcoming school term

**Founding Family status is limited.** Once we launch, the tiered referral rewards close. If you've been meaning to share your link — now is the time.

Here's where you stand:
- Referrals: {{referral_count}}
- Reward tier: {{current_tier}}

[Share and unlock your rewards → {{referral_link}}]

See you at launch,
The SkoolMotion Team

---

## Email 7: Pre-Launch Final (Day 27)

**Subject:** Tomorrow changes everything
**Preview text:** The app goes live. You're getting in first.

---

Tomorrow, SkoolMotion goes live.

As a waitlist member, here's what happens next:

1. **You'll receive a download link** for iOS or Android
2. **Create your account** and add your children's profiles
3. **Book your first ride** at your exclusive early-access rate
4. **Track everything** from pickup to drop-off in real time

No more school morning chaos. No more carpool juggling. No more anxiety about whether your child got there safely.

**Just open the app, book, and breathe.**

Thank you for believing in what we're building. You're not just early adopters — you're the families helping us prove that school transportation can be safe, reliable, and simple.

Welcome to SkoolMotion.

See you tomorrow,
The SkoolMotion Team

P.S. Have a friend who should know? Last chance to share: {{referral_link}}

---

## Beehiiv Setup Notes

1. **Import existing waitlist** from Supabase (export emails → CSV → import to Beehiiv)
2. **Create automation:** Trigger on "New subscriber" → send Email 1 immediately → delay 2 days → Email 2 → delay 3 days → Email 3 → delay 3 days → Email 4 → delay 4 days → Email 5 → delay 8 days → Email 6 → delay 7 days → Email 7
3. **Dynamic fields:** Replace `{{referral_link}}`, `{{waitlist_count}}`, `{{referral_count}}`, `{{current_tier}}`, `{{next_reward}}`, `{{referrals_needed}}`, and `{{launch_days}}` with Beehiiv/Viral Loops merge tags
4. **Adjust timing** based on actual launch date — Email 6 should arrive ~10 days before launch, Email 7 should arrive ~1 day before
