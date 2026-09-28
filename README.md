# Advanced Web Technology Lab - Experiment 9
## Hosting the Website with Domain Registration Process (VS Code & Vercel)

### 📌 Project Overview
A simple, modern, responsive **College Events** website built using **React.js** and **React Router DOM (`BrowserRouter`)**, configured for instant deployment to **Vercel** with full client-side routing support via `vercel.json`.

---

### 🚀 Pages Included
1. **Home (`/`)**: Welcome banner, website mission, quick highlights, and button navigation.
2. **About (`/about`)**: Overview of the college event portal and architecture details.
3. **Events (`/events`)**: Interactive event cards for:
   - 💻 **Hackathon 2026**
   - 🏃‍♂️ **Sports Day**
   - 🎭 **Cultural Fest ("Rhythm")**

---

### 🛠️ Tech Stack
- **Framework:** React 18 (Vite)
- **Routing:** React Router DOM v6 (`BrowserRouter` with `vercel.json` rewrites)
- **Deployment Platform:** Vercel

---

### ⚡ Method 1: Deploy Directly via VS Code (Vercel CLI)

1. Open VS Code Terminal (`Ctrl + \``) in this folder.
2. Run Vercel CLI via npx (no global install required):
```bash
npx vercel
```
3. Follow the interactive prompts:
   - **Set up and deploy?** &rarr; `Y`
   - **Which scope?** &rarr; Select your Vercel account
   - **Link to existing project?** &rarr; `N`
   - **What's your project's name?** &rarr; `college-events` (or press Enter)
   - **In which directory is your code located?** &rarr; `./` (press Enter)
   - **Want to modify settings?** &rarr; `N` (Vite is detected automatically)
4. For the final production URL, run:
```bash
npx vercel --prod
```

---

### 🌐 Method 2: Deploy via GitHub & Vercel Dashboard (Continuous Deployment)

1. **Initialize Git & Push:**
```bash
git init
git add .
git commit -m "Deploy College Events React app to Vercel"
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```
2. **Connect to Vercel:**
   - Log into [Vercel.com](https://vercel.com).
   - Click **Add New...** &rarr; **Project**.
   - Select your GitHub repository (`college-events`) and click **Import**.
   - Keep default settings (Framework: Vite, Build Command: `vite build`, Output Directory: `dist`).
   - Click **Deploy**.
3. Vercel automatically builds and provides a live link: `https://college-events-xxx.vercel.app`.

---

### 🔗 Domain Registration & Connection Process on Vercel

1. **Obtain / Register a Domain:**
   - Buy a custom domain (e.g. `www.mycollegeevents.com`) from a registrar like Namecheap, GoDaddy, or Cloudflare (or purchase directly in Vercel under Domains).
2. **Add Domain to Vercel:**
   - On Vercel Dashboard, open your project &rarr; **Settings** &rarr; **Domains**.
   - Type your domain name (e.g., `mycollegeevents.com` or `events.yourname.com`) and click **Add**.
3. **Configure DNS Records at Registrar:**
   - **A Record** (for root domain `@`):
     - **Name / Host:** `@`
     - **Value / IP:** `76.76.21.21`
   - **CNAME Record** (for subdomains e.g. `www`):
     - **Name / Host:** `www`
     - **Value / Target:** `cname.vercel-dns.com`
4. **SSL / HTTPS:**
   - Vercel automatically issues and renews a free SSL certificate (HTTPS) as soon as DNS propagates.
