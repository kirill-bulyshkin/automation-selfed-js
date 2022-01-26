const fs = require('fs');

class Logger {
    
    static async infoLog(message) {
        let timestamp = new Date();
        console.log(`INFO: ${message} - (${timestamp})`);
        fs.appendFileSync('./logs/logs.log', message);
    }

    static async errorLog(message) {
        let timestamp = new Date();
        console.log(`ERROR: ${message} - (${timestamp})`);
        fs.appendFileSync('./logs/logs.log', message);
    }
}

module.exports = Logger;