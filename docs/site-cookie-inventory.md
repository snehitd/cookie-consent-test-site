# Cookie Inventory — Cookie Consent Test Site

**Version:** 2.1  
**Date:** 2026-07-06  
**Branch:** `main` (no enforcement — see `enforcement-test.html` for enforcement testing)

This document lists every cookie set across all pages of the test site, the exact trigger that causes it to be set, and whether the cookie is real (set by a genuine vendor script) or dummy (manually simulated for testing).

> **Local scanning:** Serve this site locally with `python3 -m http.server 3000` and point the scanner at `http://host.docker.internal:3000/<page>.html`. No Netlify deploy required.

---

## How to Read This Document

| Column | Meaning |
|---|---|
| **Trigger** | What user action or page event causes the cookie to be written |
| **Set by** | The script or mechanism that writes the cookie |
| **Real / Dummy** | **Real** = set by an actual vendor SDK with a live account ID. **Dummy** = manually written via `document.cookie` with a hardcoded value |

### Category values

| Category | Meaning |
|---|---|
| Functional | Required for the site to operate correctly |
| Analytics | Measurement of user behaviour — no ad targeting |
| Marketing | Ad targeting, retargeting, cross-site tracking |
| Others | Unclassified — falls through both OpenCookieDB and KnownServicesLibrary |

---

## Page Index

| # | File | Purpose | Enforcement |
|---|---|---|---|
| 1 | `index.html` | Homepage — baseline functional + marketing cookies | None |
| 2 | `spa-page.html` | SPA interaction — on-demand script loading | None |
| 3 | `iframe-page.html` | Third-party iframe testing (YouTube, Google Maps) | None |
| 4 | `google-cookies.html` | Full Google stack — GTM, GA4, Ads, AdSense | None |
| 5 | `meta-cookies.html` | Meta Pixel — direct tag + CAPI documentation | None |
| 6 | `bing-cookies.html` | Bing UET, Microsoft Clarity, Bing Maps iframe | None |
| 7 | `adobe-cookies.html` | Adobe Experience Cloud — dummy cookies only | None |
| 8 | `cookie-reader.html` | Utility — reads and displays current browser cookies | None |
| 9 | `all-trackers.html` | **Scanner target** — all platforms + all iframes, no blocking | None |
| 10 | `enforcement-test.html` | **Enforcement testing** — Klaro + consent mode active | Dynamic (from backend) |

---

## Page 1 — `index.html` (Homepage)

### Cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Page load | Google Analytics 4 (`gtag.js`, ID: `G-89RWJTCPLZ`) | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Page load | GA4 session companion | **Real** |
| `test_cookie` | Marketing | Page load | Google AdSense (`adsbygoogle.js`, pub: `ca-pub-7344776715655315`) — DoubleClick permission probe | **Real** — self-deletes immediately after permission check |
| `user_prefs` | Functional | Page load | Inline `document.cookie` | **Dummy** — value `{"lang":"en","theme":"light"}` |
| `session_id` | Functional | Page load | Inline `document.cookie` | **Dummy** — value `sess-abc123xyz` |
| `marketing_id` | Others | Page load | Inline `document.cookie` | **Dummy** — value `test-user-123`; intentionally unclassified to test "Others" bucket |

