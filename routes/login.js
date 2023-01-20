var express = require('express');
var router = express.Router();
const db = require('../db');

router.get('/login', (req, res, next) => {
    res.render('login', { title: 'Inicio de Sessão' });
});

router.post('/login', (req, res, next) => {
    db('siscaf').then((siscaf) => {
        res.render('login', { title: 'Inicio de Sessão', siscaf: siscaf });
        console.log(siscaf);
    }, next);

});

module.exports = router;
