const fs = require('fs');

const routes = (req, res) => {
    if (req.url == '/') {
        setHomePage(req, res);
    }
    if (req.url == '/username' && req.method.toLowerCase() == "post") {
        return submitUserName(req, res);
    }
}
////////
function submitUserName(req, res) {
    res.setHeader('Content-Type', 'text/html');
    const body = [];
    req.on('data', (data) => {
        body.push(data);
    });

    req.on('end', () => {
        const requestBody = Buffer.concat(body).toString();
        console.log(requestBody);
        const userName = requestBody.split('=')[1];
        fs.writeFile('username.txt', userName, () => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
        console.log(requestBody)
    })
}

function setHomePage(req, res) {
    res.setHeader('Content-Type', 'text/html');
    return res.end(`
    <!doctype html>
    <html>
    <head>
    <title>Home</title>
    </head>
    <body>
    <form action="/username" method="post">
    <div>
    <label>Digite seu nome de usuario</label>
        <input type="text" name="username"/>
    </div>
    <div>
    <input type="submit" value="send"/>
    </div>
    </body>
    </html>
    `)

}

module.exports = {
    routes,
    text: 'Oi'
};