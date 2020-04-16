const fs = require("fs");
const path = require("path");
const download = require("download");
const semver = require("semver");

const { version } = require("../package.json");
const parseVersion = require("./parseVersion");
const updatePackageVersion = require("./updatePackageVersion");

const SOURCE_URL = "https://www.figma.com/plugin-docs/figma.d.ts"
const FILE_PATH = path.join(__dirname, "../figma.d.ts");

const main = async () => {
    try {
        await download(SOURCE_URL, "./");
        const fileContent = fs.readFileSync(FILE_PATH).toString();
        const fetchedVersion = parseVersion(fileContent);

        if (semver.compare(version, fetchedVersion) < 0) {
            updatePackageVersion(fetchedVersion);
        } else {
            console.log("Version not changed. Skipped.");
        }
    } catch (err) {
        console.error(err);
    }
}

main();