### Cookies set conditionally

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_fbc` | Marketing | Page load **only if** URL contains `fbclid=` | Meta Pixel (if loaded via GTM tag) | **Real (conditional)** — simulate with `?fbclid=test123` |

---

## Page 2 — `spa-page.html` (SPA Page)

No cookies set on page load. All require explicit button click.

### Cookies set on button click

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Click **"Load Google Analytics"** | GA4 dynamically loaded (`G-89RWJTCPLZ`) | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Click **"Load Google Analytics"** | GA4 session companion | **Real** |
| `campaign_id` | Marketing | Click **"Load Marketing Script"** | Inline `document.cookie` | **Dummy** — value `spring2026` |
| `ab_variant` | Marketing | Click **"Load Marketing Script"** | Inline `document.cookie` | **Dummy** — value `B` |

---

## Page 3 — `iframe-page.html` (Iframe Page)

No cookies from the page's own scripts. Cookies are set by third-party iframes.

### Cookies set on page load (from iframes)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `YSC` | Marketing | YouTube iframe loads | YouTube (`youtube.com`) | **Real** |
| `VISITOR_INFO1_LIVE` | Marketing | YouTube iframe loads | YouTube | **Real** |
| `__Secure-YEC` | Marketing | YouTube iframe loads | YouTube | **Real** |
| `test_cookie` | Marketing | DoubleClick permission probe fires on Maps iframe load | DoubleClick (`doubleclick.net`) | **Real** — sets `CheckForPermission`, then self-deletes |
| `IDE` | Marketing | Maps iframe triggers DoubleClick ad sync | DoubleClick (`doubleclick.net`) | **Real in browser only** — not detectable in headless Chrome (Google ad SDK bot detection blocks the auction request) |
| Google Maps cookies | Analytics / Functional | Google Maps iframe loads | Google Maps (`maps.googleapis.com`) | **Real** |

> **Scanner note:** This page adds ~20 s to scan time due to iframe warmup (2 500 ms scrollIntoView + 500 ms mouseover per iframe). Use `all-trackers.html` when scan speed matters more than iframe cookie coverage.

---

## Page 4 — `google-cookies.html`

Full Google stack — most comprehensive Google cookie coverage on the site.

### Cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Page load | GTM container → GA4 tag (Stream 1: `G-89RWJTCPLZ`) | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Page load | GTM → GA4 session companion | **Real** |
| `_ga_01XNDLZCYQ` | Analytics | Page load | Direct `gtag.js` tag (Stream 2: `G-01XNDLZCYQ`) | **Real** |
| `_gcl_au` | Marketing | Page load | GTM → Conversion Linker tag | **Real** |
| `_fbp` | Marketing | Page load | GTM → Meta Pixel tag (Pixel ID: `1995676894381395`) | **Real** |
| `gtm-session-start` | Functional | Page load | GTM first-party session marker | **Real** |
| `test_cookie` | Marketing | Page load | Google AdSense (`ca-pub-7344776715655315`) → DoubleClick | **Real** — self-deletes |
| Google Maps cookies | Analytics / Functional | Google Maps iframe loads | Google Maps | **Real** |

---

## Page 5 — `meta-cookies.html`

Direct Meta Pixel tag. Also documents the Meta Conversions API (CAPI) — no CAPI cookies are set client-side.

### Cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_fbp` | Marketing | Page load | Meta Pixel direct (`fbevents.js`, Pixel ID: `1995676894381395`) | **Real** — browser fingerprint-based UUID, 90-day expiry |

### Cookies set conditionally

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_fbc` | Marketing | Page load **only if** `fbclid=` present in URL | Meta Pixel | **Real (conditional)** — simulate: append `?fbclid=Abc123Test` to URL |

---

## Page 6 — `bing-cookies.html`

Microsoft advertising and analytics stack — UET, Clarity, and Bing Maps iframe.

### Cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_uetsid` | Marketing | Page load | Bing UET (`bat.js`, Tag ID: `343251198`) — session identifier | **Real** — 30-minute expiry |
| `_uetvid` | Marketing | Page load | Bing UET — visitor identifier | **Real** — 180-day expiry |
| `_clck` | Analytics | Page load | Microsoft Clarity (`clarity.ms/tag/wy0xa34b85`) — click tracking | **Real** — 1-year expiry |
| `_clsk` | Analytics | Page load | Microsoft Clarity — session key | **Real** — 1-day expiry |
| `CLID` | Analytics | Page load | Clarity — visitor ID written to `clarity.ms` (third-party) | **Real** — requires third-party cookies enabled |
| `SM` | Analytics | Page load | Clarity → Bing sync (`c.clarity.ms`) | **Real** — session only; first scan from IP only |
| `MUID` | Marketing | Page load | Microsoft via Clarity→Bing sync (`c.bing.com`, `.clarity.ms`) | **Real** — 1-year expiry; **first scan from a given container IP only** (server-side deduplication) |
| `ANONCHK` | Marketing | Page load | Clarity → Bing sync | **Real** — first scan only |
| `MR` | Marketing | Page load | Clarity → Bing sync (`c.bing.com`) | **Real** — first scan only |
| `SRM_B` | Marketing | Page load | Clarity → Bing sync | **Real** — first scan only |
| Bing Maps cookies | Analytics / Functional | Bing Maps iframe loads | Bing (`bing.com`) | **Real** (third-party iframe) |

