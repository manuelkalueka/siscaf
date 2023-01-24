var express = require('express');
const { query } = require('../database');
var router = express.Router();
const database = require('../database');

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Inicio de Sessão', session: req.session });
});

router.post('/login', (req, res, next) => {

    const user_name = req.body.user_name;
    const user_password = req.body.senha;

    const query = `SELECT * FROM usuarios`;

    database.query(query, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data[1].nome);
        }
    });
    res.end();
});
module.exports = router;
