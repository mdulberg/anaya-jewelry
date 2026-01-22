# Anaya Jewelry Website

E-commerce website for Anaya Jewelry, featuring handcrafted earrings by a mother-daughter duo.

## Setup Instructions

This site is configured to be published via GitHub Pages at thedulberg.com.

### Publishing Steps

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Anaya Jewelry website"
   ```

2. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `anaya-jewelry` or `thedulberg.com`)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/mdulberg/YOUR-REPO-NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**

5. **Configure Custom Domain**:
   - In the same Pages settings, under **Custom domain**, enter: `thedulberg.com`
   - GitHub will automatically create/update the CNAME file
   - Check **Enforce HTTPS** (available after DNS is configured)

6. **Configure DNS** (at your domain registrar):
   - Add an **A record** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - OR add a **CNAME record**:
     - Name: `@` (or `www`)
     - Value: `mdulberg.github.io` (replace with your GitHub username)

7. **Wait for DNS Propagation**:
   - DNS changes can take 24-48 hours to propagate
   - You can check status at: https://www.whatsmydns.net/

8. **Verify SSL Certificate**:
   - After DNS propagates, GitHub will automatically provision an SSL certificate
   - Enable **Enforce HTTPS** in Pages settings

## Local Development

To test the site locally:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit: http://localhost:8000

## Project Structure

```
Anaya/
├── index.html          # Main product listing page
├── product.html        # Individual product detail page
├── about.html          # About page
├── assets/
│   ├── style.css       # Main stylesheet
│   ├── main.js         # Homepage JavaScript
│   └── product.js      # Product page JavaScript
├── data/
│   └── products.json   # Product database
├── Product_Images/     # Product images
└── CNAME              # Custom domain configuration
```

## Notes

- The site uses relative paths, so it works both locally and on GitHub Pages
- Product images are stored in `Product_Images/` directory
- Product data is managed in `data/products.json`
- The site is fully responsive and works on mobile and desktop
