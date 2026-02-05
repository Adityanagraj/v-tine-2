# 🖱️ Netlify GUI Deployment - Step-by-Step Guide

Follow these exact steps to deploy your Valentine's site via Netlify's web interface.

---

## 📋 PREPARATION: Get Your Code on GitHub First

Before deploying to Netlify, you need your code on GitHub. Here's how:

### Step 1: Check if Git is initialized

Open PowerShell/Terminal in your project folder (`c:\Users\user\valentines-site-3`) and run:

```powershell
git status
```

**If you see "not a git repository":**
```powershell
git init
git add .
git commit -m "Initial commit"
```

**If you see files listed:** You're good! Skip to Step 2.

### Step 2: Create GitHub Repository

1. **Open your browser** and go to: https://github.com
2. **Sign in** (or create account if needed)
3. **Click the "+" icon** in the top right corner
4. **Click "New repository"**
5. **Fill in the form:**
   - Repository name: `valentines-site` (or any name you like)
   - Description: (optional) "Valentine's Day Proposal Site"
   - Choose: **Public** or **Private**
   - **DO NOT** check "Add a README file" (you already have one)
   - **DO NOT** add .gitignore or license
6. **Click the green "Create repository" button**

### Step 3: Push Your Code to GitHub

Back in PowerShell, run these commands (replace `YOUR_USERNAME` with your GitHub username):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/valentines-site.git
git branch -M main
git push -u origin main
```

**If asked for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Get one at: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token with `repo` permissions

**Wait for upload to complete** - you should see "pushed to origin/main"

---

## 🚀 NETLIFY DEPLOYMENT: GUI Steps

### STEP 1: Go to Netlify Website

1. **Open a new browser tab**
2. **Go to:** https://app.netlify.com
3. **You'll see the Netlify dashboard**

---

### STEP 2: Sign Up / Log In

**If you don't have an account:**

1. **Click "Sign up"** (top right)
2. **Choose "Sign up with GitHub"** (recommended - easiest!)
   - OR use email if you prefer
3. **Authorize Netlify** when GitHub asks
4. **Complete signup** if needed

**If you already have an account:**

1. **Click "Log in"** (top right)
2. **Sign in** with your credentials

---

### STEP 3: Start Adding Your Site

1. **Look at the top of the Netlify dashboard**
2. **Find and click the button:** "Add new site"
   - It's usually a big button, or look for a "+" icon
   - May say "New site" or "Add new site"

3. **A dropdown menu appears** - Click: **"Import an existing project"**
   - This is the first option in the dropdown

---

### STEP 4: Connect to GitHub

1. **You'll see a page titled "Create a new site"**
2. **Look for Git provider buttons:**
   - You'll see: **GitHub**, GitLab, Bitbucket, Azure DevOps
3. **Click the "GitHub" button** (or your Git provider)
4. **If this is your first time:**
   - A popup appears asking to authorize Netlify
   - **Click "Authorize Netlify"**
   - You may need to enter your GitHub password
   - **Click "Authorize netlify"** on the GitHub page
5. **You'll be redirected back to Netlify**

---

### STEP 5: Select Your Repository

1. **You'll see a list of your GitHub repositories**
2. **Look for:** `valentines-site` (or whatever you named it)
3. **Click on your repository name**
   - It should be clickable/selectable
4. **If you don't see it:**
   - Make sure you pushed your code in Step 3 above
   - Try refreshing the page
   - Check that you authorized the right GitHub account

---

### STEP 6: Configure Build Settings

After selecting your repo, you'll see a form with build settings:

**Look for these fields:**

1. **Branch to deploy:**
   - Should say: `main` (or `master`)
   - **Leave it as is** - this is correct

2. **Build command:**
   - Should auto-fill: `npm run build`
   - **If empty**, type: `npm run build`
   - **If different**, change it to: `npm run build`

3. **Publish directory:**
   - Should auto-fill: `.next`
   - **If empty**, type: `.next`
   - **If different**, change it to: `.next`

**Important:** The `netlify.toml` file in your project should make these settings correct automatically!

**Don't change anything else** - the defaults are fine.

---

### STEP 7: Deploy Your Site!

1. **Scroll down** on the configuration page
2. **Find the button:** "Deploy site" (usually green/blue)
3. **Click "Deploy site"**
4. **You'll see:** "Building your site..." or "Deploying..."

---

### STEP 8: Wait for Build

1. **You'll be taken to your site's deploy page**
2. **You'll see a progress indicator:**
   - "Building..." (yellow/orange)
   - "Deploying..." (blue)
   - "Published" (green) ✅

3. **This takes 2-5 minutes** - be patient!
4. **You can watch the build logs:**
   - Click "Deploy log" or "Show build log"
   - You'll see commands running (installing packages, building, etc.)

**What to expect:**
- Installing dependencies...
- Building Next.js app...
- Deploying to CDN...
- ✅ Published!

---

### STEP 9: Get Your Live URL

1. **Once you see "Published" or "Site is live":**
2. **Look for a URL** at the top of the page
3. **It will look like:** `https://random-words-12345.netlify.app`
4. **Click on the URL** to open your live site! 🎉

