import express from "express";
import db from "../config/dbConnection.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.on("open", () => {
    console.log("Conexão estabelecida com sucesso");
})

const app = express();

app.use(express.json()) // for parsing application/json

const livros = [
    {
        id: 1,
        titulo: "Senhor dos Aneis"
    },
    {
        id: 2,
        titulo: "O Hobiit"
    }
]

app.get("/", (req, resp) => {
    resp
        .status(200)
        .send("Curso de Node");
})

app.get("/livros", (req, resp) => {
    resp
        .status(200)
        .json(livros)
})

app.get("/livros/:id", (req, resp) => {
    let index = buscarLivro(req.params.id)
    resp.status(200).json(livros[index])
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

function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app