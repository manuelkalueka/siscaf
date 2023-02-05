var express = require('express');
var router = express.Router();
const database = require('../database');
const session = require('express-session');

const user = 'mkaldev';
const password = '1234';

router.use(session({ secret: 'centro de alfabetizacao fernando', resave: true, saveUninitialized: true }));

router.get('/login', (req, res, next) => {
    if (req.session.user_name) {
        res.render('main');
    } else {
        res.render('login', { title: 'Inicio de Sessão' });
    }
});

router.post('/login', (req, res, next) => {
    const query = `SELECT * FROM usuarios`;
    console.log(req.body.user_name, ' ', req.body.user_password);

    if (req.body.user_name == user && req.body.user_password == password) {
        res.redirect('main');

        req.session.user_name = user;
        console.log(userLogado);

    } else {
        res.render('login', { title: 'Inicio de Sessão' });
    }

    /*
    database.query(query, (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log(data[1].nome);
        }
    });*/
});

module.exports = router;
