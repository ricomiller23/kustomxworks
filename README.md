# KustomXworks Handyman Services — Website

> **Next.js 16 App Router · TypeScript · Tailwind CSS**
> Production-ready, SEO-optimized lead-generation website for KustomXworks Handyman Services.

---

## Quick Start

```bash
# 1. Clone / open this project
cd kustomxworks

# 2. Install dependencies
npm install

# 3. Copy env file and fill in your values
cp .env.example .env.local
# → Edit .env.local (see Environment Variables section below)

# 4. Start the development server
npm run dev
# Open http://localhost:3000

# 5. Production build (verify no errors)
npm run build
```

---

## How to Replace Every `{{TOKEN}}`

All business data flows from a **single file**: [`content/business.ts`](./content/business.ts)

Open that file and replace every `{{TOKEN}}` with your real data:

| Token | What It Is | Where to Get It |
|---|---|---|
| `{{PHONE}}` | Your business phone, formatted | e.g., `(951) 555-1234` |
| `{{PHONE_RAW}}` | Digits only, for tel: links | e.g., `9515551234` |
| `{{EMAIL}}` | Business email | e.g., `info@kustomxworks.com` |
| `{{LICENSE_NUMBER}}` | CSLB contractor license # | CSLB lookup: cslb.ca.gov |
| `{{REVIEW_COUNT}}` | Total Google/Yelp review count | Your Google Business Profile |
| `{{RATING}}` | Average star rating | Your Google Business Profile |
| `{{YEARS}}` | Years in business | Count from founding year |
| `{{CUSTOMERS_SERVED}}` | Lifetime customer count | Your records |
| `{{TESTIMONIAL_1_QUOTE}}` ... `{{TESTIMONIAL_6_QUOTE}}` | Real customer quotes | Ask recent customers |
| `{{TESTIMONIAL_N_NAME}}` | Customer first name + last initial | e.g., `John S.` |
| `{{TESTIMONIAL_N_CITY}}` | Customer's city | e.g., `Corona, CA` |

### Pricing Tokens
The [`/pricing`](./app/pricing/page.tsx) and [`/services/property-management`](./app/services/property-management/page.tsx) pages contain `{{PRICE_...}}` tokens. Replace these with your actual flat-rate prices once you've confirmed your pricing.

---

## How to Connect Email / CRM

### Email via Resend
1. Create an account at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   NOTIFICATION_EMAIL=you@kustomxworks.com
   ```
4. Verify the `from` domain in Resend (or use the default `onboarding@resend.dev` for testing)
5. **If RESEND_API_KEY is not set**, the form still works — leads are logged to the server console. Users are never blocked.

### CRM Integration
See the `// TODO: connect CRM/email` marker in [`app/api/lead/route.ts`](./app/api/lead/route.ts).
Uncomment and configure the CRM_WEBHOOK_URL in `.env.local` to push leads to Zapier, Make, HubSpot, etc.

---

## How to Add a City (One Data Entry)

1. Open [`content/cities.ts`](./content/cities.ts)
2. Add a new `CityData` object to the `CITIES` array following the exact same structure as existing cities
3. That's it — the city will automatically appear in:
   - The sitemap
   - The nav dropdown
   - The service area map
   - The city cards grid on the homepage
   - The footer city list
   - The lead form city dropdown
   - Its own city page at `/handyman/[your-slug]`

---

## How to Add a Blog Post

1. Create a new directory: `app/blog/your-post-slug/`
2. Create `app/blog/your-post-slug/page.tsx` following the pattern of the two seeded posts
3. Add an entry to the `BLOG_POSTS` array in [`app/blog/page.tsx`](./app/blog/page.tsx)

**Slug naming convention:** Use lowercase kebab-case that includes the primary keyword and optionally a city, e.g.:
- `ceiling-fan-install-temecula-ca`
- `aging-in-place-modifications-hemet`

---

## Project Structure

