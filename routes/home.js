const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h1>Página principal</h1><br><h2>Bem-vindo</h2>");
});

module.exports = router;