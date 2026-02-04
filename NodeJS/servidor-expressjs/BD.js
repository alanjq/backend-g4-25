const mysql = require('mysql2');

// Conexión SQL
export const BD = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'libreria'
});

