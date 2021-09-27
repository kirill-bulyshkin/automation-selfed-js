const {imgDiff} = require("img-diff-js");
const {testData} = require('../../testData/test.data');

class ImageUtils {

    async imagesComparing() {
        const res = await imgDiff({actualFilename: testData.filePath, expectedFilename: testData.pathToUploadedImage});
        const imageDifference = res.diffCount;
        return imageDifference;
    }

}

module.exports = ImageUtils;