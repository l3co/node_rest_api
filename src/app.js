import express from "express";

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

app.post("/livros", (req, resp) => {
    livros.push(req.body)
    resp
        .status(201)
        .send("Livro cadastrado com sucesso")
})

export default app