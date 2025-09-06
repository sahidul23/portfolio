# Sahid Portfolio (React + Vite + Tailwind)

A clean, minimal portfolio you can deploy on Vercel for free.

## 1) Prerequisites
- Node.js LTS installed (check with: `node -v` and `npm -v`)

## 2) Install & Run Locally
```bash
npm install
npm run dev
```
Visit the URL shown in your terminal.

## 3) Edit Your Info
- Change name, email, GitHub, LinkedIn in `src/App.jsx` (About + Contact).
- Add your project links in the **Projects** section.
- Update page title in `index.html`.

## 4) Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/sahid-portfolio.git
git push -u origin main
```

## 5) Deploy to Vercel
- Go to https://vercel.com, sign in with GitHub and **Import Project**.
- Select your repository, keep defaults:
  - Framework Preset: **Vite**
  - Build Command: `npm run build`
  - Output Directory: `dist`
- Click **Deploy**.

(Or use CLI: `npm i -g vercel && vercel && vercel deploy --prod`)

## 6) Custom Domain (Optional)
Add your own domain in Vercel Project Settings → Domains.

---

If you need help, open an issue or share your repo link.
