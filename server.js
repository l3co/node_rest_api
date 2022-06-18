const http = require("http")

const port = 3000

const rotas = {
    "/": "Curso de Node",
    "/sobre": "Info sobre o projeto",
    "/livros": "Entrei na pag de livros",
    "/autores": "Listagem de autores",
    "/editora": "Pag de editora"
}

const server = http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.end(rotas[req.url]);

    console.log(req.headers);
})

server.listen(port, () => {
    console.log(`Servidor escuntando em http://localhost:${port}`);
})