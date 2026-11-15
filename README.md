# Personal Portfolio

React + Vite, Tailwind CSS v4, Framer Motion, and Lucide React. Frontend only.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local address printed by Vite. On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is restricted.

```sh
npm run build
npm run preview
```

## Publish to Vercel and update later

Vercel settings are provided in `vercel.json`. No environment variables or backend are required for this portfolio. `.vercelignore` excludes local QA files and video tools from uploads.

From this project directory, deploy through the CLI:

```powershell
npx.cmd vercel login
npx.cmd vercel --prod
```

During setup choose your own Vercel account/team, create a project (for example `adithya-portopolio`), and use this directory. Framework is Vite, build command is `npm run build`, and output is `dist`.

For updates, edit the same project, verify with `npm.cmd run build`, and run `npx.cmd vercel --prod` again. Preserve the local `.vercel` project link so updates use the same project and production URL. Alternatively, connect a GitHub repository in Vercel; pushes to its production branch trigger redeployment.

The contact form opens an email draft and does not need a server. Uploaded images in `public/images` are public assets in the deployment.

## Edit your content

- `src/data/profile.js`: name, biography, education, experience, email, social URLs, and CV path.
- `public/images/profile.jpg`: place your original portrait here. The page shows a decorative fallback until this file exists; no substitute person is used.
- Place your CV in `public/` and set `profile.cv` to its path.
- `src/data/projects.js`: project descriptions, stack, GitHub/demo URLs. Current covers are explicitly labeled concept artwork, not screenshots. Add an `image` path to use an actual project image.
- `src/data/certificates.js` and `src/data/awards.js`: empty until authentic records are supplied. Example schemas appear in the files.
- Edit `index.html` for personal SEO and Open Graph metadata. Add an absolute `og:image` and canonical URL after a production URL and real share asset are available.

No education, employment, certifications, awards, or project deployment claims are fabricated. Missing social URLs render as non-clickable coming-soon entries; CV is displayed only when configured.

The contact form validates the fields and opens the visitor’s email app with a draft after an owner email is configured. The visitor must send the message in that app; no delivery success is claimed. Without an email configured it explains that the contact address is unavailable.

## Imagery and accessibility

Current hero: “Raung - view from Kawah Ijen, East Java, Indonesia, 20220821 0643 9778.jpg” by Jakub Hałun, via Wikimedia Commons (https://commons.wikimedia.org/wiki/File:Raung_-_view_from_Kawah_Ijen,_East_Java,_Indonesia,_20220821_0643_9778.jpg), CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Stored locally as public/images/raung-hd.jpg at 4416 × 2947 pixels, re-encoded as JPEG quality 95. Displayed with responsive CSS cropping and a readability overlay; the photographic asset and its adaptations retain CC BY-SA 4.0. Original SVG trees and ferns frame the animated foreground and move aside when Explore My Profile is clicked. The earlier cloud asset is retained but is not displayed. The opening starts only when Explore My Profile is clicked and respects reduced motion. Previous Prau photos remain as unused assets; prau-sunrise.jpg is CC0 by CCGC001394JB-NAX-103 (https://commons.wikimedia.org/wiki/File:The_Sunrise_at_Mount_Prau.jpg), and prau2.png was supplied by the user.

The original portrait is preserved at public/images/profile.jpg. The active public/images/profile-cutout.png is an AI-assisted transparent-background version of that supplied photo. Blue glow and depth shadows are CSS effects. To switch back, update profile.photo in src/data/profile.js. The former Merbabu photograph remains as an unused asset: “Landscape Merbabu” by Anggowidhi (https://commons.wikimedia.org/wiki/File:Landscape_Merbabu.jpeg), CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).

Fonts load from Google Fonts with system fallbacks. Other decorative artwork is CSS/SVG created for this portfolio.

Responsive layouts, reduced-motion preferences, skip navigation, semantic landmarks, keyboard carousel controls, native touch scrolling, and focus-trapped Escape-dismissable dialogs are included.
