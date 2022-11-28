const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const homeRoutes = require('./routes/home');

const app = express();

// instalar npm BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use('/users/', adminRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})