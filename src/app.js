import express from "express";
import db from "./config/dbConnection.js";
import livros from "./models/Livros.js";

import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.on("open", () => {
    console.log("Conexão estabelecida com sucesso");
})

const app = express();
routes(app)


app.get("/", (_, resp) => {
    resp.status(200).send("Curso de Node");
})

app.get("/livros/:id", (req, resp) => {
    let id = req.params.id;
    livros.findById(id, (err, livro) => tratarResultado(err, livro, resp));

})

app.post("/livros", (req, resp) => {
    livros.push(req.body)
    resp
        .status(201)
        .send("Livro cadastrado com sucesso")
})

app.put("/livros/:id", (req, resp) => {
    let index = buscarLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    resp.json(livros[index])
})

app.delete("/livros/:id", (req, resp) => {
    let index = buscarLivro(req.params.id)
    livros.splice(index, 1)
    resp.send(`livro ${index} removido com sucesso`)
})

export default app