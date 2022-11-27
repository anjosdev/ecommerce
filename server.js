const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("first middleware");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("second middleware");
    
// })

app.use('/', (req, res, next) => {
    console.log('first request');
})

app.listen(3000, () => {
    console.log("server started at port 3000")
})
