import fs from "fs";
import path from "path";

const root = process.cwd();

const srcDir = path.join(root, 'src', 'assets', 'images');
const destDir = path.join(root, 'public');

const files = [
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'favicon.ico',
  'apple-touch-icon.png',
  'favicon.png',
  'ANlogo.jpg',
  'site.webmanifest'
];

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

files.forEach((file) => {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${file} to public/`);
    } else {
      console.warn(`Source not found: ${src}`);
    }
  } catch (err) {
    console.error(`Error copying ${file}:`, err);
  }
});

console.log('Favicon copy script finished.');
