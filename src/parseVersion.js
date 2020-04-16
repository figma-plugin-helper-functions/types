const VERSION_REGEX = /version\s(\d+),\supdate\s(\d+)/;

module.exports = (fileContent) => {
    if (!fileContent) {
        throw new Error("Downloaded file broken or empty");
    }
    const matchVer = fileContent.match(VERSION_REGEX);
    if (!matchVer) {
        throw new Error("Cannot match version from file content");
    } else {
        return `${matchVer[1]}.${matchVer[2]}.0`
    }
}
