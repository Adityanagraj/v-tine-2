# Netlify Deployment Guide for Valentine's Site 🚀

This guide will walk you through deploying your Next.js Valentine's site to Netlify step by step.

## Prerequisites ✅

- A Netlify account (sign up at [netlify.com](https://www.netlify.com) if you don't have one)
- Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js installed locally (for testing builds)

---

## Method 1: Deploy via Netlify UI (Recommended for Beginners) 🖥️

### Step 1: Push Your Code to Git Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a repository on GitHub/GitLab/Bitbucket**:
   - Go to GitHub.com → New Repository
   - Name it (e.g., `valentines-site`)
   - Don't initialize with README (you already have one)

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/valentines-site.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Connect to Netlify

1. **Log in to Netlify**:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Sign in or create an account

2. **Add a new site**:
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose your Git provider (GitHub/GitLab/Bitbucket)
   - Authorize Netlify to access your repositories

3. **Select your repository**:
   - Find and select `valentines-site` (or your repo name)
   - Click **"Connect"**

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js, but verify these settings:

- **Build command**: `npm run build` (or `next build`)
- **Publish directory**: `.next` (Netlify will handle this automatically for Next.js)
- **Node version**: `18` or `20` (set in Netlify UI → Site settings → Build & deploy → Environment)

**Note**: The `netlify.toml` file in your project root will automatically configure these settings.

### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Once deployed, you'll get a URL like: `https://random-name-123.netlify.app`

### Step 5: Customize Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow DNS configuration instructions

---

## Method 2: Deploy via Netlify CLI (For Advanced Users) 💻

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authenticate.

### Step 3: Initialize Netlify Site

```bash
netlify init
```

Follow the prompts:
- **Create & configure a new site**: Yes
- **Team**: Select your team
- **Site name**: Enter a name (or leave blank for random)
- **Build command**: `npm run build` (press Enter to use default)
- **Directory to deploy**: `.next` (Netlify handles this automatically)

### Step 4: Deploy

**For production deployment**:
```bash
netlify deploy --prod
```

**For preview deployment** (to test before going live):
```bash
netlify deploy
```

### Step 5: Link to Git Repository (Optional)

If you want continuous deployment:
```bash
netlify link
```

Follow the prompts to connect your Git repository.

---

## Method 3: Drag & Drop (Quick Test) 📦

For a quick test without Git:

1. **Build your site locally**:
   ```bash
   npm run build
   ```

2. **Go to Netlify**:
   - Visit [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `.next` folder onto the Netlify dashboard

**Note**: This method doesn't support continuous deployment. Use Method 1 or 2 for production.

---

## Configuration Files 📝

### netlify.toml

A `netlify.toml` file has been created in your project root with optimal settings:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

This file ensures:
- Correct build command
- Next.js plugin is used
- Node.js version is set

### Environment Variables (If Needed)

If you add environment variables later:

1. Go to **Site settings** → **Environment variables**
2. Add your variables (e.g., `NEXT_PUBLIC_API_KEY=value`)
3. Redeploy your site

---

## Troubleshooting 🔧

### Build Fails

1. **Check build logs**:
   - Go to **Deploys** tab → Click on failed deploy → View logs

2. **Common issues**:
   - **Node version mismatch**: Set `NODE_VERSION = "18"` in netlify.toml
   - **Missing dependencies**: Ensure `package-lock.json` is committed
   - **Build timeout**: Upgrade to a paid plan or optimize build

### Images Not Loading

- Ensure images are in the `public/` folder
- Check that image paths use `/` (not `./` or relative paths)
- Verify file extensions match exactly

### 404 Errors on Refresh

- Next.js App Router should handle this automatically with Netlify's Next.js plugin
- If issues persist, check that `netlify.toml` includes the Next.js plugin

### Performance Issues

- Enable **Image Optimization** in Netlify settings
- Use Netlify's **Edge Functions** if needed
- Check **Analytics** tab for performance insights

---

## Continuous Deployment 🔄

Once connected to Git:

- **Automatic deploys**: Every push to `main` branch deploys to production
- **Deploy previews**: Every pull request gets a preview URL
- **Branch deploys**: Deploy specific branches for testing

To configure:
1. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
2. Set production branch (usually `main`)
3. Configure branch deploys if needed

---

## Next Steps 🎯

After deployment:

1. ✅ Test your site on the Netlify URL
2. ✅ Set up a custom domain (optional)
3. ✅ Enable HTTPS (automatic with Netlify)
4. ✅ Configure redirects if needed (in `netlify.toml`)
5. ✅ Set up form handling (if you add forms)
6. ✅ Enable analytics (Netlify Analytics)

---

## Quick Reference Commands 📋

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy to production
netlify deploy --prod

# Deploy preview
netlify deploy

# Open site dashboard
netlify open

# View site status
netlify status

# View logs
netlify logs
```

---

## Support 💬

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js on Netlify**: [docs.netlify.com/integrations/frameworks/next-js](https://docs.netlify.com/integrations/frameworks/next-js)
- **Netlify Community**: [community.netlify.com](https://community.netlify.com)

---

**Happy Deploying! 💝**

Your Valentine's site will be live and ready to share! 🎉
