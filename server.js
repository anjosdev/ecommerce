const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        setHomePage(req, res);
    }
    if (req.url == '/username') {
        return submitUserName(req, res);
    }
});

function submitUserName(req, res) {
    res.setHeader('Content-Type', 'text/html');
    // > recebe request body
    // > salva num arquivo
    // > redireciona para a home page
    
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
    <title>Pag</title>
    </head>
    <body>
    <form action="/username" method="post">
    <div>
    <label>Enter User name</label>
        <input type="text" name="username"/>
    </div>

    <div>
    <input type="submit" value="send"/>
    </body>
    
    </html>
    `)
}

server.listen(3000);