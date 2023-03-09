const database = require('../database');

const consulta = database.query('SELECT * FROM usuarios', (err, data, fields) => {
    if (err) {
        throw err;
    } else {
        return data;
    }
});


module.exports = consulta;