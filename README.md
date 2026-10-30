# Norixel Technologies — Creator & Digital Growth Website

A responsive white-background website with subtle motion, creator registration, brand enquiry, and the supplied Norixel logo.

## Files
- `index.html` — website structure
- `styles.css` — responsive styling and animations
- `script.js` — navigation, reveal animations and form submission
- `assets/norixel-logo.png` — supplied Norixel logo
- `supabase/schema.sql` — database table and insert-only RLS policy

## Preview
Open `index.html` in a browser. The website works as a static preview. Until Supabase is configured, the form clearly says submissions are not saved.

## Publish using GitHub Pages
1. Create a new GitHub repository.
2. Upload the contents of this folder (not the ZIP itself) to the repository root.
3. In GitHub, open Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch.
5. Choose `main` and `/ (root)`, then Save.
6. Wait for the Pages URL to appear.

## Connect Supabase
1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql`.
3. Copy the Project URL and anon/public key from Project Settings → API.
4. Open `script.js` and replace the two empty constants `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
5. Commit the change and wait for GitHub Pages to redeploy.

Never use the Supabase `service_role` key in browser code or GitHub. The included RLS policy permits public INSERT of pending applications only; public visitors cannot read or edit applications. Add CAPTCHA/rate limiting and a privacy policy before large-scale promotion. The site is a starter and does not yet include an admin dashboard, campaign matching, payments or creator payouts.

## Contact
Brand campaign WhatsApp: +91 96794 81018
