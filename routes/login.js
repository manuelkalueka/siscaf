var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Inicio de Sessão' });
});

router.post('/login', (req, res, next) => {

    db('usuarios').then((usuarios) => {
        res.render('login', { title: 'Inicio de Sessão', usuarios: usuarios });
    }, next);

});

module.exports = router;