> **MUID / ANONCHK / MR / SRM_B note:** Microsoft Clarity only fires the Bing sync requests for "new" visitor IPs. Subsequent scans from the same Docker container IP return no sync — this is Clarity server-side deduplication, not a scanner bug. Restart the container or scan from a fresh IP to trigger again.

---

## Page 7 — `adobe-cookies.html`

Adobe Experience Cloud documentation page. All cookies are **dummies** — no real Adobe account IDs are wired in. See `docs/adobe-setup.md` for instructions on replacing dummies with real values.

### Dummy cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `AMCV_*` | Analytics | Page load | Inline `document.cookie` — simulates Adobe ECID | **Dummy** |
| `AMCVS_*` | Analytics | Page load | Inline `document.cookie` | **Dummy** |
| `s_cc` | Analytics | Page load | Inline `document.cookie` — simulates Adobe Analytics | **Dummy** |
| `s_sq` | Analytics | Page load | Inline `document.cookie` | **Dummy** |
| `mbox` | Functional | Page load | Inline `document.cookie` — simulates Adobe Target | **Dummy** |
| `at_check` | Functional | Page load | Inline `document.cookie` | **Dummy** |

---

## Page 8 — `cookie-reader.html`

Utility page. **No tracking scripts, no cookies set.** Reads and displays all cookies currently in the browser. Useful for inspecting scan results and manually deleting cookies before enforcement testing.

---

## Page 9 — `all-trackers.html` *(updated — 2026-07-06)*

**Primary scanner target for dev testing.** All four platforms load simultaneously with no consent blocking. Also includes all four third-party iframes (YouTube, Google Maps, Facebook Like, Bing Maps) for maximum cookie coverage in a single scan.

**Recommended scan URL:** `http://host.docker.internal:3000/all-trackers.html`  
**Expected scan time:** ~40–45 s (4 iframes × ~3 s warmup each on top of script polling)

### First-party cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Page load | GTM → GA4 Stream 1 (`G-89RWJTCPLZ`) | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Page load | GTM → GA4 session companion | **Real** |
| `_ga_01XNDLZCYQ` | Analytics | Page load | Direct `gtag.js` — GA4 Stream 2 (`G-01XNDLZCYQ`) | **Real** |
| `_gcl_au` | Marketing | Page load | GTM → Conversion Linker | **Real** |
| `gtm-session-start` | Functional | Page load | GTM → Conversion Linker | **Real** |
| `_gcl_aw` | Marketing | Page load | Inline `document.cookie` | **Dummy** — correct `GCL.<ts>.<gclid>` format; real value needs `?gclid=` URL param |
| `test_cookie` | Marketing | Page load | Google AdSense (`ca-pub-7344776715655315`) → DoubleClick permission probe | **Real** — self-deletes |
| `_fbp` | Marketing | Page load | GTM → Meta Pixel (`1995676894381395`) + direct `fbevents.js` (Meta deduplicates) | **Real** |
| `th_capi_em` | Marketing | Page load | Inline `document.cookie` | **Dummy** — SHA-256 hashed email (simulates server-side CAPI) |
| `th_capi_fn` | Marketing | Page load | Inline `document.cookie` | **Dummy** — SHA-256 hashed first name |
| `th_capi_ln` | Marketing | Page load | Inline `document.cookie` | **Dummy** — SHA-256 hashed last name |
| `th_capi_ph` | Marketing | Page load | Inline `document.cookie` | **Dummy** — SHA-256 hashed phone |
| `_uetsid` | Marketing | Page load | Bing UET (`bat.js`, Tag ID: `343251198`) | **Real** — 30-min expiry |
| `_uetvid` | Marketing | Page load | Bing UET | **Real** — 180-day expiry |
| `_clck` | Analytics | Page load | Microsoft Clarity (`wy0xa34b85`) | **Real** — 1-year expiry |
| `_clsk` | Analytics | Page load | Microsoft Clarity | **Real** — 1-day expiry |

### First-party cookies — first scan from this container IP only

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `MUID` | Marketing | Page load | Clarity → Bing sync (`c.bing.com`) | **Real** — server-side deduplication applies |
| `ANONCHK` | Marketing | Page load | Clarity → Bing sync | **Real** |
| `SRM_B` | Marketing | Page load | Clarity → Bing sync | **Real** |
| `MR` | Marketing | Page load | Clarity → Bing sync | **Real** |

