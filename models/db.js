


const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.promise().query('SELECT 1 + 1 AS solution')
    .then(([rows, fields]) => {
        console.log('Database connection test successful:', rows);
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });

module.exports = pool.promise();








