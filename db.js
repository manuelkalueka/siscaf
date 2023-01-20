const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1' || 'localhost',
        user: 'root',
        database: 'siscaf',
    }
});

module.exports = db;