### Third-party cookies — YouTube iframe (`youtube.com`)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `YSC` | Marketing | YouTube iframe loads | YouTube server `Set-Cookie` | **Real** |
| `VISITOR_INFO1_LIVE` | Marketing | YouTube iframe loads | YouTube server `Set-Cookie` | **Real** |
| `__Secure-YEC` | Marketing | YouTube iframe loads | YouTube server `Set-Cookie` | **Real** |

### Third-party cookies — Google Maps iframe (`google.com`)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `NID` | Functional | Maps iframe loads | Google server `Set-Cookie` | **Real** |
| `CONSENT` | Functional | Maps iframe loads | Google server `Set-Cookie` | **Real** |
| `AEC` | Functional | Maps iframe loads | Google server `Set-Cookie` | **Real** |

### Third-party cookies — Facebook Like iframe (`facebook.com`)

> Chrome blocks these by default since 2024 (third-party cookie deprecation). Enable via Chrome → Settings → Privacy → Third-party cookies for browser testing. The scanner may capture them via CDP `responseReceivedExtraInfo` regardless.

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `fr` | Marketing | Facebook Like iframe loads | Facebook server `Set-Cookie` | **Real** |
| `datr` | Marketing | Facebook Like iframe loads | Facebook server `Set-Cookie` | **Real** |
| `sb` | Marketing | Facebook Like iframe loads | Facebook server `Set-Cookie` | **Real** |
| `locale` | Functional | Facebook Like iframe loads | Facebook server `Set-Cookie` | **Real** |
| `dpr` | Functional | Facebook Like iframe loads | Facebook server `Set-Cookie` | **Real** |
| `wd` | Functional | Facebook Like iframe loads | Facebook server `Set-Cookie` | **Real** |

### Third-party cookies — Bing Maps iframe (`bing.com`)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `MUID` *(bing.com copy)* | Marketing | Bing Maps iframe loads | Microsoft server `Set-Cookie` | **Real** |
| `MR` | Functional | Bing Maps iframe loads | Microsoft server `Set-Cookie` | **Real** |
| `SRCHUSR` | Marketing | Bing Maps iframe loads | Microsoft server `Set-Cookie` | **Real** |
| `SRCHD` | Functional | Bing Maps iframe loads | Microsoft server `Set-Cookie` | **Real** |
| `_SS` | Functional | Bing Maps iframe loads | Microsoft server `Set-Cookie` | **Real** — session |
| `MSFPC` | Marketing | Bing Maps iframe loads | Microsoft server `Set-Cookie` | **Real** |

---

## Page 10 — `enforcement-test.html` *(new — 2026-07-06)*

Enforcement testing page. Fetches the generated enforcement script from the local backend and injects it before tracking scripts fire. Tracking scripts are either:
- Blocked via **Google Consent Mode default deny** (Google / GTM)
- Blocked via **`type="text/plain"`** Klaro full-block (Meta, Bing, Clarity)

**No cookies should appear until the user interacts with the Klaro consent banner.**

### Setup

1. Publish a ConsentManager in the CMP UI and note the `consentManagerId`
2. Open `http://localhost:3000/enforcement-test.html`
3. Enter backend URL (`http://localhost:8080`) and `consentManagerId` → click **Load Enforcement Script**
4. The Klaro banner should appear

### Cookie behaviour by consent choice

| Consent | Cookies set | Cookies absent |
|---|---|---|
| Decline All | None | `_ga`, `_gcl_au`, `_fbp`, `_uetsid`, `_uetvid`, `_clck`, `_clsk` |
| Accept Analytics only | `_ga`, `_ga_89RWJTCPLZ`, `_clck`, `_clsk` | `_gcl_au`, `_fbp`, `_uetsid`, `_uetvid` |
| Accept Marketing only | `_gcl_au`, `_fbp`, `_uetsid`, `_uetvid` | `_ga`, `_clck`, `_clsk` |
| Accept All | All of the above | — |

---

## Backend Categorisation Reference

Cookies detected by the scanner are categorised in this order:

