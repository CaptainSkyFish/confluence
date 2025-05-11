var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('Hello Azure');
});

setInterval(() => { console.log("server up") }, 5000)
server.listen(process.env.PORT);