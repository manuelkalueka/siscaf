const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/registar', (req, res, next) => {
    res.render('registar', { title: 'Registar Novo Usuário' });
});

module.exports = router;