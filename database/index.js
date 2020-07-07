const mysql = require('mysql');
const creds = require('../mySQL.creds.js');

const connection = mysql.createConnection({
  host: creds.dbHost,
  port: creds.dbPort,
  user: creds.dbUser,
  password: creds.dbPassword,
  database: creds.dbDatabase,
});

connection.connect((err) => {
  if (err) { console.error(`error: ${err.message}`); }
  console.log('Connected to the MySQL server.');
});

module.exports = connection;
