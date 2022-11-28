const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'User.html'));
})

router.get('/add', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'AddUser.html'));
});

router.post('/add', (req, res) => {
    console.log(req.body);    
    console.log('post request ')
    res.redirect('/');
})

module.exports = router;