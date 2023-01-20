const knex = require('knex');

const db = knex({
    client: 'mysql',
    host: '127.0.0.1',
    user: 'kalueka',
    database: 'siscaf',
});

module.exports = db;