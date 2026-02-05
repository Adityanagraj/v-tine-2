# Deploy to Netlify from the Browser — Step by Step

This guide walks you through deploying your Valentine's Next.js site to Netlify **only using the browser** (no terminal/CLI after you push your code).

---

## Before You Start

- **Netlify account**: Sign up at [netlify.com](https://www.netlify.com) (free).
- **Git repo**: Your code must be on **GitHub**, **GitLab**, or **Bitbucket**. If it isn’t yet, use the steps in **Part A** first.

---

## Part A — Get Your Code on GitHub (if not already)

1. **Create a GitHub account** (if needed): [github.com](https://github.com) → Sign up.
2. **Create a new repository**:
   - Click your profile (top right) → **Your repositories**.
   - Click **New** (green button).
   - **Repository name**: e.g. `valentines-site`.
   - Leave **Public** selected.
   - **Do not** check “Add a README” (you already have files).
   - Click **Create repository**.
3. **Push your project** (one-time, from your computer):
   - Open a terminal in your project folder (`valentines-site-3`).
   - Run (replace `YOUR_USERNAME` and `valentines-site` with your GitHub username and repo name):
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/valentines-site.git
     git push -u origin main
     ```
   - If GitHub asks you to log in, use the browser or a personal access token as it instructs.

After this, your code is on GitHub and you can do everything else from the browser.

---

## Part B — Deploy on Netlify (all in the browser)

### Step 1: Open Netlify and add a site

1. Go to **[app.netlify.com](https://app.netlify.com)**.
2. Log in (or sign up with email or GitHub/GitLab/Bitbucket).
3. On the main dashboard, click **“Add new site”** (or **“Add site”**).
4. In the menu that appears, click **“Import an existing project”**.

---

### Step 2: Connect your Git provider

1. You’ll see **“Connect to Git provider”** with buttons: **GitHub**, **GitLab**, **Bitbucket**.
2. Click **“Connect to GitHub”** (or the provider where your repo is).
3. If asked to authorize Netlify:
   - Click **“Authorize Netlify”** (or “Authorize”).
   - You may be asked to choose **“All repositories”** or **“Only select repositories”**. Pick what you prefer; if “Only select”, choose the repo that has your Valentine’s site (e.g. `valentines-site`).
   - Click **“Install”** or **“Save”** to finish authorization.
4. You should return to Netlify with a list of your repositories.

---

### Step 3: Choose your repository

1. In **“Import from Git”**, you’ll see **“Pick a repository”** or a search/list of repos.
2. Find your Valentine’s site repo (e.g. **valentines-site**) and click it.
3. If you don’t see it:
   - Click **“Configure Netlify on GitHub”** (or similar) and grant access to that repo, then pick it again.
4. After selecting the repo, click **“Next”** or **“Import”** (or the button that continues to build settings).

---

### Step 4: Configure build settings (important)

On the **“Configure build settings”** or **“Set up your site”** screen:

1. **Branch to deploy**
   - **Branch**: Leave **main** (or select the branch you push to).

2. **Build settings** (Netlify may pre-fill these; if not, set manually):
   - **Build command**:  
     Type: `npm run build`
   - **Publish directory**:  
     Type: `.next`  
     *(Note: For Next.js, Netlify’s plugin often overrides this; having it as `.next` is correct. If you use the official Next.js plugin, Netlify may show “Next.js” and handle this for you.)*

3. **Advanced / Environment variables** (optional):
   - Click **“New variable”** or **“Add a variable”** only if your app needs env vars (e.g. API keys).
   - For this Valentine’s site you usually don’t need any.

4. **Node version** (optional but recommended):
   - If you see **“Environment variables”** or **“Add environment variables”**, add:
     - Key: `NODE_VERSION`  
     - Value: `18`  
   - Your project’s `netlify.toml` already sets this; adding it in the UI doesn’t hurt.

5. Click **“Deploy site”** or **“Deploy [your-repo-name]”**.

---

### Step 5: Wait for the build

1. You’ll see **“Building your site”** or **“Deploy in progress”**.
2. Click the deploy (e.g. **“Deploying…”** or the deploy ID) to open the **Deploy log**.
3. Wait 2–5 minutes. The log will show:
   - Installing dependencies
   - Running `npm run build`
   - Finalizing deploy
4. When the deploy finishes:
   - Status will show **“Published”** or **“Site is live”**.
   - You’ll see a site URL like: **`https://something-random-123.netlify.app`**.

---

### Step 6: Open and test your site

1. Click **“Open production deploy”** or the live URL (e.g. **`https://….netlify.app`**).
2. Check that:
   - The main page loads.
   - The photo pair game and any other features work.
   - Images from `public/` load (e.g. `/game-photos/1.avif`).

If something is broken, go to **Deploys** → click the latest deploy → **“View deploy log”** and look for red errors.

---

### Step 7 (optional): Change site name

1. In Netlify, open your site (click the site name from the dashboard).
2. Go to **“Site configuration”** or **“Site settings”**.
3. Under **“Site information”**, find **“Site name”** or **“Change site name”**.
4. Enter a name like `valentines-site` → Save.  
   Your URL becomes: **`https://valentines-site.netlify.app`** (or similar).

---

### Step 8 (optional): Custom domain

1. In the same **Site configuration** / **Domain management**.
2. Click **“Add custom domain”** or **“Add domain”**.
3. Enter your domain (e.g. `valentines.yourdomain.com`).
4. Follow the on-screen steps to add the DNS records at your domain provider (CNAME or A record as shown).
5. Wait for DNS to propagate; Netlify will issue HTTPS automatically.

---

## What happens on future updates?

- Whenever you **push to the branch you chose** (e.g. `main`) on GitHub, Netlify will:
  - Detect the push
  - Run a new build
  - Publish the new version to the same URL  
- No need to “deploy” again from the browser unless you want to trigger a redeploy manually (**Deploys** → **“Trigger deploy”** → **“Deploy site”**).

---

## Quick checklist

- [ ] Code is on GitHub (or GitLab/Bitbucket).
- [ ] Netlify account created; logged in at [app.netlify.com](https://app.netlify.com).
- [ ] **Add new site** → **Import an existing project** → connected Git provider.
- [ ] Selected the correct repository and branch (e.g. **main**).
- [ ] Build command: **`npm run build`**; Publish directory: **`.next`** (or leave as auto-detected).
- [ ] Clicked **Deploy site** and waited until status is **Published**.
- [ ] Opened the **.netlify.app** URL and tested the site.

---

## If the build fails

1. In Netlify: **Deploys** → click the failed deploy → **“View deploy log”**.
2. Check the **red lines** for the first error. Common fixes:
   - **“Cannot find module”**: Make sure `package.json` and `package-lock.json` are committed and that the build command is `npm run build`.
   - **Node / engine errors**: Add environment variable `NODE_VERSION` = `18` in **Site settings** → **Environment variables**, then **Trigger deploy**.
   - **Next.js / plugin errors**: Ensure your repo has the `netlify.toml` from this project (with `@netlify/plugin-nextjs`). Then trigger a new deploy.

Your project already includes a correct `netlify.toml`, so in most cases you only need to connect the repo and click **Deploy site**.

---

**You’re done.** Your Valentine’s site is live and will auto-update on every push to your main branch.
