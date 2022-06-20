import express from "express";
import Controller from "../controllers/autoresController.js";

const routes = express.Router();

routes
    .get("/autores", Controller.listarAutores)
    .get("/autores/:id", Controller.buscarPeloID)
    .post("/autores", Controller.cadastrar)
    .put("/autores/:id", Controller.atualizarAutor)
    .delete("/autores/:id", Controller.excluirAutor)


export default routes