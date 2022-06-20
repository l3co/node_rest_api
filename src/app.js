import express from "express";
import db from "./config/dbConnection.js";
import livros from "./models/Livros.js"

db.on("error", console.log.bind(console, "Erro de conexão"))
db.on("open", () => {
    console.log("Conexão estabelecida com sucesso");
})

const app = express();

app.use(express.json()) // for parsing application/json

app.get("/", (_, resp) => {
    resp.status(200).send("Curso de Node");
})

app.get("/livros", (_, resp) => {
    livros.find((err, livros) => tratarResultado(err, livros, resp))
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

function tratarResultado(err, result, respose) {
    if (err) {
        console.err(`Erro ao buscar os dados: `, err);
    } else {
        respose.status(200).json(result)
    }
}

export default app