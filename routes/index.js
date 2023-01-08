var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SISCAF - Gestão do Centro' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Inicio de Sessão' });
});

router.get('/registar', (req, res, next) => {
  res.render('registar', { title: 'Registar Novo Usuário' });
});

router.get('/esqueci-senha', (req, res, next) => {
  res.render('esqueci-senha', { title: 'Recuperar Senha' });
});

module.exports = router;
