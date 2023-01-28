const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'sql10.freemysqlhosting.net',
    database: 'sql10592616',
    user: 'sql10592616',
    password: '5vm3Mt5MVb'
});

connection.connect((err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexão feita com sucesso');
    }
});

module.exports = connection;