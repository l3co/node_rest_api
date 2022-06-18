const http = require("http")

const port = 3000

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.end("Curso de Node");

    console.log(req.headers);
})

server.listen(port, () => {
    console.log(`Servidor escuntando em http://localhost:${port}`);
})