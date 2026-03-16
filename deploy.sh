#!/bin/bash

echo "🚀 SmartCourseHub Deployment Script"
echo "=================================="

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo "❌ .env.production file not found!"
    echo "📝 Please create .env.production with your production environment variables"
    echo "💡 You can copy .env.production.example and fill in your values"
    exit 1
fi

echo "✅ Environment file found"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Run basic health check
echo "🔍 Running basic health check..."
node -e "
try {
  require('./server.js');
  console.log('✅ Server file loads successfully');
} catch (error) {
  console.error('❌ Server file has errors:', error.message);
  process.exit(1);
}
"

echo "✅ Health check passed"

echo ""
echo "🎯 Ready for deployment!"
echo ""
echo "Choose your deployment platform:"
echo "1. Railway: https://railway.app"
echo "2. Render: https://render.com"
echo "3. Vercel: https://vercel.com"
echo "4. Heroku: https://heroku.com"
echo ""
echo "Next steps:"
echo "- Push your code to GitHub"
echo "- Connect your GitHub repo to your chosen platform"
echo "- Set environment variables in the platform dashboard"
echo "- Deploy!"
echo ""
echo "Environment variables to set:"
echo "- MONGODB_URI"
echo "- JWT_SECRET"
echo "- NODE_ENV=production"