1. **OpenCookieDB** (`open_cookie_database` MongoDB collection) — exact name match
2. **KnownServicesLibrary** (in-memory fallback, checked when DB returns empty)
3. **"Others"** — if neither source has a record

### KnownServicesLibrary — current entries *(updated 2026-07-06)*

| Service | Cookie patterns | Category |
|---|---|---|
| google-analytics | `^_ga`, `^_gid`, `^_gat` | Analytics |
| google-ads | `^_gcl_` | Marketing |
| google-tag-manager | `^_gtm` | Analytics |
| facebook-pixel | `^_fbp`, `^_fbc` | Marketing |
| microsoft-clarity | `^_clck`, `^_clsk`, `^CLID$` | Analytics |
| bing-ads (UET) | `^_uetsid`, `^_uetvid`, `^MUID`, `^_uetmsclkid$` | Marketing |
| **doubleclick** *(added)* | `^IDE$`, `^test_cookie$` | Marketing |
| **akamai-bot-manager** *(added)* | `^bm_sz$`, `^bm_mi$` | Functional |
| **neotag** *(added)* | `^neo_`, `^nt_` | Analytics |
| hotjar | `^_hjid`, `^_hjSession` | Analytics |
| hubspot | `^hubspotutk`, `^__hstc`, `^__hssc` | Marketing |
| pinterest | `^_pin_unauth` | Marketing |
| adobe-analytics | `^AMCV_`, `^AMCVS_`, `^s_cc$`, `^s_sq$`, `^s_vi$` | Analytics |
| adobe-target | `^mbox$`, `^mboxEdgeCluster$`, `^at_check$` | Functional |
| tiktok-pixel | `^_tt_` | Marketing |
| intercom | `^intercom-` | Functional |

### OpenCookieDB corrections *(applied 2026-07-06)*

| Cookie | Old category | New category | Reason |
|---|---|---|---|
| `test_cookie` | Functional | **Marketing** | DoubleClick advertising platform — not a functional cookie |
| `SRM_B` | Functional | **Marketing** | Bing remarketing sync — same family as MUID / ANONCHK |

---

## Full Summary Table

**Domain key:** FP = first-party (our domain) · YT = youtube.com · G = google.com · FB = facebook.com · B = bing.com

