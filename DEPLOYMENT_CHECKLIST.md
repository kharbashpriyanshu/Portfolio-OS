# Production Deployment Checklist

Use this checklist to verify that Portfolio OS v1.0 is fully ready for a public production launch.

## 1. Environment & Secrets

- [ ] Ensure all local `.env` values are replicated in the Vercel (or hosting provider) dashboard.
- [ ] Set `VITE_APP_URL` to the exact production domain (e.g., `https://priyanshukharbash.com`).
- [ ] Ensure `VITE_APP_ENV` is set to `production`.

## 2. DNS & Domain Configuration

- [ ] Domain name is registered.
- [ ] Nameservers or A/CNAME records are correctly pointing to the hosting provider (Vercel).
- [ ] Wait for DNS propagation to complete.
- [ ] Verify that the `www` subdomain correctly redirects to the apex domain (or vice versa).

## 3. Security & HTTPS

- [ ] Verify SSL/TLS certificates are actively provisioned and valid.
- [ ] Confirm `vercel.json` security headers are active by inspecting network requests (check for `Strict-Transport-Security`, `X-Content-Type-Options`).
- [ ] Verify that all HTTP traffic forcefully redirects to HTTPS.

## 4. SEO & Metadata Validation

- [ ] Check `https://yourdomain.com/robots.txt` is accessible and correct.
- [ ] Check `https://yourdomain.com/sitemap.xml` is accessible and contains production URLs.
- [ ] Validate JSON-LD Structured Data using Google's Rich Results Test.
- [ ] Validate Open Graph and Twitter Cards using the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator).
- [ ] Ensure `manifest.webmanifest` loads correctly in the browser network tab.

## 5. Performance & Analytics

- [ ] Run a Google Lighthouse Audit (Desktop & Mobile) in an Incognito window on the live domain. Target: >90 in all categories.
- [ ] Ensure assets (images, fonts, bundles) are being served with aggressive cache headers.
- [ ] Connect the domain to Google Search Console and submit the `sitemap.xml`.
- [ ] (Optional) Integrate Vercel Web Analytics or Google Analytics and verify data is flowing.

## 6. Accessibility & UX Validation

- [ ] Traverse the entire live site using only the `Tab` key to verify focus management.
- [ ] Test the site with a screen reader (VoiceOver/NVDA) to ensure ARIA labels are descriptive.
- [ ] Verify that layout does not break on extreme viewport sizes (e.g., iPhone SE vs 4K UltraWide).
- [ ] Trigger an OS-level "Reduce Motion" setting and verify that Framer Motion disables aggressive animations.

## 7. Final Sanity Check

- [ ] Click every single outbound link (Socials, GitHub, Demos, Certificates) to ensure no 404s.
- [ ] Submit a test message through the Contact Form to verify the error/success state handling.
- [ ] Check the browser console on the live site for any uncaught errors or hydration warnings.
