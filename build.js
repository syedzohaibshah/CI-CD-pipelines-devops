const fs = require("fs");
const path = require("path");

// Create dist folder if it doesn't exist
const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Copy src/index.js → dist/index.js
fs.copyFileSync(
  path.join(__dirname, "src", "index.js"),
  path.join(distDir, "index.js")
);

console.log("Build complete: files copied to /dist");
