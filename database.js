const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'siscaf',
    user: 'root',
    password: ''
});

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexão feita com sucesso');
    }
});

module.exports = connection;