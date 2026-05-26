const fs = require('fs');
const { execSync } = require('child_process');
try {
  if (!fs.existsSync('dist')) fs.mkdirSync('dist');
  // Copy root static files
  ['index.html','favicon.svg','avatar.png'].forEach(f => { if (fs.existsSync(f)) fs.copyFileSync(f, `dist/${f}`); });
  // Copy assets directory if present
  if (fs.existsSync('assets')) {
    execSync('cp -R assets dist/assets');
  }
  // Copy dist/assets if present (for prebuilt files)
  if (fs.existsSync('dist/assets') === false && fs.existsSync('dist')) {
    // nothing
  }
  console.log('Simple build finished.');
} catch (e) {
  console.error('Build script error:', e.message);
  process.exit(1);
}
