const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res, next) => {
    res.render('dashboard');
});