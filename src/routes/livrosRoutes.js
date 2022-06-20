import express from "express";
import Controller from "../controllers/livrosController.js";

const routes = express.Router();

routes
    .get("/livros", Controller.listarLivros)
    .get("/livros/:id", Controller.buscarPeloID)
    .post("/livros", Controller.cadastrar)
    .put("/livros/:id", Controller.atualizarLivro)
    .delete("/livros/:id", Controller.excluirLivro)


export default routes