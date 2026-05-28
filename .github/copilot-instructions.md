# Copilot Instructions — Cookie Consent Test Site

## Purpose
This is a **baseline test site** for developing and validating cookie consent enforcement across multiple enforcement tiers. Each tier lives on its own git branch. The site intentionally loads tracking scripts freely on baseline pages — do not "fix" that; enforcement is layered on top.

## Branch / Enforcement Tier Structure
Each branch represents a distinct enforcement tier. Work in the appropriate branch:

| Branch | Enforcement tier |
|---|---|
| `main` | No enforcement — pure baseline, all tracking fires freely |
| `banner-only` | Banner + `PrivacyConsent` API wired up, but tracking still loads regardless of choice |
| `markup-enforcement` | Klaro markup-based blocking (`data-type`/`data-src` attributes) |
| `apibased-enforcement` | JS API calls (`PrivacyConsent.watch`) gate script execution |
| `gtmbased-enforcement` | GTM Custom Event Triggers keyed on `privacyconsent-*` dataLayer events |
| `iframe-enforcement` | Klaro placeholder-based iframe blocking |

**Never merge enforcement branches back into `main`** — they are parallel implementations for comparison, not a progression.

## Architecture

### Script load order (critical)
Every HTML page with enforcement must load scripts in this exact order in `<head>`:
1. `seqrite.js` — minified Klaro engine (exposes `window.klaro`)
2. `seqrite-config.js` — sets `window.klaroConfig`
3. `seqrite-enforcement.js` (deferred) — `PrivacyConsent` wrapper + Google Consent Mode v2 defaults

```html
<link rel="stylesheet" href="seqrite-config.css"/>
<script data-config="seqriteConfig" type="application/javascript" src="seqrite.js"></script>
<script type="application/javascript" src="seqrite-config.js"></script>
<script defer src="seqrite-enforcement.js"></script>
```

> Note: `enforcement.js` is the legacy filename (present on `main`). `seqrite-enforcement.js` is the current canonical filename used from `banner-only` onwards.

`seqrite-enforcement.js` auto-initializes: `if (window.klaro && window.klaroConfig) { init(...) }`.

### Key globals
| Global | Source | Role |
|---|---|---|
| `window.klaro` | `seqrite.js` | Klaro CMP engine |
| `window.klaroConfig` | `seqrite-config.js` | Klaro configuration |
| `window.PrivacyConsent` | `seqrite-enforcement.js` | Public API for the site |
| `window.dataLayer` | `seqrite-enforcement.js` | GTM integration |

### `PrivacyConsent` public API (`seqrite-enforcement.js`)
- `getConsent(serviceName)` — single service lookup (e.g. `'analytics'`, `'others'`)
- `getConsentByCategory(category)` — all services in a category must be consented
- `watch(cb)` / `unwatch(cb)` — register callbacks on consent changes
- `acceptAll()` / `rejectAll()` / `saveAndApply()` — programmatic consent control
- `show()` / `showModal()` — open banner / preferences modal
- `updateGoogleConsentMode(consents)` — maps `analytics` → `analytics_storage`, `marketing` → `ad_*`

### Service names
`_services` in `seqrite-enforcement.js` defines the Klaro service names used throughout:
- `"analytics"` — analytics category
- `"others"` — (plural) catch-all / other category

> ⚠️ The legacy `enforcement.js` on `main` uses `"other"` (singular). `seqrite-enforcement.js` uses `"others"` (plural). Match the file in use on the current branch.

### Google Consent Mode v2 flow
`seqrite-enforcement.js` sets **denied defaults** for all signals before GTM/GA4 loads. On consent change, `updateGoogleConsentMode()` calls `gtag('consent', 'update', {...})`. GTM pages also get `privacyconsent-<service>-accepted/rejected` dataLayer events for Custom Event Triggers.

## Test pages and their enforcement scenarios
- `index.html` — inline GA4 + marketing pixel cookie; primary enforcement target
- `gtm-page.html` — GTM container (GTM-N8M7CRQR); test Consent Mode v2 + GTM dataLayer events
- `spa-page.html` — dynamic script injection on button click; test API-based enforcement
- `iframe-page.html` — YouTube + Google Maps iframes; test iframe blocking
- `privacy-policy.html` — preferences/re-open banner link testing

## Developer workflow
```sh
npx serve .        # local dev at http://localhost:3000
```
No build step. All files are plain HTML/JS/CSS — edit and refresh.

Deployment: every push to `main` auto-deploys to Netlify (see `netlify.toml`).

## Debugging consent state
Click the **"Inspect cookies & scripts"** floating button (injected by `assets/test-helpers.js`) to dump all cookies and loaded scripts to the browser console. Also available directly:
```js
PrivacyConsent.getConsent('analytics')
PrivacyConsent.getConsentByCategory('others')
```

## `seqrite-config.js` conventions
- `"default": true` means Opt-In by default for all services
- Categories are `"analytics"` and `"others"`; marketing maps to Google ad signals but has no dedicated Klaro service
- `storageName` is the consent cookie name (currently set to the Netlify domain URL)
- `consentManagerId` and `uuid` are Seqrite backend identifiers — do not change them manually
