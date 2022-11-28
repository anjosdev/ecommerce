const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// instalar npm BodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("Logando a requisição");
    next();
})

app.get('/users', (req, res, next) => {
    res.send("<h1>Página do usuário</h1>");

})

app.get('/user/add', (req, res) => {
    res.send(`<form method="POST">
    <div><input name='username'/></div>
    <div><button>Add user</button></div>
    </form>`)
});

app.post('/user/add', (req, res) => {
    console.log(req.body);    
    console.log('post request ')
    res.redirect('/');
})

app.get('/', (req, res, next) => {
    res.send("<h1>Página principal</h1><br><h2>Bem-vindo</h2>");
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})