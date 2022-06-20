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