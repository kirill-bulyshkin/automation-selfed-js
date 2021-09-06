const timestamp = new Date();

class Logger {
    static async infoLog(message) {
        console.log(`INFO: ${message} - (${timestamp})`)
    }
}

module.exports = Logger;