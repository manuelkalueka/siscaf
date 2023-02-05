var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'SISCAF - Gestão do Centro' });
});

router.get('/esqueci_senha', (req, res, next) => {
  res.render('esqueci_senha', { title: 'Recuperar Senha' });
});

router.get('/main', (req, res, next) => {
  res.render('main', { title: 'Sistema de Gestão do CAF'});
});

module.exports = router;