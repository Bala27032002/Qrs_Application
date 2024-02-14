const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost", 
    user: "root", 
    password: "Bala@2703", 
    database: "crud", 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = pool;
