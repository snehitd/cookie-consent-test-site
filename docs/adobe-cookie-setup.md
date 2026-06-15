# Adobe Experience Cloud — Cookie Setup Guide

**Purpose:** Step-by-step instructions to replace the dummy Adobe cookies on
`adobe-cookies.html` with real cookies from live Adobe scripts.

**Current state:** All 10 Adobe cookies on the test site are dummies (correct
formats, placeholder IDs). This guide walks through getting the required IDs from
Adobe and wiring the real scripts into the page.

---

## Products and What Each Requires

| Product | What sets cookies | What you need |
|---|---|---|
| Adobe ECID | `VisitorAPI.js` | IMS Org ID |
| Adobe Analytics | `AppMeasurement.js` | Report Suite ID |
| Adobe Target | `at.js` | Client Code |

All three can be obtained from a single **Adobe Experience Cloud** organisation
account. An organisation account is enterprise-provisioned — see Section 1.

---

## Section 1 — Get an Adobe Experience Cloud Organisation

Adobe Experience Cloud is an enterprise product. Unlike Google Analytics or
Microsoft Clarity, there is no free self-sign-up tier for production use.

### Option A — Use an existing Adobe account (fastest)

If your company already has an Adobe Experience Cloud contract:

1. Log in at [experience.adobe.com](https://experience.adobe.com) with your
   Adobe ID.
2. If you see the Experience Cloud home page with product tiles
   (Analytics, Target, etc.), your account already has access.
3. Proceed to Section 2 to get your IMS Org ID.

### Option B — Adobe free trial

Adobe offers a 30-day free trial for some products (Analytics, Target):

1. Go to [adobe.com/in/analytics/adobe-analytics.html](https://business.adobe.com/in/products/analytics/adobe-analytics.html)
   → click **Free Trial** (or similar — Adobe changes this periodically).
2. Create or log in with an Adobe ID.
3. Complete the trial sign-up form (company details required).
4. You will receive access to Experience Cloud with a trial Report Suite
   (Analytics) and a trial workspace (Target).

### Option C — Adobe Developer account (for ECID only)

If you only need ECID cookies (not Analytics or Target):

1. Go to [developer.adobe.com](https://developer.adobe.com).
2. Sign in with an Adobe ID (free).
3. Under **Console** → create a new project.
4. Add **Experience Cloud ID Service** as a product.
5. Your IMS Org ID is shown in the project settings (see Section 2).

---

## Section 2 — Get Your IMS Org ID

The IMS Org ID is the identifier used in the `AMCV_` and `AMCVS_` cookie names.
Format: `XXXXXXXXXXXXXXXX@AdobeOrg` (16 uppercase hex chars + `@AdobeOrg`).

**Steps:**

1. Log in at [experience.adobe.com](https://experience.adobe.com).
2. Click your profile avatar (top right) → **"Switch Organisation"** or
   look at the URL — it contains your Org ID in some views.
3. Alternatively: go to **Admin Console** →
   [adminconsole.adobe.com](https://adminconsole.adobe.com) →
   **Settings** tab → the Org ID is shown under "Organisation details".
4. Copy the full string including `@AdobeOrg`. Example:
   `7B71F94553ABA7C70A495DB6@AdobeOrg`

**Once you have the Org ID**, update Section A in `adobe-cookies.html`:

```html
<!-- Replace in the Section A script block -->
var _adobeOrg = 'YOUR_ORG_ID@AdobeOrg';  // e.g. 7B71F94553ABA7C70A495DB6@AdobeOrg
```

This makes `AMCV_` and `AMCVS_` use the real OrgID. The dummy values in the
cookie body are still fabricated — to get real values, continue to Section 5
(adding the real VisitorAPI.js).

---

## Section 3 — Get an Adobe Analytics Report Suite ID

A Report Suite is an Adobe Analytics data collection container. The Report
Suite ID (RSID) is used to configure AppMeasurement.js.

**Steps:**

1. Log in at [experience.adobe.com](https://experience.adobe.com).
2. Open **Adobe Analytics** from the product switcher.
3. In Analytics, go to **Admin** (top nav) → **Report Suites**.
4. You will see a list of existing report suites. Each has an ID in the
   **Report Suite ID** column. Format example: `mycompany-prod` or
   `mycompany.dev`.
5. If no report suite exists, click **Create New Report Suite**:
   - Give it a name (e.g., `test-site-dev`)
   - Set base URL to your Netlify domain
   - Choose timezone and currency
   - Save — the RSID is shown on the confirmation page
6. Note your RSID for use in Section 5.

---

## Section 4 — Get an Adobe Target Client Code

The Client Code is the unique identifier for your Adobe Target account.
It is used to configure at.js.

**Steps:**

1. Log in at [experience.adobe.com](https://experience.adobe.com).
2. Open **Adobe Target** from the product switcher.
3. In Target, go to **Administration** (gear icon, left sidebar) →
   **Implementation**.
4. Under **Account Details**, you will see your **Client Code**.
   Format: all lowercase letters, 4–10 characters. Example: `mycompany`.
5. Note your Client Code for use in Section 6.

---

## Section 5 — Add Real ECID + Analytics (VisitorAPI.js + AppMeasurement.js)

### Download the libraries

**AppMeasurement.js (includes VisitorAPI.js):**

1. In Adobe Analytics → **Admin** → **Code Manager**.
2. Select **JavaScript (new)** → Download.
3. The zip contains:
   - `AppMeasurement.js` — Adobe Analytics SDK
   - `VisitorAPI.js` — ECID SDK (must load before AppMeasurement)
4. Place both files in your site's `assets/` folder.

### Replace the dummy Section A + B scripts in `adobe-cookies.html`

Remove the dummy `document.cookie` blocks for Sections A and B, and replace
with the real scripts:

```html
<!-- Section A: ECID (load first — before Analytics) -->
<script src="assets/VisitorAPI.js"></script>
<script>
  var visitor = Visitor.getInstance("YOUR_ORG_ID@AdobeOrg", {
    trackingServer: "YOUR_TRACKING_SERVER",   // e.g. mycompany.sc.omtrdc.net
    trackingServerSecure: "YOUR_TRACKING_SERVER_SECURE"
  });
</script>

<!-- Section B: Adobe Analytics -->
<script src="assets/AppMeasurement.js"></script>
<script>
  var s = s_gi("YOUR_REPORT_SUITE_ID");   // e.g. s_gi("mycompany-dev")
  s.trackingServer = "YOUR_TRACKING_SERVER";
  s.visitorNamespace = "YOUR_NAMESPACE";
  s.pageName = document.title;
  s.t();   // Send page view beacon
</script>
```

**What to replace:**
- `YOUR_ORG_ID@AdobeOrg` → your IMS Org ID from Section 2
- `YOUR_REPORT_SUITE_ID` → your RSID from Section 3
- `YOUR_TRACKING_SERVER` → your data collection server
  (find in Analytics → Admin → Report Suites → select suite → General → 
  General Account Settings → Tracking Server)

**Cookies that will now appear as real:**

| Cookie | Value format |
|---|---|
| `AMCV_{OrgID}@AdobeOrg` | `MCMID\|{38-digit-id}\|MCAID\|NONE\|...` |
| `AMCVS_{OrgID}@AdobeOrg` | `1` |
| `s_cc` | `true` |
| `s_dur` | timestamp (ms) |
| `s_vi` | `[CS]v1\|{id}-{timestamp}[CE]` |

---

## Section 6 — Add Real Adobe Target (at.js)

### Download at.js

1. In Adobe Target → **Administration** → **Implementation**.
2. Under **at.js**, click **Download at.js** (choose latest version, 2.x
   recommended).
3. Place `at.js` in your site's `assets/` folder.

### Replace the dummy Section C script in `adobe-cookies.html`

Remove the dummy `document.cookie` block for Section C and replace with:

```html
<!-- Section C: Adobe Target -->
<script>
  window.targetGlobalSettings = {
    clientCode: "YOUR_CLIENT_CODE",   // from Section 4
    imsOrgId: "YOUR_ORG_ID@AdobeOrg" // from Section 2
  };
</script>
<script src="assets/at.js"></script>
```

**Cookies that will now appear as real:**

| Cookie | Value format |
|---|---|
| `mbox` | `session#{id}#{expiry}\|PC#{uuid}.{n}_{m}#{expiry}` |
| `at_check` | `true` |

---

## Section 7 — Update Reference Table Status

Once the real scripts are in place, update the status cells in
`adobe-cookies.html` from `class="dummy"` to `class="real"` for each
cookie, and update the footer note to remove "All cookies are DUMMY".

Also remove the dummy `document.cookie` blocks from Sections A, B, C
(they are no longer needed).

---

## Section 8 — Verify in DevTools

1. Open the Netlify deploy of `adobe-cookies.html`.
2. DevTools → Application → Cookies → select your domain.
3. Expected cookies:

| Cookie | Appears when |
|---|---|
| `AMCV_{OrgID}@AdobeOrg` | VisitorAPI.js loads and ECID initialises |
| `AMCVS_{OrgID}@AdobeOrg` | Same page load as AMCV_ (session flag) |
| `s_cc` | AppMeasurement.js loads |
| `s_dur` | AppMeasurement.js loads |
| `s_vi` | First visit with AppMeasurement.js |
| `s_fid` | Only if s_vi cannot be set (fallback) |
| `s_sq` | Only after a link click (Activity Map feature) |
| `s_ppv` | Only when scroll tracking plugin is included |
| `mbox` | at.js loads and makes a Target request |
| `at_check` | at.js loads |

4. Install the [Adobe Experience Platform Debugger](https://chromewebstore.google.com/detail/adobe-experience-platform/bfnnokhpnncpkdmbokanobigaccjkpob)
   Chrome extension for detailed tag-level validation.

---

## Section 9 — Consent Enforcement (future — separate branch)

When adding enforcement on the consent branch, the site owner must add one
configuration block to the ECID `Visitor.getInstance()` call:

```javascript
var visitor = Visitor.getInstance("YOUR_ORG_ID@AdobeOrg", {
  doesOptInApply: true,           // Enable Opt-In Service
  preOptInApprovals: {
    aa: false,                    // Analytics denied by default
    ecid: false,                  // ECID denied by default
    target: false,                // Target denied by default
    aam: false                    // Audience Manager denied
  },
  isOptInStorageEnabled: true     // Persist consent in a cookie
});
```

The consent wrapper then calls:
- `adobe.optIn.approve([ANALYTICS, ECID], true)` when analytics consent is granted
- `adobe.optIn.approve([TARGET], true)` when functional consent is granted
- `adobe.optIn.deny([...], true)` on revocation

**No other site owner changes are needed** — all runtime consent updates are
handled by the enforcement wrapper.

---

## Summary of IDs Needed

| ID | Where to find it | Used in |
|---|---|---|
| IMS Org ID | Admin Console → Settings | VisitorAPI.js, AMCV_ cookie name |
| Report Suite ID | Analytics → Admin → Report Suites | AppMeasurement.js |
| Tracking Server | Analytics → Admin → Report Suite → General Settings | AppMeasurement.js |
| Target Client Code | Target → Administration → Implementation | at.js |
