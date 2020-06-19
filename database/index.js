var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reviewComp'
});

connection.connect(err => {
  if (err) { return console.error('error: ' + err.message); };
  console.log('Connected to the MySQL server.')
});

module.exports = connection;