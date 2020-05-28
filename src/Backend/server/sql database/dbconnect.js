const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("db is winding up");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "35.223.184.144",
        user: "root",
        //move to .env before deploy
        password: "Bomboclawt5000",
        database: "behavior_app_sql_db",
      });
      console.log("connected to database");
      return this.pool;
    }

    return this.pool;
  }
}

const connection = new Connection();

module.exports = connection;
