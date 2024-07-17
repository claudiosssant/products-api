const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'Craudinho',
  port: 3306,
  user: 'username',
  password: 'password',
  database: 'products'
});

module.exports = connection;