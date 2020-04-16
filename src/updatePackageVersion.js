const fs = require("fs");
const path = require("path");

const packageJson = require("../package.json");
const PACKAGE_JSON_PATH = path.join(__dirname, "../package.json");

module.exports = (newVersion) => {
  packageJson.version = newVersion;
  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(file, null, 2));
};
