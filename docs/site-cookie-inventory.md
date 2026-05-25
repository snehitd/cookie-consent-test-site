# Cookie Inventory — Cookie Consent Test Site

**Version:** 1.0  
**Date:** 2026-05-25  
**Branch:** `main` (no enforcement)

This document lists every cookie set across all pages of the test site, the exact trigger that causes it to be set, and whether the cookie is real (set by a genuine vendor script) or dummy (manually simulated for testing).

---

## How to Read This Document

| Column | Meaning |
|---|---|
| **Trigger** | What user action or page event causes the cookie to be written |
| **Set by** | The script or mechanism that writes the cookie |
| **Real / Dummy** | **Real** = set by an actual vendor SDK with a live account ID. **Dummy** = manually written via `document.cookie` with a hardcoded or fabricated value |

---

## Page 1 — `index.html` (Homepage)

### Cookies set on page load (no user action required)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Page load | Google Analytics 4 (`gtag.js`, ID: `G-89RWJTCPLZ`) | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Page load | Google Analytics 4 — session-scoped companion cookie | **Real** |
| `user_prefs` | Functional | Page load | Inline `document.cookie` in `<head>` | **Dummy** — hardcoded value `{"lang":"en","theme":"light"}`, no real preference system |
| `session_id` | Functional | Page load | Inline `document.cookie` in `<head>` | **Dummy** — hardcoded value `sess-abc123xyz`, not a real session token |
| `_gcl_au` | Marketing | Page load | Inline `document.cookie` in `<head>` | **Dummy** — correct cookie name and format but no real Google Ads tag on the page; value is fabricated |
| `_fbp` | Marketing | Page load | Real Meta Pixel (`fbevents.js`, Pixel ID: `1995676894381395`) | **Real** — set automatically by the pixel on first load |
| `_uetsid` | Marketing | Page load | Real Bing Ads UET (`bat.js`, Tag ID: `343251198`) | **Real** — set automatically by the UET tag on load |
| `_uetvid` | Marketing | Page load | Real Bing Ads UET (`bat.js`) | **Real** — persists across sessions as the visitor ID |
| `MUID` | Marketing | Page load | Microsoft via `bat.js` | **Real** — Microsoft-wide user identifier, shared across Microsoft properties |
| `marketing_id` | Others | Page load | Inline `document.cookie` in `<head>` | **Dummy** — explicit test placeholder, value `test-user-123` |

### Cookies set conditionally (not guaranteed on every visit)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_fbc` | Marketing | Page load **only if** the URL contains a `fbclid=` query parameter (i.e., visitor arrived by clicking a Meta/Facebook ad) | Real Meta Pixel (`fbevents.js`) | **Real** — genuinely set only on ad-click landings |

---

## Page 2 — `gtm-page.html` (GTM Page)

### Cookies set on page load

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| GTM-managed cookies | Depends on tags configured | Page load fires the GTM container (`GTM-N8M7CRQR`) | Google Tag Manager — exact cookies depend on which tags are published in the GTM dashboard | **Real** (if tags are live in GTM) |

> **Note:** No cookies are hard-coded on this page. Everything depends on the GTM container configuration. If GA4, Google Ads, or other tags are set up inside GTM, their cookies (`_ga`, `_gcl_au`, etc.) will appear here. Check the GTM dashboard for the active tag list.

### Cookies set on button click

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| None directly | — | "Fire purchase event" button pushes a `purchase` event to `dataLayer` | Inline JS — pushes to `window.dataLayer` only; does not write any cookie directly | N/A |

---

## Page 3 — `spa-page.html` (SPA Page)

No cookies are set on page load. All cookies on this page require an explicit button click.

### Cookies set on button click

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Click **"Load Google Analytics"** button | GA4 dynamically loaded via `document.createElement('script')` with ID `G-89RWJTCPLZ` | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Click **"Load Google Analytics"** button | GA4 session companion cookie | **Real** |
| `campaign_id` | Marketing | Click **"Load Marketing Script"** button | Inline `document.cookie` | **Dummy** — hardcoded value `spring2026` |
| `ab_variant` | Marketing | Click **"Load Marketing Script"** button | Inline `document.cookie` | **Dummy** — hardcoded value `B` |

