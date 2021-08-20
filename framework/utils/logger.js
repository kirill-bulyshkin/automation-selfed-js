const timestamp = new Date();

class Logger {
    static infoLog(message) {
        console.log(`INFO: ${message} - (${timestamp})`)
    }
}

module.exports = Logger;