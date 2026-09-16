# Google Ads Campaign Settings Specification
**Campaign**: `KX Search - 9-City IE`  
**Target Domain**: https://kustomxworks.com  
**Business Phone**: 951-391-2200 (tel:9513912200)

---

## 1. Network & Device Settings
- **Campaign Type**: Search Network Only.
- **Search Partners**: **OFF** (Uncheck "Include Google Search Partners").
- **Display Network**: **OFF** (Uncheck "Include Google Display Network").
- **Devices**: All devices (Computers, Mobile Phones, Tablets).
- **Languages**: English.
- **Ad Rotation**: **Optimize: Prefer best performing ads**.

---

## 2. Geographic Targeting & Location Options
- **Target Locations (9 Inland Empire & Coachella Valley Cities + 20-Mile Radius)**:
  - Corona, CA
  - Murrieta, CA
  - Temecula, CA
  - Perris, CA
  - Moreno Valley, CA
  - Norco, CA
  - Hemet, CA
  - Beaumont, CA
  - Palm Springs, CA
  - *Radius*: 20 miles around the core service corridor.
- **Location Option**:
  - **Target**: Presence: People in or regularly in your targeted locations (DO NOT use "Interest").
- **Excluded Locations**:
  - Los Angeles County coastal areas
  - Orange County coastal areas
  - San Diego County coastal areas

---

## 3. Ad Schedule & Budget Configuration
- **Schedule**: All days (Monday through Sunday), **6:00 AM – 10:00 PM PST**.
- **Budget Options**:
  - **Lean Budget**: $2,000/month (~**$66.00/day**)
  - **Standard Budget**: $3,500/month (~**$116.00/day**)

---

## 4. Bidding Strategy & Thresholds
- **Phase 1 (Launch to ~15 Conversions)**:
  - Strategy: **Maximize Clicks**
  - Maximum CPC bid limit: **$7.00**
- **Phase 2 (Post 15 Conversions)**:
  - Transition to: **Maximize Conversions**
  - Target CPA (tCPA): **$80.00 – $120.00**
  - *Guardrail*: Only maintain tCPA if Search Impression Share remains $\ge 20\%$.

---

## 5. Landing Page Experience & Deep-Linking
Every ad group directs traffic to a dedicated, service-preselected wizard URL to maximize conversion rate:
1. **AG1 Block Walls**: `https://kustomxworks.com/book?service=Concrete%20Block%20Walls`
2. **AG2 Landscaping**: `https://kustomxworks.com/book?service=Landscaping%20%26%20Hardscaping`
3. **AG3 Construction**: `https://kustomxworks.com/book?service=Construction%20Expertise`
4. **AG4 Handyman & Repairs**: `https://kustomxworks.com/book`
5. **AG5 Feature Walls**: `https://kustomxworks.com/book?service=Custom%20Slat%20Walls`

---

## 6. Google Ads Editor Import Order
1. **Import Keywords**: Open Google Ads Editor -> **Account > Import > From file...** -> Select `kx-keywords.csv`.
2. **Import Ads**: Click **Account > Import > From file...** -> Select `kx-ads.csv`.
3. **Import Extensions**: Click **Account > Import > From file...** -> Select `kx-extensions.csv`.
4. **Import Negatives**: Click **Account > Import > From file...** -> Select `kx-negatives.csv`.
5. **Review Settings**: Review `kx-campaign-settings.md`, configure budget ($66/day or $116/day), set geo presence, then review changes and post.