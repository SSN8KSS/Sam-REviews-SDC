const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '54.183.237.155',
  port: '3306',
  user: 'user',
  password: 'reviews',
  database: 'reviewComp',
});

connection.connect((err) => {
  if (err) { console.error(`error: ${err.message}`); }
  console.log('Connected to the MySQL server.');
});

module.exports = connection;
