var express = require('express');
var router = express.Router();

router.get('/dashboard', (req, res, next) => {
    res.render('dashboard', { title: 'Estatisticas' });
});

module.exports = router;
