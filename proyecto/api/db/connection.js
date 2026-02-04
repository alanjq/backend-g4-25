const mysql = require('mysql2');
const { dbConfig } = require('./db-config');

const connection = mysql.createConnection(dbConfig);

// creamos la conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection