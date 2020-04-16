const fs = require("fs");
const path = require("path");
const download = require("download");
const semver = require("semver");

const { version } = require("../package.json");
const parseVersion = require("./parseVersion");

const SOURCE_URL = "https://www.figma.com/plugin-docs/figma.d.ts"
const FILE_PATH = path.join(__dirname, "../dist", "figma.d.ts");

const main = async () => {
    try {
        await download(SOURCE_URL, 'dist');
        const fileContent = fs.readFileSync(FILE_PATH).toString();
        const fetchedVersion = parseVersion(fileContent);

        console.log(fetchedVersion, version, semver.compare(version, fetchedVersion));
        
    } catch (err) {
        console.error(err);
    }
}

main();