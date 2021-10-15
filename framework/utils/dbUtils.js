const Logger = require('./logger');
const mysql = require('mysql2');
const Tablefy = require('tablefy');

class DBUtils {

    static async createConnection(host, user, database) {
        Logger.infoLog(`Creating connection with MySQL database`);
        this.connection = 
            mysql.createConnection({
                host: host,
                user: user,
                database: database
        });
    }

    static async getConnection(host, user, database) {
        Logger.infoLog(`Checking connection with MySQL database`);
        if (this.connection) {
            return this.connection
        } else {
            return this.createConnection(host, user, database)
        }
    }

    static async sendRequestToDB(request) {
        Logger.infoLog(`Sending request to database`);
        let table = new Tablefy();
        this.connection.query(
            request,
            function(results, fields) {
                table.draw(fields);
            }
        );
    }

    static async endConnection() {
        Logger.infoLog(`Ending connection with MySQL database`);
        this.connection.end();
    }

}

module.exports = DBUtils;