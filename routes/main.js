const express = require('express');
const router = express.Router();

router.get('/main', (req, res, next) => {
    const user = 'mkaldev';// verifica rota restrita

    if (user !== 'mkaldev') {
        res.redirect('/');
    } else {
        res.render('main', { title: 'Sistema de Gestão do CAF' });
    }
});

module.exports = router;