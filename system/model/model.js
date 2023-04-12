const DIR_BASE = global.DIR_BASE;
require(DIR_BASE + "directories");

let DB = require(DIR_MODEL + "db");

module.exports = class Model extends DB {


    get({id, callback}){
        try {

            if(isNaN(id)){
                throw new Error('Entry ID isn´t numeric');
            }

            let query = `SELECT * FROM ${this.mainTable} WHERE id = ?`;
    
            this.connection.query(query, id, callback);

        } catch(error) {
            console.error(error);
        }
    }
    
    delete({id, callback}){
        try {

            if(isNaN(id)){
                throw new Error('Entry ID isn´t numeric');
            }

            let query = `DELETE * FROM ${this.mainTable} WHERE id = ?`;
    
            this.connection.query(query, id, callback);

        } catch(error) {
            console.error(error);
        }
    }
    
    insert({record, callback}){
        try {

            let query = `INSERT INTO \`${this.mainTable}\` SET ?`;

            this.connection.query(query, record, callback);
    
        } catch(error) {
            console.error(error);
        }
    }

    update({record, callback}){
        try {
            let query = `INSERT INTO \`${this.mainTable}\` SET ?`;
            this.connection.query(query, record, callback);
    
        } catch(error) {
            console.error(error);
        }
    }

}