**Your site is now LIVE!** Share this URL with anyone!

---

## 🎨 OPTIONAL: Customize Your Site Name

Don't like the random URL? Change it!

1. **Go to:** Site settings (click your site name, then "Site settings")
2. **Click:** "Change site name" (under "General")
3. **Enter a new name:** e.g., `valentines-proposal` or `my-valentines-site`
4. **Click:** "Save"
5. **Your new URL:** `https://your-chosen-name.netlify.app`

---

## 🔄 What Happens Next? (Automatic Deployments)

**Good news!** Now that your site is connected:

- ✅ **Every time you push code to GitHub**, Netlify automatically rebuilds and deploys
- ✅ **No need to manually deploy again!**
- ✅ **Every GitHub commit = automatic update**

**To update your site:**
1. Make changes to your code
2. Run: `git add .`
3. Run: `git commit -m "Update site"`
4. Run: `git push`
5. Netlify automatically deploys! (check the "Deploys" tab)

---

## 🐛 Troubleshooting

### Build Failed?

1. **Click on the failed deploy** (red X)
2. **Click "Deploy log"** to see what went wrong
3. **Common fixes:**
   - **Error about Node version:** Go to Site settings → Build & deploy → Environment → Add variable: `NODE_VERSION` = `18`
   - **Error about missing files:** Make sure you committed `package-lock.json`
   - **Build timeout:** Your build is taking too long (rare for small sites)

### Can't Find Repository?

- Make sure you pushed your code to GitHub first
- Check that you're logged into the correct GitHub account
- Try disconnecting and reconnecting GitHub in Netlify

### Site Shows 404 Error?

- Wait a few minutes - sometimes it takes time to propagate
- Check the deploy log for errors
- Make sure `netlify.toml` file is in your project root

### Need Help?

- Check Netlify status: https://www.netlifystatus.com
- Netlify docs: https://docs.netlify.com
- Netlify community: https://community.netlify.com

---

## ✅ Checklist

Before deploying:
- [ ] Code is pushed to GitHub
- [ ] You have a Netlify account
- [ ] `netlify.toml` file exists in your project

During deployment:
- [ ] Connected GitHub to Netlify
- [ ] Selected correct repository
- [ ] Build command is `npm run build`
- [ ] Publish directory is `.next`
- [ ] Clicked "Deploy site"

After deployment:
- [ ] Build completed successfully (green checkmark)
- [ ] Got your live URL
- [ ] Tested the site in browser
- [ ] (Optional) Changed site name

---

## 🎉 You're Done!

Your Valentine's site is now live on the internet! Share the URL with your special someone! 💝

**Next time you want to update:**
Just push to GitHub - Netlify handles the rest automatically!

---

**Need more help?** The detailed guide is in `NETLIFY_DEPLOYMENT.md`