---

## Page 4 — `iframe-page.html` (Iframe Page)

No cookies are set by the page's own scripts. Cookies are set by **third-party iframes** that load on page load.

### Cookies set on page load (third-party, from iframes)

| Cookie | Category | Trigger | Set By | Real / Dummy |
|---|---|---|---|---|
| `YSC` | Marketing | Page load — YouTube iframe loads automatically | YouTube (`youtube.com`) | **Real** — YouTube session cookie |
| `VISITOR_INFO1_LIVE` | Marketing | Page load — YouTube iframe loads automatically | YouTube (`youtube.com`) | **Real** — YouTube visitor identifier |
| `__Secure-YEC` | Marketing | Page load — YouTube iframe | YouTube | **Real** |
| Google Maps cookies | Analytics / Functional | Page load — Google Maps iframe loads automatically | Google Maps (`maps.google.com`) | **Real** — set by Google Maps embed |

> **Note:** Third-party iframe cookies are browser-dependent. Modern browsers (Safari, Firefox) may block them under ITP/ETP. The exact set of cookies visible will vary by browser.

---

## Page 5 — `privacy-policy.html`

No scripts, no cookies set.

---

## Cross-Page — `assets/test-helpers.js`

Loaded on every page (`index.html`, `gtm-page.html`, `spa-page.html`, `iframe-page.html`). **Does not set any cookies.** It only reads and logs cookies to the browser console on page load, and renders the "Inspect cookies & scripts" floating button.

---

## Full Summary Table

| Cookie | Category | Page(s) | Trigger | Real / Dummy |
|---|---|---|---|---|
| `_ga` | Analytics | Homepage, SPA Page (on click) | Page load / button click | **Real** |
| `_ga_89RWJTCPLZ` | Analytics | Homepage, SPA Page (on click) | Page load / button click | **Real** |
| `user_prefs` | Functional | Homepage | Page load | **Dummy** |
| `session_id` | Functional | Homepage | Page load | **Dummy** |
| `_gcl_au` | Marketing | Homepage | Page load | **Dummy** (real name, fake value) |
| `_fbp` | Marketing | Homepage | Page load | **Real** |
| `_fbc` | Marketing | Homepage | Page load + `fbclid` URL param only | **Real (conditional)** |
| `_uetsid` | Marketing | Homepage | Page load | **Real** |
| `_uetvid` | Marketing | Homepage | Page load | **Real** |
| `MUID` | Marketing | Homepage | Page load | **Real** |
| `marketing_id` | Others | Homepage | Page load | **Dummy** |
| GTM-managed | Varies | GTM Page | Page load | **Real** (tag-dependent) |
| `campaign_id` | Marketing | SPA Page | Button click | **Dummy** |
| `ab_variant` | Marketing | SPA Page | Button click | **Dummy** |
| YouTube cookies | Marketing | Iframe Page | Page load (iframe) | **Real** (third-party) |
| Google Maps cookies | Analytics/Functional | Iframe Page | Page load (iframe) | **Real** (third-party) |

---

## Known Gaps

| Gap | Detail | Recommended Fix |
|---|---|---|
| `_gcl_au` is dummy | No real Google Ads tag on the page — cookie is set manually with a fabricated value | Add `gtag('config', 'AW-XXXXXXXXX')` with a real Google Ads conversion ID, or configure a Google Ads tag inside GTM |
| `_fbc` is conditional | Only appears when visitor arrives via a Meta ad click (`fbclid` param) — will not be visible in normal testing | Append `?fbclid=test123` to the URL manually in the browser to simulate an ad-click landing |
| GTM Page cookies unknown | Exact cookies depend on the GTM container's published tag configuration, which is not in code | Document the GTM tag list separately from the GTM dashboard |

---

*Cookie Consent Test Site · Internal Reference · v1.0 · 2026-05-25*
