const {imgDiff} = require("img-diff-js");
const {vkProjectTestData} = require('../../testData/test.data');
const Logger = require ('../utils/logger');

class ImageUtils {

    async imagesComparing() {
        Logger.infoLog('Comparing images');
        const res = await imgDiff({actualFilename: vkProjectTestData.filePath, expectedFilename: vkProjectTestData.pathToUploadedImage});
        const imageDifference = res.diffCount;
        return imageDifference;
    }

}

module.exports = ImageUtils;