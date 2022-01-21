class Logger {
    static async infoLog(message) {
        let timestamp = new Date();
        console.log(`INFO: ${message} - (${timestamp})`)
    }
}

module.exports = Logger;