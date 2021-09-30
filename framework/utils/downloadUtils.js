const Logger = require ('../utils/logger');
const download = require('image-downloader');

class DownloadUtils{     
     
    async downloadImageByUrl(url, pathToFile) {
        Logger.infoLog(`Download image by ${url}`);
        const options = {url: url, dest: pathToFile};
        await download.image(options);
    }

}

module.exports = DownloadUtils;