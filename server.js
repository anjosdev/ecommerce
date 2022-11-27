const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        setHomePage(req, res)
    }

    if (req.url == '/username' && req.method.toLowerCase() == 'post') {
        return submitUserName(req, res)
    }
});


// recebe request body
// salvar num arquivo
// redireciona para a home
function submitUserName(req, res) {
    res.setHeader('Content-Type', 'text/html')
    const body = [];
    req.on('data', (data) => {
        body.push(data);
    });

    req.on('end', () => {
        console.log(body);
        const requestBody = Buffer.concat(body).toString();
        const userName = requestBody.split('=')[1];
        fs.writeFileSync('username.txt', userName)
        console.log(requestBody);
    });


    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
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
    </form>
    </body>
    </html>    
    `);
}

server.listen(3000);