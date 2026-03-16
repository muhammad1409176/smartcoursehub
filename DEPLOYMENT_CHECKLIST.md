# ✅ Deployment Checklist

## Pre-Deployment
- [ ] MongoDB Atlas database is accessible
- [ ] IP whitelist includes deployment platform IPs (or 0.0.0.0/0 for testing)
- [ ] Code is pushed to GitHub
- [ ] Environment variables are ready

## Environment Variables Required
- [ ] `MONGODB_URI` - Your MongoDB Atlas connection string
- [ ] `JWT_SECRET` - Your JWT secret key
- [ ] `NODE_ENV` - Set to "production"

## Post-Deployment Testing
- [ ] Website loads at deployment URL
- [ ] User registration works
- [ ] User login works
- [ ] Course enrollment works
- [ ] Certificate generation works
- [ ] Payment system works (if applicable)

## Quick Deploy Commands

### Railway (Recommended)
1. Connect GitHub repo
2. Add environment variables
3. Deploy automatically

### Render
1. Connect GitHub repo
2. Set build/start commands
3. Add environment variables
4. Deploy

### Vercel
```bash
npm install -g vercel
vercel login
vercel
# Follow prompts, add env vars
vercel --prod
```

## Your Live URL will be:
- Railway: `https://smartcoursehub-production.up.railway.app`
- Render: `https://smartcoursehub.onrender.com`
- Vercel: `https://smartcoursehub.vercel.app`
- Heroku: `https://smartcoursehub-yourname.herokuapp.com`