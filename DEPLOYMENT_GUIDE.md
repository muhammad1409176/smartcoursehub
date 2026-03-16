# 🚀 SmartCourseHub Deployment Guide

## Prerequisites ✅

1. **GitHub Account** - For code hosting
2. **MongoDB Atlas** - Your database (already configured)
3. **One of these platforms:**
   - Railway (Recommended) ⭐
   - Render
   - Vercel
   - Heroku

## Step 1: Prepare Your Code 📦

### 1.1 Create Production Environment File
```bash
# Copy the example file
copy .env.production.example .env.production

# Edit .env.production with your actual values:
# - MONGODB_URI (your Atlas connection string)
# - JWT_SECRET (keep the same or generate new)
# - NODE_ENV=production
```

### 1.2 Test Locally (Optional but Recommended)
```bash
# Install production dependencies only
npm install --production

# Test the server
npm start
```

## Step 2: Push to GitHub 🐙

### 2.1 Create GitHub Repository
1. Go to https://github.com
2. Click "New repository"
3. Name: `smartcoursehub` or `SmartCourseHub-website`
4. Make it **Public** or **Private**
5. Don't initialize with README (you already have one)

### 2.2 Push Your Code
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - SmartCourseHub with certificates and payments"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/smartcoursehub.git

# Push
git push -u origin main
```

## Step 3: Choose Your Deployment Platform 🎯

---

## 🚂 Option 1: Railway (Recommended - Easiest)

### 3.1 Create Railway Account
1. Go to https://railway.app
2. Sign up with GitHub

### 3.2 Deploy
1. Click "New Project"
2. Choose "Deploy from GitHub repo"
3. Connect your GitHub account
4. Select your `smartcoursehub` repository
5. Click "Deploy"

### 3.3 Configure Environment Variables
1. Go to your project dashboard
2. Click "Variables" tab
3. Add these variables:
   ```
   MONGODB_URI = mongodb+srv://admin:musaib200609@cluster0.7frbvaa.mongodb.net/?appName=Cluster0
   JWT_SECRET = supersecretjwtkey123
   NODE_ENV = production
   ```

### 3.4 Your site will be live! 🎉
Railway will give you a URL like: `https://smartcoursehub-production.up.railway.app`

---

## 🔄 Option 2: Render

### 3.1 Create Render Account
1. Go to https://render.com
2. Sign up (GitHub login recommended)

### 3.2 Create Web Service
1. Click "New" → "Web Service"
2. Connect your GitHub repo
3. Configure:
   - **Name**: SmartCourseHub
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### 3.3 Add Environment Variables
In Render dashboard → Environment:
```
MONGODB_URI = mongodb+srv://admin:musaib200609@cluster0.7frbvaa.mongodb.net/?appName=Cluster0
JWT_SECRET = supersecretjwtkey123
NODE_ENV = production
```

### 3.4 Deploy
Click "Create Web Service" - your site will be live!

---

## ⚡ Option 3: Vercel

### 3.1 Install Vercel CLI
```bash
npm install -g vercel
```

### 3.2 Deploy
```bash
# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: smartcoursehub
# - Directory: ./
```

### 3.3 Set Environment Variables
```bash
vercel env add MONGODB_URI
# Enter: mongodb+srv://admin:musaib200609@cluster0.7frbvaa.mongodb.net/?appName=Cluster0

vercel env add JWT_SECRET
# Enter: supersecretjwtkey123

vercel env add NODE_ENV
# Enter: production
```

### 3.4 Redeploy
```bash
vercel --prod
```

---

## 🐘 Option 4: Heroku

### 3.1 Install Heroku CLI
Download from: https://devcenter.heroku.com/articles/heroku-cli

### 3.2 Create Heroku App
```bash
# Login
heroku login

# Create app
heroku create smartcoursehub-yourname

# Set environment variables
heroku config:set MONGODB_URI="mongodb+srv://admin:musaib200609@cluster0.7frbvaa.mongodb.net/?appName=Cluster0"
heroku config:set JWT_SECRET="supersecretjwtkey123"
heroku config:set NODE_ENV="production"

# Deploy
git push heroku main
```

---

## Step 4: Test Your Live Site 🧪

1. **Visit your deployment URL**
2. **Try logging in** with test credentials:
   - Email: `testuser@example.com`
   - Password: `test123`
3. **Test course enrollment**
4. **Test certificate generation**
5. **Test payment flow** (if you have paid courses)

## Step 5: Domain Setup (Optional) 🌐

### For Custom Domain:
1. **Railway**: Settings → Domains → Add custom domain
2. **Render**: Settings → Custom Domains
3. **Vercel**: Project Settings → Domains
4. **Heroku**: `heroku domains:add yourdomain.com`

## Troubleshooting 🔧

### Common Issues:

**1. MongoDB Connection Error**
- Check your IP whitelist in MongoDB Atlas
- Verify MONGODB_URI is correct

**2. Build Failures**
- Check that all dependencies are in package.json
- Ensure Node version is 18.x or higher

**3. Environment Variables**
- Make sure all required env vars are set
- Check for typos in variable names

**4. Port Issues**
- Don't set PORT manually - let the platform handle it

## Need Help? 💬

If you encounter issues:
1. Check the platform's logs
2. Verify your environment variables
3. Test locally first
4. Check MongoDB Atlas network access

## 🎉 Congratulations!

Your SmartCourseHub is now live! Share the URL with your students and start teaching! 🚀