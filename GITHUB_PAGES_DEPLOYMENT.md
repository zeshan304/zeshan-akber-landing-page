# GitHub Pages Deployment Guide

This guide explains how to deploy your landing page to GitHub Pages for free hosting.

## What is GitHub Pages?

GitHub Pages is a free static site hosting service provided by GitHub. It automatically builds and deploys your website whenever you push changes to your repository.

## Prerequisites

- Your project is already on GitHub: https://github.com/zeshan304/zeshan-akber-landing-page
- You have access to the repository settings

## Deployment Steps

### Step 1: Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/zeshan304/zeshan-akber-landing-page
2. Click on **Settings** (top right of the repository)
3. In the left sidebar, scroll down and click on **Pages**
4. Under "Build and deployment", select:
   - **Source**: Select "GitHub Actions"
5. GitHub will automatically detect that this is a Node.js project and create a deployment workflow

### Step 2: Create GitHub Actions Workflow

GitHub Actions will automatically build and deploy your site. The workflow file is already configured in your repository at `.github/workflows/deploy.yml`.

If you need to manually create it:

1. In your repository, create a new file: `.github/workflows/deploy.yml`
2. Copy the following content:

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

3. Commit and push this file to your repository

### Step 3: Verify Deployment

1. After pushing changes, go to your repository's **Actions** tab
2. You should see a workflow running (it may take 1-2 minutes)
3. Once it completes successfully, your site will be live at:
   - **https://zeshan304.github.io/zeshan-akber-landing-page/**

### Step 4: (Optional) Use a Custom Domain

If you want to use a custom domain (e.g., zeshan.com):

1. Go to **Settings > Pages**
2. Under "Custom domain", enter your domain name
3. Follow GitHub's instructions to update your domain's DNS records
4. GitHub will automatically create an SSL certificate for your domain

## Updating Your Site

Every time you make changes and push to the `main` branch:

1. GitHub Actions will automatically build your site
2. The updated version will be deployed to GitHub Pages
3. Changes typically appear within 1-2 minutes

## Local Testing (Optional)

To test your site locally before deploying:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Troubleshooting

### Deployment Failed

1. Check the **Actions** tab in your repository for error messages
2. Common issues:
   - Missing `pnpm` installation
   - Incorrect build output directory (should be `dist/public`)
   - Node.js version mismatch

### Site Not Updating

1. Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Wait 2-3 minutes for GitHub Pages to rebuild
3. Check the Actions tab to ensure the workflow completed successfully

### Custom Domain Not Working

1. Verify DNS records are correctly configured
2. Wait 24-48 hours for DNS propagation
3. Check GitHub Pages settings to ensure the domain is verified

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

## Need Help?

If you encounter any issues:

1. Check the GitHub Actions logs for detailed error messages
2. Review the troubleshooting section above
3. Consult GitHub's official documentation

---

**Your GitHub Pages URL:** https://zeshan304.github.io/zeshan-akber-landing-page/

Once deployed, you can share this link with anyone to showcase your professional portfolio!
