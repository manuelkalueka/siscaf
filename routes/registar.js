const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/registar', (req, res, next) => {
    res.render('registar', { title: 'Registar Novo Usuário' });
});

router.post('registar', (req, res, next) => {
    res.render('registar');
});

module.exports = router;