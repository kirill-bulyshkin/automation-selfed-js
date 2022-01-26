class Logger {
    
    static async infoLog(message) {
        let timestamp = new Date();
        console.log(`INFO: ${message} - (${timestamp})`);
    }

    static async errorLog(message) {
        let timestamp = new Date();
        console.log(`ERROR: ${message} - (${timestamp})`);
    }
}

module.exports = Logger;