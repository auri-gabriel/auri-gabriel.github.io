#!/bin/bash

# SEO optimized build script
echo "🚀 Building optimized version for production..."

# Set production environment
export NODE_ENV=production

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf docs/
rm -rf dist/

# Build the project
echo "📦 Building React app..."
npm run build:basic

# Copy 404.html for GitHub Pages SPA routing
echo "🔄 Setting up SPA routing for GitHub Pages..."
cp public/404.html dist/404.html

# Copy build to docs folder (for GitHub Pages)
echo "📋 Copying build to docs folder..."
cp -r dist/* docs/ 2>/dev/null || mkdir -p docs && cp -r dist/* docs/

# Generate robots.txt for production
echo "🤖 Updating robots.txt for production..."
cat > dist/robots.txt << EOF
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: https://aurigabriel.com/sitemap.xml

# Specific crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /
EOF

# Update sitemap with current date
echo "🗺️ Updating sitemap..."
sed -i "s/<lastmod>.*<\/lastmod>/<lastmod>$(date +%Y-%m-%d)<\/lastmod>/g" dist/sitemap.xml

# Copy to docs folder if it doesn't exist yet
if [ ! -d "docs" ]; then
    echo "📋 Copying to docs folder for GitHub Pages..."
    cp -r dist docs
fi

echo "✅ Build completed! Ready for deployment."
echo "📁 Files are in the 'dist' folder (and copied to 'docs' for GitHub Pages)."
echo ""
echo "🌐 Language Routes Available:"
echo "  - / (redirects to /en)"
echo "  - /en (English - default)"
echo "  - /pt (Portuguese)"
echo ""
echo "Next steps for SEO:"
echo "1. Add your Google Analytics ID to .env"
echo "2. Verify your site in Google Search Console"
echo "3. Submit your sitemap: https://aurigabriel.com/sitemap.xml"
echo "4. Test both language URLs: /pt and /en"
echo "5. Check site performance with Google PageSpeed Insights"
