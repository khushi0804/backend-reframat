// backend/config/dbConfig.js
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce'
});

module.exports = pool.promise();