| Cookie | Category | Domain | Page(s) | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | FP | Homepage, Google, All Trackers, SPA (click) | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | FP | Homepage, Google, All Trackers, SPA (click) | **Real** |
| `_ga_01XNDLZCYQ` | Analytics | FP | Google Cookies, All Trackers | **Real** |
| `_gcl_au` | Marketing | FP | Google, All Trackers | **Real** |
| `_gcl_aw` | Marketing | FP | Google (dummy), All Trackers (dummy) | **Dummy** — real needs `?gclid=` |
| `gtm-session-start` | Functional | FP | Google, All Trackers | **Real** |
| `test_cookie` | Marketing | FP | Homepage, Google, Iframe, All Trackers | **Real** — self-deletes |
| `_fbp` | Marketing | FP | Homepage, Google, Meta, All Trackers | **Real** |
| `_fbc` | Marketing | FP | Meta, Homepage (conditional on `fbclid=`) | **Real (conditional)** |
| `th_capi_em` | Marketing | FP | Meta, All Trackers | **Dummy** — simulates server-side CAPI |
| `th_capi_fn` | Marketing | FP | Meta, All Trackers | **Dummy** |
| `th_capi_ln` | Marketing | FP | Meta, All Trackers | **Dummy** |
| `th_capi_ph` | Marketing | FP | Meta, All Trackers | **Dummy** |
| `_uetsid` | Marketing | FP | Bing, All Trackers | **Real** |
| `_uetvid` | Marketing | FP | Bing, All Trackers | **Real** |
| `MUID` | Marketing | FP | Bing, All Trackers | **Real** — first scan from IP only |
| `ANONCHK` | Marketing | FP | Bing, All Trackers | **Real** — first scan only |
| `MR` | Marketing | FP | Bing, All Trackers | **Real** — first scan only |
| `SRM_B` | Marketing | FP | Bing, All Trackers | **Real** — first scan only |
| `_clck` | Analytics | FP | Bing, All Trackers | **Real** |
| `_clsk` | Analytics | FP | Bing, All Trackers | **Real** |
| `CLID` | Analytics | FP | Bing, All Trackers | **Real** — written to clarity.ms |
| `SM` | Analytics | FP | Bing, All Trackers | **Real** — first scan only |
| `IDE` | Marketing | FP | Iframe (browser only) | **Real (browser only)** — headless bot detection blocks auction |
| `YSC` | Marketing | YT | Iframe, All Trackers | **Real** |
| `VISITOR_INFO1_LIVE` | Marketing | YT | Iframe, All Trackers | **Real** |
| `__Secure-YEC` | Marketing | YT | Iframe, All Trackers | **Real** |
| `NID` | Functional | G | Google Cookies, All Trackers | **Real** |
| `CONSENT` | Functional | G | Google Cookies, All Trackers | **Real** |
| `AEC` | Functional | G | Google Cookies, All Trackers | **Real** |
| `fr` | Marketing | FB | Meta, All Trackers | **Real** — Chrome 2024+ blocks by default |
| `datr` | Marketing | FB | Meta, All Trackers | **Real** — Chrome 2024+ blocks by default |
| `sb` | Marketing | FB | Meta, All Trackers | **Real** — Chrome 2024+ blocks by default |
| `locale` | Functional | FB | Meta, All Trackers | **Real** — Chrome 2024+ blocks by default |
| `dpr` | Functional | FB | Meta, All Trackers | **Real** — Chrome 2024+ blocks by default |
| `wd` | Functional | FB | Meta, All Trackers | **Real** — Chrome 2024+ blocks by default |
| `MUID` *(bing.com)* | Marketing | B | Bing, All Trackers | **Real** — third-party copy on bing.com |
| `SRCHUSR` | Marketing | B | Bing, All Trackers | **Real** |
| `SRCHD` | Functional | B | Bing, All Trackers | **Real** |
| `_SS` | Functional | B | Bing, All Trackers | **Real** — session |
| `MSFPC` | Marketing | B | Bing, All Trackers | **Real** |
| `user_prefs` | Functional | FP | Homepage | **Dummy** |
| `session_id` | Functional | FP | Homepage | **Dummy** |
| `marketing_id` | Others | FP | Homepage | **Dummy** |
| `campaign_id` | Marketing | FP | SPA | **Dummy** |
| `ab_variant` | Marketing | FP | SPA | **Dummy** |
| Adobe cookies (`AMCV_*` etc.) | Analytics / Functional | FP | Adobe | **Dummy** |

---

## Known Gaps

| Gap | Detail | Workaround |
|---|---|---|
| `IDE` not detectable in headless | DoubleClick ad auction doesn't fire in headless Chrome — Google's ad SDK performs bot detection before launching the auction | Use Manual API (`POST /addCookies`) to declare IDE as a Marketing cookie for the ConsentManager |
| `MUID` / Bing sync only on first scan | Clarity server-side deduplication — only syncs with Bing for new container IPs | Restart the Docker container to get a fresh IP, or use Manual API |
| `_fbc` requires ad-click referrer | `fbclid` param must be present in the URL | Append `?fbclid=Abc123Test` when scanning to simulate an ad-click landing |
| `_gcl_aw` is a dummy | Real `_gcl_aw` only written by GTM Conversion Linker when URL contains `gclid=` (Google Ads auto-tag) | Load `all-trackers.html?gclid=test123` — GTM Conversion Linker overwrites the dummy with a real value |
| Facebook iframe cookies blocked in Chrome | `fr`, `datr`, `sb` etc. are blocked by default in Chrome 2024+ (Privacy Sandbox rollout) | Enable third-party cookies in Chrome settings for manual browser testing; scanner may still capture via CDP `responseReceivedExtraInfo` |
| Meta CAPI cookies are dummies | `th_capi_*` are written server-side by your backend after a real conversion event — no browser script can produce them | Dummies use correct 64-hex SHA-256 format so category mapping and enforcement logic can be tested |
| Adobe cookies are all dummies | No real Adobe Experience Cloud account | See `docs/adobe-setup.md` for provisioning a real Adobe account |
| NeoTag cookies (`nt_*`, `neo_*`) | NeoTag CDP not loaded on any test site page | Declare via Manual API — patterns `^neo_` / `^nt_` now in KnownServicesLibrary → Analytics |

---

*Cookie Consent Test Site · Internal Reference · v2.1 · 2026-07-06*
