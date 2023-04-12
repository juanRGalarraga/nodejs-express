
const DIR_BASE = global.DIR_BASE;
require(DIR_BASE + "directories");

let mysql = require('mysql');
const dbConfig = require(DIR_CONFIG + "dbconfig");

module.exports = class DB {

    #connection = null;
    mainTable = null;

    constructor({HOST="", USER="", PASS="", NAME=""}){
        let host = HOST ? HOST : dbConfig.HOST,
            user = USER ? USER : dbConfig.USER,
            pass = PASS ? PASS : dbConfig.PASS,
            name = NAME ? NAME : dbConfig.NAME;

        let connection = mysql.createConnection({
            user        :   user,
            password    :   pass,
            host        :   host,
            database    :   name
        });

        this.setConecction(connection);
    }

    connect(){
        this.connection.connect((err) => {
            return (err) ? 
                    console.log(`Error al Conectarse a MySQL: ${err.stack}`) : 
                    console.log(`Conexión establecida con MySQL N°: ${myConn.threadId}`)
        });
    }

    getConecction(){
        return this.#connection;
    }
    setConecction(connection){
        this.#connection = connection;
    }
}