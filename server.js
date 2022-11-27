const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Logging the request");
    next();
})

// app.use((req, res, next) => {
//     console.log("second middleware");
    
// })

app.use('/users', (req, res, next) => {
    res.send('This is the users page')
})

app.use('/', (req, res, next) => {
    res.send('<h1 style="color: red;">This is the homepage</h1>');
    next();
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})