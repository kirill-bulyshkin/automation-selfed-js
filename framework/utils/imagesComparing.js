const {imgDiff} = require("img-diff-js");
const {testData} = require('../../testData/test.data');
const Logger = require ('../utils/logger');

class ImageUtils {

    async imagesComparing() {
        Logger.infoLog('Comparing images');
        const res = await imgDiff({actualFilename: testData.filePath, expectedFilename: testData.pathToUploadedImage});
        const imageDifference = res.diffCount;
        return imageDifference;
    }

}

module.exports = ImageUtils;