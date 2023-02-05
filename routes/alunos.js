const express = require('express');
const { route } = require('.');
const router = express.Router();

router.get('/ver_alunos', (req, res, next) => {
    res.render('ver_alunos', { title: 'Alunos' });
});

module.exports = router;