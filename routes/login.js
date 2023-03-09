var express = require('express');
var router = express.Router();

const session = require('express-session');

// LOGIN SEM DATABASE

const user = 'mkaldev';
const password = '1234';

router.use(session({ secret: 'centro de alfabetizacao fernando', resave: false, saveUninitialized: false }));

router.get('/login', (req, res, next) => {
    if (req.session.user_name) {
        res.render('main');
    } else {
        res.render('login', { title: 'Inicio de Sessão' });
    }
});

router.post('/login', (req, res, next) => {
    if (req.body.user_name === user && req.body.user_password === password) {
        res.redirect('main');

        req.session.user_name = user;//add usuario logado na session

    } else {
        res.render('login', { title: 'Inicio de Sessão' });
    }
});

module.exports = router;
