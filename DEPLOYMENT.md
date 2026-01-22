# Deployment Guide for thedulberg.com

Your Anaya Jewelry website is ready to be published! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `anaya-jewelry` (or any name you prefer)
3. Description: "Anaya Jewelry e-commerce website"
4. Choose **Public** (required for free GitHub Pages) or **Private** (requires GitHub Pro)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **Create repository**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd /home/micky/Documents/Anaya
git remote add origin https://github.com/mdulberg/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-REPO-NAME` with the actual repository name you created.

**Note:** You'll need to authenticate. If you haven't set up SSH keys, GitHub will prompt you to use a personal access token.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/mdulberg/YOUR-REPO-NAME`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

Your site will be live at: `https://mdulberg.github.io/YOUR-REPO-NAME/`

## Step 4: Configure Custom Domain

1. Still in **Settings → Pages**
2. Under **Custom domain**, enter: `thedulberg.com`
3. Click **Save**
4. Check **Enforce HTTPS** (this will be available after DNS is configured)

## Step 5: Configure DNS at Your Domain Registrar

You need to point your domain to GitHub Pages. The method depends on your registrar:

### Option A: A Records (Recommended for root domain)

Add these **A records** at your domain registrar (where you bought thedulberg.com):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** Some registrars use `@` for the root domain, others use a blank field or `thedulberg.com`

### Option B: CNAME Record (For www subdomain)

If you want `www.thedulberg.com`:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | mdulberg.github.io | 3600 |

### Common Domain Registrars:

- **Namecheap**: Advanced DNS → Add New Record
- **GoDaddy**: DNS Management → Add Record
- **Google Domains**: DNS → Custom Records
- **Cloudflare**: DNS → Add Record

## Step 6: Wait for DNS Propagation

- DNS changes typically take 1-24 hours to propagate
- Check status at: https://www.whatsmydns.net/#A/thedulberg.com
- Once DNS is propagated, GitHub will automatically provision an SSL certificate

## Step 7: Verify Everything Works

1. Visit `https://thedulberg.com` (wait for DNS to propagate first)
2. Check that HTTPS is working (padlock icon in browser)
3. Test all pages: homepage, product pages, about page
4. Verify images load correctly

## Troubleshooting

### Site shows 404
- Make sure GitHub Pages is enabled in repository settings
- Verify the branch is `main` and folder is `/ (root)`
- Wait a few minutes after enabling Pages

### Domain not working
- Check DNS propagation status
- Verify A records are correct
- Make sure CNAME file exists in repository (it should be there)
- Wait up to 24 hours for DNS to fully propagate

### HTTPS not available
- DNS must be fully propagated first
- Make sure "Enforce HTTPS" is checked in Pages settings
- It can take a few hours after DNS propagation for SSL to be issued

### Images not loading
- Check that image paths are correct (they use relative paths)
- Verify Product_Images folder is in the repository
- Clear browser cache

## Updating Your Site

After making changes:

```bash
cd /home/micky/Documents/Anaya
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild your site (usually takes 1-2 minutes).

## Need Help?

- GitHub Pages Docs: https://docs.github.com/en/pages
- Custom Domain Setup: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