```
kustomxworks/
├── app/
│   ├── api/lead/route.ts          # Lead form API handler
│   ├── handyman/
│   │   ├── page.tsx               # Service areas index
│   │   └── [city]/page.tsx        # Dynamic city pages (9 cities)
│   ├── services/
│   │   ├── page.tsx               # All services
│   │   ├── aging-in-place/
│   │   ├── property-management/
│   │   ├── vacation-rental/
│   │   └── military/
│   ├── blog/
│   │   ├── page.tsx               # Blog index
│   │   └── [slug]/page.tsx        # Individual posts
│   ├── about/, book/, contact/,
│   ├── gallery/, pricing/, reviews/
│   ├── layout.tsx                 # Root layout (fonts, metadata, chrome)
│   ├── page.tsx                   # Homepage
│   ├── sitemap.ts                 # Auto-generated sitemap
│   └── robots.ts                  # robots.txt
├── components/
│   ├── EmergencyBar.tsx           # Top emergency gradient bar
│   ├── Header.tsx                 # Sticky header + nav + city dropdown
│   ├── Footer.tsx                 # Full footer
│   ├── MobileCallFab.tsx          # Floating call button (mobile)
│   ├── LeadForm.tsx               # Primary lead form
│   ├── BookingWizard.tsx          # 4-step booking wizard
│   ├── ServiceCard.tsx            # Service listing card
│   ├── CityCard.tsx               # City area card
│   ├── OfferCard.tsx              # Discount/offer card
│   ├── TestimonialCard.tsx        # Review card
│   ├── FAQAccordion.tsx           # FAQ with JSON-LD schema
│   ├── ServiceAreaMap.tsx         # Leaflet/OpenStreetMap map
│   ├── TrustStrip.tsx             # Trust chip bar
│   └── CTABand.tsx                # Full-width CTA sections
├── content/
│   ├── business.ts                # ← ALL TOKENS LIVE HERE
│   ├── cities.ts                  # 9 city data objects
│   └── services.ts                # Service categories and items
├── .env.example                   # Environment variable reference
└── tailwind.config.ts             # Brand color tokens
```

---

## SEO Implementation

- **Per-page metadata**: Every page has unique `title`, `description`, `canonical`, and OpenGraph tags via `generateMetadata`
- **JSON-LD schemas**: `LocalBusiness`/`HomeAndConstructionBusiness` on homepage; `LocalBusiness` + `BreadcrumbList` on city pages; `FAQPage` on city pages with FAQs; `Service` on specialty pages; `AggregateRating` on reviews page
- **Sitemap**: Auto-generated at `/sitemap.xml` covering all 31+ pages
- **robots.txt**: Auto-generated at `/robots.txt`
- **Semantic HTML**: Single `<h1>` per page, proper heading hierarchy, descriptive alt attributes, semantic landmarks

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel Dashboard:
# Settings → Environment Variables
# RESEND_API_KEY, NOTIFICATION_EMAIL
```

Or connect your GitHub repo directly in the Vercel Dashboard for automatic deploys on push.

**Domain**: Point your custom domain (kustomxworks.com) to Vercel in your domain registrar's DNS settings.

---

## Assumptions Made (See README Updates Needed)

The following assumptions were made during the build. Review and correct as needed:

1. **Phone placeholder**: `(951) 555-1234` is used as a visual reference in mockups — replace with `{{PHONE}}` token already in `content/business.ts`
2. **Email**: `info@kustomxworks.com` shown in mockups — confirm and replace the `{{EMAIL}}` token
3. **Website URL**: Set to `https://www.kustomxworks.com` — confirm this is your production domain
4. **Google Business Profile**: The Reviews page links to `https://g.page/r/{{GOOGLE_PLACE_ID}}/review` — replace with your actual Google Place ID review link
5. **Leaflet map tiles**: Uses OpenStreetMap tiles (free, no API key). Pins are located at the geographic center of each city using approximate lat/lng coordinates
6. **Resend `from` address**: Set to `leads@kustomxworks.com` — you must verify this domain in Resend before use (or use `onboarding@resend.dev` for testing)
7. **Gallery images**: All 9 gallery items are placeholder cards — replace by adding real photos to `/public/gallery/` with the naming convention shown
8. **Blog images**: Blog post header images are placeholder blocks — add real images to `/public/blog/`
9. **Privacy Policy / Terms**: Footer links to `/privacy` and `/terms` — these pages need to be created or linked to your actual policy documents

---

## What I Still Need From You

### Required Before Launch

- [ ] **Phone number** — replace `{{PHONE}}` and `{{PHONE_RAW}}` in `content/business.ts`
- [ ] **CSLB License #** — replace `{{LICENSE_NUMBER}}`
- [ ] **Email address** — replace `{{EMAIL}}`
- [ ] **Review count** — replace `{{REVIEW_COUNT}}` (e.g., `147`)
- [ ] **Average star rating** — replace `{{RATING}}` (e.g., `4.9`)
- [ ] **Years in business** — replace `{{YEARS}}`
- [ ] **Customers served** — replace `{{CUSTOMERS_SERVED}}`
- [ ] **6 testimonials** — replace `{{TESTIMONIAL_1_QUOTE}}` through `{{TESTIMONIAL_6_*}}` with real name, city, and quote
- [ ] **Real project photos** — replace gallery placeholder cards with before/after photos in `/public/gallery/`
- [ ] **Resend API key** — add to `.env.local` to activate email notifications
- [ ] **Notification email** — add to `.env.local`

### Required to Confirm (Sample Pricing)
- [ ] All `{{PRICE_...}}` tokens in `/pricing` and `/services/property-management`
- [ ] Google Business Profile Place ID for the review link on `/reviews`

### Nice to Have
- [ ] Real project photos for blog post headers
- [ ] Google Analytics Measurement ID (placeholder slot already in `app/layout.tsx`)
- [ ] CRM webhook URL for lead forwarding
