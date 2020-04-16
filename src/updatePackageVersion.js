const fs = require("fs");

const PACKAGE_JSON_PATH = "../package.json";

module.exports = (newVersion) => {
  const packageJson = require(PACKAGE_JSON_PATH);
  packageJson.version = newVersion;
  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2));
};
